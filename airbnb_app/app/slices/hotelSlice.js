import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
const initialState = {
  isLoading: false,
  hotel: {},
  hotels: [],
  hotelDetails:{},
  isError: "",
};

export const fetchHotels = createAsyncThunk("hotel/fetchHotels", async () => {
  try {
    const resp =  await axios.get("http://localhost:8080/api/hotels");
    return resp.data;
  } catch (err) {
    console.error(err);
  }
});
export const insertHotel = createAsyncThunk(
  `hotel/insertHotel`,
  async (hotel, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await fetch(`http://localhost:8080/api/hotels/`, {
        method: 'POST',
        body: JSON.stringify(hotel),
        headers: {
          // 'Content-Type': 'multipart/form-data',
          'Content-Type': 'application/json',
          token: localStorage.getItem('token'),
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// export const insertHotel = createAsyncThunk(
//   `hotel/insertHotel`,
//   async (hotel, thunkAPI) => {
//     const { rejectWithValue } = thunkAPI;
//     try {
//       const response = await fetch(`http://localhost:8080/api/hotels/`, {
//         method: 'POST',
//         body: JSON.stringify(hotel),
//         headers: {
//           // 'Content-Type': 'multipart/form-data',
//           'Content-Type': 'application/json',
//           token: localStorage.getItem('token'),
//         },
//       });
//       const data = await response.json();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
export const getRoom = createAsyncThunk(`room/getRoom`,async (id, thunkAPI) => {
  return axios
    .get(`http://localhost:8080/api/hotels/find/${id}`)
    .then((response) => response.data);
});
const hotelSlice = createSlice({
  name: "hotel",
  initialState,
  
  reducers: {
    setPlaceType: (state, action) => {
      state.hotel.type = action.payload;
      state.hotel.distance = '555.5k';
      state.hotel.rating = '5';
    },
    setSpaceType: (state, action) => {
      state.hotel.name = action.payload;
    },
    setHostCity: (state, action) => {
      state.hotel.city = action.payload;
    },
    setAddress: (state, action) => {
      state.hotel.address = action.payload;
    },
    setHostDesc: (state, action) => {
      state.hotel.desc = action.payload;
    },
    setCheapestPrice: (state, action) => {
      state.hotel.cheapestPrice = action.payload;
    },
    settitle: (state, action) => {
      state.hotel.title = action.payload;
    },
    setHostImage: (state, action) => {
      // const image =formData.append('images', action.payload.files[0], 'airbnb.jpg');

      // new Date().toISOString().replace(/:/g, '-') + '-' + action.payload
      // state.hotel.images = new Date().toISOString().replace(/:/g, '-') + '-' + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHotels.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchHotels.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hotels = action.payload.hotels;
      state.error;
    });
    builder.addCase(fetchHotels.rejected, (state, action) => {
      state.isLoading = false;
      state.hotels = [];
      state.isError = action.error.message;
    });
    builder.addCase(getRoom.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRoom.fulfilled, (state, action) => {
      state.isLoading = false;
      state.hotelDetails = action.payload.hotel;
      state.isError;
    });
    builder.addCase(getRoom.rejected, (state, action) => {
      state.isLoading = false;
      state.message = action.payload.message;
      // state.hotels = [];
      state.isError = action.error.message;
    });
    builder.addCase(insertHotel.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
      console.log(action.payload);
    });
    builder.addCase(insertHotel.fulfilled,(state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.hotels.push(action.payload);
      console.log(action.payload);
    });
    builder.addCase(insertHotel.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
      console.log(action.payload);
    });
  },
});

export const {
  setPlaceType,
  settitle,
  setSpaceType,
  setCheapestPrice,
  setHostDesc,
  setAddress,
  setHostImage,
  setHostCity,
  setAllHotels,
} = hotelSlice.actions;
export default hotelSlice.reducer;
