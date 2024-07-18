import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login  from './pages/Auth/Login'
import Register  from './pages/Auth/Register'
import { Provider } from "react-redux";
import store from "./app/redux/store";
import PrivateRoute from "./routes/PrivateRoute";
import AllPost from "./pages/Guest/AllPost";
import Index from "./pages/Guest/Index";
import GuestRoute from "./routes/GuestRoute";
import AuthRoute from "./routes/AuthRoute";
import MyPosts from "./pages/Auth/MyPosts";
import CreatePost from "./pages/Auth/CreatePost";
import DetailPost from "./pages/Auth/DetailPost";
import GuestDetailPost from "./pages/Guest/GuestDetailPost";
import About from "./pages/Guest/About";

const App = () => {
  return (
  <Provider store={store}>
<BrowserRouter>
<Routes>
  <Route element={<PrivateRoute/>}>
{/* Auth */}
    <Route element={<AuthRoute/>}>
          {/* <Route  path="/dashboard/me/my-posts/:id" />
          <Route  path="/dashboard/me/my-posts/:id" /> */}
          <Route  path="/dashboard/category/:category" />
          <Route  path="/dashboard/me/my-posts/:id" element={<DetailPost/>} />
          <Route path="/dashboard/me/my-posts" element={<MyPosts/>}/>
          <Route path="/dashboard/me/new-post" element={<CreatePost/>}/>
    </Route>
{/* guest */}
  <Route element={<GuestRoute/>}>
           <Route path="/login" element={<Login/>}/>
           <Route path="/register" element={<Register/>}/>
  </Route>
  {/* Public */}
           <Route path="/" element={<Index/>} />
           <Route path="/news" element={<AllPost/>} />
           <Route path="/detail/post/:id" element={<GuestDetailPost/>} />
           <Route path="/about" element={<About/>} />
  </Route>
</Routes>
</BrowserRouter>
  </Provider>
  )
}

export default App