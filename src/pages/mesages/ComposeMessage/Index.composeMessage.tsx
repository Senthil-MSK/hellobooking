import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import "../../../assets/scss/messages/composeMessage.scss";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { ReactComponent as CloseIcon } from "../../../assets/images/icons/Close.svg";
import { ReactComponent as FullScreen } from "../../../assets/images/icons/Full-screen.svg";
import { ReactComponent as ExitFullSize } from "../../../assets/images/icons/Exit-full-size.svg";
import { ReactComponent as Minimize } from "../../../assets/images/icons/Minimize.svg";
import { ReactComponent as UploadIcon } from "../../../assets/images/icons/Upload-Icon.svg";
import { ReactComponent as AttachedIcon } from "../../../assets/images/icons/Attached-Icon.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/images/icons/Delete.svg";
import MaximizeIcon from "@mui/icons-material/Maximize";
import { showHideMessage } from "../../../redux/common/common.slice";
import { selectMessage } from "../../../redux/common/common.selectors";
import FileUpload from "../../../components/form/FileUpload/Index.fileUpload";

const ComposeMessage = (props: any) => {
  //   let floatExpanded = props.expanded ? props.expanded : false;
  const [topic, setTopic] = React.useState("");
  const [minimizeView, setMinimizeView] = React.useState(false);
  const [messageModal, setMessageModal] = React.useState(false);
  const [expandedView, setExpandedView] = React.useState(false);
  const [files, setFile] = React.useState<any>([]);

  const dispatch = useAppDispatch();
  const showMessage = useAppSelector(selectMessage);

  const arr: string[] = [];

  const handleChange = (event: any) => {
    setTopic(event.target.value);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const f: any = e.target.files;
    console.log(f.length);
    for (var i = 0; i < f.length; i++) {
      arr.push(f[i].name);
    }
    setFile([...arr]);
  };

  const deleteSelectedFile = (value: any) => {
    setFile((files: any[]) =>
      files.filter((c: any) => {
        return c !== value;
      })
    );
    console.log(value);
  };

  const dragEvent = () => {
    alert("drag");
  };
  const dropEvent = () => {
    alert("drop");
  };

  React.useEffect(() => {
    setTopic(showMessage.topic);
  }, [showMessage.topic]);

  const minimizeViewHandler = (event: any) => {
    event.stopPropagation();
    setMinimizeView(true);
  };

  const maximizeViewHandler = (event: any) => {
    event.stopPropagation();
    setMinimizeView(false);
  };

  const openMessageBox = () => {
    setMinimizeView(false);
  };
  const sendMessageHandler = () => {
    setMessageModal(true);
  };
  const closeMessageModal = () => {
    setMessageModal(false);
    // dispatch(showHideMessage(false));
    setMinimizeView(true);
  };
  const messageExpandedView = () => {
    setExpandedView((fullScreen) => !fullScreen);
    // props.messageView(true)
  };

  const handleHideMessage = () => {
    dispatch(showHideMessage({ show: false, title: "", topic: "" }));
  };

  const acceptedFileFormats = {
    "application/pdf": [".pdf"],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
      ".docx",
    ],
    "application/msword": [".doc"],
    "application/vnd.ms-excel": [".xls"],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
      ".xlsx",
    ],
    "text/csv": [".csv"],
  };

  const fileUpload = (file: string) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("directoryName", "Uploads");

    // dispatch(
    //   documentActions.fileUploadAction({
    //     projectId,
    //     formData,
    //   })
    // );
  };

  return (
    <div className={`messageWrapper ${expandedView ? "" : "floatingBox"}`}>
      {/* <div className={`messageWrapper floatingBox`} > */}
      <div className="messageHeader" onClick={openMessageBox}>
        <h3>{showMessage.title}</h3>
        <div className="messageAction">
          {!minimizeView && (
            <button className="iconBtns" onClick={messageExpandedView}>
              {expandedView ? <ExitFullSize /> : <FullScreen />}
            </button>
          )}
          {!minimizeView && (
            <button className="iconBtns" onClick={minimizeViewHandler}>
              <Minimize />
            </button>
          )}
          <button className="iconBtns" onClick={handleHideMessage}>
            {minimizeView && (
              <button className="iconBtns" onClick={maximizeViewHandler}>
                <MaximizeIcon />
              </button>
            )}
            <CloseIcon />
          </button>
        </div>
      </div>
      {!minimizeView && (
        <div className="messageBody">
          <Select
            value={topic}
            onChange={handleChange}
            displayEmpty
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            className="selectTopic">
            <MenuItem value="">Select Topic</MenuItem>
            <MenuItem value={"Project Schedule"}>Project Schedule</MenuItem>
            <MenuItem value={"Project Issues"}>Project Issues</MenuItem>
          </Select>
          <div className="messageSubject">
            <input placeholder="Subject" />
          </div>
          <div className="textareaStyle">
            <textarea placeholder="Type message..."></textarea>
          </div>
          <div className="uploadedList">
            <div className="attachIcon">
              {files.length > 0 && <AttachedIcon />}
            </div>
            {files?.slice(0, 4).map((file: any, index: number) => {
              return (
                <div className="fileName" key={index}>
                  {file}
                  <button className="noStyleBtn">
                    <DeleteIcon onClick={() => deleteSelectedFile(file)} />
                  </button>
                </div>
              );
            })}
            {/* <div className="fileName">
              Tiles Catalog.pdf{" "}
              <button className="noStyleBtn">
                <DeleteIcon />
              </button>
            </div>
            <div className="fileName">
              Tiles Catalog.pdf{" "}
              <button className="noStyleBtn">
                <DeleteIcon />
              </button>
            </div> */}
          </div>
          <div className="uploadWrapper">
            <div className="uploadOuter">
              <label htmlFor="uploadFile" className="btn">
                <UploadIcon />
                Upload Image
              </label>
              <div className="orText">OR</div>
              <span className="dragBox">
                Darg and Drop image here
                {/* <FileUpload
                  fileFormat={acceptedFileFormats}
                  upload={fileUpload}
                /> */}
                <input
                  type="file"
                  onChange={handleOnChange}
                  onDragOver={dragEvent}
                  onDrop={dropEvent}
                  id="uploadFile"
                  multiple
                />
              </span>
            </div>
          </div>
          <div className="sendBtnWrapper">
            <button className="btn " onClick={sendMessageHandler}>
              {/* <button className="btn disabled" onClick={sendMessageHandler}> */}
              Send
            </button>
          </div>
        </div>
      )}

      {messageModal && (
        <div className="messageModal">
          <div
            className="messageModalOverlay"
            onClick={closeMessageModal}></div>
          <div className="messageModalContent">
            <TaskAltIcon />
            <h3>Sent successfully</h3>
            <p>One of our team members will replay shortly</p>
            <button className="modalBtn" onClick={closeMessageModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComposeMessage;
