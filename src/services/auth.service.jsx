import store from "../app/redux/store";
import instance from "../config/axios.config"
import  {jwtDecode}  from "jwt-decode";
import {Login,Logout,Refresh} from "../app/redux/auth.slice"
import { useSelector } from "react-redux";

const authservice = {
Login : async({email,password}) => {
    try {
        const send = await instance.post('/auth/login',{email:email,password:password})
        const user = jwtDecode(send.data?._token)
        store.dispatch(Login({token:send.data?._token,user:user}))
        return send.data
    } catch (error) {
        return error.response.data
    }
},
Logout : async() => {
    try {
await instance.delete('/auth/logout')
store.dispatch(Logout())
    } catch (error) {
        return error.response.data
    }
},
Register : async({email,password,username}) => {
    try {
       const send = await instance.post('/auth/register',{email:email,password:password,username:username})
        return send.data
    } catch (error) {
        return error.response.data
    }
},
Refresh : async() => {
    try {
        const send = await instance.post('/auth/refresh')
        const user = jwtDecode(send.data?._token)
        store.dispatch(Refresh({token:send.data?._token,isAuth:send.data?._token ? true : false,user:user}))
        return send.data
    } catch (error) {
        store.dispatch(Refresh({token:'',isAuth:false,user:null}))
        return error.response.data
    }
},
isAuthenticate : () => {
const isAuth = useSelector((state) => state.auth.isAuth)
const isUser = useSelector((state) => state.auth.user)
const isToken = useSelector((state) => state.auth.token)
return {isAuth,isToken,isUser}
} 
}


export default authservice