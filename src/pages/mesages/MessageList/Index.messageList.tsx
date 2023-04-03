import * as React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "../../../assets/scss/messages/messages.scss";
import "../../../assets/scss/messages/messageList.scss";
import { ReactComponent as Add } from "../../../assets/images/icons/Add.svg";
import { ReactComponent as SearchIcon } from "../../../assets/images/icons/SearchIcon.svg";
import { ReactComponent as ReadIcon } from "../../../assets/images/icons/ReadIcon.svg";
import { ReactComponent as UnReadIcon } from "../../../assets/images/icons/Unread-Icon.svg";
import { ReactComponent as ArchiveIcon } from "../../../assets/images/icons/ArchiveIcon.svg";
import { ReactComponent as AttachedIcon } from "../../../assets/images/icons/Attached-Icon.svg";
import {
  showHideMessage,
  showMessageThread,
} from "../../../redux/common/common.slice";
import { selectMessageThread } from "../../../redux/common/common.selectors";

import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import MessageThread from "../MessageThread/Index.messageThread";

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const MessageList = () => {
  const [value, setValue] = React.useState(0);
  const [mainChk, setMainChk] = React.useState(false);
  const [Chk1, setChk1] = React.useState(false);
  const [Chk2, setChk2] = React.useState(false);
  const [Chk3, setChk3] = React.useState(false);
  const [readAll, setReadAll] = React.useState(false);
  const [read1, setRead1] = React.useState(false);
  const [read2, setRead2] = React.useState(false);
  const [read3, setRead3] = React.useState(false);

  const dispatch = useAppDispatch();
  const showMsgThread = useAppSelector(selectMessageThread);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const handleMainChk = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMainChk(event.target.checked);
    setChk1(event.target.checked);
    setChk2(event.target.checked);
    setChk3(event.target.checked);
  };
  const handleChk1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChk1(event.target.checked);
  };
  const handleChk2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChk2(event.target.checked);
  };
  const handleChk3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChk3(event.target.checked);
  };

  const handleReadAll = () => {
    setReadAll(!readAll);
    if (Chk1) setRead1(!readAll);
    if (Chk2) setRead2(!readAll);
    if (Chk3) setRead3(!readAll);
  };

  const handleMsgThreadClick = () => {
    dispatch(showMessageThread(true));
  };

  return (
    <>
      {showMsgThread ? (
        <MessageThread />
      ) : (
        <div className="messageListWrapper">
          <Box sx={{ borderBottom: 0.5, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example">
              <Tab label="Inbox" {...a11yProps(0)} />
              <Tab label="Sent" {...a11yProps(1)} />
              <Tab label="Archive" disabled {...a11yProps(2)} />
            </Tabs>
          </Box>
          <div className="rightSideBtn">
            <button
              className="underLineBtn"
              onClick={() =>
                dispatch(
                  showHideMessage({
                    show: true,
                    title: "New Message",
                    topic: "",
                  })
                )
              }>
              <Add />
              New Message
            </button>
          </div>
          <div className="tabContainer">
            <TabPanel value={value} index={0}>
              <Grid container className="messageTableHeader">
                <Grid xs={10} lg={8} item>
                  <div className="tableHeadLeftCol">
                    <Checkbox
                      color="default"
                      checked={mainChk}
                      onChange={handleMainChk}
                    />
                    <div className="searchField">
                      <SearchIcon className="searchIcon" />
                      <input className="searchInput" type="text" />
                    </div>
                  </div>
                </Grid>
                <Grid xs={2} lg={4} item className="centerAll">
                  <div className="tableActionCol">
                    <button className="noStyleBtn" onClick={handleReadAll}>
                      {readAll ? <ReadIcon /> : <UnReadIcon />}
                    </button>
                    <button className="noStyleBtn">
                      <ArchiveIcon />
                    </button>
                  </div>
                </Grid>
              </Grid>

              <InfiniteScroll
                dataLength={3}
                next={() => {}}
                hasMore={false}
                scrollableTarget="scrollableDiv"
                loader={
                  <p style={{ textAlign: "center" }}>
                    <b>Loading...</b>
                  </p>
                }
                endMessage={
                  true && (
                    <p style={{ textAlign: "center" }}>
                      <b>---End of Messages---</b>
                    </p>
                  )
                }>
                <Box className="tableBody">
                  <Grid container>
                    <Grid xs={10} lg={9} item className="tableBodyLeftCol">
                      <Checkbox
                        color="default"
                        checked={Chk1}
                        onChange={handleChk1}
                      />
                      <Grid
                        container
                        className="messageInContent"
                        onClick={handleMsgThreadClick}>
                        <Grid
                          xs={12}
                          lg={2}
                          item
                          className={
                            read1 ? "senderName boldText" : "senderName "
                          }>
                          Sebastian Aguas
                        </Grid>
                        <Grid
                          xs={12}
                          lg={2}
                          item
                          className={
                            read1 ? "messageTopic boldText" : "messageTopic "
                          }>
                          Project Schedule
                        </Grid>
                        <Grid xs={12} lg={8} item className="messageContent">
                          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                          ipsum…
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid xs={2} lg={3} item>
                      <div className="tableActionCol">
                        <button className="noStyleBtn attachedIcon">
                          <AttachedIcon />
                        </button>
                        <div className="">
                          <div className="messageTime">10.15am</div>
                          <div className="tableActionBtnGroup">
                            <button
                              className="noStyleBtn"
                              onClick={() => setRead1(!read1)}>
                              {read1 ? <ReadIcon /> : <UnReadIcon />}
                            </button>
                            <button className="noStyleBtn">
                              <ArchiveIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid xs={10} lg={9} item className="tableBodyLeftCol">
                      <Checkbox
                        color="default"
                        checked={Chk2}
                        onChange={handleChk2}
                      />
                      <Grid
                        container
                        className="messageInContent"
                        onClick={handleMsgThreadClick}>
                        <Grid
                          xs={12}
                          lg={2}
                          item
                          className={
                            read2 ? "senderName boldText" : "senderName "
                          }>
                          Sebastian Aguas
                        </Grid>
                        <Grid
                          xs={12}
                          lg={2}
                          item
                          className={
                            read2 ? "messageTopic boldText" : "messageTopic "
                          }>
                          Project Schedule
                        </Grid>
                        <Grid xs={12} lg={8} item className="messageContent">
                          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                          ipsum…
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid xs={2} lg={3} item>
                      <div className="tableActionCol">
                        <button className="noStyleBtn attachedIcon">
                          <AttachedIcon />
                        </button>
                        <div className="">
                          <div className="messageTime">10.15am</div>
                          <div className="tableActionBtnGroup">
                            <button
                              className="noStyleBtn"
                              onClick={() => setRead2(!read2)}>
                              {read2 ? <ReadIcon /> : <UnReadIcon />}
                            </button>
                            <button className="noStyleBtn">
                              <ArchiveIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid xs={10} lg={9} item className="tableBodyLeftCol">
                      <Checkbox
                        color="default"
                        checked={Chk3}
                        onChange={handleChk3}
                      />
                      <Grid
                        container
                        className="messageInContent"
                        onClick={handleMsgThreadClick}>
                        <Grid
                          xs={12}
                          lg={2}
                          item
                          className={
                            read3 ? "senderName boldText" : "senderName "
                          }>
                          Sebastian Aguas
                        </Grid>
                        <Grid
                          xs={12}
                          lg={2}
                          item
                          className={
                            read3 ? "messageTopic boldText" : "messageTopic "
                          }>
                          Project Schedule
                        </Grid>
                        <Grid xs={12} lg={8} item className="messageContent">
                          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                          ipsum…
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid xs={2} lg={3} item>
                      <div className="tableActionCol">
                        <button className="noStyleBtn attachedIcon">
                          <AttachedIcon />
                        </button>
                        <div className="">
                          <div className="messageTime">10.15am</div>
                          <div className="tableActionBtnGroup">
                            <button
                              className="noStyleBtn"
                              onClick={() => setRead3(!read3)}>
                              {read3 ? <ReadIcon /> : <UnReadIcon />}
                            </button>
                            <button className="noStyleBtn">
                              <ArchiveIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Box>
              </InfiniteScroll>
            </TabPanel>
            <TabPanel value={value} index={5}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </div>
        </div>
      )}
    </>
  );
};

export default MessageList;
