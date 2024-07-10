
import { Link } from "react-router-dom"
import { IoPricetagOutline } from "react-icons/io5";
import { toDateFormat } from "../Utility/date.utils";
const Card = ({date,title,thumbnail,category}) => {
  return (
    <>
    <Link className="group">
  <img
    alt=""
    src={`http://127.0.0.1:3000/posts-image/${thumbnail}`}
    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  />

  <div className="p-4">
  <p className="mt-2 line-clamp-3 text-sm text-gray-500">
  <span className="text-sm text-teal-500">{toDateFormat(date)}&nbsp;-&nbsp;&nbsp;</span> 
  <IoPricetagOutline style={{ display: 'inline-block', verticalAlign: 'middle' }} /> 
  &nbsp;{category}
</p>

      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
  </div>
</Link>
    </>
  )
}

export default Card