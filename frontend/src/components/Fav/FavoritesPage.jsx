import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../../store/favoriteSlice';
import { addToCart } from '../../store/cartSlice';
import { useSnackbar } from 'notistack';

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.favorites.items);
  const loggedIn = useSelector((state) => state.user.loggedIn); 
  const darkMode = useSelector((state) => state.darkMode); 
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const handleAddToCart = (fav) => {
    dispatch(addToCart(fav));
    enqueueSnackbar('Producto agregado al carrito', {
      variant: 'success',
      anchorOrigin: { vertical: 'top', horizontal: 'center' },
    });
  };

  const handleRemoveFavorite = (fav) => {
    dispatch(removeFavorite({ id: fav.id }));
    enqueueSnackbar('Producto quitado de tus favoritos', {
      variant: 'info',
      anchorOrigin: { vertical: 'top', horizontal: 'center' },
    });
  };

  if (!loggedIn) {
    
    return (
      <div className="w-full min-h-screen bg-gray-750 flex items-center justify-center">
  <div className="text-center">
    <h2 className="text-2xl font-semibold mb-8 text-black dark:text-white">Inicia sesión para ver tus favoritos</h2>
    <button
      onClick={() => (window.location.href = '/login')}
      className="bg-gray-900 dark:bg-white text-white dark:text-black py-2 px-6 rounded-lg hover:bg-red-700 dark:hover:bg-red-600 transition-all font-semibold"
    >
      Iniciar Sesión
    </button>
  </div>
</div>

    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-750 container items-center justify-center mx-auto">
      <div className={`favorites-page p-6 min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-bg-white dark:bg-gray-900 text-[#242E3B]'}`}>
        <h1 className="text-3xl font-extrabold mb-8 text-center dark:text-white">
          MIS FAVORITOS
        </h1>

        {favorites.length > 0 ? (
          <ul className="space-y-6">
            {favorites.map((fav) => (
              <li
                key={fav.id}
                className={`flex justify-between items-center ${darkMode ? 'bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700' : 'bg-gray-200'} p-6 rounded-2xl shadow-lg hover:scale-105 transform transition-all`}
              >
                <div className="flex flex-col">
                  <p className="text-xl font-bold mb-1">{fav.name}</p>
                  <p className="text-sm">{fav.description}</p>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => handleRemoveFavorite(fav)}
                    className={`px-4 py-2 rounded-xl hover:scale-105 transform transition-all ${darkMode ? 'bg-gradient-to-br from-red-500 to-red-600 text-white hover:bg-red-700' : 'bg-red-500 text-white'}`}
                  >
                    Quitar
                  </button>

                  <button
                    onClick={() => handleAddToCart(fav)}
                    className={`px-4 py-2 rounded-xl hover:scale-105 transform transition-all ${darkMode ? 'bg-gradient-to-br from-green-500 to-green-600 text-white hover:bg-green-700' : 'bg-green-500 text-white'}`}
                  >
                    Comprar
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-400 dark:text-gray-500">No tienes favoritos aún.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
