import Button from '@mui/material/Button';

// ----- export for Button component. -----
export default function CustomButton(props: any) {
  return (
    <Button 
      {...props}
      onClick={props.onClick}
      type={props.type}
      className={props.className}
      variant={props.variant || "contained"}
      href={props?.href}
      download={props.download}
    >
      {props.children}
    </Button>
  )
}
