import http from "./http";

// Export all services
export const authService = {
  authActionService,
  sendOtpService,
  verifyOtpService,
  resetPasswordService,
  registerUserService
};

// Customer login services
function authActionService(payload : {email: string, password: string}) {
  return http.post(`${process.env.REACT_APP_BASE_URL}/customer/login/`, {
      ...payload
    });
}

// Customer Send OTP services
function sendOtpService(payload : {email: string}) {
  return http.post(`${process.env.REACT_APP_BASE_URL}/customer/send-reset-code/`, {
      ...payload
    });
}

// Verify OTP services
function verifyOtpService(payload : {code: string}) {
  return http.post(`${process.env.REACT_APP_BASE_URL}/customer/verify-code/`, {
      ...payload
    });
}

// Reset Password services
function resetPasswordService(payload : {code: string, password: string, confirmPassword: string}) {
  return http.post(`${process.env.REACT_APP_BASE_URL}/customer/reset-password/`, {
      ...payload
    });
}

// Register user services
function registerUserService(payload : {token: string | undefined, email: string, password: string, confirmPassword: string}) {
  return http.post(`${process.env.REACT_APP_BASE_URL}/customer/invite/accept`, {
      ...payload
    });
}

