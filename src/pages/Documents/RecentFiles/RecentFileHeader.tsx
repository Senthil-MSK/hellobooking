import React from "react";
import { Link, useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  GridView as GridViewIcon,
  FormatListBulleted as FormatListBulletedIcon,
} from "@mui/icons-material";

import SectionHeader from "../../../components/SectionHeader/Index.sectionheader";
import CustomButton from "../../../components/Button/Index.button";
import { RecentFileHeaderPropsTypes } from "./RecentFileTypes";

function RecentFileHeader(props: RecentFileHeaderPropsTypes) {
  let { folderName } = useParams();

  return (
    <div>
      <SectionHeader>
        <Typography variant="h4" pl={5}>
          {props.showFilDetail ? (
            <CustomButton
              variant="text"
              className="backBtn"
              onClick={props.customClick}>
              <ArrowBackIcon />
              {props.showFilDetail}
            </CustomButton>
          ) : folderName === undefined ? (
            "Recent Files"
          ) : (
            <>
              <Link to="/documents/overview">
                <ArrowBackIcon />
              </Link>
              {folderName}
            </>
          )}
        </Typography>

        {!props.showFilDetail && (
          <CustomButton onClick={props.iconClick} variant="text">
            {props.showFile ? <FormatListBulletedIcon /> : <GridViewIcon />}
          </CustomButton>
        )}
      </SectionHeader>
    </div>
  );
}

export default RecentFileHeader;
