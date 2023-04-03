import React  from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';
import RegisterStyles from "./style.register";
import CustomInputField from "../../../components/form/Inputs/Input";
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import {ReactComponent as Visibility} from '../../../assets/images/icons/eye.svg';
import {ReactComponent as VisibilityOff} from '../../../assets/images/icons/eye-active.svg';
import CustomButton from "../../../components/Button/Index.button";
import { useAppSelector } from "../../../redux/store/store";
import { selectAuthError, userRegistered } from "../../../redux/auth/auth.selectors";
import { Link } from 'react-router-dom';
import TransitionAlerts from "../../../components/Toasts/Index.transitionAlert";
import useRegister from './useRegister';

// ----- Default Export for Register form Component -----
export default function Register() {
  const userRegisteredSuccess = useAppSelector(userRegistered);
  const authErrorData = useAppSelector(selectAuthError);
  // Import Use Registration logic
  const [
    errors,
    values,
    showPassword,
    showConfirmPassword,
    handleInputChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    handleInputBlur,
    handleClickConfirmShowPassword,
    handleMouseDownConfirmPassword,
    handleSubmit
  ] : any = useRegister();

  return (
    <RegisterStyles>
      <Grid container className="contentWrapper" style={{paddingLeft: "0"}}>
        <Grid item xs={12} sm={4} md={5} className="leftPanel" >
          <Link to="/login"><Logo className="logo" /></Link>
          <Typography variant="body2" component="h4" gutterBottom >
            The apartment renovation <span>you’ve been dreaming of</span>
          </Typography>
        </Grid>
        <Grid className="whiteBg" item xs={12} sm={8} md={7}>
          <Grid
            item
          >
            <TransitionAlerts 
              errorData={authErrorData ? <>{authErrorData}</> : ""} 
              showAlert={authErrorData.length > 0 ? true : false} 
              type="warning"
            />
            <TransitionAlerts 
              errorData={userRegisteredSuccess+"."} 
              showAlert={userRegisteredSuccess ? true : false} 
              type="success"
            />
            <Typography variant="body2" component="h3" gutterBottom >
              Welcome to Chapter Clients Portal
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
            <CustomInputField 
              type='password'
              name='password'
              fullWidth
              showForgotPassword={false}
              id="password"
              onChange={handleInputChange}
              onBlur={(e: React.ChangeEvent<HTMLInputElement>) => handleInputBlur(e, "password")}
              label="Password"
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
            >Register me</CustomButton>
            {/* <Box
              sx={{
                marginTop: '20px',
                [theme.breakpoints.up("lg")]: {
                  marginTop: '30px',
                  marginBottom: '30px'
                }
              }}
            >
            <Divider>&nbsp;&nbsp;&nbsp;Or&nbsp;&nbsp;&nbsp;</Divider>
            </Box>
            <CustomButton
              type="button"
              variant="outlined"
              className="socialBtns"
            ><GoogleIcon /> Log in with Google</CustomButton>
            <CustomButton
              type="button"
              variant="outlined"
              className="socialBtns"
            ><AppleIcon /> Log in with Apple</CustomButton> */}
          </form>
          </Grid>
        </Grid>
    </Grid>
  </RegisterStyles>
  );
}
