import { Button, TextField, Typography } from '@mui/material'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const initialValues = {
    email: "",
    password: ""
}
const LoginForm = () => {
    const handleSubmit = () => {

    }
    const navigate = useNavigate();
    return (
        <div>
            <Typography variant='h5' className='text-center'>Login</Typography>
            <Formik onSubmit={handleSubmit} initialValues={initialValues}>
                <Form >
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
                        helperText={<ErrorMessage name="email" component="span" className="text-red-500" />}
                        margin="normal"
                    />
                    <Button sx={{mt:1,padding:"1rem"}} fullWidth type="submit" variant='contained'>Login</Button>
                </Form>
            </Formik>
            <Typography variant='body2' align='center' sx={{mt:3}}>
                Don't have an account?
                <Button size='small' onClick={()=>navigate("/account/register")}>Register</Button>

            </Typography>
        </div>
    )
}

export default LoginForm