import AuthLayout from "../../components/Partials/AuthLayout"
import { Link } from "react-router-dom"
import { getAllposts } from "../../services/post.service"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import { useEffect } from "react"
import { useState } from "react"
import authservice from "../../services/auth.service"
import Card from "./../../components/Card"
const MyPosts = () => {
  const [posts,setPosts] = useState([])
  const {isUser} = authservice.isAuthenticate()
  const Api = useAxiosPrivate()
  const HintAPI = async ()=>{
    const result = await getAllposts({Api,authorId:isUser.id})
    setPosts(result)
    }
  useEffect(()=>{
    HintAPI()
  },[])
  return (
    <AuthLayout>

<span className="font-semibold text-xl text-teal-600"> My Posts</span>
<br />
      <br />
      <Link
  className="inline-block rounded border border-teal-600 px-12 py-3 text-sm font-medium text-teal-600 hover:bg-teal-600 hover:text-white focus:outline-none focus:ring active:bg-teal-500"
  to="/dashboard/me/new-post"
>
  + New Post
</Link>
<br /><br />
<div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
{posts && posts.map(post => (
  <Card
    key={post.id} 
    id={post.id}
    date={post.created_at}  
    title={post.title}
    body={post.body}
    thumbnail={post.thumbnail}
    category={post.category}
  />
))}

</div>

    </AuthLayout>
  )
}

export default MyPosts