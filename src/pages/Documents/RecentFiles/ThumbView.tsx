import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ReactComponent as DownloadIcon } from "../../../assets/images/icons/downloadIcon.svg";

function ThumbView({ file }: any) {
  return (
    <div>
      <Box className="soloFileDetails">
        <Box className="fileThumbWrapper w-100">
          <img src={file?.thumbUrl} alt="" height={"200px"} width={"200px"} />
          <label className={file?.signed ? "status success" : "status warning"}>
            {file?.signed ? "Signed" : "Signature Required"}
          </label>
        </Box>
        <Box className="detailedInfoWrapper">
          <Box className="col">
            <label>Folder</label>
            <Typography variant="h6">{file?.folderName}</Typography>
          </Box>
          <Box className="col">
            <label>Uploaded by</label>
            <Typography variant="h6">{file?.updatedBy}</Typography>
          </Box>
          <Box className="col">
            <label>Uploaded Date</label>
            <Typography variant="h6">{file?.date}</Typography>
          </Box>
        </Box>
        <Box className="actionCol">
          <a href={file?.url} target="_blank" rel="noreferrer">
            <DownloadIcon></DownloadIcon>
          </a>
        </Box>
      </Box>
    </div>
  );
}

export default ThumbView;
