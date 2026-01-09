import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Apis from "../../services/apis";
import {
  clearStorage,
  getToken,
  getUser,
  setToken,
  setUser,
} from "../../services/storage";



export const onLogin = createAsyncThunk(
  "auth/onLogin",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await Apis.signin(payload);
      const { status, message, data } = response.data;

      return status
        ? { message, data }   // OTP info
        : rejectWithValue(message);

    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  }
);


export const onOTPVerify = createAsyncThunk(
  "auth/onOTPVerify",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await Apis.signin_otp_verify(payload);
      const { status, message, data } = response.data;

      return status
        ? { message, data }
        : rejectWithValue(message);

    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  }
);





export const onAppLoad = createAsyncThunk(
  "auth/onAppLoad",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken();
      const user = getUser();

      if (token && user) {
        return {
          token,
          user,
          isAuthenticated: true,
        };
      }

      // not logged in
      return {
        token: null,
        user: null,
        isAuthenticated: false,
      };
    } catch (error) {
      return rejectWithValue("Failed to restore session");
    }
  }
);


const initialState = {
  user: null,
  token: null,
  isAuthenticated: false,

  otpRequired: false,
  otpPayload: null,

  showSplash: true,
  isLoading: false,
  error: null,
};



const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
       logout(state) {
        clearStorage();
           state.user = null;
           state.token = null;
           state.isAuthenticated = false;
           state.isLoading = false;
           state.error = null;
},
    },
   extraReducers: (builder) => {     
  builder

  
       // APP LOAD
  
    .addCase(onAppLoad.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(onAppLoad.fulfilled, (state, action) => {
      state.isLoading = false;
      state.showSplash = false;

      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isAuthenticated = action.payload.isAuthenticated;
    })
    .addCase(onAppLoad.rejected, (state) => {
      state.isLoading = false;
      state.showSplash = false;
    })

    
      // LOGIN → OTP SENT
    
    .addCase(onLogin.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(onLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.showSplash = false;
      state.otpRequired = true;

      //  STORE password temporarily
      state.otpPayload = {
        ...action.payload.data,
        password: action.meta.arg.password,
      };
})

    .addCase(onLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })

  
      // OTP VERIFY → REAL LOGIN
   
    .addCase(onOTPVerify.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(onOTPVerify.fulfilled, (state, action) => {
      state.isLoading = false;
      state.showSplash = false;

      state.user = action.payload.data.user;
      state.token = action.payload.data.access_token;
      state.isAuthenticated = true;

      // persist
      setUser(action.payload.data.user);
      setToken(action.payload.data.access_token);

      state.otpRequired = false;
      state.otpPayload = null;
})

    .addCase(onOTPVerify.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  }
})




export const { logout } = authSlice.actions;
export default authSlice.reducer;