import styled from "styled-components";
import palette from "../../theme/palette";

const HEADER_MOBILE = 50;
const HEADER_DESKTOP = 60;
const styles = {
  StyledToolbar: styled.div`
    min-height: ${HEADER_MOBILE}px;
    background-color: ${palette.secondary.main};
    padding: 31px 24px;
    border-bottom: 1px solid ${palette.secondary.light};
    .menuLeft {
      display: none;
    }

    @media (min-width: 768px) {
      min-height: ${HEADER_DESKTOP}px;
      padding: 29.5px 20px;
    }
    @media (max-width: 992px) {
      margin-bottom: 2px;
    }
    @media (max-width: 767px) {
      padding: 22px 0;
      margin-bottom: 0;
      .menuLeft {
        padding: 0 15px;
        display: block;
      }
      .MobileMessageIcon {
        padding: 0;
        svg {
          max-width: 36px;
          height: auto;
        }
      }
    }
    .logo svg {
      max-height: 49px;
    }
    .title {
      font-size: 32px;
      line-height: 43px;
      font-weight: bold;
    }
    @media (max-width: 767px) {
      .logo,
      .title {
        display: none;
      }
    }
    .profileBtn {
      display: flex;
      @media (max-width: 767px) {
        display: none;
      }
    }
  `,
  Menu: {
    top: "58px",
  },
  Message: {
    padding: "1px !important",
    top: "58px",
    width: "15rem",
  },

  LogoStyle: styled.div`
    margin-right: 100px;
    @media (max-width: 992px) {
      margin-right: 35px;
    }
  `,
  ProfileBtn: styled.button`
    border-radius: 50%;
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #221f20;
    color: #fff;
    border: none;
    cursor: pointer;
  `,
  ProfileBtnInner: styled.span`
    border-radius: 50%;
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #221f20;
    color: #fff;
    border: none;
    margin-right: 12px;
  `,
  ProfileDropDown: styled.div`
    display: flex;
    align-items: center;
    padding-top: 4px;
    padding-bottom: 26px;
    padding-left: 12px;
    padding-right: 12px;
    h5 {
      font-size: 22px;
    }
    p {
      font-size: 14px;
    }
  `,
};

export default styles;
