# React State and Props
  - Props => data passed by  a parent component to child
  - State => data create or stored in a component
  - states are maintained by a conmponent using hook

## Hook
  - Special function in a react application that gives us the feature of react
  - hook function starts with `use` keyword
  - hooks can only be called inside the component 

### State vs Effecthook
  - State Hook
    - to create a data inside the component we need to use state hook 
    - if any state of a component gets upadated/changed/set the component wil

### Commented Out 
{/* <section className="h-screen flex flex-col items-center justify-center p-2">
        <div className=" w-full md:w-2xl lg:w-3xl xl:w-4xl shadow-2xl bg-stone-200/75 rounded-tl-lg rounded-br-lg p-4 py-10">
          <PageHeadingWithSubtitle title="Login From here">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </PageHeadingWithSubtitle>

          <LoginForm />

          <div className="w-full flex flex-col gap-5">
            <span className="flex items-center">
              <span className="h-px flex-1 bg-gray-300"></span>
              <span className="shrink-0 px-4 text-gray-900">Or</span>
              <span className="h-px flex-1 bg-gray-300"></span>
            </span>

            <div className="flex w-full justify-center">
                <a href="/register" 
                className="cursor-pointer hover:underline  transition hover:scale-96 w-full p-2 rounded-full border border-green-800 text-green-950 text-lg text-center">
                    Register Here
                    </a>
            </div>

          </div>
        </div>
      </section> */}

//<table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">URL</th>
                        <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                    {/* Mock Data Row */}
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap">Summer Sale</td>
                        <td className="px-6 py-4">
                            <img src="https://via.placeholder.com/40" alt="Banner" className="w-10 h-10 rounded object-cover" />
                        </td>
                        <td className="px-6 py-4">
                            <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-green-100 text-green-800">Active</span>
                        </td>
                        <td className="px-6 py-4 text-blue-600 underline">https://example.com/summer</td>
                        <td className="px-6 py-4 flex items-center justify-center gap-2">
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 hover:bg-blue-200 text-blue-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21h6v-6H3v6z" />
                                </svg>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow-100 hover:bg-yellow-200 text-yellow-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path d="M15 12H9m12 0A9 9 0 11 3 12a9 9 0 0118 0z" />
                                </svg>
                            </button>
                            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-red-100 hover:bg-red-200 text-red-600">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    {/* End Mock Data Row */}
                </tbody>
            </table>