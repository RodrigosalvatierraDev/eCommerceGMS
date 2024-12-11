import React from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/favoriteSlice';
import { useSnackbar } from 'notistack';

const ProductItem = ({ data, addToCart, isInCart }) => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === data.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(data));
      enqueueSnackbar(`${data.name} eliminado de favoritos`, { variant: 'warning' });
    } else {
      dispatch(addFavorite(data));
      enqueueSnackbar(`${data.name} agregado a favoritos`, { variant: 'success' });
    }
  };

  return (
    <div className="relative w-64 mx-auto bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform min-h-full">
      
      <div className="relative group">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-36 object-contain bg-white group-hover:opacity-90 transition-opacity"
        />
        
        <button
          className={`absolute top-2 right-2 p-2 rounded-full shadow-md transition ${
            isFavorite ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-white text-red-500 hover:bg-red-500 hover:text-white'
          }`}
          aria-label="Agregar a favoritos"
          onClick={toggleFavorite}
        >
          {isFavorite ? <AiFillHeart size={16} /> : <AiOutlineHeart size={16} />}
        </button>
      </div>

      
      <div className="p-3 text-center">
        <h3 className="text-base font-bold text-white truncate">{data.name}</h3>
        <p className="text-xs text-gray-300 mt-1 truncate">{data.description}</p>
        <p className="text-lg font-bold text-white mt-2">${data.price.toLocaleString('es-AR')}</p>
      </div>

      
      <div className="flex justify-center gap-3 p-3">
        {isInCart ? (
          <span className="text-green-600 text-sm font-semibold">Agregado</span>
        ) : (
          <button
            className="bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600 transition text-sm font-medium"
            onClick={() => addToCart(data)}
          >
            Agregar al carrito
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
