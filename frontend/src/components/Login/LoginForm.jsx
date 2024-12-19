import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { FaLock, FaEnvelope } from "react-icons/fa";
import logo from '../../../public/GMS.png'; 
import jwt_decode from 'jwt-decode';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';  
import { setUser } from '../../store/userSlice';  

const LoginForm = () => {
  const dispatch = useDispatch(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, llena todos los campos.');
      enqueueSnackbar('Por favor, llena todos los campos.', { variant: 'error' }); 
      return;
    }

    try {
      const res = await fetch('https://ecommercegms.onrender.com/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.status === 200) {
        
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        
        const decoded = jwt_decode(data.token);
        console.log('Rol decodificado:', decoded.role); 

        
        dispatch(setUser({ name: data.user.name, loggedIn: true }));

        if (decoded.role === 'admin') {
          enqueueSnackbar('¡Bienvenido, Administrador!', { variant: 'success' }); 
          navigate('/admin');
        } else {
          enqueueSnackbar('¡Bienvenido!', { variant: 'success' });
          navigate('/');
        }
      } else {
        setError(data.message || 'Credenciales inválidas.');
        enqueueSnackbar(data.message || 'Credenciales inválidas.', { variant: 'error' }); 
      }
    } catch (err) {
      console.error(err);
      setError('Ocurrió un error al intentar iniciar sesión.');
      enqueueSnackbar('Ocurrió un error al intentar iniciar sesión.', { variant: 'error' }); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-sm p-8 bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-60 h-auto" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-3xl font-bold text-white text-center">INICIAR SESIÓN</h1>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="relative">
            <input
              type="email"
              placeholder="Correo Electrónico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaEnvelope className="absolute top-3 right-3 text-gray-400" />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Contraseña"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaLock className="absolute top-3 right-3 text-gray-400" />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Iniciar sesión
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-200">
              ¿No tienes cuenta?{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/register');
                }}
                className="text-blue-400 hover:text-blue-500 font-semibold"
              >
                Regístrate
              </a>
            </p>
          </div>

          <div className="text-center mt-2">
            <button
              onClick={(e) => {
                e.preventDefault();
                navigate('/recover-account'); 
              }}
              className="text-sm text-blue-400 hover:text-blue-500 font-semibold"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
