import { Container } from "@mui/system"
import Typography from '@mui/material/Typography';

 
const Header = () => {
 return (
   <Container sx={{backgroundImage: 'url("https://i.ibb.co/mv6fMF8/aesthetic-light-pink-watercolor-background-abstract-style-53876-108212.jpg")',
     backgroundAttachment: 'fixed',
     height: `500px`,
     textDecoration: 'none',
     color: '#000000',
   }}>
     <Typography variant="h1" align='center' sx={{paddingTop: 20}} >
       Pensamos en tu piel
     </Typography>
 
   </Container>
 
 )
}
 
export default Header