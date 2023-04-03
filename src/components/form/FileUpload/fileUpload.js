import styled from "styled-components";
import palette from "../../../theme/palette";
import { alpha } from "@mui/material";

export const FileUploadStyles = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  .boxTitle {
    padding: 9px 5px;
    button {
      line-heighgt: 1;
    }
  }
  .file-upload-box {
    background-color: ${palette.secondary.lighter};
    ${"" /* height: 158px; */}
    margin-bottom: 35px;
    border: 1px dashed ${palette.secondary.light};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  span {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    text-decoration: underline;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
  i {
    margin-bottom: 0;
    font-style: normal;
    font-size: 14px;
  }
  svg {
    margin-bottom: 10px;
  }
  broder-top {
    broder-top: 2px soild #7ed99f;
  }
`;
