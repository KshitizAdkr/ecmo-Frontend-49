import { Link } from "react-router";
import { PageHeadingWithSubtitle } from "../page-heading/pageHeading";

export const NotFound = ({
    redirectLink, 
    redirectTxt
}: Readonly<{redirectLink: string, redirectTxt: string}>) => {
  return (
    <>
    <PageHeadingWithSubtitle
    titleClass="text-red-800! underline text-center mb-5"
    title= "NotFound!!!"
    >
        <p className="text-red-700 tetx-center">
            The page you are looking for doesn't exist anymore!
        </p>
        <p className="text-red-700 tetx-center">
            Please go back to the homepage from button below.
        </p>
    </PageHeadingWithSubtitle>
          
          <div className="w-full flex flex-col gap-5">
            <span className="flex items-center">
              <span className="h-px flex-1 bg-gray-300"></span>
              <span className="shrink-0 px-4 text-gray-900">Or</span>
              <span className="h-px flex-1 bg-gray-300"></span>
            </span>

            <div className="flex w-full justify-center">
              <Link
                to={redirectLink}
                className="cursor-pointer hover:underline transition hover:scale-96 w-full p-2 rounded-full"
              >
                {redirectTxt}
              </ Link>
            </div>
          </div>
    </>
  );
}
