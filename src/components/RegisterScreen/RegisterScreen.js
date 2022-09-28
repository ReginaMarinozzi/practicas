import { Container, Box } from '@mui/material';
// import { Formik, Form, Field } from 'formik';
// import { TextField } from 'formik-mui';
import { useLoginContext } from '../../context/LoginContext'

// import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';


const RegisterScreen = () => {

    const { signup } = useLoginContext();
    const [user, setUser] = useState({
        email: "",
        password: "",
      });
    
      const navigate = useNavigate();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
          await signup(user.email, user.password);
          navigate("/");
        } catch (error) {
            console.log(error.message);
        }
      };

return (
    
    <Container  sx={{ marginTop: 15 }}>

        <form
            onSubmit={handleSubmit}

        >
            <Box >
                <label
                    htmlFor="email"

                >
                    Email
                </label>
                <input
                    type="email"
                    onChange={(e) => setUser({ ...user, email: e.target.value })}

                    placeholder="youremail@company.tld"
                />
            </Box>

            <Box >
                <label
                    htmlFor="password"

                >
                    Password
                </label>
                <input
                    type="password"
                    onChange={(e) => setUser({ ...user, password: e.target.value })}

                    placeholder="*************"
                />
            </Box>

            <button >
                Register
            </button>
        </form>
        <p >
        Already have an Account?
        <Link to="/login">
          Login
        </Link>
      </p>
    </Container>
    // <Formik
    //     initialValues={{ password: '', email: '', nombre: '' }}

    //     validationSchema={Yup.object({
    //         password: Yup.string().required('Password is required'),
    //         passwordConfirmation: Yup.string()
    //             .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    //         email: Yup.string()
    //             .email('eMail incorrecto')
    //             .required('Requerido'),
    //     })}

    //     onSubmit={async (values) => {


    //         try {
    //             await signup(values.email, values.password)
    //             navigate('/')
    //         }
    //         catch (error) {
    //             console.log(error.message)
    //         }
    //     }}

    // >

    //     {({ submitForm, isSubmitting }) => (

    //         <Container sx={{ marginTop: 15 }}>
    //             <Typography sx={{ padding: 5 }} variant="h4" component='h5'>Login</Typography>

    //             <Box sx={{ display: 'flex', flexFlow: 'column wrap', margin: 2 }}>
    //                 <Form >
    //                     <Field
    //                         component={TextField}
    //                         type="email"
    //                         name="email"
    //                         label="eMail"
    //                     />
    //                      <Field
    //                         component={TextField}
    //                         name="nombre"
    //                         type="nombre"
    //                         label="Nombre y apellido"
    //                     />

    //                     <Field
    //                         component={TextField}
    //                         name="password"
    //                         type="password"
    //                         label="Contraseña"
    //                     />
    //                     <Button
    //                         variant="contained"
    //                         color="warning"
    //                         disabled={isSubmitting}
    //                         onClick={submitForm}
    //                         sx={{ margin: 3 }}
    //                         size='small'
    //                     >
    //                         Crear usuario
    //                     </Button>
    //                 </Form>
    //             </Box>
    //         </Container>
    //     )}
    // </Formik >
)
}

export default RegisterScreen