import AuthLayout from "../../components/Partials/AuthLayout"

const CreatePost = () => {
  return (
    <>
      <AuthLayout>
        <span className="font-semibold text-xl text-teal-600">Post Forms</span>
        <br />
        <br />
        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6">
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
              <div className="bg-white lg:col-span-3 lg:p-12">
                <form action="#" className="space-y-4">
                  <div>
                    <label className="sr-only" htmlFor="name">Name</label>
                    <input
                      className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="sr-only" htmlFor="email">Email</label>
                      <input
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </div>

                    <div>
                      <label className="sr-only" htmlFor="phone">Phone</label>
                      <input
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </div>
                  </div>

                  <div className="max-w-sm">
                    <label htmlFor="file-input" className="sr-only">Choose file</label>
                    <input
                      type="file"
                      name="file-input"
                      id="file-input"
                      className="block w-full border border-gray-300 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none
                                 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="message">Message</label>
                    <textarea
                      className="w-full rounded-lg border border-gray-300 p-3 text-sm"
                      placeholder="Message"
                      rows="8"
                      id="message"
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </AuthLayout>
    </>
  )
}

export default CreatePost
