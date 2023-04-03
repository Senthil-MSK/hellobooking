import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../../redux/auth/auth.actions";
import { resetPasswordSuccess, selectAuthData, selectAuthError } from "../../../redux/auth/auth.selectors";
import { resetError } from "../../../redux/auth/auth.slice";
import { useAppDispatch, useAppSelector } from "../../../redux/store/store";

const useLogin = () => {    
    // useAppDispatch() can not be use directly in costom hook
    const [showPassword, setShowPassword] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const authUserData: any = useAppSelector(selectAuthData);
    const authErrorData = useAppSelector(selectAuthError);
    const resetSuccess = useAppSelector(resetPasswordSuccess);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    // Form Default values
    const [values, setValues] = useState({
        password: '',
        userName: '',
        showPassword: false,
    });

    // Form Default Errors
    const [errors, setErrors] = useState({
        password: '',
        userName: '',
    });

    // Redirect to Dashboard
    useEffect(() => {
        if (authUserData) {
            navigate("/", { replace: true });
        }
        if (authErrorData.length > 0 || resetSuccess) {
            setTimeout(function () {
                dispatch(resetError());
            }, 6000)
        }
    }, [authUserData, authErrorData, navigate, dispatch, resetSuccess])

    // Show Password Text
    const handleClickShowPassword = () => {
        setShowPassword(true);
    }

    // Hide Password Text
    const handleMouseDownPassword = () => {
        setShowPassword(false);
    }

    // Form Validations logic
    const validateInputFields = (value: string, field: string, validatePartically: boolean) => {
        if (!validatePartically) {
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
        } else { // if validation is true then clear error on onChange
            if (field === "userName") {
                if (value.trim().toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                    setErrors({
                        ...errors,
                        [field]: ""
                    })
                }
            } 
            if (field === "password") {
                if (value.length >= 8) {
                    setErrors({
                        ...errors,
                        [field]: ""
                    })
                }
            }
        }

    }

    // Form Field onChange logic
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        validateInputFields(e.target.value, field, true);
        setValues({
            ...values,
            [field]: e.target.value
        })
    }

    // Form Field onBlur logic
    const handleInputBlur = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
        validateInputFields(e.target.value, field, false);
    }

    // Form Field onSubmit logic
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        var errorMsgs = {
            userName: '',
            password: ''
        }
        if (!values.userName.length) {
            errorMsgs.userName = "Please enter a valid email address."
        }
        if (!values.password.length || values.password.length < 8) {
            errorMsgs.password = "Password must be atleast 8 character long"
        }
        if (errorMsgs.userName.length || errorMsgs.password.length) {
            setErrors({
                ...errorMsgs,
            });
            return false;
        } else {
            let payload = {
                email: values.userName,
                password: values.password
            }
            dispatch(authActions.loginAction(payload))
        }
        return false;
    };

    // Checkbox onChange logic
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    return [
        // state
        showPassword,
        isChecked,
        values,
        errors,
        // functions
        handleClickShowPassword,
        handleMouseDownPassword,
        handleInputChange,
        handleInputBlur,
        handleSubmit,
        handleCheckboxChange
    ];
};

export default useLogin;