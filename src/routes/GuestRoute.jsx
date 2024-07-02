import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const GuestRoute = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    console.log(isAuth); 
    return isAuth ? <Navigate to="/home" /> : <Outlet />;
};

export default GuestRoute;
