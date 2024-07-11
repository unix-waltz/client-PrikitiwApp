
import { Link } from "react-router-dom"
import { IoPricetagOutline } from "react-icons/io5";
import { toDateFormat } from "../Utility/date.utils";
const Card = ({date,title,thumbnail,category,id}) => {
  return (
    <>
    <div to="/post" className="group">
      <Link to={`/dashboard/me/my-posts/${id}`}>
  <img
    alt=""
    src={`http://127.0.0.1:3000/posts-image/${thumbnail}`}
    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  /></Link>

  <div className="p-4">
  <p className="mt-2 line-clamp-3 text-sm hover:text-black cursor-pointer text-gray-500">
  <span className="text-sm cursor-default text-teal-500">{toDateFormat(date)}&nbsp;-&nbsp;&nbsp;</span> 
  <Link to={`/dashboard/category/${category}`}>
  <IoPricetagOutline className="cursor-pointer" style={{ display: 'inline-block', verticalAlign: 'middle' }} /> 
  &nbsp;{category}
  </Link>
</p>
<Link to={`/dashboard/me/my-posts/${id}`}>
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      </Link>
  </div>
</div>
    </>
  )
}

export default Card