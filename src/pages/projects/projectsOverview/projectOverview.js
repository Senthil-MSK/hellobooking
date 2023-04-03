import styled from "styled-components";
import palette from "../../../theme/palette";

const Styles = {
  ProjectOverviewScreen: styled.div`
    margin: 0 auto;
    padding-left: 16px;
    max-width: 1240px;
    .boxTitleLink {
      font-weight:600;
    }
    @media (max-width: 1440px){
      padding-left: 24px;
      padding-right: 0px;
    }
    @media (max-width: 992px){
      padding-left: 0;
      padding-top: 21px;
    }
    .MuiAccordion-root {
      box-shadow: none;
    }
    .Mui-expanded {
      min-height: auto;
      .MuiAccordionSummary-content {
        margin: 12px 0;
      }
    }
    .MuiAccordionSummary-root {
      border: 1px solid ${palette.primary.dark};
      border-left: 5px solid ${palette.error.main};
      box-shadow: none;
      border-radius: 0;
      padding-right:15px;
    }
    .MuiAccordionSummary-content {
      align-items: center;
      padding-left: 10px;
      svg {
        margin-right: 10px;
        fill: ${palette.error.main};
      }
    }
    .MuiAccordionSummary-expandIconWrapper svg {
      color: ${palette.primary.dark};
    }
    p {
      font-size: 14px;
      line-height: 21px;
      color: ${palette.primary.dark};
    }
    .priorityHead {
      background: ${palette.primary.main};
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 6px;
      flex-wrap: wrap;
      @media(max-width: 767px){
        .col {
          &:last-child {
            display: none;
          }
          &:nth-child(3){
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
      @media(max-width: 992px){
        border-bottom: 1px solid ${palette.secondary.main};
      }
      .col{
        .arrowBtn svg{
          display: none;
        }
        @media(max-width: 767px){
          max-width: 33%;
          padding: 11px 10px;
          
          &:nth-child(3){
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
          font-weight: 600;
        }
        &:last-child {
          text-align: right;
          @media(max-width: 767px){
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
      width: 25%;
      padding: 11px 15px;
      font-size: 14px;
      line-height: 21px;
      @media(max-width: 991px){
       padding:9.5px 15px;
      }
      @media(max-width: 767px){
        width: 33%;
        font-size: 13px;
      }
    }
    .AccordionDetailsWrap {
      .priorityBody {
        .col {
          padding: 11px 10px;
        }
        .col-action {
          button {
            padding: 11px 10px;
          }
        }
      }
      @media (max-width:991px) {
        .priorityHead{
          .MuiBox-root{
            font-weight: 600;
          }
        }
        .priorityBody {
          .col {
            &::first-of-type {
              font-weight: 600;
            }
          }
          .col-dueDate {
            line-height:21px;
          }
        }
      },
    }
    .nextSectionBtn {
     background-color: ${palette.secondary.main}; 
     color: ${palette.primary.light};
     min-height:34px;
     position: absolute;
     bottom: 0;
     left:0;
     width: 100%;
     z-index: 1002;
     display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-shadow: none;
    border: none;
    border-radius: 0;
    padding: 0;
    }
  `
}

export default Styles