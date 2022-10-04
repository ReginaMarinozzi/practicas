import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useLoginContext } from '../../context/LoginContext'
import { useNavigate, Link } from "react-router-dom"
import { TextField } from 'formik-mui'
import { Button, Typography, Grid } from '@mui/material'
import { useState } from "react"
import { Container } from '@mui/system'


const LoginScreen = () => {

  const { login, loginWithGoogle, user } = useLoginContext();

  console.log(user)

  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleGoogleSignin = async () => {
    try {
      await loginWithGoogle();
      navigate(-1);
    } catch (error) {
      setError(error.message)
    }
  };

  // const handleResetPassword = async (e) => {
  //   e.preventDefault();
  //   if (!user.email) return setError("Write an email to reset password");
  //   try {
  //     await resetPassword(user.email);
  //     setError('We sent you an email. Check your inbox')
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        // password: Yup.string()
        //   .required('Please Enter your password')
        //   .matches(
        //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        //   )
      })}
      onSubmit={async (values) => {
        setError('');
        try {
          await login(values.email, values.password)
          navigate('/')
        } catch (error) {
          if (error.code === 'auth/user-not-found') {
            setError('Correo invalido')
          }
          if (error.code === 'auth/wrong-password') {
            setError('Contraseña invalida')
          }
          if (error.code === ' auth/user-not-found') {
            setError('Usuario no encontrado')
          }
        }
      }}
    >
      {({ submitForm, isSubmitting }) => (
 <Container sx={{ marginTop: 15 }}>

 <Typography variant="h4" component='h5'>Login</Typography>

 <Grid container my={4} rowSpacing={2} columnSpacing={1} >
   <Form>
     <Grid item md={12} >
       {error && <Typography variant="body1" component='p'>{error}</Typography>}
       <Field sx={{ margin: 1 }}
         component={TextField}
         type="email"
         name="email"
         label="eMail"
       />
       <Field sx={{ margin: 1 }}
         component={TextField}
         type="password"
         name="password"
         label="password"
       />
     </Grid>
     <Grid item md={12}>
       <Button sx={{ margin: 1 }}
         variant="contained"
         color="primary"
         disabled={isSubmitting}
         onClick={submitForm}
       >
         Submit
       </Button>
       <Button sx={{ margin: 1 }}
         variant="contained"
         color="primary"
         disabled={isSubmitting}
         onClick={handleGoogleSignin}
       >
         Sign In With Google
       </Button>
       {/* <Button sx={{ margin: 1 }}
         variant="contained"
         color="primary"
         disabled={isSubmitting}
         onClick={handleResetPassword}
       >
         Reset password
       </Button>  */}
     </Grid>
     <Typography sx={{ margin: 1 }} variant="body1" component={Link} to='/register'>Register</Typography>
   </Form>
 </Grid>


</Container>
)}
</Formik>
  )
}
export default LoginScreen