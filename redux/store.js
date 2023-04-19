import { configureStore } from '@reduxjs/toolkit';
import { cartReducer } from './cart.Slice';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const reducer = {
//   cart: cartReducer,
// };

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});
export const persistor = persistStore(store);

export default store;