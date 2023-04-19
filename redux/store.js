import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart.Slice';

const reducer = {
  cart: cartReducer,
};

const getSavedCart = () => {
  const cart = localStorage.getItem('cart');
  if (cart) {
    try {
      return JSON.parse(cart);
    } catch (e) {
      console.error('Error parsing saved cart:', e);
    }
  }
  return [];
};

const store = configureStore({
  reducer,
  preloadedState: {
    cart: getSavedCart(),
  },
});

export default store;
