import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";
import { selectAuthData, selectAuthError, otpRequestSuccess, otpVerification, verifiedOtp, resetPasswordSuccess } from "../../../redux/auth/auth.selectors";
import { resetError } from "../../../redux/auth/auth.slice";
import { authActions } from "../../../redux/auth/auth.actions";


const useForgotPassword = () => {
    // Redux values and Component States
    const authUserData: any = useAppSelector(selectAuthData);
    const authErrorData = useAppSelector(selectAuthError);
    const otpSent = useAppSelector(otpRequestSuccess);
    const otpVerirficationSuccess = useAppSelector(otpVerification);
    const verifiedCode = useAppSelector(verifiedOtp);
    const resetSuccess = useAppSelector(resetPasswordSuccess);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(0);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [requestTimer, setrequestTimer] = useState(true);
    const [requestTime, setrequestTime] = useState();
    const [time, setTime] = useState(Date.now() + (60000 * 30));

    // Redirect to Dashboard
    useEffect(() => {
        if (authUserData) {
            navigate("/", { replace: true });
        }
        if (authErrorData.length > 0) {
            setTimeout(function () {
                dispatch(resetError());
            }, 4000)
        }
        if (otpSent) {
            setStep(1)
        }
        if (otpVerirficationSuccess) {
            setStep(2)
        }
        if (resetSuccess) {
            navigate("/login");
        }
    }, [authUserData, authErrorData, dispatch, navigate, otpSent, otpVerirficationSuccess, resetSuccess])

    // Default values
    const [values, setValues] = useState({
        userName: '',
        password: '',
        confirmPassword: '',
        showPassword: false,
    });

    // Default Errors
    const [errors, setErrors] = useState({
        userName: '',
        password: '',
        confirmPassword: ''
    });

    // Show password field text
    const handleClickShowPassword = () => {
        setShowPassword(true);
    }

    // Hide password field text
    const handleMouseDownPassword = () => {
        setShowPassword(false);
    }

    // Show Confirm password field text
    const handleClickConfirmShowPassword = () => {
        setShowConfirmPassword(true);
    }

    // Hide Confirm password field text
    const handleMouseDownConfirmPassword = () => {
        setShowConfirmPassword(false);
    }

    // Form Fields Validation
    const validateInputField = (value: string, field: string, validatePartically: boolean) => {
        if(!validatePartically){
            if (!value) {
                setErrors({
                    ...errors,
                    [field]: true
                })
            }
            if (field === "userName") {
                if (!value.trim().toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                    setErrors({
                        ...errors,
                        [field]: "Please enter a valid email address."
                    })
                } else {
                    setErrors({
                        ...errors,
                        [field]: ""
                    })
                }
            }
        }else {
            if (field === "userName") {
                if (value.trim().toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                    setErrors({
                        ...errors,
                        [field]: ""
                    })
                }
            }
        }
        
    }

    // Form Fields onChange function
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        validateInputField(e.target.value, field, true)
        setValues({
            ...values,
            [field]: e.target.value
        })
    }

    // Form Fields onBlur function
    const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        validateInputField(e.target.value, field, false)
    }

    // Form submit function
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!values.userName || !values.userName.trim().toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            setErrors({
                ...errors,
                userName: "Please enter a valid email address."
            })
            return false;
        }
        let payload = {
            email: values.userName,
        }
        dispatch(authActions.sendOtpAction(payload))
        return false;
    };

    // Reset Form Fields after Form submits
    const handleResetSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!values.password || values.password.trim().toLowerCase() !== values.confirmPassword.trim().toLowerCase()) {
            var passwordError = "";
            var confirmPasswordError = "";
            if (!values.password) {
                passwordError = "Please enter a valid password.";
            } else if (values.password.length < 8) {
                passwordError = "Password must be at least 8 characters.";
            }
            if (!values.confirmPassword) {
                confirmPasswordError = "Please re-enter the password.";
            } else if (values.confirmPassword !== values.password) {
                confirmPasswordError = "Password does not match.";
            }
            setErrors({
                ...errors,
                password: passwordError,
                confirmPassword: confirmPasswordError
            })
            return false;
        }
        let payload = {
            code: verifiedCode,
            password: values.password,
            confirmPassword: values.confirmPassword
        }
        dispatch(authActions.resetPasswordAction(payload));
        return false;
    };

    return [
        showPassword,
        step,
        setStep,
        values,
        errors,
        setrequestTime,
        showConfirmPassword,
        time,
        setTime,
        requestTime,
        requestTimer,
        setrequestTimer,
        handleSubmit,
        handleInputChange,
        handleInputBlur,
        handleClickShowPassword,
        handleMouseDownPassword,
        handleResetSubmit,
        handleClickConfirmShowPassword,
        handleMouseDownConfirmPassword
    ]
}


export default useForgotPassword;