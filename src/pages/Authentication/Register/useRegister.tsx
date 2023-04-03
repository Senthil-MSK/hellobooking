import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { authActions } from "../../../redux/auth/auth.actions";
import { selectAuthError, userRegistered } from "../../../redux/auth/auth.selectors";
import { resetError } from "../../../redux/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";

const useRegister = () => {
    const params = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userRegisteredSuccess = useAppSelector(userRegistered);
    const authErrorData = useAppSelector(selectAuthError);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    // Import Use Registration logic
    useEffect(() => {
        if (authErrorData.length > 0) {
            setTimeout(function () {
                dispatch(resetError());
            }, 6000)
        }
        if (userRegisteredSuccess.length > 0) {
            setTimeout(function () {
                dispatch(resetError());
                navigate("/login")
            }, 6000)
        }
    }, [authErrorData, navigate, dispatch, userRegisteredSuccess])
    // Default Form values
    const [values, setValues] = useState({
        password: '',
        userName: '',
        confirmPassword: '',
        showPassword: false,
    });
    // Default Form Errors
    const [errors, setErrors] = useState({
        password: '',
        userName: '',
        confirmPassword: ''
    });
    
    // Show password text function
    const handleClickShowPassword = () => {
        setShowPassword(true);
    }
    // Hide password text function
    const handleMouseDownPassword = () => {
        setShowPassword(false);
    }
    // Show Confirm password text function
    const handleClickConfirmShowPassword = () => {
        setShowConfirmPassword(true);
    }
    // Hide Confirm password text function
    const handleMouseDownConfirmPassword = () => {
        setShowConfirmPassword(false);
    }
    // Form field input onChange function
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        setValues({
            ...values,
            [field]: e.target.value
        })
    }
    // Form field input onBlur function
    const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        var value = e.target.value;
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
        if (field === "password") {
            if (value.length < 8) {
                setErrors({
                    ...errors,
                    [field]: "Password must be atleast 8 character long"
                })
            } else {
                setErrors({
                    ...errors,
                    [field]: ""
                })
            }

        }
        if (field === "confirmPassword") {
            if (!value) {
                setErrors({
                    ...errors,
                    [field]: "Please re-enter the password."
                })
            } else if (value !== values.password) {
                setErrors({
                    ...errors,
                    [field]: "Password does not match."
                })
            } else {
                setErrors({
                    ...errors,
                    [field]: ""
                })
            }

        }
    }
    // Form submit function
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        var errorMsgs = {
            userName: '',
            password: '',
            confirmPassword: ''
        }
        if (!values.userName.length) {
            errorMsgs.userName = "Please enter a valid email address."
        }
        if (!values.password.length || values.password.length < 8) {
            errorMsgs.password = "Password must be atleast 8 character long"
        }
        if (!values.confirmPassword) {
            errorMsgs.confirmPassword = "Please re-enter the password.";
        } else if (values.password !== values.confirmPassword) {
            errorMsgs.confirmPassword = "Password does not match.";
        }
        if (errorMsgs.userName.length || errorMsgs.password.length) {
            setErrors({
                ...errorMsgs,
            });
            return false;
        } else {
            let payload = {
                token: params.token,
                email: values.userName,
                password: values.password,
                confirmPassword: values.confirmPassword
            }
            dispatch(authActions.registerUserAction(payload))
        }
        return false;
    };


    return [
        errors,
        values,
        showPassword,
        showConfirmPassword,
        handleInputChange,
        handleClickShowPassword,
        handleMouseDownPassword,
        handleInputBlur,
        handleClickConfirmShowPassword,
        handleMouseDownConfirmPassword,
        handleSubmit
    ]
}

export default useRegister;