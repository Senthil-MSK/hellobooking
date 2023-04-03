import styled from 'styled-components';
import palette from "../../../theme/palette";
import CalendarIcon from "../../../assets/images/icons/calendar.svg";

const DatePickerStyle = styled.div`
  max-width: 500px;
  .MuiButton-textPrimary {
    margin-top: 40px;
  }
  .react-datepicker__month-container {
    padding: 10px 24px;
  }
  .react-datepicker__navigation--previous, .react-datepicker__navigation--next {
    top: 18px;
    &:before {

    }
  }
  .react-datepicker__month {
    margin: 0.1rem;
  }
  .react-datepicker__day--keyboard-selected {
    background-color: ${palette.primary.dark};
    border-radius: 15px;
    
  }
  .react-datepicker__day, .react-datepicker__day-name {
    width: 2.2rem;
    border-radius: 15px;
  }
  .react-datepicker__navigation--previous .react-datepicker__navigation-icon:before,
  .react-datepicker__navigation--next .react-datepicker__navigation-icon:before {
    border-color: ${palette.primary.dark};
    border-width: 2px 2px 0 0;
  }
  .react-datepicker__navigation--previous {
    left: 8px;
  }
  .react-datepicker__navigation--next {
    right: 8px;
  }
  .react-datepicker__header {
    background: none;
  }
  .react-datepicker__current-month {
    font-weight: 400;
    margin-bottom: 20px;
  }
  .react-datepicker__day-names {
    border-top: 1px solid rgba(35, 31, 32, 0.2);
  }
  .react-datepicker__header, .react-datepicker {
    border-color: rgba(35, 31, 32, 0.2);
  }
  .react-datepicker__triangle {
    display: none;
  }
  #datepicker-input {
    background-image: url(${CalendarIcon});
    background-repeat: no-repeat;
    background-position: right center;
    background-size: 20px auto;
  }
  .react-datepicker__day:hover {
    border-radius: 15px;
  }
  .react-datepicker__input-container .MuiFormControl-root {
    width: 100%;
  }
`

export default DatePickerStyle