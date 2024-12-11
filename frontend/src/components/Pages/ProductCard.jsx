import React from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineDelete } from 'react-icons/ai';
import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import { addFavorite, removeFavorite } from '../../store/favoriteSlice';

const ProductCard = ({ product, isInCart, onDelete }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((item) => item.id === product.id);

  
  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(product));
      enqueueSnackbar(`${product.name} eliminado de favoritos`, { variant: 'warning' });
    } else {
      dispatch(addFavorite(product));
      enqueueSnackbar(`${product.name} agregado a favoritos`, { variant: 'success' });
    }
  };

  
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    enqueueSnackbar(`${product.name} agregado al carrito`, { variant: 'success' });
  };

  const handleDeleteFromCart = () => {
    if (onDelete) {
      onDelete(product.id);
      enqueueSnackbar(`${product.name} eliminado del carrito`, { variant: 'error' });
    } else {
      dispatch(removeFromCart(product.id));
      enqueueSnackbar(`${product.name} eliminado del carrito`, { variant: 'error' });
    }
  };

  return (
    <div className="relative w-64 mx-auto bg-gradient-to-br from-gray-800 via-gray-900 to-gray-700 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform min-h-full mt-6">
      
      <div className="relative group">
        <img
          src={product.image}
          alt={product.name}
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
        <h3 className="text-base font-bold text-white truncate">{product.name}</h3>
        <p className="text-xs text-gray-300 mt-1 truncate">{product.description}</p>
        <p className="text-lg font-bold text-white mt-2">${product.price.toLocaleString('es-AR')}</p>
      </div>

      
      <div className="flex justify-center gap-3 p-3">
        {isInCart ? (
          <span className="text-green-600 text-sm font-semibold">Agregado</span>
        ) : (
          <button
            className="bg-blue-500 text-white py-1 px-4 rounded-full hover:bg-blue-600 transition text-sm font-medium"
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </button>
        )}
        {onDelete && (
          <button
            className="bg-red-500 text-white py-1 px-4 rounded-full hover:bg-red-600 transition text-sm font-medium"
            onClick={handleDeleteFromCart}
          >
            <AiOutlineDelete size={16} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
