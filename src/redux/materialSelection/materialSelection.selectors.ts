import { RootState } from "../store/store";


export const materialDataSelector = (state: RootState) => state.materialSelection.materialListData;
export const isMaterialAccepted = (state: RootState) => state.materialSelection.isAccepted;
export const materialListAwaitingData = (state: RootState) => state.materialSelection.materialListAwaitingData;
export const materialAcceptLoading = (state: RootState) => state.materialSelection.isAcceptloading;
export const isMaterialSaved = (state: RootState) => state.materialSelection.isSaved;
export const materialSavedCount = (state: RootState) => state.materialSelection.savedCount;
export const materialSavedList = (state: RootState) => state.materialSelection.savedList;