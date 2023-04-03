import { createAsyncThunk } from '@reduxjs/toolkit';
import { projectsService } from '../../services/projects.service';
import { showHideLoader } from '../common/common.slice';

// Async Thunk Actions

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.

// Project Timeline Action
const projectsTimeAction = createAsyncThunk(
  'projectsSlice/projectsTimeAction', (id: string, { dispatch, rejectWithValue }) => {
    dispatch(showHideLoader(true));
    return projectsService.projectsTimeService(id)
      .then((response) => {
        dispatch(showHideLoader(false))
        return response
      })
      .catch((error: { response: unknown; }) => {
        dispatch(showHideLoader(false))
        return rejectWithValue(error?.response)
      })
  }
);

// Project Payments Action
const projectsPaymentAction = createAsyncThunk(
  'projectsSlice/projectsPaymentAction', (id: string, { dispatch, rejectWithValue }) => {
    dispatch(showHideLoader(true));
    return projectsService.projectsPaymentService(id)
      .then((response) => {
        dispatch(showHideLoader(false))
        return response
      })
      .catch((error: { response: unknown; }) => {
        dispatch(showHideLoader(false))
        return rejectWithValue(error?.response)
      })
  }
);

// Project Gallery Action
const projectsGalleryAction = createAsyncThunk(
  'projectsSlice/projectsGalleryAction', (id: string, { dispatch, rejectWithValue }) => {
    dispatch(showHideLoader(true));
    return projectsService.projectsGalleryService(id)
      .then((response) => {
        dispatch(showHideLoader(false))
        return response
      })
      .catch((error: { response: unknown; }) => {
        dispatch(showHideLoader(false))
        return rejectWithValue(error?.response)
      })
  }
);

// Project Priority Item actions
const projectsPendingAction = createAsyncThunk(
  'projectsSlice/projectsPendingAction', (id: string, { dispatch, rejectWithValue }) => {
    dispatch(showHideLoader(true));
    return projectsService.projectsPendingActionsService(id)
      .then((response) => {
        dispatch(showHideLoader(false))
        return response
      })
      .catch((error: { response: unknown; }) => {
        dispatch(showHideLoader(false))
        return rejectWithValue(error?.response)
      })
  }
);

export const projectsActions = {
  projectsTimeAction,
  projectsPaymentAction,
  projectsGalleryAction,
  projectsPendingAction
}

