import { createSlice } from "@reduxjs/toolkit";
import { materialSelectionActions } from "./materialSelection.actions";

interface initialStateTypes {
  materialListData: any;
  materialListAwaitingData:any;
  error: string;
  loading: boolean;
  status: "idle" | "loading" | "failed";
  isAccepted: boolean;
  isAcceptloading: boolean;
  savedCount: number;
  isSaved: boolean;
  savedList: any;
}

const initialState: initialStateTypes = {
  materialListData: null,
  materialListAwaitingData:null,
  error: "",
  loading: false,
  status: "loading",
  isAccepted: false,
  isAcceptloading: false,
  savedCount: 0,
  isSaved: false,
  savedList: null
};

// ------ Material Selection Overview Reducer for managing  overview state. ------
const materialSelectionSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      // -------- cases of Material New Items api data -------
      .addCase(
        materialSelectionActions.materialSelectionAPI.pending,
        (state, action) => {
          state.error = "";
          // state.materialListData = {};
          state.loading = true;
          state.isAccepted = false;
        }
      )
      .addCase(
        materialSelectionActions.materialSelectionAPI.fulfilled,
        (state, action) => {
          if (action.payload.data?.pagination?.page > 1) {
            const prevData = JSON.parse(
              JSON.stringify(state.materialListData?.data)
            );
            const newData = action?.payload?.data?.data;
            const pagination = action?.payload?.data?.pagination;

            const final = [...prevData, ...newData];
            state.materialListData.data = final;
            state.materialListData.pagination = pagination;
          } else {
            state.materialListData = action.payload.data;
          }
          state.error = "";
        }
      )
      .addCase(
        materialSelectionActions.materialSelectionAPI.rejected,
        (state, action) => {
          state.loading = false;
          state.materialListData = {};
          state.error = action?.error?.message || "";
        }
      )
      //  ################  material Selection Versioning api call #######################
      .addCase(
        materialSelectionActions.materialSelectionVersioning.pending,
        (state, action) => {
          state.error = "";
          state.loading = true;
        }
      )
      .addCase(
        materialSelectionActions.materialSelectionVersioning.fulfilled,
        (state, action) => {
          const {response, versionIndex, type, groupItemIndex}= action.payload;
          debugger;
          if(type === "New"){
            state.materialListData.data[versionIndex] =  response?.data?.data
          }else if(groupItemIndex !== undefined){
            let tempData = {...response?.data?.data, showDetails: true}
            state.materialListAwaitingData.data[groupItemIndex].details[versionIndex] =  tempData;
          }
          
          state.error = "";
        }
      )
      .addCase(
        materialSelectionActions.materialSelectionVersioning.rejected,
        (state, action) => {
          state.loading = false;
          state.materialListData = {};
          state.error = action?.error?.message || "";
        }
      )
      //  ################  material Selection accept chnages api call #######################
      .addCase(
        materialSelectionActions.materialSelectionAcceptChange.pending,
        (state, action) => {
          state.error = "";
          state.isAcceptloading = true;
          state.isAccepted = false;
        }
      )
      .addCase(
        materialSelectionActions.materialSelectionAcceptChange.fulfilled,
        (state, action) => {
          state.isAccepted = action.payload?.data?.success;
          state.isAcceptloading = false;
        }
      )
      .addCase(
        materialSelectionActions.materialSelectionAcceptChange.rejected,
        (state, action) => {
          state.loading = false;
          state.isAccepted = false;
          state.error = action?.error?.message || "";
          state.isAcceptloading = false;
        }
      )
      //  ################  material Selection accept chnages api call #######################
      .addCase(
        materialSelectionActions.matrialselectionAwaitingSignOffListAction.pending,
        (state, action) => {
          state.error = "";
          state.loading = true;
        }
      )
      .addCase(
        materialSelectionActions.matrialselectionAwaitingSignOffListAction.fulfilled,
        (state, action) => {
          if (action.payload.data?.pagination?.page > 1) {
            const prevData = JSON.parse(
              JSON.stringify(state.materialListAwaitingData?.data)
            );
            const newData = action?.payload?.data?.data;
            const pagination = action?.payload?.data?.pagination;

            const final = [...prevData, ...newData];
            state.materialListAwaitingData.data = final;
            state.materialListAwaitingData.pagination = pagination;
          } else {
            state.materialListAwaitingData = action.payload.data;
          }
          state.error = "";
        }
      )
      .addCase(
        materialSelectionActions.matrialselectionAwaitingSignOffListAction.rejected,
        (state, action) => {
          state.loading = false;
          state.materialListAwaitingData = {};
          state.error = action?.error?.message || "";
        }
      )
      //  ################  material Selection Save api call #######################
      .addCase(
        materialSelectionActions.materialSelectionReviewSave.pending,
        (state, action) => {
          state.error = "";
          state.loading = true;
          state.isSaved = false;
        }
      )
      .addCase(
        materialSelectionActions.materialSelectionReviewSave.fulfilled,
        (state, action) => {
          state.savedCount=action.payload.data.count;
          state.isSaved=true;
          state.error = "";
        }
      )
      .addCase(
        materialSelectionActions.materialSelectionReviewSave.rejected,
        (state, action) => {
          state.loading = false;
          state.isSaved = false;
          state.error = action?.error?.message || "";
        }
      )
      //  ################  material Selection Saved List call #######################
      .addCase(
        materialSelectionActions.materialSelectionReviewList.pending,
        (state, action) => {
          state.error = "";
          state.loading = true;
        }
      )
      .addCase(
        materialSelectionActions.materialSelectionReviewList.fulfilled,
        (state, action) => {
          state.savedList=action.payload.data;
          state.error = "";
        }
      )
      .addCase(
        materialSelectionActions.materialSelectionReviewList.rejected,
        (state, action) => {
          state.loading = false;
          state.error = action?.error?.message || "";
        }
      )
  },
});

export default materialSelectionSlice.reducer;
