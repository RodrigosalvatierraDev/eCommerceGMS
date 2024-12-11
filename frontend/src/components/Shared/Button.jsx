import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ text, bgColor, textColor, handler = () => {} }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 

  const handleClick = () => {
    setIsLoading(true);
    handler();
    setTimeout(() => {
      navigate('/404');
    }, 1000);
  };

  return (
    <button
      onClick={handleClick}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 flex items-center justify-center`}
    >
      {isLoading ? (
        <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 border-solid border-black rounded-full border-t-transparent mr-2"></div>
      ) : null}
      {!isLoading ? text : "Cargando..."}
    </button>
  );
};

export default Button;
