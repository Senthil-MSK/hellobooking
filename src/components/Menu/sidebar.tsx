import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import EmailIcon from "@mui/icons-material/Email";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import CollectionsIcon from "@mui/icons-material/Collections";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import Box from "@mui/material/Box";
// Static Menu options list
const navigationList = [
  {
    title: "Project Overview",
    link: "/",
    icon: <DashboardOutlinedIcon className="nonHoverIcon" />,
    activeIcon: <DashboardIcon className="hoverIcon" />,
  },
  {
    title: "Finance",
    link: "/finance",
    icon: <AttachMoneyOutlinedIcon className="nonHoverIcon" />,
    activeIcon: <AttachMoneyIcon className="hoverIcon" />,
  },
  {
    title: "Documents",
    link: "/documents/overview",
    icon: <ArticleOutlinedIcon className="nonHoverIcon" />,
    activeIcon: <ArticleIcon className="hoverIcon" />,
  },
  {
    title: "Messages",
    link: "/messageList",
    icon: <EmailOutlinedIcon className="nonHoverIcon" />,
    activeIcon: <EmailIcon className="hoverIcon" />,
  },
  {
    title: "Gallery",
    link: "/photo-gallery",
    icon: <CollectionsOutlinedIcon className="nonHoverIcon" />,
    activeIcon: <CollectionsIcon className="hoverIcon" />,
  },
  {
    title: "Live Camera",
    link: "/live-view",
    icon: <VideocamOutlinedIcon className="nonHoverIcon" />,
    activeIcon: <VideocamIcon className="hoverIcon" />,
  },
  {
    title: "Material Selection",
    link: "/material-selection",
    icon: <FactCheckOutlinedIcon className="nonHoverIcon" />,
    activeIcon: <FactCheckIcon className="hoverIcon" />,
  },
];
// ----- Export for Single menu item -----
const CustomListItem = (props: any) => (
  <ListItemButton
    component={Link}
    key={props.key}
    to={props.to}
    selected={props.to === props.location.pathname}>
    {props.children}
  </ListItemButton>
);
// ----- Export menu items -----
export default function MenuItems() {
  return (
    <Box className="menuItems">
      {navigationList.map(
        (menuItem: {
          title: string;
          link: string;
          icon: React.ReactNode;
          activeIcon: React.ReactNode;
        }) => {
          return (
            <Fragment key={menuItem.title}>
              <CustomListItem to={menuItem.link} location={window.location}>
                <ListItemIcon className="CustomIconsList">
                  {menuItem.activeIcon}
                  {menuItem.icon}
                </ListItemIcon>
                <ListItemText primary={menuItem.title} />
                {/* Alert and notification count code (commented temp) */}
                {/* <Box className="IconContent">
            <span className="CircleIcon"></span>
            <span className='NumberWrap'>1</span>
        </Box> */}
              </CustomListItem>
              {/* <Divider sx={{ my: 1 }} /> */}
            </Fragment>
          );
        }
      )}
    </Box>
  );
}
