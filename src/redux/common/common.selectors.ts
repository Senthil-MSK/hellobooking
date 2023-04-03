import { RootState } from "../store/store";
// export allcommon selectors
export const selectLoader = (state: RootState) => state.common.loader;
export const selectUploadBtn = (state: RootState) => state.common.showUploadBtn;
export const selectMessage = (state: RootState) => state.common.showMessage;
export const selectMessageThread = (state: RootState) =>
  state.common.showMessageThread;
export const selectMobileView = (state: RootState) => state.common.mobileView;
