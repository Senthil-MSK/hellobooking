import React from "react";

import { ReactComponent as Back } from "../../../assets/images/icons/Back.svg";
import { ReactComponent as Reply } from "../../../assets/images/icons/Reply.svg";
import { ReactComponent as ArchiveIcon } from "../../../assets/images/icons/ArchiveIcon.svg";
import { useAppDispatch } from "../../../redux/store/store";
import {
  showMessageThread,
  showHideMessage,
} from "../../../redux/common/common.slice";

function Header() {
  const dispatch = useAppDispatch();

  return (
    <div className="messageThreadHeader">
      <div
        className="threadLeftCol"
        onClick={() => dispatch(showMessageThread(false))}>
        <Back />
        {/* <Link to="/messageList"><Back /></Link> */}
        <h3>Project Schedule</h3>
      </div>
      <div className="threadrightCol">
        <button
          className="noStyleBtn"
          onClick={() =>
            dispatch(
              showHideMessage({
                show: true,
                title: "Reply",
                topic: "Project Schedule",
              })
            )
          }>
          <Reply />
        </button>
        <button className="noStyleBtn">
          <ArchiveIcon />
        </button>
      </div>
    </div>
  );
}

export default Header;
