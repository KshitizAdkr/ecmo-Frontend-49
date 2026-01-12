import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/auth/LoginPage";
import registerPage from "../pages/auth/registerPage";
import ErrorPage from "../pages/errorPage";  
import AuthLayout from "../pages/layout/AuthLayout";
import UserLayout from "../pages/layout/UserLayout";
import UserDashboard from "../pages/dashboard/UserDashboard";
import UserListPage from "../pages/User/UserListPage";


const router = createBrowserRouter([
    // { path : "/", element: <LoginPage /> },
    { path : "/", element: <AuthLayout />, children: [
        { index: true, element: <LoginPage />},
        { path: "register", Component: registerPage},
    ]
},
{
    path: "/admin", element: <UserLayout />, children: [
        { index: true, Component: UserDashboard},
        // admin/user/123
        { path:"user", element: <UserListPage />},
        { path:"user/:userId", element: <UserListPage />},
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
    return <>
        <RouterProvider router={router} />
        </>
}