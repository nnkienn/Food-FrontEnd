import React from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

const initialValues = {
    fullName: "",
    email: "",
    password: "",
    role: ""
};

const RegisterForm = () => {
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log("Form values:", values);
        // Handle form submission logic here
    };

    return (
        <div>
            <Typography variant='h5' className='text-center'>Register</Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                {() => (
                    <Form>
                        <Field
                            as={TextField}
                            name="fullName"
                            label="Full name"
                            margin="normal"
                            fullWidth
                            variant="outlined"
                            helperText={<ErrorMessage name="fullName" component="span" className="text-red-500" />}
                        />
                        <Field
                            as={TextField}
                            name="email"
                            label="Email"
                            margin="normal"
                            fullWidth
                            variant="outlined"
                            helperText={<ErrorMessage name="email" component="span" className="text-red-500" />}
                        />
                        <Field
                            as={TextField}
                            name="password"
                            label="Password"
                            fullWidth
                            variant="outlined"
                            helperText={<ErrorMessage name="password" component="span" className="text-red-500" />}
                            margin="normal"
                        />
                        <Box sx={{ minWidth: 120 }}                             margin="normal"                        >
                            <FormControl fullWidth>
                                <InputLabel id="role-select-label">Role</InputLabel>
                                <Field name="role" as={Select} labelId="role-select-label" label="Role">
                                    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
                                    <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant owner</MenuItem>
                                </Field>
                            </FormControl>
                        </Box>
                        <Button sx={{ mt: 1, padding: "1rem" }} fullWidth type="submit" variant='contained'>Register</Button>
                    </Form>
                )}
            </Formik>
            <Typography variant='body2' align='center' sx={{ mt: 2 }}>
                If you have an account already?
                <Button size='small' onClick={() => navigate("/account/login")}>Login</Button>
            </Typography>
        </div>
    );
};

export default RegisterForm;
