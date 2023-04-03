import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import { FileUploadStyles } from "./fileUpload";
import OnSuccessUploadModal from "./OnSucessUploadModal";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { showHideLoader } from "../../../redux/common/common.slice";
import {
  reloadRecentFiles,
  fileUploadFail,
} from "../../../redux/documents/document.selectors";
import {
  selectUploadBtn,
  selectMobileView,
} from "../../../redux/common/common.selectors";
import { resetReloadFiles } from "../../../redux/documents/document.slice";
import { showHideUploadBtn } from "../../../redux/common/common.slice";
import { Button } from "@mui/material";

// ----- Export for FileUpload component. -----
export default function FileUpload({ fileFormat, frmdata, upload }: any) {
  const [isShowProgress, setIsShowProgress] = useState(false);
  const [isOpenFileDialog, setIsOpenFileDialog] = useState(false);
  const [selectedFile, setSelectedFile] = useState("");

  const dispatch = useAppDispatch();
  const openPopup = useAppSelector<any>(reloadRecentFiles);
  const isFileUploadFailed = useAppSelector<any>(fileUploadFail);
  const showUploadBtn = useAppSelector<any>(selectUploadBtn);
  const isMobileView = useAppSelector(selectMobileView);

  const handleClose = () => {
    setIsShowProgress(false);
    setIsOpenFileDialog(false);
    dispatch(resetReloadFiles(false));
    if (isMobileView) dispatch(showHideUploadBtn(true));
  };

  // ----- Callback function on File upload. -----
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      setSelectedFile(file.name);
      setIsShowProgress(true);
      setIsOpenFileDialog(true);

      const reader = new FileReader();
      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        // const binaryStr = reader.result;
      };
      reader.readAsArrayBuffer(file);
      upload(file);
    });
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noClick: isOpenFileDialog,
    maxFiles: 1,
    accept: fileFormat,
  });

  useEffect(() => {
    if (isFileUploadFailed) setIsOpenFileDialog(false);
  }, [isFileUploadFailed]);

  useEffect(() => {
    if (isShowProgress) {
      dispatch(showHideLoader(false));
    }
  }, [dispatch, isShowProgress]);

  const uploadBtnStyle = {
    display: "flex",
    justifyContent: "center",
    margin: "30px",
  };
  useEffect(() => {
    dispatch(showHideUploadBtn(isMobileView));
  }, [isMobileView, dispatch]);

  const handleMobileView = () => {
    dispatch(showHideUploadBtn(false));
  };

  const handleCancel = () => {
    dispatch(showHideUploadBtn(true));
  };

  return (
    <>
      {showUploadBtn ? (
        <Box style={uploadBtnStyle}>
          <Button variant="contained" onClick={handleMobileView}>
            Upload
          </Button>
        </Box>
      ) : (
        <FileUploadStyles>
          <div className="file-upload-box" {...getRootProps()}>
            <input {...getInputProps()} />
            {!isShowProgress
              ? !isFileUploadFailed && (
                  <>
                    <UploadFileIcon />
                    <span>Upload Files</span>
                    {!isMobileView && (
                      <>
                        <i>or</i>
                        <p>Drag and drop files here</p>
                      </>
                    )}
                  </>
                )
              : !isFileUploadFailed && (
                  <>
                    <Box sx={{ display: "flex" }}>
                      <CircularProgress />
                    </Box>

                    <p>Uploading files, please wait...</p>
                    <span>Cancel</span>
                    {openPopup && (
                      <OnSuccessUploadModal
                        open={true}
                        selectedFile={selectedFile}
                        handleClose={handleClose}
                      />
                    )}
                  </>
                )}
            {isFileUploadFailed && (
              <div className="file-upload-box">
                <WarningAmberIcon color="error" />
                <p color="error">Upload file failed!</p>
                <span>Try Again</span>
              </div>
            )}
          </div>
        </FileUploadStyles>
      )}
      {!showUploadBtn && isMobileView && (
        <Box style={uploadBtnStyle}>
          <Button variant="contained" onClick={handleCancel}>
            Cancel
          </Button>
        </Box>
      )}
    </>
  );
}
