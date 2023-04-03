import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import sign from "../signature.svg";

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

type SignatureModalFormProps = {
  open: boolean;
  handleClose: () => void;
};

export default function SignatureModalForm(props: SignatureModalFormProps) {
  return (
    <div>
      <Modal
        open={props.open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography variant="h6" component="h6">
            Sign Form
          </Typography>

          <p style={textStyle}>
            The following document is about to be digitally signed by you:
          </p>
          <Box style={{ marginTop: "10px", marginBottom: "10px" }}>
            <span>
              <ArticleOutlinedIcon />
            </span>
            <span>Material SignOff form.pdf</span>
          </Box>

          <Typography style={textStyle}>
            Sign below using your mouse.<span>Clear Signature</span>{" "}
          </Typography>
          <div
            style={{
              height: "100px",
              width: "100%",
              border: "1px solid ",
            }}>
            <img height={"90px"} src={sign} alt="" />
          </div>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox size="small" style={textStyle} />}
              label="I agree to electronically sign this form."
            />
          </FormGroup>
          <Box style={{ textAlign: "right" }}>
            <span
              style={{ textDecoration: "underline", margin: "25px" }}
              onClick={props.handleClose}>
              Cancel
            </span>
            <Button variant="contained" onClick={props.handleClose}>
              Sign
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
