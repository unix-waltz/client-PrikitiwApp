import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login  from './pages/Auth/Login'
import Register  from './pages/Auth/Register'
import { Provider } from "react-redux";
import store from "./app/redux/store";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./pages/Auth/Home";
import Index from "./pages/Guest/Index";
import GuestRoute from "./routes/GuestRoute";
import AuthRoute from "./routes/AuthRoute";
const App = () => {
  return (
  <Provider store={store}>
<BrowserRouter>
<Routes>
  <Route element={<PrivateRoute/>}>
{/* Auth */}
    <Route element={<AuthRoute/>}>
          <Route path="/home" element={<Home/>}/>
    </Route>
{/* guest */}
  <Route element={<GuestRoute/>}>
           <Route path="/" element={<Index/>} />
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
  </Route>
  
  </Route>
</Routes>
</BrowserRouter>
  </Provider>
  )
}

export default App