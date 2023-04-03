import Button from '@mui/material/Button';
// ----- Export for CustomButton -----
export default function CustomButtonLinks(props: any) {
  return (
    <Button 
    variant="contained"
    href={props.href} 
    >
      {props.children}
    </Button>
  )
}
