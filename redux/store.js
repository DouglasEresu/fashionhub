import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart.Slice';

const reducer = {
  cart: cartReducer,
};

const saveCart = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log("Cart saved to localStorage:", cart);
};



const getSavedCart = () => {
  if (typeof window !== "undefined") {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  } else {
    return [];
  }
};

const store = configureStore({
  reducer,
  preloadedState: {
    cart: getSavedCart(),
  },
});

export default store;
