import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { ReactComponent as Logo } from "../../../assets/images/logo.svg";
import LoginStyles from "./style.login";
import CustomInputField from "../../../components/form/Inputs/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import { ReactComponent as Visibility } from "../../../assets/images/icons/eye.svg";
import { ReactComponent as VisibilityOff } from "../../../assets/images/icons/eye-active.svg";
import CustomButton from "../../../components/Button/Index.button";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import {
  selectAuthError,
  resetPasswordSuccess,
} from "../../../redux/auth/auth.selectors";
import { Link } from "react-router-dom";
import TransitionAlerts from "../../../components/Toasts/Index.transitionAlert";
import CustomCheckboxField from "../../../components/form/Checkbox/Index.checkbox";
import useLogin from "./useLogin";
import CustomLoader from "../../../components/Loader/Index.skeleton.loader";
import { selectLoader } from "../../../redux/common/common.selectors";

// ----- Export for Login component -----
export default function Login() {
  const authErrorData = useAppSelector(selectAuthError);
  const resetSuccess = useAppSelector(resetPasswordSuccess);

  // All business login of login component is in useLogin() costom hook.
  const [
    showPassword,
    isChecked,
    values,
    errors,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleInputChange,
    handleInputBlur,
    handleSubmit,
    handleCheckboxChange,
  ]: any = useLogin();
  const loaderStatus = useAppSelector(selectLoader);

  return (
    <LoginStyles>
      <CustomLoader isLoading={loaderStatus} isLogin={true} />
      <Grid container className="contentWrapper" style={{ paddingLeft: "0" }}>
        <Grid item xs={12} sm={4} md={5} className="leftPanel">
          <Link to="/login">
            <Logo className="logo" />
          </Link>
          <Typography variant="body2" component="h4" gutterBottom>
            The apartment renovation <span>you’ve been dreaming of</span>
          </Typography>
        </Grid>
        <Grid className="whiteBg" item xs={12} sm={8} md={7}>
          <Grid item>
            <TransitionAlerts
              errorData={
                authErrorData ? (
                  <>
                    {authErrorData}.{" "}
                    <Link to="/forgot-password">Forgot Password?</Link>
                  </>
                ) : (
                  ""
                )
              }
              showAlert={authErrorData.length > 0 ? true : false}
              type="warning"
            />
            <TransitionAlerts
              errorData={resetSuccess + "."}
              showAlert={resetSuccess ? true : false}
              type="success"
            />
            <Typography variant="body2" component="h3" gutterBottom>
              Sign In to Chapter Clients Portal
            </Typography>
            {/* Render Login form */}
            <form onSubmit={handleSubmit} className="loginForm">
              <CustomInputField
                autoComplete="userName"
                name="userName"
                fullWidth
                onChange={handleInputChange}
                value={values.userName}
                id="userName"
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputBlur(e, "userName")
                }
                label="Email Address"
                placeHolder="e.g. hello@chapter.com"
                error={errors}
              />
              <CustomInputField
                type="password"
                name="password"
                fullWidth
                showForgotPassword={true}
                id="password"
                onChange={handleInputChange}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) =>
                  handleInputBlur(e, "password")
                }
                label="Password"
                showPassword={showPassword}
                placeHolder="e.g. Opensesame10$"
                inputProps={{
                  autoComplete: "new-password",
                }}
                error={errors}
                value={values.password}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              <CustomCheckboxField
                label="Keep me signed in"
                handleChange={handleCheckboxChange}
                checked={isChecked}
              />
              <CustomButton type="submit" variant="contained">
                Sign in
              </CustomButton>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </LoginStyles>
  );
}
