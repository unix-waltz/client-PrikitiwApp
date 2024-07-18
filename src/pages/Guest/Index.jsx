import UserLayout from "../../components/Partials/UserLayout"
import { Link } from "react-router-dom"
import useReactQuery from "../../hooks/useReactQuery"
import authservice from "../../services/auth.service"
import Card from "./../../components/Card"
import guestService from "../../services/guest.service"
const Index = () => {
const {data:posts,isLoading} = useReactQuery({query:guestService.Index,key:'index-post'})
  const {isAuth,isUser} = authservice.isAuthenticate()
if(isLoading) return <div>Loading....</div>
  return (
   <>
   <UserLayout>
    {isAuth && (
<header className="bg-gray-50 shadow border">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Welcome Back, {isUser.username}!</h1>

        <p className="mt-1.5 text-sm text-gray-500">Let's write a new blog post! 🎉</p>
      </div>

      <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
        <button
          className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
          type="button"
        >
          <Link to='/dashboard/me/my-posts' className="text-sm font-medium"> View Dashboard </Link>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </button>

        <Link to="/dashboard/me/new-post"
          className="block rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring"
          type="button"
        >
          Create Post
        </Link>
      </div>
    </div>
  </div>
</header>

    )}
   <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
      Understand what is going on.
        <strong className="font-extrabold text-teal-700 sm:block"> Increase Literacy. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      A news forum for all, providing creativity, ideas, innovations and news from all walks of life.
      </p>
{!isAuth && (

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
          to="/register"
        >
          Get Started
        </Link>

        <Link
          className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
          to="/about"
        >
          Learn More
        </Link>
      </div>
)}
    </div>
  </div>
</section>
<br />
<div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 w-[90%] mx-auto">
{posts && posts.map(post => (
  <Card
    key={post.id} 
    date={post.created_at}  
    title={post.title}
    body={post.body}
    thumbnail={post.thumbnail}
    category={post.category}
    url={`/detail/post/${post.id}`}
  />
))}
</div>

   </UserLayout>
   </>
  )
}

export default Index