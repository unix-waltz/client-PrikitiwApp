import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import Dompurify from "dompurify"
import guestService from "../../services/guest.service"
import UserLayout from "../../components/Partials/UserLayout"
import {toDateFormat} from "./../../Utility/date.utils"
const GuestDetailPost = () => {
    const {id} = useParams()
    const [post,setPost] = useState({})
    const HintAPI = async () =>{
        const {data} = await guestService.DetailPost(id)
        setPost(data)
    }
    useEffect(()=> {
        HintAPI()
    },[])
  return (
    <UserLayout>
    <br />
    <br />
    <div className="container w-full mx-auto">
       <div className="w-1/2 mx-auto">
       <h1 className="text-teal-600 font-semibold text-3xl text-center">{post.title}</h1>
       <span className="text-center">
        <p className="mt-3 font-bold text-gray-500">{post.author?.username} - <span className="text-[#E76F51]">{post.category}</span></p>
        <p className="mt-1 mb-4  font-light text-sm text-gray-500">{toDateFormat(post.created_at)}</p>
       </span>
    <img className="object-cover max-h-96 w-full rounded"  src={`http://127.0.0.1:3000/posts-image/${post.thumbnail}`}/>
    <br />
    <section className="w-full">
    <div dangerouslySetInnerHTML={{ __html:Dompurify.sanitize(post.body) }} />
    </section>
       </div>
       <br />
    </div>
    </UserLayout>
  )
}

export default GuestDetailPost