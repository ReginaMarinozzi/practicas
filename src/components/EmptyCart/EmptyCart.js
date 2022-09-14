import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <Box>
            <Typography sx={{marginTop: 10}} variant="h2" component='h3' align='center'>Tu carrito está vacio</Typography>
            <Button variant='contained' component={Link} to='/'>Ir a comprar</Button>
        </Box>
    )
}

export default EmptyCart