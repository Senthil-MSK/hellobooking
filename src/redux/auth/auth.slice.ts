import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { authActions } from './auth.actions';
import jwt_decode from "jwt-decode";

// User Token
var authToken = localStorage.getItem("token") || null;

// ------ Auth Reducer for managing authentication state. ------
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: !!localStorage.getItem("user"),
    token: null,
    userObject: authToken ? jwt_decode(authToken) : {permissions: [], projectId: ""},
    error: "",
    loading: false,
    loginSuccess: false,
    optSent: null,
    otpVerification: false,
    verifiedOtp: "",
    resetPasswordSuccess: false,
    userRegistered: ""
  },
  reducers: {
    // -------- Logout state ------
    logout: (state, action) => {
      localStorage.clear();
      state.isAuthenticated = false;
      state.token = null;
      state.userObject = {permissions: []};
      state.error = "";
    },
    // -------- Reset all the auth error state for forgotpassword, login and resetpassword. ------
    resetError: (state) => {
      state.loading = false;
      state.error = "";
      state.loginSuccess = false;
      state.optSent = null;
      state.resetPasswordSuccess = false;
      state.userRegistered = "";
    }
  },
  extraReducers: (builder) => {
    builder
       // -------- cases of Login api data -------
       .addCase(authActions.loginAction.pending, (state, action) => {
        state.userObject = {permissions: []};
        state.error = "";
        state.loading = true;
        state.loginSuccess = false;
      })
      .addCase(authActions.loginAction.fulfilled, (state, action) => {
        if (action.payload.data.data?.token) {
          state.loading = false;
          state.isAuthenticated = true;
          state.userObject = jwt_decode(action.payload.data.data?.token);
          localStorage.setItem("token", action.payload.data.data.token);
          state.error = "";
          state.token = action.payload.data.data.token;
          state.loginSuccess = true;
        } else {
          state.loading = false;
          state.isAuthenticated = false;
          state.loginSuccess = false;
          localStorage.removeItem("token");
          state.error = "unable to loginAction properly.";
        }
      })
      .addCase(authActions.loginAction.rejected, (state, action: any) => {
        state.userObject = {permissions: []};
        state.loading = false;
        state.loginSuccess = false;
        if(action.payload.status === 401){
          state.error = action?.payload?.data?.message || "";
        }else if(action.payload.status === 422){
          state.error = action.payload.data.details[0].message || "";
        }else {
          state.error = action.error.message || "";
        }
        
      })
      // -------- cases of sending OTP api request -------
      .addCase(authActions.sendOtpAction.pending, (state, action) => {
        state.optSent = null
        state.error = "";
        state.loading = true;
      })
      .addCase(authActions.sendOtpAction.fulfilled, (state, action) => {
        state.optSent = action.payload.data?.message
        state.error = "";
        state.loading = false;
      })
      .addCase(authActions.sendOtpAction.rejected, (state, action: any) => {
        state.optSent = null
        state.loading = false;
        if(action.payload.status === 401){
          state.error = action?.payload?.data?.message || "";
        }else if(action.payload.status === 400){
          state.error = action.payload.data.message || "";
        }else if(action.payload.status === 422){
          state.error = action.payload.data.details[0].message || "";
        }else {
          state.error = action.error?.message || "";
        }
      })
      // -------- cases of verifying OTP api request -------
      .addCase(authActions.verifyOtpAction.pending, (state, action) => {
        state.otpVerification = false
        state.verifiedOtp = action?.meta?.arg?.code
        state.error = "";
        state.loading = true;
      })
      .addCase(authActions.verifyOtpAction.fulfilled, (state, action) => {
        state.otpVerification = action.payload.data?.success
        state.error = "";
        state.loading = false;
      })
      .addCase(authActions.verifyOtpAction.rejected, (state, action: any) => {
        state.otpVerification = false
        state.loading = false;
        if(action.payload.status === 401){
          state.error = action?.payload?.data?.message || "";
        }else if(action.payload.status === 400){
          state.error = action.payload.data.message || "";
        }else if(action.payload.status === 422){
          state.error = action.payload.data.details[0].message || "";
        }else {
          state.error = action.error?.message || "";
        }
      })
      // -------- cases of reset password api request -------
      .addCase(authActions.resetPasswordAction.pending, (state, action) => {
        state.resetPasswordSuccess = false;
        state.error = "";
        state.loading = true;
      })
      .addCase(authActions.resetPasswordAction.fulfilled, (state, action) => {
        state.resetPasswordSuccess = action.payload.data?.message;
        state.error = "";
        state.loading = false;
      })
      .addCase(authActions.resetPasswordAction.rejected, (state, action: any) => {
        state.resetPasswordSuccess = false;
        state.loading = false;
        if(action.payload.status === 401){
          state.error = action?.payload?.data?.message || "";
        }else if(action.payload.status === 400){
          state.error = action.payload.data.message || "";
        }else if(action.payload.status === 422){
          state.error = action.payload.data.details[0].message || "";
        }else {
          state.error = action.error?.message || "";
        }
      })
      // -------- cases of Register User api request -------
      .addCase(authActions.registerUserAction.pending, (state, action) => {
        state.userRegistered = "";
        state.error = "";
        state.loading = true;
      })
      .addCase(authActions.registerUserAction.fulfilled, (state, action) => {
        state.userRegistered = action.payload.data?.message;
        state.error = "";
        state.loading = false;
      })
      .addCase(authActions.registerUserAction.rejected, (state, action: any) => {
        state.userRegistered = "";
        state.loading = false;
        if(action.payload.status === 401){
          state.error = action?.payload?.data?.message || "";
        }else if(action.payload.status === 400){
          state.error = action.payload.data.message || "";
        }else if(action.payload.status === 422){
          state.error = action.payload.data.details[0].message || "";
        }else {
          state.error = action.error?.message || "";
        }
      });
  },
  
});
// Export for Logout
export const { logout } = authSlice.actions;
// Export for ResetErrors
export const {resetError} = authSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const token = (state: RootState) => state.login.token;


export default authSlice.reducer;
