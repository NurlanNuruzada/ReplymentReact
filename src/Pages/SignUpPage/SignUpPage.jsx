import React, { useState } from 'react';
import Styles from './SignUpPage.module.css'
import { Grid, GridItem, CircularProgress } from '@chakra-ui/react'; // Import CircularProgress for loading indicator
import CustomFrom from '../../Components/CustomForm/CutomFrom'
import AppImage from '../../Images/Customize 3.png'
import { useNavigate } from 'react-router';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { login, register } from '../../Services/AuthService';
import { useDispatch } from 'react-redux';
import { loginAction, registerAction } from '../../Redux/Slices/AuthSlice';
import RegisterScema from '../../Valudations/RegisterSchema';
import * as Yup from 'yup';

export default function SignUpPage() {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false); // State for loading indicator
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must be at least 8 characters')
            .matches(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                'Password must contain at least one uppercase letter, one lowercase letter, and one number'
            ),
    });

    const LoginFormik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setIsLoading(true); // Set loading to true when form is submitted
            RegisterMutate(values)
        },
    });

    const { mutate: RegisterMutate, isLoading: Loginloading, error: Loginerror } =
        useMutation((values) => register(values), {
            onSuccess: (resp) => {
                setIsLoading(false); // Set loading to false on successful registration
                dispatch(registerAction(resp));
            },
            onError: (error) => {
                setIsLoading(false); // Set loading to false if registration fails
                setError("Duplicated Mail Address");
            },
        });

    // Clear error when input changes
    const handleInputChange = (e) => {
        setError(null);
        LoginFormik.handleChange(e);
    };

    return (
        <div className={Styles.Main}>
            <Grid className={Styles.MainContainer} templateColumns='repeat(12, 1fr)' gap={6}>
                <GridItem className={Styles.Spacer} colSpan={1}></GridItem>
                <GridItem className={Styles.LeftContainer} colSpan={4}>
                    <div className={Styles.Title}>
                        <h1 className={Styles.MainHeader}>Create an account</h1>
                    </div>
                    <div className={Styles.InputContainer}>
                        <div >
                            <form className={Styles.FormContainer} action="" method="get">
                                <label>Email</label>
                                <input name="email" onChange={handleInputChange} placeholder={"Enter your email address"} />
                            </form>
                            {LoginFormik.errors.email && LoginFormik.touched.email && (
                                <div style={{ color: 'red' }} className={Styles.Error}>{LoginFormik.errors.email}</div>
                            )}
                        </div>
                        <div >
                            <form className={Styles.FormContainer} action="" method="get">
                                <label>Password</label>
                                <input name="password" onChange={handleInputChange} type='password' placeholder={"Enter Password"} />
                            </form>
                            {LoginFormik.errors.password && LoginFormik.touched.password && (
                                <div style={{ color: 'red' }} className={Styles.Error}>{LoginFormik.errors.password}</div>
                            )}
                        </div>
                        <button type='submit' onClick={() => LoginFormik.handleSubmit()} className={Styles.LoginButton}>
                            {isLoading ? <CircularProgress isIndeterminate size="24px" color="teal" /> : "Sign up"}
                        </button>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                    </div>
                </GridItem>
                <GridItem className={Styles.Spacer} colSpan={1}></GridItem>
                <GridItem className={Styles.RightContainer} colSpan={6}>
                    <div className={Styles.Effect}> </div>
                    <img className={Styles.Image} src={AppImage} alt="" />
                </GridItem>
            </Grid>
        </div>
    );
}