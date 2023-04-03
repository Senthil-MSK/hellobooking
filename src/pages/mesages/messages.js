import styled from "styled-components";
import palette from "../../theme/palette";
import { alpha } from "@mui/material/styles";

const Styles = {
  MessagesScreen: styled.div`
    @media (min-width: 993px) {
      padding-left: 30px;
    }
    .progressWrapper {
      display: flex;
      align-items: stretch;
      // overflow-x: auto;
      padding-bottom: 5px;
      background-color: ${palette.primary.main};
      border-bottom: 5px solid ${palette.primary.dark};
    }
    .progressDiv {
      display: flex;
      justify-content: flex-end;
      width: 32%;
      border-bottom: 5px solid ${palette.primary.dark};
      margin-bottom: -10px;
      padding: 9px 15px;
      position: relative;
      font-size: 12px;
      line-height: 18px;
      align-items: center;
      letter-spacing: 0;
      @media (max-width: 1440px) {
        padding: 10.5px 0 10.5px 15px;
        .MuiSvgIcon-root {
          width: 19px;
          height: auto;
        }
      }
      @media (max-width: 1200px) {
        max-width: 30%;
        flex: 0 0 30%;
      }
      @media (max-width: 991px) {
        padding: 11.5px 10px;
      }
      @media (max-width: 767px) {
        font-size: 14px;
        min-width: auto;
        max-width: 33%;
        svg {
          margin-right: 2px;
        }
        span {
          font-size: 12px;
          line-height: 15px;
          font-weight: 600;
        }
      }
      &:after {
        content: "";
        position: absolute;
        bottom: -2px;
        right: 0;
        height: 15px;
        width: 1px;
        background-color: ${palette.primary.dark};
      }
      svg {
        margin-right: 10px;
        color: ${palette.common.white};
      }
      &.active {
        border-bottom: 5px solid ${palette.success.light};
        @media (max-width: 767px) {
          border-color: ${palette.primary.lightgreen};
        }
        &:after {
          background-color: ${palette.success.light};
          @media (max-width: 767px) {
            background-color: ${palette.primary.lightgreen};
          }
        }
        svg {
          // color: ${palette.success.light};
          color: ${palette.primary.light};
        }
      }
    }
    .paymentMilestones {
      display: flex;
      background-color: ${palette.secondary.main};
      padding: 14px 10px 14px 30px;
      max-height: 98px;
      overflow: hidden;
      overflow-y: auto;
      @media (max-width: 1440px) {
        padding: 15px 10px 15px 30px;
      }
      @media (max-width: 1400px) {
        padding: 15px 10px 15px 15px;
      }
      @media (max-width: 991px) {
        padding: 15px 10px 15px 38px;
      }
      @media (max-width: 767px) {
        padding: 7px 10px 7px 16px;
      }
      .cost {
        border-left: 1px solid ${palette.primary.main};
        background-color: ${palette.secondary.main};
        padding: 10px 10px 10px 30px;
        display: flex;
        flex-direction: column;
        width: 33%;
        @media (max-width: 1600px) {
          padding: 10px 10px 10px 20px;
        }
        @media (max-width: 1340px) {
          padding: 10px 10px 10px 10px;
        }
        @media (max-width: 767px) {
          min-width: auto;
          max-width: 33%;
          padding: 10px 10px 10px 15px;
        }
        strong {
          font-weight: 400;
          font-size: 22px;
          letter-spacing: 0;
          color: ${palette.primary.lighter};
          @media (max-width: 1440px) {
            font-size: 20px;
          }
          @media (max-width: 991px) {
            font-size: 22px;
            line-height: 33px;
          }
          @media (max-width: 767px) {
            font-size: 14px;
            font-weight: 400;
            line-height: 17px;
            margin-bottom: 10px;
          }
        }
        span {
          color: ${palette.placeholder};
          font-size: 12px;
          font-weight: 600;
          line-height: 18px;
          letter-spacing: 0;
          @media (max-width: 767px) {
            line-height: 15px;
            font-weight: 600;
          }
        }
      }
    }

    // Photos Gallery
    .photosWrapper {
      background-color: ${palette.secondary.main};
      min-height: 145px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      h4 {
        font-size: 22px;
        line-height: 33px;
        color: ${alpha(palette.primary.dark, 0.5)};
      }
    }
  `,
};

export default Styles;
