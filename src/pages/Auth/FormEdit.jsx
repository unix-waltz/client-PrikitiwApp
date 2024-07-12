import authservice from "../../services/auth.service"
import { useNavigate } from "react-router-dom"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import "trix"
import { useFormik } from "formik"
import { updatePost } from "../../services/post.service"
import { mixed, object, string } from "yup"
import { useRef, useEffect, useState } from "react"

const FormEdit = ({data}) => {
  // console.log(data)
  const navigate = useNavigate()
  const [open,setOpen] = useState(false)
  const Api = useAxiosPrivate()
  const { isUser } = authservice.isAuthenticate()
  const trixEditorRef = useRef(null)

  const { handleChange, handleSubmit, setFieldValue, errors, values } = useFormik({
    initialValues: {
      authorId: isUser.id,
      postId: data.id,
      thumbnail: data.thumbnail,
      body: data.body,
      category:data.category,
      title: data.title
    },
    validateOnChange: false,
    validationSchema: object({
      body: string().max(5000, "max 5000"),
      category: string(),
      title: string().max(500, "title is over"),
      thumbnail: mixed()
        .nullable()
    }),
    
    onSubmit:async (values) => {
      // alert(values.thumbnail)
      const result = await updatePost({values,Api})
      console.log(result)
   if(result.status == 'success'|| result.code == 200) return window.location.reload()
    }
  })

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0]
    setFieldValue("thumbnail", file)
  }

  useEffect(() => {
    if (trixEditorRef.current) {
      trixEditorRef.current.addEventListener("trix-change", (event) => {
        setFieldValue("body", event.target.innerHTML)
      })
    }
  }, [])

  return (
    <>
      <div>
        <script type="text/javascript" src="https://unpkg.com/trix@2.0.8/dist/trix.umd.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@2.0.8/dist/trix.css" />
        <br/>
        <span className="font-semibold text-xl text-teal-600">Setting Forms</span>
        <br />
        <br />
        <div className="relative">
  <div className="inline-flex items-center overflow-hidden rounded-md border bg-white">
    <a
      href="#"
      className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
    >
      Edit
    </a>

    <button
    onClick={()=>setOpen(!open)}
    className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
      <span className="sr-only">Menu</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
{open && (
  <div
    className="z-50 absolute  mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
    role="menu"
  >
    <div className="p-2">
      
      <div>
        <button
          
          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
          role="menuitem"
        >
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>

          Delete This Post
        </button>
      </div>
    </div>
  </div>
  )}
</div>

        <div>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="bg-white lg:col-span-3 lg:p-12">
                <form action="#" className="space-y-4" onSubmit={handleSubmit} encType="multipart/form-data">
                  <div>
                    <label className="sr-only" htmlFor="name">title</label>
                    <input
                      className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                      placeholder="Title"
                      type="text"
                      id="name"
                      value={values.title}
                      onChange={handleChange}
                      name="title"
                    />
                    {errors.title && <div>{errors.title}</div>}
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="category">category</label>
                    <input
                      className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                      placeholder="category "
                      type="text"
                      name="category"
                      id="category"
                      value={values.category}
                      onChange={handleChange}
                    />
                    {errors.category && <div>{errors.category}</div>}
                  </div>

                  <div>
                    <label htmlFor="file-input" className="sr-only">Choose file</label>
                    <input
                      type="file"
                      name="thumbnail"
                      onChange={handleFileChange}
                      id="file-input"
                      className="block w-full border border-gray-300 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                                 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4"
                    />
                    {errors.thumbnail && <div>{errors.thumbnail}</div>}
                  </div>

                  <div>
                    <input id="x" type="hidden" name="body"
                      value={values.body}
                      onChange={handleChange} />
                    <trix-editor input="x" ref={trixEditorRef}></trix-editor>
                    {errors.body && <div>{errors.body}</div>}
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-teal-500 l px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Create Post
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FormEdit
