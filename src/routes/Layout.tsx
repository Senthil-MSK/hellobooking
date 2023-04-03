import React from "react";
import ThemeProvider from "../theme";
import { Outlet } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MenuItems from "../components/Menu/sidebar";
import Header from "../components/Header/Index.header";
// import Loader from "../components/Loader/Index.skeleton.loader";
import { showMobileView } from "../redux/common/common.slice";
import { useAppSelector, useAppDispatch } from "../redux/store/store";
import { userObject } from "../redux/auth/auth.selectors";

import { selectMessage } from "../redux/common/common.selectors";
import ComposeMessage from "../pages/mesages/ComposeMessage/Index.composeMessage";
import useMediaQuery from "@mui/material/useMediaQuery";

type LayoutPropsTypes = {
  loginHeader: any;
};
// Define theme layout
const Layout = (props: LayoutPropsTypes) => {
  const { loginHeader } = props;
  const dispatch = useAppDispatch();
  //   const isLoading = useAppSelector(selectLoader);
  const userPermissions = useAppSelector(userObject);

  const showMessage = useAppSelector(selectMessage);

  const isMobileView = useMediaQuery("(max-width:992px)");

  React.useEffect(() => {
    dispatch(showMobileView(isMobileView));
  }, [isMobileView, dispatch]);

  return (
    <ThemeProvider>
      {/* Render Header Global Loader */}
      {loginHeader && <Header />}

      {/* Main Content render */}
      <div className="contentWrapper" style={{ background: "#fff" }}>
        <Grid container columnSpacing={3}>
          <Grid
            className="LeftMainCol"
            item
            xs={3}
            lg={3}
            xl={2}
            sx={{ display: { xs: "none", sm: "block" } }}>
            {userPermissions ? <MenuItems /> : ""}
          </Grid>
          <Grid
            item
            className="RightMainCol"
            xs={12}
            md={9}
            lg={9}
            xl={10}
            sx={{ pt: 3 }}>
            {/* Global Loader */}
            {/* <Loader isLoading={isLoading} isLogin={false} /> */}
            {showMessage.show && <ComposeMessage />}
            <Outlet /> {/*  all routes will render here */}
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
