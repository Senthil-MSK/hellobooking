import styled from "styled-components";
import palette from "../../../theme/palette";

export const UploadStyles = styled.div`
  padding-left: 16px;
  max-width: 1240px;
  margin: 0 auto;
  margin-top: 62px;
  .boxTitle {
    padding: 13.5px 5px;
    button {
      line-heighgt: 1;
    }
  }
  @media (max-width: 767px) {
    padding: 0;
    margin-top: 10px;
  }
`;
