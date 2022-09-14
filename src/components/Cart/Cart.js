import { Button, Divider, Typography, Box } from '@mui/material'
import { Container } from '@mui/system'
import { useCartContext } from '../../context/CartContext'
import DeleteIcon from '@mui/icons-material/Delete';
import EmptyCart from '../EmptyCart/EmptyCart';


const Cart = () => {


    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    if (cart.lenght === 0) {
        return (
            <EmptyCart/>
        )
    }


    return (
        <Container sx={{ marginTop: 15, display: 'flex', flexFlow: 'column', justifyContent: 'center' }}>
            <Typography variant="h2" component='h2' sx={{ padding: 2 }} >
                Carrito de compras
            </Typography>

            <Divider />

            {cart.map((item) => (
                <Container key={item.id} >
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ width: "10%", padding: 2 }} component='img' src={item.img} alt={item.name} />
                        <Typography sx={{ padding: 2 }} variant="h5" component='h5' >{item.nombre} </Typography>
                        <Typography sx={{ padding: 2 }} variant="h6" component='h6' >Precio $ {item.precio} </Typography>
                        <Typography sx={{ padding: 2 }} variant="h6" component='h6' >{item.cantidad} </Typography>
                        <Button sx={{ margin: 1 }} variant="contained" size='small' color='error' onClick={() => removeItem(item.id)}>
                            <DeleteIcon />
                        </Button>
                    </Box>
                    <Divider />
                </Container>
            ))}

            <Divider />

            <Typography variant="h4" sx={{ margin: 2, textAlign: 'right' }} >
                Total ${cartTotal()}
            </Typography>
            <Box sx={{ textAlign: 'right' }}>
                <Button variant='contained' color='warning' size='large' onClick={emptyCart}>
                    Vaciar carrito
                </Button>

            </Box>

        </Container>
    )
}

export default Cart