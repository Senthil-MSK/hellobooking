/* eslint-disable no-console */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Icons
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
// Third party imports
import SectionHeader from "../../../../components/SectionHeader/Index.sectionheader";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import moment from "moment";
import "react-calendar-timeline/lib/Timeline.css";

// Local imports
import Button from "../../../../components/Button/Index.button";
import palette from "../../../../theme/palette";
import TimeLineStyles from "./timeline";
import { useAppDispatch, useAppSelector } from "../../../../redux/store/store";
import { projectsActions } from "../../../../redux/projects/projects.actions";
import { scheduleLists } from "../../../../redux/projects/projects.selectors";

import Timeline, {
  TimelineMarkers,
  TimelineHeaders,
  CustomMarker,
  DateHeader,
} from "react-calendar-timeline";
import { Spring, animated } from "react-spring";
import CustomButton from "../../../../components/Button/Index.button";

const AnimatedTimeline = animated(
  ({
    animatedVisibleTimeStart,
    animatedVisibleTimeEnd,
    visibleTimeStart,
    visibleTimeEnd,
    timelineWidth,
    ...props
  }) => (
    <Timeline
      visibleTimeStart={animatedVisibleTimeStart}
      visibleTimeEnd={animatedVisibleTimeEnd}
      {...props}
      className="mainTimelineWrap">
      <TimelineHeaders className="sticky">
        <DateHeader
          unit="day"
          labelFormat="DD/ddd"
          style={{ height: 50 }}
          intervalRenderer={({ getIntervalProps, intervalContext }: any) => {
            return (
              <div
                {...getIntervalProps()}
                className={`${
                  intervalContext.interval.startTime.format("MM/DD/YYYY") ===
                  moment().format("MM/DD/YYYY")
                    ? "today"
                    : ""
                }`}>
                <strong>{intervalContext.intervalText.split("/")[0]}</strong>
                {intervalContext.intervalText.split("/")[1]}
              </div>
            );
          }}
        />
      </TimelineHeaders>
      <TimelineMarkers>
        <CustomMarker date={moment().add(-1, "day").valueOf()}>
          {({ styles }: any) => {
            const customWidth1: any =
              document.getElementsByClassName("rct-vl")[0];
            if (customWidth1) {
              let customWidth = customWidth1.style.width;
              const leftOffset =
                parseFloat(customWidth) *
                moment()
                  .add(-1, "day")
                  .diff(moment(animatedVisibleTimeStart), "days");
              const newStyles = {
                ...styles,
                backgroundColor: palette.secondary.main,
                width: customWidth,
                left: `${leftOffset}px`,
                zIndex: 99,
              };
              return (
                <div className="mileStone" style={newStyles}>
                  2nd MileStone
                </div>
              );
            }
          }}
        </CustomMarker>
      </TimelineMarkers>
    </Timeline>
  )
);

var keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
};

export default function CustomTimeline() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const scheduleData = useAppSelector<any>(scheduleLists);
  const contentWrapper = document.getElementById(
    "mid-content-wrapper"
  )?.offsetHeight;
  // use this incase if you add pagination on server side
  // const scheduleError = useAppSelector(scheduleListError);
  // const scheduleLoading = useAppSelector(loading);
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  // setIsmobile on change
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 767;

  // set default timetime start and end
  const [time, setTime] = useState({
    visibleTimeStart: moment().add(-3, "day").startOf("day").valueOf(),
    visibleTimeEnd: moment().add(3, "day").endOf("day").valueOf(),
  });

  const [popupDetials, setPopupDetails] = useState<any>({});
  const [anchorID, setAnchorID] = useState(null);
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  // set default start and end time
  useEffect(() => {
    var authToken: any = jwt_decode(localStorage.getItem("token") || "");
    if (authToken) {
      dispatch(projectsActions.projectsTimeAction(authToken.projectId));
    } else if (!authToken) {
      navigate("/login");
    }
  }, []);

  // set start and end time with API values
  useEffect(() => {
    if (scheduleData?.items) {
      setTime({
        visibleTimeStart: moment(scheduleData.range.startDate)
          .startOf("day")
          .valueOf(),
        visibleTimeEnd: moment(scheduleData.range.startDate)
          .add(6, "day")
          .endOf("day")
          .valueOf(),
      });
    }
  }, [scheduleData]);

  // Set anchor id once user clicks on timeline
  useEffect(() => {
    if (anchorID) {
      setPopupDetails(
        scheduleData?.items?.find((ele: any) => ele.id === anchorID)
      );
    } else {
      setPopupDetails({});
      setAnchorID(null);
    }
  }, [anchorID]);

  // Render timeline Custom Item
  const itemRenderer = ({
    item,
    itemContext,
    getItemProps,
    getResizeProps,
  }: any) => {
    return (
      <div className="timelineScrollWrapper" {...getItemProps(item.itemProps)}>
        <div
          className={`rct-item-content ${item.className}${
            moment(item.end).endOf("day").valueOf() > time.visibleTimeEnd
              ? " no-radius-right"
              : ""
          }${
            moment(item.end).endOf("day").valueOf() > time.visibleTimeStart &&
            moment(item.start).startOf("day").valueOf() < time.visibleTimeStart
              ? " no-radius-left"
              : ""
          }${item.isCompleted ? " isCompleted" : ""}`}
          style={{ maxHeight: `${itemContext.dimensions.height}` }}>
          {item.isCompleted ? <TaskAltIcon className="completedIcon" /> : ""}
          <strong>{!item.className ? itemContext.title : ""}</strong>

          {item.scheduleChanged && item.className ? (
            <span>{!item.isCompleted ? "Schedule Changed" : ""}</span>
          ) : item.scheduleChanged ? (
            <InfoOutlinedIcon></InfoOutlinedIcon>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  };
  // Item onClick
  const handleItemClick = (itemId: any, _: any) => {
    if (_?.target) {
      setAnchorEl(_.target);
      setOpen(true);
    }
    if (isMobile) {
      if (anchorID) {
        setAnchorID(null);
      } else {
        setAnchorID(itemId);
      }
    } else {
      setAnchorID(itemId);
    }
  };
  // Navigate to Previous week
  const onPrevClick = () => {
    const zoom = time.visibleTimeEnd - time.visibleTimeStart;
    setTime({
      visibleTimeStart: time.visibleTimeStart - zoom,
      visibleTimeEnd: time.visibleTimeEnd - zoom,
    });
  };
  // Navigate to Next week
  const onNextClick = () => {
    const zoom = time.visibleTimeEnd - time.visibleTimeStart;
    setTime({
      visibleTimeStart: time.visibleTimeStart + zoom,
      visibleTimeEnd: time.visibleTimeEnd + zoom,
    });
  };
  // Navigate to Previous Month
  const onPrevMonthClick = () => {
    let nextMonth = moment(time.visibleTimeEnd).add(-1, "month").format("MM");
    let nextYear = moment(time.visibleTimeEnd).add(-1, "month").format("YYYY");
    setTime({
      visibleTimeStart: moment(`${nextMonth}/1/${nextYear}`)
        .startOf("day")
        .valueOf(),
      visibleTimeEnd: moment(`${nextMonth}/1/${nextYear}`)
        .add(6, "day")
        .endOf("day")
        .valueOf(),
    });
    scrollTimeline(true);
  };
  // Navigate to Next Month
  const onNextMonthClick = () => {
    let nextMonth = moment(time.visibleTimeEnd).add(1, "month").format("MM");
    let nextYear = moment(time.visibleTimeEnd).add(1, "month").format("YYYY");
    setTime({
      visibleTimeStart: moment(`${nextMonth}/1/${nextYear}`)
        .startOf("day")
        .valueOf(),
      visibleTimeEnd: moment(`${nextMonth}/1/${nextYear}`)
        .add(6, "day")
        .endOf("day")
        .valueOf(),
    });
    scrollTimeline(true);
  };
  // Close Tooltip
  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };
  // Scroll timeline vertically on button click
  const scrollTimeline = (reset: boolean) => {
    const timelineWrapper = document.getElementsByClassName(
      "timelineScrollWrapper"
    )[0];
    if (timelineWrapper && !reset) {
      const scrollOffet = timelineWrapper?.scrollTop;
      const scrollDefinedOffset: number = palette.scrollHeight.timeline;
      timelineWrapper?.scrollTo(0, scrollOffet + scrollDefinedOffset);
    } else {
      timelineWrapper?.scrollTo(0, 0);
    }
  };

  return (
    <TimeLineStyles>
      <SectionHeader>
        <Typography variant="h4">Schedule</Typography>
        {!isMobile && (
          <Box className="monthNavigationWrapper">
            <button onClick={onPrevMonthClick}>
              <NavigateBeforeIcon />
            </button>
            <span className="date-title">
              {moment(time.visibleTimeEnd).format("MMMM")}
            </span>
            <button onClick={onNextMonthClick}>
              <NavigateNextIcon />
            </button>
          </Box>
        )}
        <Link to="#" className="boxTitleLink">
          Open Gallery
        </Link>
      </SectionHeader>

      {!isMobile ? (
        <>
          <Box
            className="timelineScrollWrapper"
            style={{
              height: `calc(100vh - ${
                (contentWrapper ? contentWrapper : 0) + 200
              }px)`,
            }}>
            <Spring
              to={{
                animatedVisibleTimeStart: time.visibleTimeStart,
                animatedVisibleTimeEnd: time.visibleTimeEnd,
              }}>
              {(value: any) => (
                <AnimatedTimeline
                  groups={scheduleData?.headers || []}
                  items={scheduleData?.items || []}
                  keys={keys}
                  sidebarWidth={0}
                  groupHeights={190}
                  canSelect
                  itemTouchSendsClick={true}
                  canMove={false}
                  itemRenderer={itemRenderer}
                  itemHeightRatio={0.8}
                  lineHeight={66}
                  onItemClick={handleItemClick}
                  onItemSelect={handleItemClick}
                  buffer={1}
                  {...value}></AnimatedTimeline>
              )}
            </Spring>
            {popupDetials.id && anchorEl && (
              <Popover
                id="0"
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                onClose={handleClose}>
                <Typography sx={{ p: 2 }} variant="h3">
                  {popupDetials.title}
                </Typography>
                <Box className="scheduleDetails">
                  <Box className="scheduleRow">
                    <Box className="scheduleCol strong"></Box>
                    <Box className="scheduleCol strong">Planned</Box>
                    <Box className="scheduleCol strong">Actual</Box>
                  </Box>
                  <Box className="scheduleRow">
                    <Box className="scheduleCol strong">Start</Box>
                    <Box className="scheduleCol">
                      {moment(
                        popupDetials.itemProps.planned.startDate,
                        "MM/DD/YYYY"
                      ).format("MMM DD")}
                    </Box>
                    <Box className="scheduleCol">
                      {moment(
                        popupDetials.itemProps.actual.startDate,
                        "MM/DD/YYYY"
                      ).format("MMM DD")}
                    </Box>
                  </Box>
                  <Box className="scheduleRow">
                    <Box className="scheduleCol strong">End</Box>
                    <Box className="scheduleCol">
                      {moment(
                        popupDetials.itemProps.planned.endDate,
                        "MM/DD/YYYY"
                      ).format("MMM DD")}
                    </Box>
                    <Box className="scheduleCol red">
                      {moment(
                        popupDetials.itemProps.actual.endDate,
                        "MM/DD/YYYY"
                      ).format("MMM DD")}
                    </Box>
                  </Box>
                  <Box className="scheduleRow">
                    <Box className="scheduleCol strong">Work Days</Box>
                    <Box className="scheduleCol">
                      {popupDetials.itemProps.planned.workDays}
                    </Box>
                    <Box className="scheduleCol red">
                      {popupDetials.itemProps.actual.workDays}
                    </Box>
                  </Box>
                  <Box className="scheduleRow">
                    <Box className="scheduleCol strong">Progress</Box>
                    <Box className="scheduleCol">
                      {popupDetials.itemProps.planned.progress}%
                      <Box className="customProgressBarWrapper">
                        <Box
                          className="customPlannedProgress"
                          sx={{
                            width: `${popupDetials.itemProps.planned.progress}%`,
                          }}></Box>
                      </Box>
                    </Box>
                    <Box className="scheduleCol red">
                      {popupDetials.itemProps.actual.progress}%
                      <Box className="customProgressBarWrapper">
                        <Box
                          className="customPlannedProgress red"
                          sx={{
                            width: `${popupDetials.itemProps.actual.progress}%`,
                          }}></Box>
                        <Box
                          className="customActualProgress"
                          sx={{
                            width: `${popupDetials.itemProps.planned.progress}%`,
                          }}></Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Popover>
            )}
          </Box>
          <Button
            className="nextSectionBtn"
            onClick={() => scrollTimeline(false)}>
            <KeyboardDoubleArrowDownIcon />
          </Button>

          <button className="prevBtn" onClick={onPrevClick}>
            <NavigateBeforeIcon />
          </button>
          <button className="nextBtn" onClick={onNextClick}>
            <NavigateNextIcon />
          </button>
        </>
      ) : (
        <>
          {/* Mobile Timeline */}
          <Box className="monthNavigationWrapper mobile">
            <CustomButton variant="text" onClick={onPrevClick}>
              <NavigateBeforeIcon />
            </CustomButton>
            {moment(time.visibleTimeStart).format("DD")}-
            {moment(time.visibleTimeEnd).format("DD MMM, YYYY")}
            <CustomButton variant="text" onClick={onNextClick}>
              <NavigateNextIcon />
            </CustomButton>
          </Box>
          {scheduleData?.items?.map((scheduleTimeline: any) => {
            return (
              <>
                <CustomButton
                  className="mobileTimelineView"
                  variant="text"
                  onClick={() => handleItemClick(scheduleTimeline.id, null)}>
                  <Box className="leftCol">
                    {moment(
                      scheduleTimeline.itemProps.planned.startDate
                    ).format("MMM")}
                    <strong>
                      {moment(
                        scheduleTimeline.itemProps.actual.startDate
                      ).format("DD")}
                      -
                      <span
                        className={`${
                          scheduleTimeline.scheduleChanged ? "red" : ""
                        }`}>
                        {moment(
                          scheduleTimeline.itemProps.actual.endDate
                        ).format("DD")}
                      </span>
                    </strong>
                  </Box>
                  <Box className="rightCol">
                    <Typography variant="h6">
                      {scheduleTimeline.scheduleChanged && (
                        <label className="status warning">
                          Schedule Changed
                        </label>
                      )}
                      {scheduleTimeline.title}
                    </Typography>
                    <InfoOutlinedIcon></InfoOutlinedIcon>
                  </Box>
                </CustomButton>
                {popupDetials.id === scheduleTimeline.id && (
                  <Box className="mobileTimelineInfo">
                    <Box className="scheduleDetails">
                      <Box className="scheduleRow">
                        <Box className="scheduleCol strong"></Box>
                        <Box className="scheduleCol strong">Planned</Box>
                        <Box className="scheduleCol strong">Actual</Box>
                      </Box>
                      <Box className="scheduleRow">
                        <Box className="scheduleCol strong">Start</Box>
                        <Box className="scheduleCol">
                          {moment(
                            popupDetials.itemProps.planned.startDate
                          ).format("MMM DD")}
                        </Box>
                        <Box className="scheduleCol">
                          {moment(
                            popupDetials.itemProps.actual.startDate
                          ).format("MMM DD")}
                        </Box>
                      </Box>
                      <Box className="scheduleRow">
                        <Box className="scheduleCol strong">End</Box>
                        <Box className="scheduleCol">
                          {moment(
                            popupDetials.itemProps.planned.startDate
                          ).format("MMM DD")}
                        </Box>
                        <Box className="scheduleCol red">
                          {moment(
                            popupDetials.itemProps.actual.startDate
                          ).format("MMM DD")}
                        </Box>
                      </Box>
                      <Box className="scheduleRow">
                        <Box className="scheduleCol strong">Work Days</Box>
                        <Box className="scheduleCol">
                          {popupDetials.itemProps.planned.workDays}
                        </Box>
                        <Box className="scheduleCol red">
                          {popupDetials.itemProps.actual.workDays}
                        </Box>
                      </Box>
                      <Box className="scheduleRow">
                        <Box className="scheduleCol strong">Progress</Box>
                        <Box className="scheduleCol">
                          {popupDetials.itemProps.planned.progress}%
                          <Box className="customProgressBarWrapper">
                            <Box
                              className="customPlannedProgress"
                              sx={{
                                width: `${popupDetials.itemProps.planned.progress}%`,
                              }}></Box>
                          </Box>
                        </Box>
                        <Box className="scheduleCol red">
                          {popupDetials.itemProps.actual.progress}%
                          <Box className="customProgressBarWrapper">
                            <Box
                              className="customPlannedProgress red"
                              sx={{
                                width: `${popupDetials.itemProps.actual.progress}%`,
                              }}></Box>
                            <Box
                              className="customActualProgress"
                              sx={{
                                width: `${popupDetials.itemProps.planned.progress}%`,
                              }}></Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                )}
              </>
            );
          })}
        </>
      )}
    </TimeLineStyles>
  );
}
