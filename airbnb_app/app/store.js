import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth/authSlice';
import HotelSlice from './slices/hotelSlice';
import filterSlice from './slices/filterSlice';

export default configureStore({
  reducer: {
    hotel:HotelSlice,
    auth: authSlice,
    filterType: filterSlice,


  },
});
