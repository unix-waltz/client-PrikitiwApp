import instance from "../config/axios.config";
import { useEffect } from "react";
import authservice from "../services/auth.service";

const useAxiosPrivate = () => {
    const {isToken} = authservice.isAuthenticate()
    useEffect(()=>{
        const requestInterceptors = instance.interceptors.request.use((config) =>{
            config.headers = config.headers ?? {}
            config.headers["authorization"] = `Bearer ${isToken}`;
            return config
        },(errors)=>{Promise.reject(errors)})
        const responseInterceptors = instance.interceptors.response.use((config)=>config,
       async (errors)=>{
const prevrequest = errors?.config
if(errors.response.data.code === 401 && !prevrequest._sent){
    prevrequest._sent = true
    const {_token} = await authservice.Refresh()
    prevrequest.headers["authorization"] = `Bearer ${_token}`;

    return instance(prevrequest);
}
return Promise.reject(errors)
        })
 return () =>{
    instance.interceptors.request.eject(requestInterceptors);
    instance.interceptors.response.eject(responseInterceptors);
 }  
    },[isToken])
return instance
}

export default useAxiosPrivate