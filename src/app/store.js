import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../features/api/apiSlice';
import {favoritesSlice} from '../features/favorites/favoritesSlice';

const store =  configureStore({
  reducer: {
    favorites: favoritesSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export default store; 