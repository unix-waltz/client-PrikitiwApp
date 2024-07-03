import UserLayout from "../../components/Partials/UserLayout"
import { Link } from "react-router-dom"
import authservice from "../../services/auth.service"
const Index = () => {
  const {isAuth,isUser} = authservice.isAuthenticate()
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
          <Link to='/dashboard/me' className="text-sm font-medium"> View Dashboard </Link>

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
        Understand User Flow.
        <strong className="font-extrabold text-teal-700 sm:block"> Increase Conversion. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>
{!isAuth && (

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
          href="#"
        >
          Get Started
        </Link>

        <Link
          className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
          href="#"
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
<Link className="group">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  />

  <div className="p-4">
<span className="text-sm text-teal-500">17 juni 2006</span>
      <h3 className="text-lg font-medium text-gray-900">Finding the Journey to Mordor</h3>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aspernatur mollitia cumque omnis, fugit fugiat veritatis facere, dolorem harum cupiditate itaque doloremque vitae dignissimos temporibus suscipit. Corrupti numquam repellendus velit.
    </p>
  </div>
</Link>
<Link className="group">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  />

  <div className="p-4">
<span className="text-sm text-teal-500">17 juni 2006</span>
      <h3 className="text-lg font-medium text-gray-900">Finding the Journey to Mordor</h3>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aspernatur mollitia cumque omnis, fugit fugiat veritatis facere, dolorem harum cupiditate itaque doloremque vitae dignissimos temporibus suscipit. Corrupti numquam repellendus velit.
    </p>
  </div>
</Link>
<Link className="group">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  />

  <div className="p-4">
<span className="text-sm text-teal-500">17 juni 2006</span>
      <h3 className="text-lg font-medium text-gray-900">Finding the Journey to Mordor</h3>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aspernatur mollitia cumque omnis, fugit fugiat veritatis facere, dolorem harum cupiditate itaque doloremque vitae dignissimos temporibus suscipit. Corrupti numquam repellendus velit.
    </p>
  </div>
</Link>
<Link className="group">
  <img
    alt=""
    src="https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
    className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
  />

  <div className="p-4">
<span className="text-sm text-teal-500">17 juni 2006</span>
      <h3 className="text-lg font-medium text-gray-900">Finding the Journey to Mordor</h3>

    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aspernatur mollitia cumque omnis, fugit fugiat veritatis facere, dolorem harum cupiditate itaque doloremque vitae dignissimos temporibus suscipit. Corrupti numquam repellendus velit.
    </p>
  </div>
</Link>

</div>

   </UserLayout>
   </>
  )
}

export default Index