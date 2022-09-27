import NavBar from '../components/NavBar'
import LoginScreen from '../components/LoginScreen/LoginScreen'
import RegisterScreen from '../components/RegisterScreen/RegisterScreen'
import Home from '../components/Home'
import { Routes, Route, Navigate } from 'react-router-dom'

const PublicRoutes = () => {

    return (
        <>
        
        <NavBar/>

        <Routes>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='*' element={<Navigate to="/login" />} />
            <Route path='/' element={<Home/>}/>
        </Routes>
        </>
    )
}

export default PublicRoutes