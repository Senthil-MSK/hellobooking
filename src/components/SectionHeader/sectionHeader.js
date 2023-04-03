import styled from "styled-components";
import palette from "../../theme/palette";

const SectionHeaderStyles = styled.div`
  .boxTitle {
    background-color: ${palette.secondary.main};
    color: ${palette.primary.lighter};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 10px;
    margin-bottom: 6px;
    border: 1px solid #c1a59a40;
    h4 {
      font-size: 18px;
      font-weight: 600;
      @media (max-width: 1440px) {
        font-size: 22px;
        line-height: 28px;
      }
    }
    a,
    button {
      color: ${palette.primary.dark};
      font-size: 14px;
      line-height: 21px;
      ${"" /* text-decoration: underline; */}
      text-transform: inherit;
      cursor: pointer;
      font-weight: 600;
      ${
        "" /* &:hover {
        text-decoration: none;
      } */
      }
    }
    button {
      background: none;
      border: none;
    }
    @media (max-width: 991px) {
      padding: 15.5px 12px;
    }
    @media (max-width: 767px) {
      padding: 8px 12px;
      margin: 0;
      ${"" /* margin-bottom: 4px; */}
      h4 {
        font-size: 22px;
        line-height: 43px;
      }
      .boxTitleLink {
        font-size: 14px;
        line-height: 21px;
        font-weight: 600;
      }
    }
  }
`;

export default SectionHeaderStyles;
