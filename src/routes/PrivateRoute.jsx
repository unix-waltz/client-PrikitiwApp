import { useRef, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import authservice from "../services/auth.service";
const PrivateRoute = () => {
  const [isInitializing, setIsInitializing] = useState(true);
  const isMounted = useRef(false);

  const InitializingApp = async () => {
    await authservice.Refresh();
    setIsInitializing(false);
  };

  useEffect(() => {
    if (!isMounted.current) {
      InitializingApp();
      isMounted.current = true;
    }
  }, []);

  if (isInitializing) {
    return <p>Loading...</p>;
  }
  return <Outlet/> 
};

export default PrivateRoute;
