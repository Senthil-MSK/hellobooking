import styled from 'styled-components';
import palette from "../../theme/palette";
import BackgroundImage from "../../assets/images/pages/Login/background.png";
import BackgroundDesktopImage from "../../assets/images/pages/Login/login-desktop.png";

const ForgotPasswordStyles = styled.div`
  width: 100%;
  height: 100%;
  h4 {
    font-size: 35px;
    line-height: 42px;
    letter-spacing: 0px;
    span {
      display: block;
    }
    @media (max-width: 1200px) {
      font-size: 26px;
      line-height: 36px;
    }
    @media (max-width: 992px) {
      font-size: 16px;
      line-height: 20px;
    }
    @media (max-width: 767px) {
      display: none;
    }
  }
  p {
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0px;
    margin-bottom: 32px;
    span {
      display: block;
    }
  }
  h3 {
    font-size: 2rem;
    line-height: 25px;
    margin-bottom: 59px;
    text-align: left;
    align-self: flex-start;
    @media (max-width: 992px) {
      font-size: 1.3rem;
      font-weight: bold;
      line-height: 20px;
    }
    @media (max-width: 767px) {
      margin-bottom: 20px;
    }
  }
  .contentWrapper {
    width: 100%;
    height: 100%;
    @media(max-width: 767px) {
      height: auto;
      padding-right: 0;
    }    
  }
  .leftPanel {
    background-color: ${palette.primary.main};
    background-image: url(${BackgroundImage});
    background-size: auto 100vh;
    background-position: left 126px;
    background-repeat: no-repeat;
    padding-top: 30px;
    padding-bottom: 30px;
    padding-right: 15px; 
    padding-left: 33px;
    @media (max-width: 1600px) {
      background-image: url(${BackgroundDesktopImage});
      background-size: auto 100vh;
    }
    @media (max-width: 992px) {
      background-image: url(${BackgroundDesktopImage});
      background-size: auto 80vh;
      background-position: left bottom;
    }
    @media (max-width: 767px) {
      background-image: none;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-right: 15px; 
      padding-left: 15px;
      a {
        width: 100%;
        margin: 0 auto;
        display: block;
        text-align: center;
      }
    }
  }
  .whiteBg {
    background-color: ${palette.grey[0]};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    paddingRight: 24px;
    @media (max-width: 992px) {
      padding-left: 17px;
      align-items: flex-start;
    }
    @media (max-width: 767px) {
      padding-right: 18px;
      padding-top: 34px;
    }
  }
  .logo {
    margin-bottom: 5vh;
    @media (max-width: 1600px) {
      margin-bottom: 56px;
    }
    @media (max-width: 1200px) {
      margin-bottom: 36px;
    }
    @media (max-width: 992px) {
      margin-bottom: 16px;
      max-width: 170px;
    }
    @media (max-width: 767px) {
      margin-bottom: 0;
      max-width: 270px;
    }
    
  }
  .loginForm {
    max-width: 445px;
    width: 100%;
    @media (max-width: 992px) {
      max-width: 345px;
    }
  }
  .loginForm > .btn  {
    margin-top: 100px;
    width: 288px;
    height: 48px;
    background: var(--unnamed-color-231f20) 0% 0% no-repeat padding-box;
    background: ${palette.primary.dark};
    border-radius: 0;
    text-transform: inherit;
    font-size: 15px;
    line-height: 15px;
    font-weight: bold;
    @media(max-width: 767px) {
      margin-top: 30px;
    }
  }
  .resetHeading {
    margin-bottom: 80px;
    @media(max-width: 767px) {
      margin-bottom: 30px;
    }
  }
  .forgotPasswordBtn {
    margin-top: 160px;
  }
  .loginForm > .MuiButton-outlined{
    width: 100%;
    margin-bottom: 26px;
    position: relative;
    color: ${palette.primary.dark};
    font-weight: bold;
    text-transform: inherit;
    font-size: 15px;
    svg {
      position: absolute;
      left: 14px;
      top: 50%;
      font-size: 32px;
      transform: translateY(-50%);
      fill: ${palette.primary.main}
    }
  }
  .MuiDivider-root {
    &:before, &:after {
      border-color: ${palette.primary.dark};
    }
    font-weight: bold;
  }
  .wrapper404 {
    button {
      margin-top: 40px;
    }
  }
  .otpInputGroups input{
    border: 1px solid ${palette.borderColorAlpha};
    box-shadow: none;
    max-width: 59px;
    height: 103px;
    margin-right: 24px;
    color: ${palette.primary.dark};
    font-size: 53px;
    margin-top: 53px;
    margin-bottom: 24px;
    &:focus {
      border-color: ${palette.secondary.light};
      outline: 1px solid ${palette.secondary.light};
    }
    &::placeholder {
      color: ${palette.primary.dark};
    }
    @media (max-width: 992px) {
      height: 63px;
      font-size: 23px;
      margin-top: 53px;
    }
  }
  .otpForm p {
    margin-bottom: 13px;
  }
  .otpForm h2 {
    margin-bottom: 13px;
  }
  .resendPara {
    display: flex;
    align-items: center;
  }
  .resendBtnLink, .resendBtnLink:hover {
    padding: 0;
    background: none;
    border-radius: 0;
    text-decoration: underline;
    text-transform: inherit;
    font-weight: bold;
    vertical-align: middle;
    line-height: 14px;
    margin-left: 5px;
  }
  .pink-text strong{
    color: ${palette.error.light};
    font-weight: normal;
    
    &.marginLR {
      margin: 0 5px;
    }
  }
`

export default ForgotPasswordStyles