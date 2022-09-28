import { Box, Button, Typography, Container } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';
import { useLoginContext } from '../../context/LoginContext'
import * as React from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const RegisterScreen = () => {

 const { signup } = useLoginContext();
    const navigate = useNavigate()
 
    return (
        <Formik
            initialValues={{ password: '', email: '', nombre: '' }}

            validationSchema={Yup.object({
                password: Yup.string().required('Password is required'),
                passwordConfirmation: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
                email: Yup.string()
                    .email('eMail incorrecto')
                    .required('Requerido'),
            })}

            onSubmit={async (values) => {
              

                try {
                    await signup(values.email, values.password)
                    navigate('/')
                }
                catch (error) {
                    console.log(error.message)
                }
            }}

        >

            {({ submitForm, isSubmitting }) => (

                <Container sx={{ marginTop: 15 }}>
                    <Typography sx={{ padding: 5 }} variant="h4" component='h5'>Login</Typography>

                    <Box sx={{ display: 'flex', flexFlow: 'column wrap', margin: 2 }}>
                        <Form >
                            <Field
                                component={TextField}
                                type="email"
                                name="email"
                                label="eMail"
                            />
                             <Field
                                component={TextField}
                                name="nombre"
                                type="nombre"
                                label="Nombre y apellido"
                            />
                        
                            <Field
                                component={TextField}
                                name="password"
                                type="password"
                                label="Contraseña"
                            />
                            <Button
                                variant="contained"
                                color="warning"
                                disabled={isSubmitting}
                                onClick={submitForm}
                                sx={{ margin: 3 }}
                                size='small'
                            >
                                Crear usuario
                            </Button>
                        </Form>
                    </Box>
                </Container>
            )}
        </Formik >
    )
}

export default RegisterScreen