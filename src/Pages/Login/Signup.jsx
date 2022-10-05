import { Button, Snackbar } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from 'yup';

import React, { useState } from "react";
import { useEffect } from "react";
import AxiosClient from "../../Common/AxiosClient";
import ToastMessage from "../../Common/MaterialUi/ToastMessage";

const Signup = () => {
    const [SnackBar, setSnackBar] = useState({
        open: false,
        message: "Required",
    });
    const validationSchema = yup.object({
        name: yup
            .string('Enter your name')

            .required(<p className="ml-0">Name is required</p>),
        email: yup
            .string('Enter your email')
            .email('Enter a valid email')
            .required(<p className="ml-0">Email is required</p>),
        password: yup
            .string('Enter your password')
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });
    const formik = useFormik({
        initialValues: {
            name: "",
            email: '',
            password: '',

        },
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log(values)
            // AxiosClient.post("user/login", values)
            //     .then((res) => {
            //         console.log(res.response, "is the response");
            //         // handleOpen(res.data);
            //     })
            //     .catch((error) => {
            //         handleOpen(error.response.data);
            //     });
        }
    })
    const handleOpen = (response) => {
        console.log(response, "errro");
        setSnackBar({ message: response, open: true });
    };
    const handleClose = () => {
        setSnackBar({ ...Snackbar, open: false });
    };



    return (
        <div className="Login-Wrapper  p-3">
            <div className="primaryCard shadow-[0px_15px_60px_-15px_rgba(0,0,0,0.3)] px-[90px] rounded-[8px] py-10">
                <ToastMessage
                    open={SnackBar?.open}
                    horizontal="center"
                    vertical="top"
                    onClose={handleClose}
                    message={SnackBar}
                    autoHideDuration={2000}
                />
                <h1 className="text-3xl ">Signup</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="py-2">
                        <label
                            htmlFor="name"
                            className="block text-gray-600 text-sm mt-[10px]"
                        >
                            Name
                        </label>
                        <TextField type="text" name="name" id="id" placeholder="Name"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                    </div>
                    <div className="py-2">
                        <label
                            htmlFor="id"
                            className="block text-gray-600 text-sm mt-[10px]"
                        >
                            Email
                        </label>
                        <TextField type="text" name="email" id="id" placeholder="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                    </div>
                    <div className="py-5">
                        <label htmlFor="password" className="block">
                            Password
                        </label>
                        <TextField
                            id="outlined-required"
                            placeholder="Password"
                            type='password'
                            name='password'
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}

                        />
                    </div>
                    <Button
                        variant="contained"
                        className="mt-4 w-full h-[50px]"
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
