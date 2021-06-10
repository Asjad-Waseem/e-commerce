import { configureStore } from '@reduxjs/toolkit';
import cartItemsReducer from './cartItems';

export default configureStore({
  reducer: {

    cartItems: cartItemsReducer
    
  },
})