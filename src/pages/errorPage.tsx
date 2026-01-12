import { NotFound } from "../components/Errors/Errors";

export default function ErrorPage({code, redirectLink='', redirectTxt=''}: Readonly<{code: number, redirectLink?: string, redirectTxt?: string}>) {
  return (
    <>
      <section className="h-screen flex flex-col items-center justify-center p-2">
        <div className="w-full md:w-2xl lg:w-3xl xl:w-4xl shadow-2xl bg-stone-200/75 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg p-5">
          {
            (code === 404)
                ? <NotFound redirectLink={redirectLink} redirectTxt={redirectTxt} />
                : <></>
          }
        </div>
      </section>
    </>
  );
}
