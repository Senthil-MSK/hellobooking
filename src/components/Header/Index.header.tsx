import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/store/store";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import styles from "./headerStyles";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { logout } from "../../redux/auth/auth.slice";
import { showHideMessage } from "../../redux/common/common.slice";
import { userObject } from "../../redux/auth/auth.selectors";

import { ReactComponent as Logo } from "../../assets/images/portal-logo.svg";
import Typography from "@mui/material/Typography";
import { comminUtils } from "../../Utils/utils";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import MenuItems from "../Menu/sidebar";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import { ReactComponent as ContactUsIcon } from "../../assets/images/icons/contact-us.svg";

const menuId = "primary-search-account-menu";
export default function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const loggedInUser = useAppSelector<any>(userObject);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorMsgEl, setAnchorMsgEl] = useState<null | HTMLElement>(null);
  const [state, setState] = React.useState({
    left: false,
  });

  const isMenuOpen = Boolean(anchorEl);
  const isMessageOpen = Boolean(anchorMsgEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMessageClose = () => {
    setAnchorMsgEl(null);
  };

  const handleShowCompose = () => {
    handleMessageClose();
    dispatch(showHideMessage({ show: true, title: "New Message", topic: "" }));
  };

  const handleLogout = () => {
    dispatch(logout(true));
    navigate("/login");
  };

  const renderMenu = (
    <Menu
      style={styles.Menu}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      {/* Render dropdownContent */}
      <styles.ProfileDropDown>
        <styles.ProfileBtnInner>
          {loggedInUser?.firstName?.charAt(0)}
          {loggedInUser?.lastName?.charAt(0)}
        </styles.ProfileBtnInner>
        <Box>
          <Typography variant="h5">
            {loggedInUser?.firstName} {loggedInUser?.lastName}
          </Typography>
          <Typography variant="body1">{loggedInUser.email}</Typography>
        </Box>
      </styles.ProfileDropDown>
      <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
    </Menu>
  );

  const renderMessagePopup = (
    <Menu
      style={styles.Message}
      anchorEl={anchorMsgEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId + "msk"}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMessageOpen}
      onClose={handleMessageClose}>
      {/* Render dropdownContent */}
      <Box>
        <Typography variant="h5" textAlign={"center"} mt={5} mb={20}>
          Contact Us
        </Typography>
      </Box>
      <Divider />
      <MenuItem onClick={handleShowCompose}>Send Message</MenuItem>
      <Divider />
      <MenuItem>Chapter Contact Info</MenuItem>
    </Menu>
  );

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    handleMessageClose();
    setAnchorEl(event.currentTarget);
  };

  const handleMessageOpen = (event: React.MouseEvent<HTMLElement>) => {
    handleMenuClose();
    setAnchorMsgEl(event.currentTarget);
  };

  const toggleDrawer = (anchor: string, open: boolean) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  return (
    <>
      <styles.StyledToolbar>
        <Grid container columnSpacing={3} className="logoBtnWrapperMain">
          <Grid
            item
            xs={8}
            container
            direction="row"
            alignItems="center"
            className="logoBtnWrapper">
            <React.Fragment>
              {/* Render Drawer for mobile below 768 */}
              <SwipeableDrawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
                onOpen={toggleDrawer("left", true)}
                className="customDrawer">
                <styles.LogoStyle className="MobileLogo">
                  <Link to="/">
                    <Logo />
                  </Link>
                </styles.LogoStyle>
                <Box
                  sx={{ width: "269px" }}
                  role="presentation"
                  onClick={toggleDrawer("left", false)}
                  onKeyDown={toggleDrawer("left", false)}
                  className="MainLinksContainer">
                  {/* Drawer Menu */}
                  <MenuItems />
                  <Box className="MobileMenuItems">
                    <MenuItem className="accountPreferencesUrl">
                      Account Preferences
                    </MenuItem>
                    <MenuItem className="SignOutUrl" onClick={handleLogout}>
                      Sign Out
                    </MenuItem>
                  </Box>
                </Box>
              </SwipeableDrawer>
            </React.Fragment>
            <styles.LogoStyle className="logo">
              {/* Logo */}
              <Link to="/">
                <Logo />
              </Link>
            </styles.LogoStyle>
            <Button onClick={toggleDrawer("left", true)} className="menuLeft">
              <MenuIcon />
            </Button>
            <Button className="MobileMessageIcon">
              <ContactUsIcon />
            </Button>
            <Typography className="title">
              {comminUtils.greetingFunction()}
              {loggedInUser?.firstName}!
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            container
            direction="row"
            justifyContent="flex-end"
            alignItems="center"
            className="profileBtn">
            <Box className="MessageBtnWrap">
              {/* Contact Button */}
              <Button type="button" onMouseEnter={handleMessageOpen}>
                <ContactUsIcon />
              </Button>
            </Box>
            {/* Profile Button for desktop */}
            <styles.ProfileBtn
              onMouseEnter={handleProfileMenuOpen}
              aria-controls={menuId}
              aria-haspopup="true">
              {loggedInUser?.firstName?.charAt(0)}
              {loggedInUser?.lastName?.charAt(0)}
            </styles.ProfileBtn>
          </Grid>
        </Grid>
      </styles.StyledToolbar>
      {renderMenu}
      {renderMessagePopup}
    </>
  );
}
