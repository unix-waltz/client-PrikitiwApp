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
All:async (page) =>{
    try {
        const send = await instance.get(`/guest/all?page=${page}`) 
        return send.data
     } catch (error) {
         return error?.response?.data
     }
},
ByAuthor : async (page,author) =>{
    try {
        const send = await instance.get(`/guest/author/${author}?page=${page}`) 
        return send.data
     } catch (error) {
         return error?.response?.data
     }
},
ByCategory: async (page,category) =>{
    try {
        const send = await instance.get(`/guest/category/${category}?page=${page}`) 
        return send.data
     } catch (error) {
         return error?.response?.data
     }
},
search: async (page,keyword) =>{
    try {
        const send = await instance.get(`/guest/search?keyword=${keyword}&page=${page}`) 
        return send.data
     } catch (error) {
         return error?.response?.data
     }
}
}
export const {Index} = guestService
export default guestService


