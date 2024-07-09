const postservice = {
create: async ({values,Api}) => {
    const {authorId,body,category,thumbnail,title} = values
    const formData = new FormData();
    formData.append("authorId", authorId);
    formData.append("thumbnail", thumbnail);
    formData.append("body", body);
    formData.append("categoryz", category);
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
  }
}
export const {create} = postservice
export default postservice