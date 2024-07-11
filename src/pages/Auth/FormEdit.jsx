import authservice from "../../services/auth.service"
import { useNavigate } from "react-router-dom"
import useAxiosPrivate from "../../hooks/useAxiosPrivate"
import "trix"
import { useFormik } from "formik"
import { create } from "../../services/post.service"
import { mixed, object, string } from "yup"
import { useRef, useEffect } from "react"

const FormEdit = () => {
  const navigate = useNavigate()
  const Api = useAxiosPrivate()
  const { isUser } = authservice.isAuthenticate()
  const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
  const trixEditorRef = useRef(null)

  const { handleChange, handleSubmit, setFieldValue, errors, values } = useFormik({
    initialValues: {
      authorId: isUser.id,
      thumbnail: "",
      body: "",
      category: "",
      title: ""
    },
    validateOnChange: false,
    validationSchema: object({
      thumbnail: mixed().required('A Thumbnail is required')
        .test(
          'fileFormat',
          'Unsupported Format',
          value => value && SUPPORTED_FORMATS.includes(value.type)
        ),
      body: string().required("Body Is required").max(5000, "max 5000"),
      category: string().required("category Is required"),
      title: string().required("title Is required").max(500, "title is over"),
    }),
    onSubmit:async (values) => {
      const result = await create({values,Api})
   if(result.status == 'success'|| result.code == 200) return navigate('/dashboard/me/my-posts')
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
      <secttion>
        <script type="text/javascript" src="https://unpkg.com/trix@2.0.8/dist/trix.umd.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/trix@2.0.8/dist/trix.css" />
        <br/>
        <span className="font-semibold text-xl text-teal-600">Setting Forms</span>
        <br />
        <br />
        <section>
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
        </section>
      </secttion>
    </>
  )
}

export default FormEdit
