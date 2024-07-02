import { Navigate, Outlet } from "react-router-dom";
import authservice from "../services/auth.service";
const AuthRoute = () => {
    const {isAuth} = authservice.isAuthenticate()
    return isAuth ?  <Outlet /> : <Navigate to="/login" /> ;
};

export default AuthRoute;
