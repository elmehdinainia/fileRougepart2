import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productsSlice'
import { toast } from "react-hot-toast";


export const store = configureStore({
    reducer: {
      product :productsSlice,
    },
  })