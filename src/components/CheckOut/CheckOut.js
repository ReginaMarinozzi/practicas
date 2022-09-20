import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection } from 'firebase/firestore'
import { db } from "../../firebase/config"
import { Button, Container, Typography, Box, TextField } from '@mui/material'

const CheckOut = () => {

    const { cart, cartTotal, terminarCompra } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleTextFieldChange = (e) => {
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
        if (values.apellido.length < 2) {
            alert("Apellido incorrecto")
            return
        } if (values.direccion.length < 2) {
            alert("Dirección incorrecto")
            return
        }
        if (values.email.length < 2) {
            alert("Email incorrecto")
            return
        }


        const ordenesRef = collection(db, 'ordenes')


        addDoc(ordenesRef, orden)
            .then((doc) => {
                console.log(doc.id)
                setOrderId(doc.id)
                terminarCompra()
            })
    }

    if (orderId) {
        return (
            <Container sx={{ margin: 15 }}>
                <h2>Compra exitosa!</h2>
                <hr />
                <p>Tu número de orden es: <strong>{orderId}</strong></p>
            </Container>
        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }

    return (
        <Container sx={{ marginTop: 15 }}>
            <Typography sx={{ padding: 5 }} variant="h4" component='h5' >Checkout</Typography>

            <Box sx={{ display: 'flex', flexFlow: 'column wrap', margin: 2 }} component="form" noValidate
                autoComplete="off" onSubmit={handleSubmit}>

                <TextField sx={{ margin: 2 }}
                    name="nombre"
                    onChange={handleTextFieldChange}
                    value={values.nombre}
                    type={'text'}
                    placeholder="Tu nombre"
                />
                <TextField sx={{ margin: 2 }}
                    name="apellido"
                    onChange={handleTextFieldChange}
                    value={values.apellido}
                    type={'text'}
                    placeholder="Tu apellido"
                />
                <TextField sx={{ margin: 2 }}
                    name="email"
                    onChange={handleTextFieldChange}
                    value={values.email}
                    type={'email'}
                    placeholder="Email"
                />

                <TextField sx={{ margin: 2 }}
                    name="direccion"
                    onChange={handleTextFieldChange}
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