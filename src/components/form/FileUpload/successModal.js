import styled from "styled-components";
import palette from "../../../theme/palette";
import { alpha } from "@mui/material";

export const SuccessModalStyles = styled.div`
  .blackBtn {
    width: 172px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    margin: 20px auto 0;
  };
  .modalStyle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500;
    padding: 30px;
    background-color: ${palette.common.white};
    border-top: 5px solid ${palette.success.border};
    box-shadow: 24;
    flex-grow: 1;
    h5 {
        font-weight: 600;
    }
  }

`;
