import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/auth/LoginPage";
import registerPage from "../pages/auth/registerPage";
import ErrorPage from "../pages/auth/errorPage"; 
import AuthLayout from "../pages/layout/AuthLayout";


const router = createBrowserRouter([
    // { path : "/", element: <LoginPage /> },
    { path : "/", element: <AuthLayout />, children: [
        { index: true, element: <LoginPage />},
        { path: "register", Component: registerPage},
    ]
},
    { 
        path: "*", 
        element:(
            <ErrorPage code={404} redirectLink="/" redirectTxt="Go Back To Home!!!" />
        ),
    },
])


export default function routerConfig() {
    return(
        <>
        <RouterProvider router={router} />

        </>
    )
}