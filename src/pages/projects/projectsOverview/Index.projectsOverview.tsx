import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import ProjectsActions from "./AlertActions/Index.projectsActions";
import ProjectPayments from "./Payments/Index.payments";
import ProgressPhotos from "./ProgressPhotos/Index.photos";
import Styles from "./projectOverview";
import CustomTimeline from "./Timeline/Index.timeline";
import { projectsActions } from "../../../redux/projects/projects.actions";
import { useAppSelector, useAppDispatch } from "../../../redux/store/store";
import { userObject } from "../../../redux/auth/auth.selectors";
import { projectsActionsData } from "../../../redux/projects/projects.selectors";
import { Stack } from "@mui/system";
import SkeletonTemplate from "../../../components/Loader/skeleton.template";
// import { selectLoader } from "../../../redux/common/common.selectors";

export default function ProjectsOverview() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const user: any = useAppSelector(userObject);

  const projectsActionItems = useAppSelector(projectsActionsData);
  // Fetch Priority Actions on page load
  useEffect(() => {
    dispatch(projectsActions.projectsPendingAction(user?.projectId));
    setTimeout(() => setIsLoading(false), 3000);
  }, []);

  // const isLoading = useAppSelector(selectLoader);

  return (
    <>
      {isLoading ? (
        <Stack style={true ? { display: "block" } : { display: "block" }}>
          <Grid container spacing={12}>
            <Grid item xs={12} sm={6} md={6}>
              <SkeletonTemplate variant="rectangle" skeleton_height={200} />
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <SkeletonTemplate variant="rectangle" skeleton_height={200} />
            </Grid>
            <Grid item xs={12}>
              <SkeletonTemplate variant="rectangle" skeleton_height={250} />
            </Grid>
          </Grid>
        </Stack>
      ) : (
        <Styles.ProjectOverviewScreen>
          {projectsActionItems?.length > 0 && (
            <ProjectsActions projectsActionItems={projectsActionItems} />
          )}
          <Grid container spacing={2} id="mid-content-wrapper">
            <Grid xs={12} lg={6} item>
              <ProjectPayments />
            </Grid>
            <Grid xs={12} lg={6} item>
              <ProgressPhotos />
            </Grid>
          </Grid>
          <CustomTimeline />
        </Styles.ProjectOverviewScreen>
      )}
    </>
  );
}
