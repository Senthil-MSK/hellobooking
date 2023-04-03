import styled from "styled-components";
import palette from "../../../../theme/palette";
import NextArrow from "../../../../assets/images/icons/scrollNext.svg";
import { alpha } from '@mui/material/styles';

const ProgressStyles = styled.div`
    margin-left: 16px;
    overflow: hidden;
    @media(max-width: 1199px){
      margin-left: 0;
    }
    .thumbWrappers {
      display: flex;
      .imageWrapper {
        width: 50%;
      }
    }
    .slick-arrow {
      min-height: 100%;
      background-color: ${palette.secondary.main};
      width: 32px;
      z-index: 99;
      transform: none;
      top: 0;
      &.slick-prev {
        display: none !important;
      }
      &.slick-next{
        right: 0px;
        height: calc(100% + 1px);
        @media(max-width: 1440px){
          height: calc(100% + 3px);
        };
        @media(max-width: 767px){
          display: none !important;
        };
        &:before {
          content: "";
          background-image: url(${NextArrow});
          height: 100%;
          width: 100%;
          display: block;
          background-repeat: no-repeat;
          background-position: center;
        }
      }
    }
    .sliderimageWrapper {
      .slick-track {
        display:flex;
      }
      .slick-slide {
         min-width:292px;
         @media(max-width: 992px){
         margin-right:24px;
         .imageWrapper {
           margin-right:0;
         }
        }
        @media(max-width: 992px){
          margin-right:16px;
         }
      }   
    }
    .imageWrapper {
      height: 145px;
      background-position: center top;
      background-size: cover;
      margin-right: 25px;
      display: flex;
      align-items: flex-start;
      @media(max-width: 992px){
        align-items: flex-end;
      };
      h3 {
        display: flex;
        justify-content: space-between;
        color: ${palette.primary.lighter};
        padding: 10px 15px;
        background-color: ${(palette.primary.main)};
        font-size: 14px;
        line-height:21px;
        display: flex;
        align-items: center;
        width: 100%;
        margin: 0;
        font-weight: 600;
        span {
          font-weight: normal;
          font-size: 14px;
          line-height:21px;
        }
      }
    }
    @media(max-width: 992px){
      margin-left: 0;
    }
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
  `
export default ProgressStyles