import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope } from "react-icons/fa";
import emailjs from 'emailjs-com'; 
import { useSnackbar } from 'notistack'; 

const RecoverPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setMessage('Por favor ingresa un correo válido.');
      enqueueSnackbar('Por favor ingresa un correo válido.', { variant: 'error' }); 
      return;
    }

    
    const templateParams = {
      user_email: email,
    };

    emailjs.send(
      'service_uof9d8g',    
      'template_de5lzqj',     
      templateParams,
      '6G4xWaIajh4zRrUhk'     
    ).then(
      (result) => {
       
        console.log(result.text);
        enqueueSnackbar('Correo enviado revisa tu bandeja', { variant: 'success' }); 
        setEmail('');
      },
      (error) => {
       
        console.log(error.text);
        enqueueSnackbar('Error al enviar el correo. Inténtalo de nuevo.', { variant: 'error' });
      }
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="w-full max-w-sm p-8 bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className="text-3xl font-bold text-white text-center">Recuperar Contraseña</h1>

          {message && <p className="text-green-500 text-sm text-center">{message}</p>}

          <div className="relative">
            <input
              type="email"
              placeholder="Correo Electrónico"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 px-4 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10"
            />
            <FaEnvelope className="absolute top-3 right-3 text-gray-400" />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Enviar correo de recuperación
          </button>

          <div className="text-center mt-4">
            <p className="text-sm text-gray-200">
              ¿Recuperaste tu contraseña?{' '}
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

export default RecoverPassword;
