import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface loginTypes {
  loader: boolean;
}

type MessageTypes = {
  show: boolean;
  title: string;
  topic: string;
};

// Exoprt Login Slice (Reducer)
export const commonSlice = createSlice({
  name: "common",
  initialState: {
    loader: false,
    showUploadBtn: false,
    showMessage: {
      show: false,
      title: "New Message",
      topic: "",
    },
    showMessageThread: false,
    mobileView: false,
  },
  reducers: {
    showHideLoader: (state, action: PayloadAction<boolean>) => {
      state.loader = action.payload;
    },
    showHideUploadBtn: (state, action: PayloadAction<boolean>) => {
      state.showUploadBtn = action.payload;
    },
    showHideMessage: (state, action: PayloadAction<MessageTypes>) => {
      state.showMessage = {
        show: action.payload.show,
        title: action.payload.title,
        topic: action.payload.topic,
      };
    },
    showMessageThread: (state, action: PayloadAction<boolean>) => {
      state.showMessageThread = action.payload;
    },
    showMobileView: (state, action: PayloadAction<boolean>) => {
      state.mobileView = action.payload;
    },
  },
});

export const {
  showHideLoader,
  showHideUploadBtn,
  showMobileView,
  showHideMessage,
  showMessageThread,
} = commonSlice.actions;

export default commonSlice.reducer;
