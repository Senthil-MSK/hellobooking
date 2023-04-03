import React from "react";
import CustomButton from "../../Button/Index.button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, Box } from "@mui/material";
import { SuccessModalStyles } from "./successModal";
import { ReactComponent as SuccessIcon } from "../../../assets/images/icons/success-outline.svg";

type OnSucessUploadModalPropsType = {
  open: boolean;
  selectedFile: string;
  handleClose: () => void;
};
function OnSucessUploadModal(props: OnSucessUploadModalPropsType) {
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <SuccessModalStyles>
        <Box className="modalStyle">
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <SuccessIcon />
            </Grid>

            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Typography id="modal-modal-title" variant="h5" component="h2">
                File was uploaded Successfully
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {props.selectedFile} is now avaialble under uploads folder
              </Typography>
            </Grid>

            <Grid item xs={12} style={{ textAlign: "center" }}>
              <CustomButton onClick={props.handleClose} className="blackBtn">
                Close
              </CustomButton>
            </Grid>
          </Grid>
        </Box>
      </SuccessModalStyles>
    </Modal>
  );
}

export default OnSucessUploadModal;
