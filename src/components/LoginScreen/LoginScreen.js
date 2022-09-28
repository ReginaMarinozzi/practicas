import { Container, Box } from '@mui/material';
// import { Formik, Form, Field } from 'formik';
// import { TextField } from 'formik-mui';
import { useLoginContext } from "../../context/LoginContext"
// import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from "react";

const LoginScreen = () => {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const { login, loginWithGoogle, resetPassword } = useLoginContext();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await login(user.email, user.password);
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleChange = ({ target: { value, name } }) =>
        setUser({ ...user, [name]: value });

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            navigate("/");
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            await resetPassword(user.email);

        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Container sx={{ marginTop: 15 }} >


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
                        name="email"
                        id="email"
                        onChange={handleChange}
                        placeholder="your email"
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
                        name="password"
                        id="password"
                        onChange={handleChange}
                        placeholder="*************"
                    />
                </Box>

                <Box >
                    <button

                        type="submit"
                    >
                        Sign In
                    </button>
                    <a

                        href="#!"
                        onClick={handleResetPassword}
                    >
                        Forgot Password?
                    </a>

                </Box>
            </form>
            <button
                onClick={handleGoogleSignin}
            >
                Google login
            </button>
            <p >
                Don't have an account?
                <Link to="/register">
                    Register
                </Link>
            </p>
        </Container>
    );
}





// const { login, loginWithGoogle } = useLoginContext

// const navigate = useNavigate()

// const handleGoogleSignIn = async () => {
//     try {
//         await loginWithGoogle
//         navigate('/')
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// return (
//     <Formik
//         initialValues={{ password: '', email: '' }}

//         validationSchema={Yup.object({
//             password: Yup.string().required('Password is required'),
//             passwordConfirmation: Yup.string()
//                 .oneOf([Yup.ref('password'), null], 'Passwords must match'),
//             email: Yup.string()
//                 .email('eMail incorrecto')
//                 .required('Requerido'),
//         })}

//         onSubmit={async (values) => {
//             try {
//                 await login(values.email, values.password)
//                 navigate('/')
//             }
//             catch (error) {
//                 console.log(error.message)
//             }
//         }}


//     >

//         {({ submitForm, isSubmitting }) => (

//             <Container sx={{ marginTop: 15 }}>
//                 <Typography sx={{ padding: 5 }} variant="h4" component='h5'>Login</Typography>

//                 <Box sx={{ display: 'flex', flexFlow: 'column wrap', margin: 2 }}>
//                     <Form >
//                         <Field
//                             component={TextField}
//                             type="email"
//                             name="email"
//                             label="eMail"
//                         />

//                         <Field
//                             component={TextField}
//                             name="password"
//                             type="password"
//                             label="Contraseña"
//                         />
//                         <Button
//                             variant="contained"
//                             color="warning"
//                             disabled={isSubmitting}
//                             onClick={submitForm}
//                             sx={{ margin: 3 }}
//                             size='small'
//                         >
//                             Iniciar
//                         </Button>

//                         <Button
//                             variant="contained"
//                             color="warning"
//                             sx={{ margin: 3 }}
//                             size='small'
//                             onClick={handleGoogleSignIn}
//                         >
//                             Login con Google
//                         </Button>

//                     </Form>
//                 </Box>
//             </Container>
//         )}
//     </Formik >
// )


export default LoginScreen