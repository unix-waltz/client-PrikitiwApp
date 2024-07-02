import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
const AuthRoute = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    console.log(isAuth); 
    return isAuth ?  <Outlet /> : <Navigate to="/login" /> ;
};

export default AuthRoute;
