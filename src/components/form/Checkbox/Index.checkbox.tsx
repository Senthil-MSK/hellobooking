import { styled } from '@mui/material/styles';
import palette from '../../../theme/palette';
import { Checkbox, FormControlLabel } from '@mui/material';

// Styles to overwrite default properties of material checkbox label.
const CustomCheckboxControl = styled(FormControlLabel)(({ theme }) => ({
  marginTop: "15px",
  ".MuiFormControlLabel-label": {
    color: palette.primary.dark,
    '@media(max-width: 676px)': {
      fontSize: "14px",
      lineHeight: "28px"
    }
  },
  ".MuiButtonBase-root": {
    paddingRight: "6px",
  }
}));

// ----- Styles to overwrite default properties of material checkbox.  -----
const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  ".MuiSvgIcon-root": {
    fill: palette.primary.dark
  }
}));
// ----- export for CustomCheckbox component. -----
export default function CustomCheckboxField(props: any) {
  return (
    <CustomCheckboxControl disabled={props.disabled} control={<CustomCheckbox checked={props.isChecked} onChange={props.handleChange}/>} label={props.label} />
  )
}
