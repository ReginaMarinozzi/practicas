import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../firebase/config"
import { Button, Container, Typography, Box } from '@mui/material'
import TextField from '@mui/material/TextField';

const CheckOut = () => {

    const { cart, cartTotal, terminarCompra } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }


        if (values.nombre.length < 2) {
            alert("Nombre incorrecto")
            return
        }

        if (values.email.length < 2) {
            alert("Email incorrecto")
            return
        }


        const ordenesRef = collection(db, 'ordenes54')


        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                setOrderId(doc.id)
                terminarCompra()
            })
    }

    if (orderId) {
        return (
            <div>
                <h2>Compra exitosa!</h2>
                <hr />
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
            </div>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <Container sx={{ marginTop: 15 }}>
            <Typography sx={{ padding: 5 }} variant="h4" component='h5' >Checkout</Typography>

            <Box sx={{display:'flex', flexFlow: 'column wrap', margin: 2}} component="form" noValidate
                autoComplete="off" onSubmit={handleSubmit}>

                <TextField sx={{ margin: 2 }}
                    required
                    id="outlined-required"
                    label="Tu nombre"
                    name="nombre"
                    onChange={handleInputChange}
                    value={values.nombre}
                    type={'text'}
                    placeholder="Tu nombre"
                />

                <TextField sx={{ margin: 2 }}
                    required
                    id="outlined-required"
                    label="Email"
                    name="email"
                    onChange={handleInputChange}
                    value={values.email}
                    type={'email'}
                    placeholder="Email"
                />

                <TextField sx={{ margin: 2 }}
                    required
                    id="outlined-required"
                    label="Dirección"
                    name="direccion"
                    onChange={handleInputChange}
                    value={values.direccion}
                    type={'text'}
                    placeholder="Dirección"
                />

                <Button sx={{ margin: 3 }} type="submit" variant="contained" size='small' color='warning'>Enviar</Button>

            </Box>


        </Container>
    )
}

export default CheckOut