import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import logo from '../../../public/GMS.png';
import { useSnackbar } from 'notistack'; 

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      enqueueSnackbar('Las contraseñas no coinciden', { variant: 'error' }); 
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: username, email, password, role: 'user' }),
      });
      const data = await res.json();

      if (data.token) {
        enqueueSnackbar('¡Registro exitoso!', { variant: 'success' }); 
        navigate('/login'); 
      } else {
        setError(data.message || 'Error al registrar el usuario');
        enqueueSnackbar(data.message || 'Error al registrar el usuario', { variant: 'error' }); 
      }
    } catch (err) {
      setError('Error al registrar usuario');
      enqueueSnackbar('Error al registrar usuario', { variant: 'error' }); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-sm p-8 bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="w-60 h-auto" />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-3xl font-bold text-white text-center">R E G I S T R O</h1>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>} 

          <div className="relative">
            <input
              type="text"
              placeholder="Nombre de Usuario"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full py-3 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaUser className="absolute top-3 right-3 text-gray-400" />
          </div>

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

          <div className="relative">
            <input
              type="password"
              placeholder="Confirmar Contraseña"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full py-3 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaLock className="absolute top-3 right-3 text-gray-400" />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Registrarse
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-200">
              ¿Ya tienes cuenta?{' '}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/login');
                }}
                className="text-blue-400 hover:text-blue-500 font-semibold"
              >
                Inicia sesión
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
