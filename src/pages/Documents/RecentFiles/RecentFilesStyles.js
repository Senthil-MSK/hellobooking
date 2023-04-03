import styled from "styled-components";
import palette from "../../../theme/palette";
import { alpha } from "@mui/material";

export const RecentFilesStyles = {
  PageStyles: styled.div`
    padding-left: 16px;
    max-width: 1240px;
    margin: 0 auto;
    position: relative;
    padding-bottom: 40px;

    .nextSectionBtn {
      margin: 0 15px;
    }
    .boxTitle {
      align-items: stretch;
      padding: 12.5px 5px;
      button {
        line-height: 1;
        padding-top: 0;
        padding-bottom: 0;
      }
      h4 {
        display: flex;
        align-items: center;
        a {
          padding: 0;
          box-shadow: none;
          margin-right: 10px;
          svg {
            width: 18px;
          }
        }
      }
      button.backBtn {
        padding: 0;
        margin-right: 10px;
      }
    }
    .nextSectionBtn {
      background-color: #faf5ee !important;
      color: #231f20 !important;
      min-height: 34px;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 99%;
      z-index: 1002;
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: center;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      box-shadow: none;
      border: none;
      border-radius: 0;
      padding: 0;
      z-index: 1;
    }
    .thumbViewWrapper {
      display: flex;
      ${"" /* margin: 0 55px; */}
      flex-flow: row wrap;
      justify-content: space-between;
      row-gap: 40px;
      .fileListWrapper {
        display: flex;
        flex-flow: row wrap;
      }
    }
    // File Thumb Styles
    .fileThumbWrapper {
      width: 100%;
      max-width: calc(25% - 30px);
      margin-left: 1px;
      ${"" /* margin-right: 15px; */}
      ${"" /* margin-bottom: 30px; */}
      display: flex;
      flex-direction: row;
      justify-content: center;
      height: 200px;
      position: relative;
      border: 1px solid ${palette.primary.dark};
      background-color: ${palette.grey[100]};
      overflow: hidden;
      padding-top: 10px;
      padding-bottom: 10px;

      .infoWrapper {
        display: flex;
        justify-content: space-between;
        button {
          padding: 6px 15px;
          svg {
            height: auto;
            width: auto;
          }
        }
        .hoverWrapper {
          button svg {
            width: 18px;
            height: 18px;
          }
        }
      }
      &:hover {
        .hoverWrapper {
          display: flex;
        }
      }
      .fileThumbWrapper {
        max-width: calc(100% - 16px);
      }
      .status {
        position: absolute;
        top: 0;
        left: 0;
      }
      > .MuiBox-root {
        position: absolute;
        padding: 5px;
        bottom: 0;
        width: 100%;
        background-color: ${palette.secondary.main};
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: stretch;
      }
      h6,
      .nonHover {
        font-size: 14px;
        color: ${palette.primary.dark};
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 600;
        padding: 5px 10px;
      }
      .nonHover {
        font-weight: 400;
      }
      .hoverWrapper {
        display: none;
        diplay: flex;
        justify-content: flex-end;
        align-items: center;
        .actionBtns,
        a {
          width: 30px;
          height: 30px;
          margin-right: 5px;
          padding: 0;
          &:last-child {
            padding: 7px 5px;
          }
          svg {
            max-height: 100%;
            fill: ${palette.primary.dark};
          }
        }
      }
      &.w-100 {
        max-width: 100%;
        height: auto;
      }
    }
    .soloFileDetails {
      .w-100 {
        max-width: 100%;
        height: auto;
        .detailedInfoWrapper {
          position: relative;
        }
        .actionCol {
          display: flex;
          justify-content: center;
          aligni-items: center;
          position: relative;
        }
      }
      .detailedInfoWrapper {
        display: flex;
        width: 100%;
        .col {
          margin-right: 60px;
          padding: 24px 0;
          label {
            font-size: 10px;
            color: ${alpha(palette.primary.dark, 0.7)};
            line-height: 15px;
          }
          h6 {
            font-size: 14px;
            color: ${palette.primary.dark};
          }
        }
      }
      .actionCol {
        display: flex;
        justify-content: center;
        align-items: center;
        border-top: 1px solid ${palette.secondary.main};
        border-bottom: 1px solid ${palette.secondary.main};
      }
    }
    @media (max-width: 767px) {
      padding-left: 0;
      .fileThumbWrapper {
        align-items: flex-end;
        max-width: calc(50% - 30px);
        height: 160px;
        img {
          max-width: 60%;
          max-height: 250px;
        }
        .card-footer-info {
          flex-direction: row;
        }
        .infoWrapper {
          .nonHover,
          .hoverWrapper {
            display: none;
          }
        }
      }
      .nextSectionBtn {
        margin: 0;
      }
    }
  `,
  TableStyles: styled.div`
    // Table Styles
    .priorityHead {
      background: ${palette.primary.main};
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 6px;
      flex-wrap: wrap;
      color: "green";
      @media (max-width: 767px) {
        .col {
          &:last-child {
            display: none;
          }
          &:nth-child(3) {
            color: transparent;
          }
        }
      }
    }

    .priorityBody {
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: "background 20s ease-in-out";
      flex-wrap: wrap;
      a {
        display: none;
      }
      &:hover {
        .upload-icon-wrapper {
          a {
            display: inline-flex;
            svg {
              visibility: visible;
              opacity: 1;
            }
          }
          label {
            display: none;
          }
        }
      }

      @media (max-width: 767px) {
        .col1 {
          display: inline-flex;
        }
        .col2 {
          display: none;
        }
        .col3 {
          display: none;
        }
        .col4 {
          display: none;
        }
      }
      @media (max-width: 992px) {
        border-bottom: 1px solid ${palette.secondary.main};
      }
      .col1 {
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
      .col {
        .arrowBtn svg {
          display: none;
        }
        @media (max-width: 767px) {
          max-width: 33%;
          padding: 11px 10px;

          &:nth-child(3) {
            padding: 0;
            .arrowBtn {
              display: flex;
              justify-content: flex-end;
              align-items: center;
              padding-right: 0;
              width: 100%;
              font-size: 12px;
              svg {
                transform: scale(0.8);
                display: block;
              }
              &.active {
                svg {
                  transform: rotate(180deg) scale(0.8);
                }
              }
            }
          }
        }
        &.error {
          color: ${palette.error.main};
        }
        &::first-of-type {
          font-weight: bold;
        }
        &:last-child {
          text-align: right;
          justify-content: flex-end;
          @media (max-width: 767px) {
            width: 100%;
            max-width: 100%;
            display: flex;
            border: 1px solid ${palette.primary.main};
            justify-content: space-around;
            display: none;
            padding: 5px 10px;
            &.active {
              display: flex;
            }
          }
        }
      }
      .actionBtns {
        padding: 0 5px;
        svg {
          width: 30px;
          height: 30px;
          &.uploadIcon {
            transform: rotate(180deg);
          }
        }
      }
    }
    .col {
      width: 20%;
      padding: 11px 24px;
      font-size: 14px;
      line-height: 21px;
      word-wrap: break-word;
      @media (max-width: 992px) {
        line-height: 18px;
      }
      @media (max-width: 767px) {
        width: 33%;
        font-size: 13px;
      }
    }

    .upload-icon-wrapper {
      display: flex;
      ${"" /* align-items: center; */}
      a {
        ${"" /* line-height: 0; */}
        svg {
          ${
            "" /* visibility: hidden;
          opacity: 0;
          transition: opacity 0.3s ease-out;
          max-width: 32px;
          height: auto; */
          }
        }
      }
    }

    @media (max-width: 767px) {
      .priorityHead {
        display: none;
      }
      .priorityBody {
        .col {
          max-width: 50%;
          width: 50%;
          ${"" /* display: none; */}
        }
        .col::first-of-type {
          display: flex;
          text-transform: capitalize;
        }
        .col:last-child {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          max-width: 50%;
          padding: 0;
          border: none;
          > a {
            display: none;
          }
        }
        &:hover {
          .upload-icon-wrapper {
            label {
              display: block;
            }
          }
        }
      }
    }
  `,
};
