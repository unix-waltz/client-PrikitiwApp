import AuthLayout from "../../components/Partials/AuthLayout"
import { Link } from "react-router-dom"
const MyPosts = () => {
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
<div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
  <div className="h-32 rounded-lg bg-gray-200"></div>
</div>

    </AuthLayout>
  )
}

export default MyPosts