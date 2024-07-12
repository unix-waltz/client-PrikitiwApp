import { toDateFormat } from "../../Utility/date.utils"
import Dompurify from "dompurify"
const PreviewPost = ({title,author,body,category,date,thumbnail}) => {
  return (
    <>
    <br />
    <br />
    <div className="container w-full mx-auto">
       <div className="w-1/2 mx-auto">
       <h1 className="text-teal-600 font-semibold text-3xl text-center">{title}</h1>
       <span className="text-center">
        <p className="mt-3 font-bold text-gray-500">{author?.username} - <span className="text-[#E76F51]">{category}</span></p>
        <p className="mt-1 mb-4  font-light text-sm text-gray-500">{toDateFormat(date)}</p>
       </span>
    <img className="object-cover max-h-96 w-full rounded"  src={`http://127.0.0.1:3000/posts-image/${thumbnail}`}/>
    <br />
    <section className="w-full">
    <div dangerouslySetInnerHTML={{ __html:Dompurify.sanitize(body) }} />
    </section>
       </div>
       <br />
    </div>
    </>
  )
}

export default PreviewPost