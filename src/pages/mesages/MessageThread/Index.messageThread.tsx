import * as React from "react";
import "../../../assets/scss/messages/messages.scss";
import "../../../assets/scss/messages/messageThread.scss";
import ImagePath from "../../../assets/images/temp/ItemPreview.png";
import { ReactComponent as AttachedIcon } from "../../../assets/images/icons/Attached-Icon.svg";
import { ReactComponent as DeleteIcon } from "../../../assets/images/icons/Delete.svg";
import Header from "./Header";

const MessageThread = (props: any) => {
  return (
    <div className="messageThreadWrapper">
      <Header />
      <div className="msgContent">
        <div className="msgTopInfo">
          <div className="msgTopInfoLeftCol">
            <div className="profileImg">JD</div>
            John Doe
          </div>
          <div>Today, 12.35 am</div>
        </div>
        <div className="msgBody">
          Thanks for the update
          <br />
          John Doe
          {/*  */}
          <div className="uploadedList">
            <span className="">
              <AttachedIcon />
            </span>
            <span className="fileName">
              Updated Catalog.pdf
              <button className="noStyleBtn">
                <DeleteIcon />
              </button>
            </span>
          </div>
          {/*  */}
        </div>
      </div>
      <div className="msgContent">
        <div className="msgTopInfo">
          <div className="msgTopInfoLeftCol">
            <div className="profileImg">
              <img src={ImagePath} alt="" />
            </div>
            Sebastian Aguas
          </div>
          <div>Today, 12.35 am</div>
        </div>
        <div className="msgBody">
          Hi John, <br />
          <br />
          Some text <strong>bold test</strong> Some text
          <br />
          <br />
          Best Regards, <br />
          Sebastian Aguas
          {/*  */}
          <div className="uploadedList">
            <span className="">
              <AttachedIcon />
            </span>
            <span className="fileName">
              Tiles Catalog.pdf
              <button className="noStyleBtn">
                <DeleteIcon />
              </button>
            </span>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default MessageThread;
