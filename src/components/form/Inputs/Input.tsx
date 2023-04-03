import FormControl from '@mui/material/FormControl';
import { alpha, styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import palette from '../../../theme/palette';
import OutlinedInput from '@mui/material/OutlinedInput';
// ----- Styles to overwrite FormControl. -----
const BootstrapFormControl = styled(FormControl)(({ theme }) => ({
  width: '100%',
  marginTop: '27px',
  "@media(max-width: 767px)": {
    marginTop: '37px',
  },
  'label': {
    transform: "translate(0, -9px) scale(0.75)", 
    "@media(max-width: 767px": {
      transform: "translate(0, -9px) scale(0.75)", 
    },
  }
}));
// ----- Styles to overwrite Input Label. -----
const BootstrapInputLabel = styled(InputLabel)(({ theme }) => ({
    fontSize: "18px",
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
    },
    1600: {
      color: "red",
      fontSize: "1px",
    }
}));
// ----- Styles to overwrite Input Field. -----
const CustomOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(20),
  },
  border: `1px solid ${palette.borderColor}`,
  "&:-webkit-autofill": {
    WebkitBoxShadow: `0 0 0 1000px ${palette.secondary.main} inset`,
  },
  // border: `none`,
  borderRadius: 0,
  "& svg": {
    maxWidth: "32px",
  },
  '& type=["password"]': {
    height: '40px',
  },
  '& .MuiInputBase-input': {
    fontSize: "14px",
    lineHeight: "24px",
    boxSizing: 'border-box',
    padding: '10px 12px',
    height: '40px',
    backgroundColor: palette.grey[0],
    color: palette.primary.dark,
    border: "none",
    boxShadow: "none",
    // borderColor: '#221F2080',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    // Use the system font instead of the default Roboto font.
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
  },
  "& input::placeholder": {
    color: palette.placeholder,
  },
  ".MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "&:hover *": {
    borderColor: "red !important",
  },
  '&:focus, &:hover, &:hover .MuiOutlinedInput-notchedOutline': {
    boxShadow: `${alpha(theme.palette.secondary.light, 0.25)} 0 0 0 0.1rem`,
    borderColor: palette.secondary.light, 
  },
  '.error *, .error:hover *': {
    // color: `${palette.error.dark} !important`
    color: `red !important`,
    borderColor: `red !important`,
    boxShadow: `red 0 0 0 0.1rem`,
  }
}));
// ----- Export for Custom Input Field. -----
export default function CustomInputField(props: any) {
  return (
    <>
    {/* Generic Input Field Field Starts*/}
    {props.type !== 'password' && <BootstrapFormControl variant="outlined" className={props.error[props.name].length > 0 ? "error" : ""}>
      {props.label && <BootstrapInputLabel className="inputLabel" shrink htmlFor={props.id}>
        {props.label}
      </BootstrapInputLabel>}
      <CustomOutlinedInput 
        autoComplete={props.autoComplete} 
        required={props.required}
        name={props.name}
        fullWidth={props.fullWidth}
        id={props.id}
        autoFocus={props?.autoFocus || false}
        placeholder={props.placeHolder || "Enter"}
        type={props.type}
        endAdornment={props.endAdornment}
        onChange={(e) => props.onChange(e, props.name)}
        onBlur={props.onBlur}
      />
      {props.error[props.name].length > 0 && <p className="inputErrorMessage">{props.error[props.name]}</p>}
    </BootstrapFormControl>}
    {/* Generic Input Field Field Ends*/}
    
    {/* Password Input Field Field Starts*/}
    {props.type === 'password' && 
    <BootstrapFormControl variant="outlined" className={props.error[props.name].length > 0 ? "passwordLabel error" : "passwordLabel"}>
      {props.label && <BootstrapInputLabel className="inputLabel" shrink htmlFor={props.id}>
        {props.label} 
      </BootstrapInputLabel>}
      {/* Input Field Starts */}
      <CustomOutlinedInput 
        autoComplete={props.autoComplete} 
        required={props.required}
        name={props.name} 
        fullWidth={props.fullWidth}
        id={props.id}
        autoFocus={props?.autoFocus || false}
        placeholder={props.placeHolder || "Enter"}
        type={props.showPassword ? "text" : props.type}
        endAdornment={props.endAdornment}
        onChange={(e) => props.onChange(e, props.name)}
        onBlur={props.onBlur}
      />
      {/* Input Field Ends */}
      {props.error[props.name].length > 0 && <p className="inputErrorMessage">{props.error[props.name]}</p>}
      {props.showForgotPassword && <Link href="/forgot-password">Forgot password?</Link>}
    </BootstrapFormControl>}
    {/* Password Input Field Field Ends*/}
    </>
  )
}
