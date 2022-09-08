import { Container } from '@mui/system'
import React from 'react'
import Header from '../Header/Header'
import ItemListContainer from '../ItemListContainer/ItemListContainer'


const Home = () => {
  return (
    <Container>
         <Header/>
         <ItemListContainer/>
    </Container>

   
  
  )
}

export default Home