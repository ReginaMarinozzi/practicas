import { CartProvider } from './context/CartContext';
import { LoginProvider } from './context/LoginContext';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import LoginScreen from './components/LoginScreen/LoginScreen';
import RegisterScreen from './components/RegisterScreen/RegisterScreen';
import ResponsiveAppBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { ProtectedRoute } from './router/ProtectedRoute';


const App = () => {

  return (
    <LoginProvider>
      <CartProvider>
        <BrowserRouter>

          <ResponsiveAppBar />

          <Routes>

            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='*' element={<Navigate to="/login" />} />
            <Route path='/' element={<Home />} />
            <Route path='/productos/:categoryId' element={<ItemListContainer />} />
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />

            <Route path="/" element={<ProtectedRoute />}/>

         </Routes>
        </BrowserRouter>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;

