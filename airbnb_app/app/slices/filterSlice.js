import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filterType',
  initialState: {
    value: '',
  },
  reducers: {
    getType: (state,action) => {
        state.value = action.payload;
      },
      getValue: (state) => {
       return state.value ;
      }
  },
});

// Action creators are generated for each case reducer function
export const { getType,getValue} = filterSlice.actions;

export default filterSlice.reducer;
