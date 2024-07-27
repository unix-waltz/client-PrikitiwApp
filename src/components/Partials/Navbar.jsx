import { useState } from "react"
import authservice from "../../services/auth.service"
import { Link } from "react-router-dom"
const Navbar = () => {
  const {isAuth,isUser} = authservice.isAuthenticate()
  const HandleLogout = async () => {
    let isConfirm = confirm('Logout?')
if(isConfirm){
await authservice.Logout()
}
}
  const [tab,setTab] = useState(false)
  const handleTab = () => setTab((pre)=>!pre)
  return (
    <div><header className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="flex h-16 items-center justify-between">
        <div className="md:flex md:items-center md:gap-12">
          <Link className="block text-teal-600" href="/">
            <span className="sr-only">Home</span>
           <span className="font-semibold text-xl"> PrikitiwApp</span>
          </Link>
        </div>
  
        <div className="hidden md:block">
          <nav aria-label="Global">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" to="/"> Home </Link>
              </li>
  
              <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" to="/news"> News - Blogs</Link>
              </li>
  
              <li>
                <Link className="text-gray-500 transition hover:text-gray-500/75" to="/about"> About </Link>
              </li>
            </ul>
          </nav>
        </div>
        
        <div className="flex items-center gap-4">
          {!isAuth && (
            <div className="sm:flex sm:gap-4">
            <Link
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
              to="/login"
            >
              Login
            </Link>
  
            <div className="hidden sm:flex">
              <Link
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600"
                to="/register"
              >
                Register
              </Link>
            </div>
          </div>
          )}
          {isAuth && (
             <div className="sm:flex sm:gap-4">
             <span
               className=" px-5 py-2.5 text-sm font-medium text-teal-600 "
             >
        {isUser.email}
             </span>
           </div>
          )}
          <div className="block md:hidden">
            <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                onClick={handleTab}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div className={tab ? 'block md:hidden' : 'hidden md:hidden'}>
  <div className="flex flex-col justify-between border-e bg-white">
  <div className="px-4 ">
   
    <ul className="mt-6 space-y-1">
  
   {isAuth &&( <div className=" inset-x-0 bottom-0 ">
    <Link to="" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="size-10 rounded-full object-cover"
      />

      <div>
        <p className="text-xs">
          <strong className="block font-medium">  {isUser.username}</strong>

          <span>   {isUser.email}</span>
        </p>
      </div>
    </Link>
  </div>)}
      

      <li>
        <Link
          to="/news"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
         News - Blogs
        </Link>
      </li>

      <li>
        <Link
          to="/about"
          className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
        About
        </Link>
      </li>

      {isAuth && (<li>
        <details className="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span className="text-sm font-medium"> Account </span>

            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul className="mt-2 space-y-1 px-4">

            <li>
              <div>
                <button
                  onClick={HandleLogout}
                  className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                >
                  Logout
                </button>
              </div>
            </li>
          </ul>
        </details>
      </li>)}
    </ul>
  </div>

 
</div>

        </div>
  </div>
  )
}

export default Navbar