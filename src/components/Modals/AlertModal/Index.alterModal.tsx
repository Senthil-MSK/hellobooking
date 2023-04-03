import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CustomButton from "../../Button/Index.button";
// ----- Export for Alert Dialog -----
export default function AlertDialog(props: any) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {props.title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {props.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={props.handleClose}>{props.cancelLabel}</Button>
          <CustomButton onClick={props.handleSubmit} autoFocus>
            {props.submitLabel}
          </CustomButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
