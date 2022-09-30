import React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useLoginContext } from '../../context/LoginContext'
import { useNavigate, Link } from "react-router-dom"
import { TextField } from 'formik-mui'
import { Button, Typography, Box, Grid } from '@mui/material'
import { useState } from "react"
import { Container } from '@mui/system'

const RegisterScreen = () => {

  const { signup } = useLoginContext();

  const [error, setError] = useState("");

  console.log(error)

  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .required('Please Enter your password')
          .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
          )
      })}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        setError("");
        try {
          await signup(values.email, values.password)
          navigate("/")
        } catch (e) {
          setSubmitting(false)
          setError(error.message);
        }
      }}
    >
      {({ submitForm, isSubmitting }) => (
        <Container sx={{ marginTop: 15 }}>

          <Typography variant="h4" component='h5'>Login</Typography>
          <Box>
            <Grid container>
          <Form >

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
            <Typography variant="body1" component={Link} to='/login'>Already have an Account?</Typography>

          </Form>
          </Grid>
          </Box>
        </Container>
      )}
    </Formik>
  )
}

export default RegisterScreen