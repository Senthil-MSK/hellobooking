import {forwardRef} from "react";
import DatePickerStyle from "./datepickerStyle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@mui/material/TextField';

// ----- export for CustomDatePicker component. -----
export default function CustomDatePicker(props: any) {
  // ----- Text field for DatePicker component. -----
  const Custom = forwardRef((rests: any, ref: any) => (
    <TextField id="datepicker-input" variant="standard" label={props.label} value={rests.value} className="example-custom-input" onClick={rests.onClick} ref={ref} />
  ));
  return (
    <DatePickerStyle style={{width: "100%"}}>
      <DatePicker 
        formatWeekDay={nameOfDay => nameOfDay.substr(0,3)}
        selected={props.value} 
        onChange={(date:Date) => props.handleChange(date, props.name)} 
        customInput={
          <Custom />
        }
        showDisabledMonthNavigation
        minDate={props.minDate}
      />
    </DatePickerStyle>
  )
}
