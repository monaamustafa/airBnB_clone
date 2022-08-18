import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const initialState = {
  loading: false,
  tripMainInfo: {},
  tripAllInfo: [],
  error: "",
};

const tripsSlice = createSlice({
  name: "trips",
  initialState,
  reducers: {
    setGuests: (state, action) => {
      state.tripMainInfo.guest = action.payload;
    },
    setStartDate: (state, action) => {
      state.tripMainInfo.startDate = action.payload;
    },
    setEndDate: (state, action) => {
      state.tripMainInfo.endDate = action.payload;
    },
    setHotelInfo: (state, action) => {
      state.tripMainInfo.hotel = action.payload;
    },
    addTrip: (state) => {
      state.tripAllInfo.push(state.tripMainInfo);
    },
  },
});
export const { setEndDate, setStartDate, setGuests,setHotelInfo, addTrip } = tripsSlice.actions;

export default tripsSlice.reducer;
