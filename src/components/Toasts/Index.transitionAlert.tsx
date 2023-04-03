import React, {useEffect} from 'react';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import AlertStyles from "./alert";
import Box from '@mui/material/Box';
// ----- Export Alert Component -----
export default function TransitionAlerts(props: any) {
  const [open, setOpen] = React.useState(props.showAlert !== undefined ? props.showAlert : true);
  useEffect(() => {
    if(props.showAlert !== undefined) {
      setOpen(props.showAlert)
    }
   
  }, [props.showAlert])
  return (
    <AlertStyles className="alertBox">
      <Collapse orientation="horizontal" in={open}>
        <Alert
          variant="outlined" 
          severity={props.type || "error"}
          action={
            // Incase of close button needed, pass action={true}
            props.action ? <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton> : null
          }
        >
          {/* Render Alert Message */}
            <Box sx={{width: '100%'}}>
              {props.errorData}
            </Box> 
        </Alert>
      </Collapse>
    </AlertStyles>
  );
}
