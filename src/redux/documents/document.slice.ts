import { createSlice } from "@reduxjs/toolkit";
import { documentActions } from "./document.actions";

var moment = require("moment-timezone");
moment.tz.setDefault("America/New_York");
export interface userState {
  value: any;
  status: "idle" | "loading" | "failed";
}

// ------ Project Overview Reducer for managing Project overview state. ------
const documentSlice = createSlice({
  name: "documents",
  initialState: {
    recentFiles: null,
    error: "",
    recentFileLoading: false,
    reloadRecentFiles: false,
    onFileUploadFail: false,
    pageNo: 0,
    showModalForm: false,
    openModalForm: false,
  },
  reducers: {
    resetReloadFiles: (state, action) => {
      state.reloadRecentFiles = action.payload;
    },
    setPageNo: (state, action) => {
      state.pageNo = action.payload;
    },
    setShowModalForm: (state, action) => {
      state.showModalForm = action.payload;
    },
    setOpenModalForm: (state, action) => {
      state.openModalForm = action.payload;
    },
    setOnFileUploadFail: (state, action) => {
      state.onFileUploadFail = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // -------- cases of document recent files api data -------
      .addCase(documentActions.fetchRecentFiles.pending, (state, action) => {
        state.error = "";
        state.recentFiles = null;
        state.recentFileLoading = true;
      })
      .addCase(documentActions.fetchRecentFiles.fulfilled, (state, action) => {
        state.error = "";
        state.recentFiles = action.payload.data;
        state.recentFileLoading = false;
      })
      .addCase(documentActions.fetchRecentFiles.rejected, (state, action) => {
        state.error = action?.error?.message || "";
        state.recentFiles = null;
        state.recentFileLoading = false;
      })

      // -------- cases of document upload files api data -------
      .addCase(documentActions.fileUploadAction.pending, (state) => {
        state.error = "";
        state.reloadRecentFiles = false;
      })
      .addCase(documentActions.fileUploadAction.fulfilled, (state) => {
        state.error = "";
        state.reloadRecentFiles = true;
        state.pageNo = 1;
      })
      .addCase(documentActions.fileUploadAction.rejected, (state, action) => {
        state.error = action?.error?.message || "";
        state.reloadRecentFiles = false;
      });
  },
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const token = (state: RootState) => state.login.token;

export default documentSlice.reducer;
export const {
  resetReloadFiles,
  setPageNo,
  setOnFileUploadFail,
  setShowModalForm,
  setOpenModalForm,
} = documentSlice.actions;
