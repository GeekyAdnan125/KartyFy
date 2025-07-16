import { configureStore, createSlice } from "@reduxjs/toolkit";

import cartSlice from './cartSlice'
import productSlice from './productSlice';
import authSlice from './authSlice';

const store = configureStore({
    reducer :{
        cart : cartSlice,
        product :productSlice,
        userDetails :authSlice  
    }
})

export default store;