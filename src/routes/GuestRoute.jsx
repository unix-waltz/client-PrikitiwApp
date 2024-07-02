import { Navigate, Outlet } from "react-router-dom";
import authservice from "../services/auth.service";
const GuestRoute = () => {
    const {isAuth} = authservice.isAuthenticate()
    return isAuth ? <Navigate to="/home" /> : <Outlet />;
};

export default GuestRoute;
