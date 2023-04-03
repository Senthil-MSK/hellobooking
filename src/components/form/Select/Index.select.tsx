import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import palette from '../../../theme/palette';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
// Styles to overwrite Form control
const BootstrapFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  marginTop: '47px',
  'label': {
    transform: "translate(0, -9px) scale(0.75)", 
    top: '-20px',
  }
}));
// Styles to overwrite Form Label
const BootstrapInputLabel = styled(InputLabel)(({ theme }) => ({
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 'bold',
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    color: palette.primary.darker,
    '& .MuiInputLabel-outlined': {
      transform: 'translate(0, -9px) scale(0.75)'
    }
}));
// Export for Custom Select Field
export default function CustomSelectField(props: any) {
  return (
    <BootstrapFormControl fullWidth className={props.errors[props.name] ? "error" : ""}>
      <BootstrapInputLabel id={props.labelId}>{props.label}</BootstrapInputLabel>
      <Select
        labelId={props.labelId}
        id={props.id}
        displayEmpty
        value={props.value || ''}
        onChange={props.handleChange}
        name={props.name}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <span className="placeholderText">{props.placeHolder}</span>;
          }
          return selected;
        }}
      >
        {/* Render Placeholder Text */}
        <MenuItem disabled value="">
          <span>{props.placeHolder}</span>
        </MenuItem>
        {/* Render Options */}
        {props.options?.map((ele: any) => {
          return <MenuItem key={ele.value} value={props.isReverse ? ele.label : ele.value}>{ele.label}</MenuItem>
        })}
      </Select>
      {props.errors[props.name] && <p className="inputErrorMessage">{props.errors[props.name]}</p>}
    </BootstrapFormControl>
  )
}
