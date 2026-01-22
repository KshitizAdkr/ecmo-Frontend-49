import { createBrowserRouter, RouterProvider } from "react-router";
import ErrorPage from "../pages/errorPage";  
import { adminRouter } from "./adminRouter";
import { customerRouter } from "./customerRouter";
import { authRouter } from "./authRouter";

const router = createBrowserRouter([
...authRouter,
...adminRouter,
...customerRouter,
    { path: "*", element:(<ErrorPage code={404} redirectLink="/" redirectTxt="Go Back To Home!!!" />), },])


export default function routerConfig() {
    return <>
        <RouterProvider router={router} />
        </>
}