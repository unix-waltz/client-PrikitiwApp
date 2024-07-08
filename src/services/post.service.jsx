import axiosprivate from "../config/axiosprivate.config";
const postservice = {
  create : async({thumbnail,title,authorId,description,category}) =>{
try {
    const send = axiosprivate("/post/create",
    {thumbnail,title,authorId,description,category})
    return send
} catch (error) {
    return error.response.data
}
  }  
}