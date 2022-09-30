import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useLoginContext } from '../../context/LoginContext'
import { useNavigate } from "react-router-dom"
import { TextField } from 'formik-mui'
import { Button } from '@mui/material'
import { useState } from "react"

const LoginScreen = () => {

  const { login, loginWithGoogle, resetPassword  } = useLoginContext();

  const user =[ {email: '', password: ''}]

  const [error, setError] = useState("");
  console.log(error)
  const navigate = useNavigate();

  const handleGoogleSignin = async () => {
        try {
          await loginWithGoogle();
          navigate("/");
        } catch (error) {
        setError(error.message);;
        }
      };
    
      const handleResetPassword = async (e) => {
        e.preventDefault();
        if (!user.email) return setError("Write an email to reset password");
        try {
          await resetPassword(user.email);
          setError('We sent you an email. Check your inbox')
        } catch (error) {
          setError(error.message);
        }
      };
  
  return (
    <Formik
      initialValues={{  email: '' , password:'' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        // password: Yup.string()
        // .required('Please Enter your password')
        // .matches(
        //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        // )
      })}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        setError("");
        try {
          await login(values.email, values.password)
          navigate("/")
        } catch (e) {
          setSubmitting(false)
          setError(error.message);
        }
      }}
    >
      {({ submitForm, isSubmitting }) => (
      <Form style={{margin: '200px'}}>
    
      <Field
        component={TextField}
        type="email"
        name="email"
        label="eMail"
      />
      <Field
        component={TextField}
        type="password"
        name="password"
        label="password"
      />
      <Button  
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        onClick={submitForm}
          >
        Submit
      </Button>
      <Button  
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        onClick={handleGoogleSignin}
          >
        Sign In With Google
      </Button>
      <Button  
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        onClick={handleResetPassword}
          >
        Reset password
      </Button>


      </Form>
      )}
    </Formik>
  );
};
export default LoginScreen
