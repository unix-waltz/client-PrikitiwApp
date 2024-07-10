import { Link, useNavigate } from 'react-router-dom'
import {object, string} from 'yup'
import { useState } from 'react'
import { useFormik } from 'formik'
import authservice from '../../services/auth.service'
const Register = () => {
  const [errmessage,seterrmessage] = useState('')
  const redirect = useNavigate()
const _Submit = async (values) =>{
const {email,username,password} = values
const result = await authservice.Register({email,password,username})
if(result.status == 'success')return redirect('/login')
  seterrmessage(result.message)
}
  const {handleSubmit,handleChange,values,errors} = useFormik({
    initialValues : {
      username:'',
      email:'',
      password:''
    },
onSubmit:_Submit,
validationSchema:object({
  username : string().min(6,'must be at least 6 characters long').required('username is required'),
  email : string().email('Invalid email address!').required('email is required'),
  password : string().min(8,'must be at least 8 characters long').required('password is required'),
}),
validateOnChange:false
  })
  return (
    <>

<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1667842474031-8a0ba604df48?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </aside>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">

        <h1 className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
          Welcome to PrikitiwApp 🦑
        </h1>
{errmessage&& (
  <>
  <br />
  <div role="alert" className="rounded border-s-4 border-red-500 bg-red-50 p-4">
  <div className="flex items-center gap-2 text-red-800">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>

    <strong className="block font-medium">Register Failed!</strong>
  </div>

  <p className="mt-2 text-sm text-red-700">
   {errmessage}
  </p>
</div>
</>
)}
        <p className="mt-4 leading-relaxed text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam dolorum aliquam,
          quibusdam aperiam voluptatum.
        </p>

        <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit}>

          <div className="col-span-6">
            <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
              Username
            </label>

            <input
              type="text"
              id="FirstName"
              name="username"
              value={values.username}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
            {errors.username && errors.username}
          </div>

          

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

            <input
              type="email"
              id="Email"
              value={values.email}
              onChange={handleChange}
              name="email"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
            {errors.email && errors.email}

          </div>

          <div className="col-span-6 ">
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

            <input
              type="password"
              id="Password"
              name="password"
              value={values.password}
              onChange={handleChange}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
            {errors.password && errors.password}
          </div>
          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our
              <Link to="#" className="text-gray-700 underline"> terms and conditions </Link>
              and
              <Link to="#" className="text-gray-700 underline"> privacy policy</Link>.
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
            type='submit'
              className="inline-block shrink-0 rounded-md border border-teal-600 bg-teal-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-teal-600 focus:outline-none focus:ring active:text-teal-500"
            >
              Create an account
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <Link to="/login" className="text-gray-700 underline"> Log in</Link>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>

    </>
  )
}

export default Register