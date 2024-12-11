import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Shared/Button';

const ProductsCard = ({ data }) => {
  const [loadingState, setLoadingState] = useState({});
  const navigate = useNavigate();

  const handleViewMore = (id) => {
    setLoadingState((prevState) => ({
      ...prevState,
      [id]: true,
    }));

    setTimeout(() => {
      navigate('/Auriculares');
    }, 1000);

    setTimeout(() => {
      setLoadingState((prevState) => ({
        ...prevState,
        [id]: false,
      }));
    }, 1000);
  };

  return (
    <div className='mb-10'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
        {data.map((data) => (
          <div className='group' key={data.id}>
            <div className='relative space-y-1'>
              <img src={data.img} alt={data.title} className='h-[180px] w-[260px] object-cover rounded-md' />
            </div>

            <div className='relative top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop:blur-sm duration-200'>
              <Button
                text={loadingState[data.id] ? (
                  <div className="flex justify-center items-center">
                    <div className="spinner-border animate-spin border-2 border-t-2 border-black w-4 h-4 rounded-full"></div>
                  </div>
                ) : "Ver más"}
                bgColor={"bg-primary"}
                textColor={"text-white"}
                handler={() => handleViewMore(data.id)}
                disabled={loadingState[data.id]}
              />
            </div>

            <div className='leading-7'>
              <h2 className='font-semibold text-center text-black dark:text-white'>{data.title}</h2>
              <h2 className='font-bold text-center text-black dark:text-white'>{data.price} ARG</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
