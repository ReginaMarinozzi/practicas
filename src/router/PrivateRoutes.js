import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import MisOrdenesContainer from '../components/MisOrdenesContainer/MisOrdenesContainer';
import Contacto from '../components/Contacto/Contacto';
import Cart from '../components/Cart/Cart';
import { Routes, Route, Navigate } from 'react-router-dom'
import Checkout from '../components/Checkout/Checkout';
import WishList from './components/WishList/WishList';
import { LoginContext } from '../context/LoginContext';
import Loader from '../components/Loader/Loader';


const PrivateRoutes = () => {

    const { user, loading } = LoginContext()

    if (loading) return <Loader/>

    if (user) return <Navigate to="/"/>

    return (
            
            <Routes>
                <Route path='/' element={ <ItemListContainer/> }/>
                <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
                <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                <Route path='/cart' element={<Cart/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/ordenes/:userId' element={<MisOrdenesContainer />} />
                <Route path='/wishlist' element={<WishList />} />
                <Route path="/contacto" element={<Contacto/>}/>
                <Route path='*' element={ <Navigate to="/"/>} />
                {/* <Route path='*' element={ <Error404/>}/> */}

                {/* {
                    user.rol === "admin"
                    ? <Route path="/admin" element={ <AdminScreen />} />
                    : null
                } */}
            </Routes>
   
    )
}

export default PrivateRoutes