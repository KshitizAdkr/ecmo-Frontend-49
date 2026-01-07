import { PageHeadingSubtitle, PageHeadingTitle } from "../../components/page-heading/pageHeading";
import { formLabel } from "../../components/form/formLabel"
import { EmailInput } from "../../components/form/formInput";

export default function LoginPage() {

    return (
        <>
        {/* <form id="loginForm" className="flex flex-col gap-5 p-4"> */}
            <section className="flex flex-col w-full md:flex-row md:items-center"></div>
                <formLabel htmlFor="email">Username: </formLabel>
                <div className="w-full md:w-3/4">
                    <EmailInput name="email">                
                </div>
        </form>
        <div className="w-full md:w-2xl lg:w-3xl xl:w-4xl border border-[#a1a1a1] bg-stone-50 rounded-tl-lg rounded-br-lg p-4 py-10">

            <PageHeadingTitle title="Login Form Here"/>

            <PageHeadingSubtitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </PageHeadingSubtitle>

            <LoginForm/>
            {/* // <h1 className="text-3xl font-bold">Login Page</h1>
            // <form action="" className="flex flex-col gap-5 p-4">
            //     <div className="flex flex-col w-full md:flex-row md:items-center">
            //         <label htmlFor="email" className="w-full md:w-1/4 font-bold">Username: </label>
            //         <div className="w-full md:3/4">
            //             <input type="email"  id="email" placeholder="Enter your Username" className="w-full p-2 rounded-lg border border-gray-600">
            //         </div>
            //     </div>

            //     <div className="flex flex-col w-full md:flex-row md:items-center">
            //         <label htmlFor="Password" className="w-full md:w-1/4 font-bold">Password: </label>
            //         <div className="w-full md:3/4">
            //             <input onkeyup="handleChange(this)" type="Password" id="Password" placeholder="Enter your Password" className="w-full p-2 rounded-lg border border-gray-600">
            //         </div>
            //     </div>

            //     <div className="flex flex-col md:flex-row gap-5 items-center">
            //         <button className="cursor-pointer hover:underline hover:bg-red-900 transition hover:scale-96 w-full p-2 rounded-md border bg-red-800 border-red-800 text-white text-lg">
            //             Login
            //         </button>

            //         <button className="cursor-pointer hover:underline hover:bg-emerald-900 transition hover:scale-96 w-full p-2 rounded-md border bg-emerald-800 border-emerald-800 text-white text-lg">
            //             Cancel
            //         </button>

            //     </div>

            // </form>
        </div> */}
        </div>
        </section>
    </>
    );
}