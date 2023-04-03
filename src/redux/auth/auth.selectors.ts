import { RootState } from "../store/store";

// Export all Auth selectors
export const selectAuthData = (state: RootState) => state.login.token;
export const selectAuthError = (state: RootState) => state.login.error;
export const isLoggedIn = (state: RootState) => state.login.loginSuccess;
export const userObject = (state: RootState) => state.login.userObject;
export const otpRequestSuccess = (state: RootState) => state.login.optSent;
export const otpVerification = (state: RootState) => state.login.otpVerification;
export const verifiedOtp = (state: RootState) => state.login.verifiedOtp;
export const resetPasswordSuccess = (state: RootState) => state.login.resetPasswordSuccess;
export const userRegistered = (state: RootState) => state.login.userRegistered;
