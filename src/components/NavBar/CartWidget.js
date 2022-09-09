import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import {Typography } from '@mui/material';

const ShoppingCart = () => {

    const { cartQuantity } = useCartContext()

    return (
        <Avatar variant='square' sx={{padding: 2, display: 'flex', alignItems: 'center'}} component={Link} to='/cart'>
            <ShoppingCartIcon sx={{padding: 1, color: '#FFFFFF' }}></ShoppingCartIcon>
            <Typography
             sx={{padding: 1, color: '#FFFFFF' }}>
            {cartQuantity()} 
            </Typography>
        </Avatar>
    );
 }

export default ShoppingCart