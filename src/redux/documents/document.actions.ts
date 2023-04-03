import { createAsyncThunk } from "@reduxjs/toolkit";
import { documentService } from "../../services/document.service";
import { showHideLoader } from "../common/common.slice";
import { setOnFileUploadFail } from "./document.slice";

// Async Thunk Actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

// Project Timeline Action
const fetchRecentFiles = createAsyncThunk(
  "documentSlice/fetchRecentFiles",
  (payload: any, { dispatch, rejectWithValue }) => {
    dispatch(showHideLoader(true));
    const { projectId, page, perPage, folderName } = payload;
    return documentService
      .documentRecentFilesService(projectId, page, perPage, folderName)
      .then((response: any) => {
        dispatch(showHideLoader(false));
        return response;
      })
      .catch((error: { response: unknown }) => {
        dispatch(showHideLoader(false));
        return rejectWithValue(error?.response);
      });
  }
);

// Project Gallery Action
const fileUploadAction = createAsyncThunk(
  "documentSlice/fileUploadAction",
  (payload: any, { dispatch, rejectWithValue }) => {
    const { projectId, formData } = payload;
    dispatch(showHideLoader(true));
    dispatch(setOnFileUploadFail(false));
    return documentService
      .documentUploadService(projectId, formData)
      .then((response) => {
        dispatch(showHideLoader(false));
        dispatch(setOnFileUploadFail(false));
        return response;
      })
      .catch((error: { response: unknown }) => {
        dispatch(showHideLoader(false));
        dispatch(setOnFileUploadFail(true));
        return rejectWithValue(error?.response);
      });
  }
);

export const documentActions = {
  fetchRecentFiles,
  fileUploadAction,
};
