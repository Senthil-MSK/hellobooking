import * as React from "react";
import { Grid } from "@mui/material";
import { Stack } from "@mui/system";
import SkeletonTemplate from "./skeleton.template";
import Logo from "../../assets/images/portal-logo.svg";
import styles from "../../pages/projects/projectsOverview/projectOverview";

export default function SkeletonLoader(props: any) {
  const { isLoading, isLogin } = props;

  return (
    <Stack style={isLoading ? { display: "block" } : { display: "none" }}>
      {isLogin ? (
        <Stack>
          <Grid
            container
            bgcolor={"#FFFBF5"}
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            p={20}>
            <Grid item>
              <img src={Logo} alt="" />
            </Grid>
            <Grid item>
              <SkeletonTemplate
                variant="circular"
                skeleton_width={40}
                skeleton_height={40}
              />
            </Grid>
          </Grid>
          <Grid container spacing={4}>
            <Grid item xs={3}>
              <SkeletonTemplate variant="rectangle" skeleton_height={"100vh"} />
            </Grid>

            <Grid item xs={9}>
              <Grid container spacing={12} p={75}>
                <Grid item xs={12} sm={6} md={6}>
                  <SkeletonTemplate variant="rectangle" skeleton_height={150} />
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <SkeletonTemplate variant="rectangle" skeleton_height={150} />
                </Grid>
                <Grid item xs={12}>
                  <SkeletonTemplate variant="rectangle" skeleton_height={250} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      ) : (
        <Stack>
          <Grid container spacing={12} p={50}>
            <Grid item xs={12} sm={6} md={6}>
              <SkeletonTemplate variant="rectangle" skeleton_height={150} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <SkeletonTemplate variant="rectangle" skeleton_height={150} />
            </Grid>
            <Grid item xs={12}>
              <SkeletonTemplate variant="rectangle" skeleton_height={250} />
            </Grid>
          </Grid>
        </Stack>
      )}
    </Stack>
  );
}
