import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Banner = ({ data }) => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRedirect = () => {
    setIsLoading(true);

    setTimeout(() => {
      navigate('/Destacado');  
    }, 1500);
  };

  return (
    <div className='min-h-[500px] flex justify-center items-center py-12'>
      <div className='container'>
        <div style={{ backgroundColor: data.bgColor }} className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'>
          
          {/* Columna1 */}
          <div className='p-6 sm:p-8'>
            <p className='text-sm'>{data.discount}</p>
            <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
            <h1>
              <p className='text-sm'>{data.date}</p>
            </h1>
          </div>

          
          <div className='h-full flex items-center'>
            <img 
              src={data.img} 
              alt="banner-image"
              className='scale-100 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover'
            />
          </div>

          
          <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
            <p className='font-bold text-xl'>{data.title1}</p>
            <p className='text-4 sm:text-5xl font-bold'>{data.title2}</p>
            <p className='text-sm tracking-wide leading-5'>{data.title3}</p>
            <div>
              <button
                onClick={handleRedirect}
                className='bg-white text-black py-2 px-4 rounded-full font-bold flex items-center justify-center'
              >
                {isLoading ? (
                  <div className="spinner-border animate-spin inline-block w-6 h-6 border-4 border-solid border-black rounded-full border-t-transparent mr-2"></div>
                ) : null}
                {!isLoading ? "Comprar Ahora" : null}
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
