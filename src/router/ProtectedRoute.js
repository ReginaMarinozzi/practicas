import { Navigate } from "react-router-dom";
import { useLoginContext } from '../context/LoginContext'
import Loader from "../components/Loader/Loader";
import MisOrdenesContainer from "../components/MisOrdenesContainer/MisOrdenesContainer";
import Checkout from "../components/Checkout/Checkout";
import WishList from "../components/WishList/WishList";
import { Route } from 'react-router-dom'

export function ProtectedRoute() {

    const { user, loading } = useLoginContext();

    if (loading) return <Loader />;

    if (!user) return <Navigate to="/login" />;

    return (
        <>
            <Route path="/ordenes" element={<MisOrdenesContainer />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/wishlist" element={<WishList />} />
        </>
    );
}