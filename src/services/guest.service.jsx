import instance from "../config/axios.config"
const guestService = {
Index: async ()=>{
    try {
       const send = await instance.get('/guest/index') 
       return send.data.data
    } catch (error) {
        return error?.response?.data
    }
},
DetailPost :async (id)=>{
    try {
       const send = await instance.get(`/guest/detail/${id}`) 
       return send.data.data
    } catch (error) {
        return error?.response?.data
    }
},
All:async () =>{
    try {
        const send = await instance.get(`/guest/all`) 
        return send.data
     } catch (error) {
         return error?.response?.data
     }
}
}
export const {Index} = guestService
export default guestService


