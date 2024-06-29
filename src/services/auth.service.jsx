import instance from "../config/axios.config"
const authservice = {
Login : async({email,password}) => {
    try {
        const send = await instance.post('/auth/login',{email:email,password:password})
        return send.data
    } catch (error) {
        return error.response.data
    }
},
Logout : () => {},
Register : async({email,password,username}) => {
    try {
       const send = await instance.post('/auth/register',{email:email,password:password,username:username})
        return send.data
    } catch (error) {
        return error.response.data
    }
},
Refresh : () => {}, 
}


export default authservice