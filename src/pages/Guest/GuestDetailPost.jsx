import { useParams } from "react-router-dom"
import Dompurify from "dompurify"
import { IoPricetagOutline } from "react-icons/io5";
import guestService from "../../services/guest.service"
import useReactQuery from "../../hooks/useReactQuery"
import { Link } from "react-router-dom";
import UserLayout from "../../components/Partials/UserLayout"
import {toDateFormat} from "./../../Utility/date.utils"
const GuestDetailPost = () => {
  const {id} = useParams()
const {data:post,isLoading} = useReactQuery({query: ()=>guestService.DetailPost(id),key:"detail-post"})
if(isLoading) return <div>Loading</div> 
 return (
    <UserLayout>
    <br />
    <br />
    <div className="container w-full mx-auto">
       <div className="w-1/2 mx-auto">
       <h1 className="text-teal-600 font-semibold text-3xl text-center">{post.title}</h1>
       <span className="text-center">
        <p className="mt-3 font-bold text-gray-500"><Link to={`/author/${post.author?.username}`}>{post.author?.username}</Link> - <Link to={`/category/${post.category}`} className="text-[#E76F51]">
  <IoPricetagOutline className="cursor-pointer text-gray-500" style={{ display: 'inline-block', verticalAlign: 'middle' }} /> 
  &nbsp;{post.category}
  </Link></p>
        <p className="mt-1 mb-4  font-light text-sm text-gray-500">{toDateFormat(post.created_at)}</p>
       </span>
    <img className="object-cover max-h-96 w-full rounded"  src={`http://127.0.0.1:3000/posts-image/${post.thumbnail}`}/>
    <br />
    <section className="w-full">
    <div dangerouslySetInnerHTML={{ __html:Dompurify.sanitize(post.body) }} className="" />
    </section>
       </div>
       <br />
    </div>
    </UserLayout>
  )
}

export default GuestDetailPost