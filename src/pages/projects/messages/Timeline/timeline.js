import styled from "styled-components";
import palette from "../../../../theme/palette";
import { alpha } from "@mui/material";

const TimeLineStyles = styled.div`
  margin-top: 32px;
  position: relative;
  .sticky {
    position: sticky;
    top: 0;
    z-index: 1000;
  }
  .mainTimelineWrap {
    min-height: ${palette.scrollHeight.timeline}px;
  }
  
  .react-calendar-timeline .rct-horizontal-lines {
    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    user-select: none;
  }
  
  .timelineScrollWrapper {
    min-height: ${palette.scrollHeight.timeline}px;
    overflow-y: auto;
    position: relative;
    padding-bottom: 80px;
  }
  
  .monthNavigationWrapper {
    display: flex;
    &.mobile {
      justify-content: center;
      align-items: center;
      font-weight: 600;
      background: ${palette.secondary.light}
    }
    .date-title {
      font-size:14px;
      line-height:21px;
      font-weight:600;
      min-width:140px;
      text-align:center;
    }
  }
  .prevBtn, .nextBtn {
    position: absolute;
    height: 100%;
    display: flex;
    justify-content: space-between;
    top: 0;
    display: flex;
    align-items: center;
    z-index: 1001;
    background: none;
    border: none;
    cursor: pointer;
    &:hover {
      opacity: 0.5;
    }
  }
  .nextBtn {
    right: 0;
  }
  @media(max-width: 767px){
    .mobileTimelineView {
      padding: 0;
      width: 100%;
      align-items: stretch;
      .leftCol {
        padding: 19px;
        display: flex;
        flex-direction: column;
        border-bottom: 1px solid ${palette.secondary.main};
        font-size:14px;
         line-height:23px;
         strong {
         font-weight:600;
         }
        .red {
          color: ${palette.error.lighter};
        }
      }
      .rightCol {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex: 1;
        border-left: 1px solid ${palette.secondary.main};
        border-bottom: 1px solid ${palette.secondary.main};
        padding: 12px;
        h6 {
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         font-size:14px;
         line-height:23px;
         font-weight:600;
        }
        .status {
          font-size: 10px;
          line-height: 23px;
          padding: 2px 4px;
          &.warning {
            background-color: ${palette.secondary.main};
            border: none;
          }
          
        }
      }
    }
    .mobileTimelineInfo {
      background: palette.common.white;
      border: 1px solid ${palette.primary.main};
      padding: 19px 24px;
    }
  }
`

export default TimeLineStyles