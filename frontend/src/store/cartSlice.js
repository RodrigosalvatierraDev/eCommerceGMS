import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], 
  totalPriceShoppingCart: 0, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    calculateTotalPrice: (state) => {
      state.totalPriceShoppingCart = state.items.reduce(
        (acc, product) => acc + parseFloat(product.price),
        0
      );
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPriceShoppingCart = 0;
    },
  },
});

export const { addToCart, removeFromCart, calculateTotalPrice, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
