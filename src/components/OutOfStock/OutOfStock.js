import React from 'react';
import { Box } from '@mui/system';
import { CardMedia, Card, CardContent } from '@mui/material';
import Typography from '@mui/material/Typography';

const OutOfStock = ({ item }) => {
  return (
    <Card sx={{ marginTop: 12, marginBottom: 15, padding: 10, display: 'flex', justifyContent: 'center' }} >

      <CardMedia component="img" image={item.img} alt={item.descripcion} sx={{ borderRadius: `10px` }} />

      <Box sx={{ marginTop: 3, padding: 5, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>

        <CardContent align="justify">
          <Typography align="center" variant="h4" component='h4' >{item.nombre}</Typography>
          <Typography variant="body1" component='p' align="">{item.descripcion}</Typography>
          <Typography variant="h5" component='h5' align="center" sx={{ padding: 2 }}>Precio $ {item.precio}</Typography>
        </CardContent>

        <Box variant='outline' sx={{ backgroundColor: 'grey' }}>
          <Typography variant="h5" component='h5' >
            Sin Stock
          </Typography>
        </Box>

      </Box>

    </Card>
  )
}

export default OutOfStock