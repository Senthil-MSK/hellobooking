import { RootState } from "../store/store";

// Export all project selectors
export const scheduleLists = (state: RootState) => state.projects.projectsListData;
export const paymentSchedule = (state: RootState) => state.projects.projectsPaymentData;
export const projectsGallery = (state: RootState) => state.projects.projectsGalleryData;
export const projectsActionsData = (state: RootState) => state.projects.projectsActionItems;
export const loading = (state: RootState) => state.projects.loading;
export const scheduleListError = (state: RootState) => state.projects.error;