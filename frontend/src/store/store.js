import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import favoriteReducer from './favoriteSlice';
import cartReducer from './cartSlice'; 

export const store = configureStore({
  reducer: {
    user: userReducer,
    favorites: favoriteReducer,
    cart: cartReducer, 
  },
});
