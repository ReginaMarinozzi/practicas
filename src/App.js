import ResponsiveAppBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import CheckOut from './components/CheckOut/CheckOut';

function App() {


  return (
    <CartProvider>

      <BrowserRouter>

        <ResponsiveAppBar /> 

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<CheckOut />} />
          <Route path='/productos/:categoryId' element={<ItemListContainer />} />
          <Route path='*' element={<Navigate to="/" />} />

        </Routes>

      </BrowserRouter>

    </CartProvider>

  );
}

export default App;