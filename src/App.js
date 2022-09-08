import ResponsiveAppBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Home from './components/Home/Home';

function App() {
  return (

    <BrowserRouter>

    <ResponsiveAppBar/>

      <Routes>

      <Route path='/' element={  <Home/> }/>
      <Route path='/item/:itemId' element={ <ItemDetailContainer/> } />
      <Route path='/productos/:categoryId' element={ <ItemListContainer/> } />
      <Route path='/productos/:categoryId' element={ <ItemListContainer/> } />
      <Route path='/productos/:categoryId' element={ <ItemListContainer/> } />
      <Route path='*' element={ <Navigate to="/" /> } />
    

      </Routes>


    </BrowserRouter>

  );
}

export default App;