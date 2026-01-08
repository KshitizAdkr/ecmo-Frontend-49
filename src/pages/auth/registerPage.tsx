import { PageHeadingWithSubtitle } from "../../components/page-heading/pageHeading";

export default function registerPage() {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center p-2">
        <div className="w-full md:w-2xl lg:w-3xl xl:w-4xl shadow-2xl bg-stone-200/75 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg p-5">
          <PageHeadingWithSubtitle title="register From here">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </PageHeadingWithSubtitle> 

          Register Form

          <div className="w-full flex flex-col gap-5">
            <span className="flex items-center">
              <span className="h-px flex-1 bg-gray-300"></span>
              <span className="shrink-0 px-4 text-gray-900">Or</span>
              <span className="h-px flex-1 bg-gray-300"></span>
            </span>

            <div className="flex w-full justify-center">
                <a href="/" 
                className="cursor-pointer hover:underline  transition hover:scale-96 w-full p-2 rounded-full border border-green-800 text-green-950 text-lg text-center">
                    Login Here</a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
