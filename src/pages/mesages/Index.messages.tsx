import * as React from "react";
import Grid from "@mui/material/Grid";
import Styles from "./messages";
import Box from "@mui/material/Box";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

import SectionHeader from "../../components/SectionHeader/Index.sectionheader";
import { ReactComponent as EmptyGallery } from "../../assets/images/icons/empty-gallery.svg";
import CustomTimeline from "../projects/messages/Timeline/Index.timeline";
import "../../assets/scss/messages/messages.scss";
import ComposeMessage from "./ComposeMessage/Index.composeMessage";

const Messages = (props: any) => {
  const [expandedView, setExpandedView] = React.useState(false);

  return (
    <Styles.MessagesScreen>
      <ComposeMessage messageBoxTitle="New Message" />
      <div>
        <Grid container spacing={30}>
          <Grid xs={12} lg={6} item>
            <SectionHeader>
              <Typography variant="h4">Balance</Typography>
              <Link className="boxTitleLink" to="#">
                More Info
              </Link>
            </SectionHeader>
            <Box className="paymentProgressWrapper">
              <Box className="progressWrapper">
                <Box className={`progressDiv active`}>
                  <TaskAltIcon></TaskAltIcon>
                  <Box component="span">1st Milestone</Box>
                </Box>
                <Box className={`progressDiv`}>
                  <TaskAltIcon></TaskAltIcon>
                  <Box component="span">2st Milestone</Box>
                </Box>
                <Box className={`progressDiv`}>
                  <TaskAltIcon></TaskAltIcon>
                  <Box component="span">3st Milestone</Box>
                </Box>
              </Box>
              <Box className="paymentMilestones">
                <Box className="cost">
                  <Box component="strong">$-</Box>
                  <Box component="span">Job Running Total</Box>
                </Box>
                <Box className="cost">
                  <Box component="strong">$-</Box>
                  <Box component="span">Payments Recieved</Box>
                </Box>
                <Box className="cost">
                  <Box component="strong">$-</Box>
                  <Box component="span">Balance</Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid xs={12} lg={6} item>
            <SectionHeader>
              <Typography variant="h4">Progress Photos</Typography>
              <Link to="#" className="boxTitleLink">
                Open Gallery
              </Link>
            </SectionHeader>
            <div className="photosWrapper">
              <Typography variant="h4">Progress photos coming soon!</Typography>
              <EmptyGallery />
            </div>
          </Grid>
        </Grid>
        <CustomTimeline />
      </div>
    </Styles.MessagesScreen>
  );
};

export default Messages;
