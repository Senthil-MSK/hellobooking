import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderTop: "5px solid #E1CDC0",
  boxShadow: 24,
  p: 10,
};

const textStyle = {
  fontSize: "12px",
};

type SignatureConfirmModalProps = {
  open: boolean;
  handleSignClose: () => void;
};

function SignatureConfirmModalForm(props: SignatureConfirmModalProps) {
  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleSignClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Grid container spacing={2}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <CheckCircleOutlinedIcon color="success" />
            </Grid>

            <Grid item xs={12} style={{ textAlign: "center" }}>
              <Typography id="modal-modal-title" variant="h6" component="h6">
                3 Items were signed sucessfully
              </Typography>
              <Typography
                id="modal-modal-description"
                sx={{ mt: 2 }}
                style={textStyle}>
                25 more items are still awaiting for sign off
              </Typography>
            </Grid>
            <Grid item xs={12} style={{ textAlign: "center", margin: "5px" }}>
              <Button onClick={props.handleSignClose} variant="contained">
                Back to Material List
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

export default SignatureConfirmModalForm;
