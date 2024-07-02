import UserLayout from "../../components/Partials/UserLayout"
import { Link } from "react-router-dom"
const Index = () => {
  return (
   <>
   <UserLayout>
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

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-teal-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-700 focus:outline-none focus:ring active:bg-teal-500 sm:w-auto"
          href="#"
        >
          Get Started
        </a>

        <a
          className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-700 focus:outline-none focus:ring active:text-teal-500 sm:w-auto"
          href="#"
        >
          Learn More
        </a>
      </div>
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