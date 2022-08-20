import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import authService from './authService'


// const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
  user: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Register user
export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (user, thunkAPI) => {
    try {
      const responce = await fetch(
        `http://localhost:8080/api/users/${user.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token'),
          },
          body: JSON.stringify(user),
        }
      );
      // localStorage.setItem('user', JSON.stringify(responce.data.user))  
      // await console.log(responce.josn())
      return await responce.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);

export const getUserId = createAsyncThunk(
  'user/getUserId',
  async (user, thunkAPI) => {
    try {
      const responce = await fetch(
        `http://localhost:8080/api/users/${user.id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            token: localStorage.getItem('token'),
          }
        }
      );
      // localStorage.setItem('user', JSON.stringify(responce.data.user))  
      // await console.log(responce.josn())
      return await responce.json();
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  }
);
export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout()
})

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
    setlogedUser:(state,action)=>{
      state.isLoading = false
      state.isSuccess = true
      state.isError = false
      state.message = ''
      state.user=action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false

      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError=false
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
        state.isSuccess = false

      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError=false
        state.user = action.payload
        console.log(action.payload)


      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.user = null
      })
      .addCase(updateUser.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        console.log(action.payload)
        state.user = action.payload.user;
        console.log(action.payload)
        localStorage.setItem('user', JSON.stringify(action.payload.user))

      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(getUserId.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getUserId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        console.log(action.payload)
        state.user = action.payload.user;
        state.message = action.payload.message;
        // localStorage.setItem('user', JSON.stringify(action.payload.user))

      })
      .addCase(getUserId.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      
      .addCase(logout.fulfilled, (state) => {
        state.user = null
        state.isSuccess = false
      })
  },
})
/// update user => become Host 
export const { reset,setlogedUser } = authSlice.actions
export default authSlice.reducer
