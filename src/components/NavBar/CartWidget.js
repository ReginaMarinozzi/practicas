import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const ShoppingCart = () => {

    const { cartQuantity } = useContext(CartContext)

    return (
       <Box component={Link} to='/cart'>
         <ShoppingCartIcon sx={{ display: { xs: 'flex', md: 'flex' }, mx: 1, color: '#FFFFFF' }}>
            <span> {cartQuantity()} </span>
        </ShoppingCartIcon>
        </Box>
    );
       
       
}

export default ShoppingCart