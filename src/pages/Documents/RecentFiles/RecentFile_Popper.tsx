import React from "react";
import { Button, Fade, Paper, Popper } from "@mui/material";
import { InfoOutlined as InfoOutlinedIcon } from "@mui/icons-material";

import { ReactComponent as DownloadIcon } from "../../../assets/images/icons/downloadIcon.svg";
import { PopperPropsType } from "./RecentFileTypes";

function RecentFilePopper(props: PopperPropsType) {
  return (
    <Popper
      open={props.popperOpen}
      anchorEl={props.anchorEle}
      placement="bottom-start"
      className="mobile-dropdown"
      transition>
      {({ TransitionProps }) => (
        <Fade {...TransitionProps} timeout={350}>
          <Paper>
            <Button
              variant="text"
              className="popoverLink"
              onClick={props.onMoreInfoClick}>
              <span>More Info</span>
              <InfoOutlinedIcon></InfoOutlinedIcon>
            </Button>
            <a
              href={props.selectedFileUrl}
              target="_blank"
              className="popoverLink"
              rel="noreferrer"
              onClick={props.hidePopper}>
              <span>Download</span>
              <DownloadIcon className="nohover" onClick={props.hidePopper} />
            </a>
          </Paper>
        </Fade>
      )}
    </Popper>
  );
}

export default RecentFilePopper;
