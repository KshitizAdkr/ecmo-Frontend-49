import UserLayout from "../pages/layout/UserLayout"
import UserDashboard from "../pages/dashboard/UserDashboard"
import ErrorPage from "../pages/errorPage"

export const customerRouter = [
{
    path: "/customer", element: <UserLayout />, children: [
        { index: true, Component: UserDashboard},
        { path: "*", element:(<ErrorPage code={404} redirectLink="/" redirectTxt="Go Back To Home!!!" />), }
    ]
},]