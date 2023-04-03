import { RootState } from "../store/store";

// Export all project selectors
export const recentFilesList = (state: RootState) => state.document.recentFiles;
export const reloadRecentFiles = (state: RootState) =>
  state.document.reloadRecentFiles;
export const resetPageNo = (state: RootState) => state.document.pageNo;
export const showModalForm = (state: RootState) => state.document.showModalForm;
export const openModalForm = (state: RootState) => state.document.openModalForm;
export const fileUploadFail = (state: RootState) =>
  state.document.onFileUploadFail;
