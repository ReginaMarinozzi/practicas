import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from '../../context/LoginContext'
import { Box, Typography, Container } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import * as React from 'react';
import * as Yup from 'yup';
// import Swal from 'sweetalert2'


const LoginScreen = () => {

  const { login, loginWithGoogle, resetPassword } = useLoginContext();

  const [error, setError] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  
  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      setError(error.message);
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
    console.log(handleResetPassword)
  };

  
  return (

    <Formik
      initialValues={{
        email: "",
        password: ""
      }}

      validationSchema={Yup.object({
        email: Yup.string()
          .email('eMail incorrecto')
          .required('Requerido'),
        password: Yup.string().required(),
        confirm_password: Yup.string().label('confirm password').required().oneOf([Yup.ref('password'), null], 'Passwords must match')

      })}

      onSubmit={async (values) => {
        setError("");
        try {
          await login(user.email, user.password);
          navigate("/");
        } catch (error) {
          setError(error.message);
          console.log(error)
        }

      }
      }
    >
      {({ submitForm, isSubmitting }) => (

        <Container sx={{ marginTop: 15 }}>
          <Typography sx={{ padding: 5 }} variant="h4" component='h5'>Login</Typography>

          <Box sx={{ display: 'flex', flexFlow: 'column wrap', margin: 2 }}>

            <Form >
            {error && <Typography>{error}</Typography>}
              <Field
                component={TextField}
                type="email"
                name="email"
                label="eMail"

              />

              <Field
                component={TextField}
                name="password"
                type="password"
                label="password"
              />
              <button
               
                disabled={isSubmitting}
                onClick={submitForm}
               
              >
                Sign In
              </button>
              <button
    
                disabled={isSubmitting}
                onClick={handleGoogleSignin}
              >
                Google login
              </button>

              <button
               
                disabled={isSubmitting}
                onClick={handleResetPassword}
              >
              Forgot your password?
              </button>

            </Form>
          </Box>
        </Container>
      )}
    </Formik >

    // <div>

    // <Typography variant="h5" sx={{marginTop: 20}}> Login </Typography>

    //   {error && <p>{error}</p>}

    //   <form
    //     onSubmit={handleSubmit}
    //   >
    //     <div>
    //       <label
    //         htmlFor="email"
    //          >
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         name="email"
    //         id="email"
    //         onChange={handleChange}
    //         placeholder="youremail@company.tld"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="password"
    //       >
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         name="password"
    //         id="password"
    //         onChange={handleChange}
    //         placeholder="*************"
    //       />
    //     </div>

    //     <div>
    //       <button
    //         type="submit"
    //       >
    //         Sign In
    //       </button>
    //       <a
    //         href="#!"
    //         onClick={handleResetPassword}
    //       >
    //         Forgot Password?
    //       </a>
    //     </div>
    //   </form>
    //   <button
    //     onClick={handleGoogleSignin}
    //   >
    //     Google login
    //   </button>
    //   <p>
    //     Don't have an account?
    //     <Link to="/register">
    //       Register
    //     </Link>
    //   </p>
    // </div>

  )
}

export default LoginScreen