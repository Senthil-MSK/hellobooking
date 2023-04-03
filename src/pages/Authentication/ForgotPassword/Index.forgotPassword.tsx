import React from 'react';
import ForgotPasswordStyles from "../style.forgotPassword";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CustomInputField from "../../../components/form/Inputs/Input";
import CustomButton from "../../../components/Button/Index.button";
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';
import { useAppSelector } from "../../../redux/store/store";
import { Link } from '@mui/material';
import ForgetOtpForm from './OTPVerification/Index.otpVerification';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { ReactComponent as Visibility } from '../../../assets/images/icons/eye.svg';
import { ReactComponent as VisibilityOff } from '../../../assets/images/icons/eye-active.svg';
import TransitionAlerts from '../../../components/Toasts/Index.transitionAlert';
import useForgotPassword from './useForgotPassword';
import { selectAuthError, otpRequestSuccess } from "../../../redux/auth/auth.selectors";

export default function ForgotPassword() {

  const authErrorData = useAppSelector(selectAuthError);
  const otpSent = useAppSelector(otpRequestSuccess);
  // import forgot password logic use Password
  const [
    showPassword,
    step,
    setStep,
    values,
    errors,
    setrequestTime,
    showConfirmPassword,
    time,
    setTime,
    requestTime,
    requestTimer,
    setrequestTimer,
    handleSubmit,
    handleInputChange,
    handleInputBlur,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleResetSubmit,
    handleClickConfirmShowPassword,
    handleMouseDownConfirmPassword
  ]: any = useForgotPassword()

  return (
    <ForgotPasswordStyles>
      <Grid container className="contentWrapper" style={{ paddingLeft: "0" }}>
        <Grid item xs={12} sm={5} className="leftPanel" >
          <Link href="/login"><Logo className="logo" /></Link>
          <Typography variant="body2" component="h4" gutterBottom >
            The apartment renovation <span>you’ve been dreaming of</span>
          </Typography>
        </Grid>
        <Grid className="whiteBg" item xs={12} sm={7}>
          <TransitionAlerts
            errorData={authErrorData ? <>{authErrorData}.</> : ""}
            showAlert={authErrorData.length > 0 ? true : false}
            type="warning"
          />
          <TransitionAlerts
            errorData={otpSent ? <>{otpSent}.</> : ""}
            showAlert={otpSent ? true : false}
            type="success"
          />
          <Grid
            item
          >
            {/* Render for allowing a user to enter email address */}
            {step === 0 && <><Typography variant="body2" component="h3" gutterBottom >
              Forgot Password?
            </Typography>
              <Typography variant="body2" component="p" gutterBottom >
                Enter your email address to reset your password, <span>and we will send you instructions.</span>
              </Typography>
              <form
                onSubmit={handleSubmit}
                className="loginForm"
              >
                <CustomInputField
                  autoComplete="userName"
                  name="userName"
                  fullWidth
                  onChange={handleInputChange}
                  value={values.userName}
                  id="userName"
                  onBlur={(e: React.ChangeEvent<HTMLInputElement>) => handleInputBlur(e, "userName")}
                  label="Email Address"
                  placeHolder="e.g. hello@chapter.com"
                  error={errors}
                />
                <CustomButton
                  type="submit"
                  variant="contained"
                  className="btn forgotPasswordBtn"
                >Send</CustomButton>
              </form></>}
            {/* Render once user enters a valid email address */}
            {step === 1 && <form
              onSubmit={handleSubmit}
              className="loginForm otpForm"
            ><ForgetOtpForm
                email={values.userName}
                onComplete={setStep}
                requestTimer={requestTimer}
                setrequestTimer={setrequestTimer}
                setTime={setTime}
                time={time}
                setrequestTime={setrequestTime}
                requestTime={requestTime}
              /></form>}
            {/* Render for Reset password form */}
            {step === 2 && <>
              <Typography variant="body2" component="h3" className="resetHeading" >
                Reset Your Password
              </Typography>
              <form
                onSubmit={handleResetSubmit}
                className="loginForm"
              >
                <CustomInputField
                  type='password'
                  name='password'
                  fullWidth
                  id="password"
                  onChange={handleInputChange}
                  onBlur={(e: React.ChangeEvent<HTMLInputElement>) => handleInputBlur(e, "password")}
                  label="New Password"
                  showPassword={showPassword}
                  placeHolder="e.g. Opensesame10$"
                  inputProps={{
                    'autoComplete': 'new-password',
                  }}
                  error={errors}
                  value={values.password}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <CustomInputField
                  type='password'
                  name='confirmPassword'
                  fullWidth
                  id="forgot-password"
                  onChange={handleInputChange}
                  onBlur={(e: React.ChangeEvent<HTMLInputElement>) => handleInputBlur(e, "confirmPassword")}
                  label="Confirm New Password"
                  showPassword={showConfirmPassword}
                  placeHolder="e.g. Opensesame10$"
                  inputProps={{
                    'autoComplete': 'new-password',
                  }}
                  error={errors}
                  value={values.confirmPassword}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickConfirmShowPassword}
                        onMouseDown={handleMouseDownConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <CustomButton
                  type="submit"
                  variant="contained"
                  className="btn resetPasswordSubmit"
                >Submit</CustomButton>
              </form></>}
          </Grid>
        </Grid>
      </Grid>
    </ForgotPasswordStyles>
  );
}
