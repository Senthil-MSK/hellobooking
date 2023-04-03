import React from "react";
import Skeleton from "@mui/material/Skeleton";

function SkeletonTemplate(props: any) {
  const { variant, skeleton_width, skeleton_height } = props;
  return (
    <Skeleton
      sx={{ bgcolor: "grey.200" }}
      variant={variant}
      animation="wave"
      width={skeleton_width}
      height={skeleton_height}
    />
  );
}

export default SkeletonTemplate;
