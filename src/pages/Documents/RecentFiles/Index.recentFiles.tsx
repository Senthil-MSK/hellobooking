import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  KeyboardDoubleArrowDown as KeyboardDoubleArrowDownIcon,
  InfoOutlined as InfoOutlinedIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import { Typography, Box, Fade, Paper, Popper } from "@mui/material";
import InfiniteScroll from "react-infinite-scroll-component";

import Button from "../../../components/Button/Index.button";
import { ReactComponent as DownloadIcon } from "../../../assets/images/icons/downloadIcon.svg";
import { RecentFilesStyles } from "./RecentFilesStyles";
import CustomButton from "../../../components/Button/Index.button";
import { useAppSelector } from "../../../redux/store/store";
import { userObject } from "../../../redux/auth/auth.selectors";
import { documentService } from "../../../services/document.service";
import { reloadRecentFiles } from "../../../redux/documents/document.selectors";
import { selectMobileView } from "../../../redux/common/common.selectors";
import { FileDetailsType, RecentFilesType } from "./RecentFileTypes";
import RecentFileHeader from "./RecentFileHeader";
import ThumbView from "./ThumbView";
import RecentFilePopper from "./RecentFile_Popper";

// ----- Default Export for RecentFiles Component -----
export default function RecentFiles(props: any) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [showList, setShowList] = useState<boolean>(true);
  const [showFile, setShowFile] = useState<boolean>(true);
  const [showFileDetail, setShowFileDetail] = useState<FileDetailsType | null>(
    null
  );
  const [recentFiles, setRecentFiles] = useState<RecentFilesType>([]);
  const [selectedFile, setSelectedFile] = useState<any>({});
  const [popOverOpen, setPopOverOpen] = useState<boolean>(false);
  const [hasMoreRecord, setHasMoreRecord] = useState(true);
  const [pageNo, setPageNo] = useState(1);

  const { projectId } = useAppSelector<any>(userObject);
  const isMobileView = useAppSelector(selectMobileView);

  const reload = useAppSelector<any>(reloadRecentFiles);
  let { folderName } = useParams();

  let noOfRecords;
  console.log(props, "props");
  const fetchRecentFiles = (reset: boolean) => {
    if (folderName === undefined) {
      folderName = "Uploads";
      noOfRecords = 5;
    } else {
      noOfRecords = 10;
    }
    documentService
      .documentRecentFilesService(
        projectId,
        reset ? 1 : pageNo,
        noOfRecords,
        folderName
      )
      .then((response) => {
        if (
          response?.data?.pagination.page ===
          response?.data?.pagination.totalPages
        ) {
          setHasMoreRecord(false);
        } else {
          setHasMoreRecord(true);
        }

        if (response.data.pagination.page === 1) {
          setRecentFiles([]);
        }
        if (response.data.data.length > 0) {
          setRecentFiles((res) => res.concat(response.data?.data));
          setPageNo(reset ? 2 : pageNo + 1);
        }
      })
      .catch(() => {
        setHasMoreRecord(false);
      });
  };

  useEffect(() => {
    if (
      (!reload && recentFiles?.length === 0) ||
      (reload && recentFiles?.length > 0)
    ) {
      setPageNo(1);
      setRecentFiles([]);
      fetchRecentFiles(true);
    }
  }, [reload]);

  const scrollTimeline = () => {
    var element = document.getElementById("scrollableDiv");
    if (element) {
      element.scrollTo(0, element.scrollHeight);
    }
  };

  const handleFileDetails = (file: FileDetailsType | null) => {
    if (file !== null) {
      setShowFileDetail({
        fileName: file?.fileName,
        folderName: file?.folderName,
        updatedBy: file?.updatedBy,
        date: file?.date,
        url: file?.url,
        thumbUrl: file?.thumbUrl,
        signed: file?.signed,
        signRequired: file?.signRequired,
      });
    } else {
      setShowFileDetail(null);
    }
  };

  const handleShowList = (value: boolean) => {
    setShowList(value);
  };

  const handleCustomClick = () => {
    if (showFile) handleShowList(true);
    // setShowFileDetail(null);
    handleFileDetails(null);
  };

  const handleIconClick = () => {
    setShowFile(!showFile);
    handleShowList(!showList);
  };

  const handleMoreInfoClick = () => {
    setPopOverOpen(!popOverOpen);
    handleShowList(false);
    handleFileDetails(selectedFile);
  };

  const hidePopper = () => {
    setPopOverOpen(false);
  };

  const showPopOver = (
    event: React.MouseEvent<HTMLButtonElement>,
    fileInfo: any
  ) => {
    setSelectedFile(fileInfo);
    setAnchorEl(event.currentTarget);
    setPopOverOpen(!popOverOpen);
  };

  return (
    <RecentFilesStyles.PageStyles>
      {/* Render dropdown menu for mobile */}
      <RecentFilePopper
        popperOpen={popOverOpen}
        anchorEle={anchorEl}
        onMoreInfoClick={handleMoreInfoClick}
        selectedFileUrl={selectedFile.url}
        hidePopper={hidePopper}
      />

      <RecentFileHeader
        showFilDetail={showFileDetail?.fileName}
        customClick={handleCustomClick}
        iconClick={handleIconClick}
        showFile={showFile}
      />

      {showList && showFile ? (
        <RecentFilesStyles.TableStyles
          sx={{ width: "100%", marginRight: "6px", overflowX: "auto" }}>
          <Box className="priorityHead">
            <Box className="col col3">File Name</Box>
            <Box className="col col3">Folder</Box>
            <Box className="col col3">Uploaded by</Box>
            <Box className="col col3">Date</Box>
            <Box className="col col3 actions"></Box>
          </Box>

          <div
            id="scrollableDiv"
            style={{
              height:
                folderName === undefined ? "200px" : "calc(100vh - 300px)",
              overflow: "auto",
            }}>
            <InfiniteScroll
              dataLength={recentFiles?.length}
              next={() => fetchRecentFiles(false)}
              hasMore={hasMoreRecord}
              scrollableTarget="scrollableDiv"
              loader={
                <p style={{ textAlign: "center" }}>
                  <b>Loading...</b>
                </p>
              }
              endMessage={
                recentFiles?.length && !hasMoreRecord ? (
                  <p style={{ textAlign: "center" }}>
                    <b>---End of files---</b>
                  </p>
                ) : (
                  <></>
                )
              }>
              {recentFiles?.map((recentfile, index) => (
                <Box className="priorityBody" key={index}>
                  <Box
                    className="col col1"
                    onClick={() => {
                      handleShowList(false);
                      handleFileDetails(recentfile);
                    }}>
                    {recentfile?.fileName}
                  </Box>
                  <Box className="col col2">{recentfile?.folderName}</Box>
                  <Box className="col col3">{recentfile?.updatedBy}</Box>
                  <Box className="col col4">{recentfile?.date}</Box>

                  <Box className="col upload-icon-wrapper">
                    <label
                      className={
                        recentfile.signRequired
                          ? "status warning onhover"
                          : "status success onhover"
                      }>
                      {recentfile.signed ? "Signed" : "Signature Required"}
                    </label>
                    <CustomButton
                      variant="link"
                      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                        showPopOver(e, recentfile)
                      }
                      className="dropdownBtnMobile">
                      <MoreVertIcon />
                    </CustomButton>
                    <a href={recentfile.url} target="_blank" rel="noreferrer">
                      <DownloadIcon className="nohover" />
                    </a>
                  </Box>
                </Box>
              ))}
            </InfiniteScroll>
          </div>
        </RecentFilesStyles.TableStyles>
      ) : // Thumb View
      showFileDetail ? (
        <ThumbView file={showFileDetail} />
      ) : (
        <div
          id="scrollableDiv"
          style={{
            height: folderName === undefined ? "300px" : "calc(100vh - 300px)",
            overflow: "auto",
          }}>
          <InfiniteScroll
            dataLength={recentFiles?.length}
            next={() => fetchRecentFiles(false)}
            hasMore={hasMoreRecord}
            scrollableTarget="scrollableDiv"
            loader={
              <p style={{ textAlign: "center" }}>
                <b>Loading...</b>
              </p>
            }
            endMessage={
              recentFiles?.length &&
              !hasMoreRecord && (
                <p style={{ textAlign: "center" }}>
                  <b>---End of files---</b>
                </p>
              )
            }>
            <Box className={"thumbViewWrapper"}>
              {recentFiles?.map((file, index) => (
                <Box className="fileThumbWrapper" key={index}>
                  <img src={file.thumbUrl} alt="" />
                  <label
                    className={
                      file.signRequired ? "status warning " : "status success "
                    }>
                    {file.signed ? "Signed" : "Signature Required"}
                  </label>
                  <Box className="card-footer-info">
                    <Typography variant="h6">{file.fileName}</Typography>
                    {isMobileView && (
                      <MoreVertIcon
                        onClick={(e: any) => showPopOver(e, file)}
                      />
                    )}
                    <Box className="infoWrapper">
                      <span className="nonHover">{file.date}</span>
                      <Box className="hoverWrapper">
                        <a href={file.url} target="_blank" rel="noreferrer">
                          <DownloadIcon />
                        </a>
                        <CustomButton
                          variant="text"
                          onClick={() => {
                            handleFileDetails(file);
                          }}>
                          <InfoOutlinedIcon
                            style={{ marginBottom: "8px" }}></InfoOutlinedIcon>
                        </CustomButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </InfiniteScroll>
        </div>
      )}
      {!showFileDetail && (
        <Button className="nextSectionBtn" onClick={() => scrollTimeline()}>
          <KeyboardDoubleArrowDownIcon />
        </Button>
      )}
    </RecentFilesStyles.PageStyles>
  );
}
