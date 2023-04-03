import styled from "styled-components";
import palette from "../../../theme/palette";

export const FolderStyles = styled.div`
  padding-left: 16px;
  max-width: 1240px;
  margin: 0 auto;
  .boxTitle {
    button {
      line-height: 1;
    }
  }
  .folderWrapper {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .folderLink {
    display: flex;
    align-items: center;
    text-decoration: none;
    width: 25%;
    padding: 14px 14px 24px 0;
    color: ${palette.primary.dark};
    &:hover {
      text-decoration: underline;
    }
    .image {
      width: 52px;
      margin-right: 12px;
    }
    h4 {
      font-size: 16px;
      line-height: 18px;
      font-weight: 600;
      color: ${palette.primary.dark};
    }
    h5 {
      font-size: 14px;
      line-height: 18px;
      color: ${palette.primary.dark};
    }
    svg {
      fill: ${palette.secondary.main};
      font-size: 52px;
    }
  }
  @media (max-width: 767px) {
    padding-left: 0;
    .folderLink {
      width: 25%;
      padding-right: 0;
      display: inline;

      .folders-item-content {
        ${"" /* width: calc(100% - 45px); */}
        ${"" /* display: flex; */}
        ${"" /* flex-direction: row; */}
        ${"" /* justify-content: space-between; */}
      }
      h4 {
        font-size: 14px;
      }
      .image {
        width: 32px;
        margin-right: 9px;
        svg {
          max-width: 100%;
        }
      }
    }
    .boxTitle {
      button {
        padding-right: 0;
      }
    }
  }
`;
