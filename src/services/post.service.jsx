const postservice = {
create: async ({values,Api}) => {
    const {authorId,body,category,thumbnail,title} = values
    const formData = new FormData();
    formData.append("authorId", authorId);
    formData.append("thumbnail", thumbnail);
    formData.append("body", body);
    formData.append("category", category);
    formData.append("title", title);
try {
      const send = await Api.post('/post/create', formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      return send.data
} catch (error) {
    return error.response?.data
}
  },
  getAllposts: async({Api,authorId}) => {
try {
  const send = await Api.get(`/post/all/myposts/${authorId}`)
  return send.data.data
} catch (error) {
  return error.response?.data
}
  },
  getSinglepost: async({Api,id}) => {
    // console.log(id)
    try {
      const send = await Api.get(`/post/detail/myposts/${id}`)
      return send.data.data
    } catch (error) {
      return error.response?.data
    }
      },
  updatePost: async({Api,values})=>{
    const {authorId,body,category,thumbnail,title,postId} = values
    const formData = new FormData();
    formData.append("authorId", authorId);
    formData.append("postId", postId);
    formData.append("postThumbnail", thumbnail);
    formData.append("body", body);
    formData.append("category", category);
    formData.append("title", title);
    try {
      const send = await Api.post(`/post/update`,formData,{
        headers: {
          "Content-Type": "multipart/form-data",
        }})
  return send.data
    } catch (error) {
      return error.response?.data
    }
  },
deletePost:async({Api,postId,authorId}) =>{
  console.log(postId,authorId)
  try {
    const send = await Api.post(`/post/delete`,{postId,authorId})
    return send.data
  } catch (error) {
    return error.response?.data
  }
}
}
export const {create,getAllposts,getSinglepost,updatePost,deletePost} = postservice
export default postservice