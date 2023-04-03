import { createAsyncThunk } from '@reduxjs/toolkit';
import { showHideLoader } from '../common/common.slice';
import {materialSelectionService} from '../../services/materialSelection.service'


// Material selection LIST
const materialSelectionAPI= createAsyncThunk(
    'materialSelectionSlice/materialSelectionAction', (payload : {projectId: string, page: number, hideLoader: boolean}, { dispatch, rejectWithValue }) => {
      if(!payload.hideLoader){
        dispatch(showHideLoader(true));
      }
       
      return materialSelectionService.matrialselectionNewService(payload)
        .then((response) => {
          if(!payload.hideLoader){
            dispatch(showHideLoader(false))
          }
          
          return response
        })
        .catch((error: { response: unknown; }) => {
          if(!payload.hideLoader){
            dispatch(showHideLoader(false))
          }
          return rejectWithValue(error?.response)
        })
    }
  );

// Material selection Versioning
const materialSelectionVersioning= createAsyncThunk(
  'materialSelectionVersionSlice/materialSelectionVersionAction', (payload : {index: number,materialId:string, type:string, groupItemIndex: number | undefined}, { dispatch, rejectWithValue }) => {
    //  dispatch(showHideLoader(true));
    return materialSelectionService.matrialselectionVersioningService(payload)
      .then((response) => {
        // dispatch(showHideLoader(false));
        return {response,versionIndex : payload.index, type: payload.type, groupItemIndex: payload?.groupItemIndex }
      })
      .catch((error: { response: unknown; }) => {
        // dispatch(showHideLoader(false))
        return rejectWithValue(error?.response)
      })
  }
);

// Material selection Accept change 
const materialSelectionAcceptChange= createAsyncThunk(
  'materialSelectionAcceptChnageSlice/materialSelectionAcceptChnageAction', (payload : {materialId: string,status:boolean,projectId: string}, { dispatch, rejectWithValue }) => {
    //  dispatch(showHideLoader(true));
    return materialSelectionService.matrialselectionAcceptChangeService(payload)
      .then((response) => {
        // dispatch(showHideLoader(false));
        // dispatch(materialSelectionAPI({projectId:payload.projectId, page: 1}))
        return response
      })
      .catch((error: { response: unknown; }) => {
        // dispatch(showHideLoader(false))
        return rejectWithValue(error?.response)
      })
  }
);

// Material selection Awaiting Sign Off list
const matrialselectionAwaitingSignOffListAction= createAsyncThunk(
  'matrialselectionAwaitingSignOffListAction/matrialselectionAwaitingSignOffListAction', (payload : {projectId: string, page: number}, { dispatch, rejectWithValue }) => {
     dispatch(showHideLoader(true));
    return materialSelectionService.matrialselectionAwaitingSignOffListService(payload)
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

// Save Material for Review
const materialSelectionReviewSave= createAsyncThunk(
  'materialSelectionReviewSave/materialSelectionReviewSave', (payload : {id: string, status: boolean}, { dispatch, rejectWithValue }) => {
     dispatch(showHideLoader(true));
    return materialSelectionService.matrialselectionReviewSaveService(payload)
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

// Save Material for Review
const materialSelectionReviewList= createAsyncThunk(
  'materialSelectionReviewList/materialSelectionReviewList', (payload : {projectId: string}, { dispatch, rejectWithValue }) => {
     dispatch(showHideLoader(true));
    return materialSelectionService.matrialselectionReviewListService(payload)
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

  export const materialSelectionActions = {
    materialSelectionAPI,
    materialSelectionVersioning,
    materialSelectionAcceptChange,
    matrialselectionAwaitingSignOffListAction,
    materialSelectionReviewSave,
    materialSelectionReviewList
  }
