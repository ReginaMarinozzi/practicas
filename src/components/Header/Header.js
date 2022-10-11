import { Stack, Typography } from '@mui/material'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import LockIcon from '@mui/icons-material/Lock'

const Header = () => {

  return (

    <Stack>
      <Stack
        justifyContent='center'
        height='80vh'
        sx={{
          backgroundImage: 'url("https://i.ibb.co/SKX5jc6/pawel-czerwinski-Gw-A9-CZi7f-PE-unsplash.jpg")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Typography
          variant="h1"
          component='h1'
          align='center'
          color='#FFFFFF'
        >
          Pensamos en tu piel
        </Typography>
      </Stack>

      <Stack
        direction='row'
        alignItems='center'
        justifyContent='space-evenly'
        mt={10}
        px={100}
      >
        <Stack
          alignItems='center'
          spacing={2}
        >
          <LocalShippingIcon
            sx={{ fontSize: `100px`, color: '#9E9E9E' }}
          />
          <Typography
            color='#9E9E9E'
          >
            Envíos a todo el país
          </Typography>
        </Stack>
        <Stack
          alignItems='center'
          spacing={2}
        >
          <LockIcon
            sx={{ fontSize: `100px`, color: '#9E9E9E' }}
          />
          <Typography
            color='#9E9E9E'
          >
            Comprá de forma segura
          </Typography>
        </Stack>
        <Stack
          alignItems='center'
          spacing={2}
        >
          <CreditCardIcon
            sx={{ fontSize: `100px`, color: '#9E9E9E' }}
          />
          <Typography
            color='#9E9E9E'
          >
            Pagá como quieras
          </Typography>
        </Stack>

      </Stack>

    </Stack>
  )
}

export default Header