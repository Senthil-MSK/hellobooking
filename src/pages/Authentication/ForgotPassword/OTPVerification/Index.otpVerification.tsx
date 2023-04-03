import React, { useEffect, useState } from "react";
import Countdown from 'react-countdown';
import OtpInput from "react-otp-input";
import CustomButton from "../../../../components/Button/Index.button";
import {authActions} from "../../../../redux/auth/auth.actions";
import { useAppDispatch, useAppSelector } from "../../../../redux/store/store";
import {otpRequestSuccess} from "../../../../redux/auth/auth.selectors";
import {resetError} from "../../../../redux/auth/auth.slice";
// ----- Export for Forgot password. -----
export default function ForgetOtpForm(props: any) {
  const dispatch = useAppDispatch();
  const otpSent = useAppSelector(otpRequestSuccess);
  const [otpResent, setotpResent] = useState(false);
  const [verifyOtpInProgress, setVerifyOtpInProgress] = useState(false);
  const [isOtpVerified, setisOtpVerified] = useState(false);
  const [otp, setOtp] = useState<any>("");
  const [error, setError] = useState("");
  // Set one minute timer for allowing the user to resend the OTP.
  useEffect(() => {
    props.setrequestTime(Date.now()+ 59000);
  },[]);

  // reset both the timer once OTP is sent.
  useEffect(() => {
    if(otpSent && !otpResent){
      setotpResent(true);
      otpResentSuccessMsg();
      setOtp("");
      setError("");
      props.setrequestTime(Date.now()+60000);
      props.setrequestTime(Date.now()+ 59000);
      setTimeout(function(){
        dispatch(resetError());
      }, 4000)
    }
  }, [dispatch, otpSent])
  
  // Verify OTP.
  useEffect(() => {
    if(otp.length > 5 && !verifyOtpInProgress){
      setVerifyOtpInProgress(!verifyOtpInProgress);
      setTimeout(() => {
        var payload = {
          code: otp
        }
        dispatch(authActions.verifyOtpAction(payload));
      }, 1000);
    }
  }, [otp, props])
  
  // Resend OTP function.
  const resendOtp = () =>{
    let payload = {
      email: props.email
    }
    dispatch(authActions.sendOtpAction(payload))
  }
  // OTP sent success message function.
  function otpResentSuccessMsg(){
    props.setrequestTimer(true);
    setTimeout(() =>{
      setotpResent(false);
    },5000)
  }
  // to Enable resend button.
  const enableResendOtp = (date: any) => {
    if(date.seconds === 0){
      props.setrequestTimer(false);
    }
    
  }
  // to reset timer once the otp expiration expires.
  const resetEverything = (date: any) => {
    if(date.minutes === 0 && date.seconds === 0){
      setisOtpVerified(false)
      setOtp("");
      setError("")
      resendOtp();
    }
  }

  return (
    <React.Fragment>
     
      {!isOtpVerified && 
        <div className="sign-in-forms phone-otp-form ">
          <div className="form-content">
            <div className="icon">
              {/* <img src={EmailImg} alt="icon" /> */}
            </div>
            <h2>Two-Factor Authentication</h2>
            <p>
              Please enter the 6-digit authentication code that was <span>sent to your email address - <strong>{props.email}</strong></span>
            </p>
            <div className="countdown-timer pink-text text-center" style={{display: !isOtpVerified ? 'block' : 'none'}}>
              <Countdown 
                key="validity-counter"
                date={props.time} 
                renderer={props => <span>Code expires in <strong>{props.minutes}:{props.seconds < 10 ? ("0" + props.seconds) : props.seconds}</strong> minutes</span>} 
                zeroPadTime={2} 
                onTick={(date)=>resetEverything(date)}
              />
            </div>
            
            <div className="otpInputGroups">
              <OtpInput
                value={otp}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setVerifyOtpInProgress(false);setOtp(e);}}
                numInputs={6}
                inputStyle={{ width: "100%" }}
                isInputNum={true}
              />
            </div>
            
            {error && <div className="error-messages text-left">{error}</div>}
            
            {/* {otpResent && <p style={{color: "green"}}>A new OTP has been sent to your email.</p>} */}
            {props.requestTimer && props.requestTime && <div className="my-3 pink-text" >Didn’t received the code? Please wait 
              <Countdown 
                key="resend" 
                date={props.requestTime}  
                renderer={props => <strong className="marginLR">{props.minutes}:{props.seconds < 10 ? ("0" + props.seconds) : props.seconds}</strong>} 
                zeroPadTime={2} 
                onComplete={(date: any)=>enableResendOtp(date)}/>
                sec
              </div>}
              {!props.requestTimer && <div className="resendPara pink-text">Didn’t received the code? <CustomButton variant="text" className={`resendBtnLink ${props.requestTimer && 'disabled'}`} disabled={props.requestTimer} onClick={() => resendOtp()}>Resend it</CustomButton>
            </div>}
            
          </div>
        </div>}
    </React.Fragment>
  );
}
