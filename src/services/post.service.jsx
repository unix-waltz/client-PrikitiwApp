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
  }
}
export const {create,getAllposts} = postservice
export default postservice