import { createAsyncThunk } from '@reduxjs/toolkit';
import { authService } from '../../services/auth.service';
import { showHideLoader } from '../common/common.slice';

// Async Thunk Actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

// User login Action
const loginAction = createAsyncThunk(
  'authSlice/authAction', (payload: { email: string, password: string}, { dispatch, rejectWithValue }) => {
    dispatch(showHideLoader(true));
    return authService.authActionService(payload)
      .then((response) => {
        dispatch(showHideLoader(false))
        return response
      })
      .catch((error: { response: unknown; }) => {
        dispatch(showHideLoader(false))
        return rejectWithValue(error?.response)
      })
  }
);

// Send OTP Action
const sendOtpAction = createAsyncThunk(
  'authSlice/sendOtpAction', (payload: { email: string}, { dispatch, rejectWithValue }) => {
    dispatch(showHideLoader(true));
    return authService.sendOtpService(payload)
      .then((response) => {
        dispatch(showHideLoader(false))
        return response
      })
      .catch((error: { response: unknown; }) => {
        dispatch(showHideLoader(false))
        return rejectWithValue(error?.response)
      })
  }
);

// Verify OTP Action
const verifyOtpAction = createAsyncThunk(
  'authSlice/verifyOtpAction', (payload: { code: string}, { dispatch, rejectWithValue }) => {
    dispatch(showHideLoader(true));
    return authService.verifyOtpService(payload)
      .then((response) => {
        dispatch(showHideLoader(false))
        return response
      })
      .catch((error: { response: unknown; }) => {
        dispatch(showHideLoader(false))
        return rejectWithValue(error?.response)
      })
  }
);

// Reset Password Action
const resetPasswordAction = createAsyncThunk(
  'authSlice/resetPasswordAction', (payload: { code: string, password: string, confirmPassword: string}, { dispatch, rejectWithValue }) => {
    dispatch(showHideLoader(true));
    return authService.resetPasswordService(payload)
      .then((response) => {
        dispatch(showHideLoader(false))
        return response
      })
      .catch((error: { response: unknown; }) => {
        dispatch(showHideLoader(false))
        return rejectWithValue(error?.response)
      })
  }
);

// Register User Action
const registerUserAction = createAsyncThunk(
  'authSlice/registerUserAction', (payload: { token: string | undefined,email: string, password: string, confirmPassword: string}, { dispatch, rejectWithValue }) => {
    dispatch(showHideLoader(true));
    return authService.registerUserService(payload)
      .then((response) => {
        dispatch(showHideLoader(false))
        return response
      })
      .catch((error: { response: unknown; }) => {
        dispatch(showHideLoader(false))
        return rejectWithValue(error?.response)
      })
  }
);


export const authActions = {
  loginAction,
  sendOtpAction,
  verifyOtpAction,
  resetPasswordAction,
  registerUserAction
}

