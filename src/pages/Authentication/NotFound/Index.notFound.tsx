import Grid from '@mui/material/Grid';
import LoginStyles from "../Login/style.login";
import Typography from '@mui/material/Typography';
import {ReactComponent as Logo} from '../../../assets/images/logo.svg';
import CustomButton from "../../../components/Button/Index.button";
import { useNavigate } from 'react-router-dom';

// ----- Default Export for Not Found Component -----
export default function NotFound() {
  const navigate = useNavigate();
  // Redirect to Login
  const redirectToLogin = () => {
    navigate("/login");
  }
  return (
    <LoginStyles>
      <Grid container className="contentWrapper wrapper404" style={{paddingLeft: "30px"}}>
        <Grid item xs={4} style={{paddingTop: "30px", paddingRight: "15px"}} >
          <Logo className="logo" />
          <Typography variant="body2" component="h4" gutterBottom >
            The apartment renovation you’ve been dreaming of
          </Typography>
        </Grid>
        <Grid className="whiteBg" item xs={8} style={{paddingRight: "24px"}}>
          
          <Grid
            item
            xs={7}
          >
            <Typography variant="body2" component="h3" gutterBottom >
              Route Not Found / Unauthorized
            </Typography>
            <Typography variant="body2" component="p" gutterBottom >
              The page you are looking for is unautherized or not found.
            </Typography>
            <CustomButton
              type="button"
              variant="contained"
              onClick={redirectToLogin}
            >Back to Login</CustomButton>
          </Grid>
        </Grid>
    </Grid>
  </LoginStyles>
  );
}
