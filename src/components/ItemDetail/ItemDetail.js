import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Container } from '@mui/system';
import { useState } from "react";


const ItemDetail = ({item}) => {

  const [cantidad, setCantidad] = useState (0)
  

  const handleAgregar = () => {
    const itemToCart = {
      id: item.id,
      nombre: item.nombre,
      precio: item.precio,
      cantidad
    }
    console.log(itemToCart)
  }


  return (

    <Container maxWidth='md' sx={{marginTop: 10, padding: 10, display: 'flex', flexFlow: 'column' , justifyContent: 'center'}} >
       <img src={item.img} alt={item.descripcion}/>
       <h3>{item.nombre} </h3>
       <span>{item.descripcion} </span>
       <span>Precio $ {item.precio}</span>
       <ItemCount 
        max={item.stock}
        counter={cantidad}
        setCantidad={setCantidad}
        handleAgregar={handleAgregar} />
    </Container>
  )
}

export default ItemDetail