import { createSlice } from '@reduxjs/toolkit';
import { projectsActions } from './projects.actions';
var moment = require('moment-timezone');
moment.tz.setDefault("America/New_York");
export interface userState {
  value: any;
  status: 'idle' | 'loading' | 'failed';
}

// ------ Project Overview Reducer for managing Project overview state. ------
const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projectsListData: {},
    projectsActionItems: [],
    projectsPaymentData: {milestones: []},
    projectsGalleryData: [],
    error: "",
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
       // -------- cases of projects Timeline api data -------
       .addCase(projectsActions.projectsTimeAction.pending, (state, action) => {
        state.error = "";
        state.projectsListData = {};
        state.loading = true;
      })
      .addCase(projectsActions.projectsTimeAction.fulfilled, (state, action) => {
          if(action?.payload?.data?.data){
            action.payload.data.data.items.map((ele: any) => {
              ele.end = moment(ele.end).endOf('day').subtract(1, "hour").valueOf();
              ele.start = moment(ele.start).startOf('day').valueOf();
              return 
            })
          }
          state.projectsListData= action.payload.data.data;
          state.error = "";
      })
      .addCase(projectsActions.projectsTimeAction.rejected, (state, action) => {
        state.loading = false;
        state.projectsListData = {};
        state.error = action?.error?.message || "";
      })
       // -------- cases of projects payments api data -------
       .addCase(projectsActions.projectsPaymentAction.pending, (state, action) => {
        state.error = "";
        state.projectsPaymentData = {milestones: []};
        state.loading = true;
      })
      .addCase(projectsActions.projectsPaymentAction.fulfilled, (state, action) => {
          state.projectsPaymentData = action.payload.data.data;
          state.error = "";
      })
      .addCase(projectsActions.projectsPaymentAction.rejected, (state, action) => {
        state.loading = false;
        state.projectsPaymentData = {milestones: []};
        state.error = action?.error?.message || "";
      })
       // -------- cases of projects Gallery api data -------
       .addCase(projectsActions.projectsGalleryAction.pending, (state, action) => {
        state.error = "";
        state.projectsGalleryData = [];
        state.loading = true;
      })
      .addCase(projectsActions.projectsGalleryAction.fulfilled, (state, action) => {
          state.projectsGalleryData = action.payload.data.data;
          state.error = "";
      })
      .addCase(projectsActions.projectsGalleryAction.rejected, (state, action) => {
        state.loading = false;
        state.projectsGalleryData = [];
        state.error = action?.error?.message || "";
      })
       // -------- cases of projects Actoins api data -------
       .addCase(projectsActions.projectsPendingAction.pending, (state, action) => {
        state.error = "";
        state.projectsActionItems = [];
        state.loading = true;
      })
      .addCase(projectsActions.projectsPendingAction.fulfilled, (state, action) => {
          state.projectsActionItems = action.payload.data.data;
          state.error = "";
      })
      .addCase(projectsActions.projectsPendingAction.rejected, (state, action) => {
        state.loading = false;
        state.projectsActionItems = [];
        state.error = action?.error?.message || "";
      });
  },
  
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const token = (state: RootState) => state.login.token;


export default projectsSlice.reducer;
