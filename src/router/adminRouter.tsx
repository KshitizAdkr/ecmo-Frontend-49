import UserLayout from "../pages/layout/UserLayout"
import UserDashboard from "../pages/dashboard/UserDashboard"
import UserListPage from "../pages/User/UserListPage"
import ErrorPage from "../pages/errorPage"
import BannerListPage from "../pages/banners/BannerListPage"
import BannerCreatePage from "../pages/banners/BannerCreatePage"
import BannerEditPage from "../pages/banners/BannerEditPage"

export const adminRouter = [{
    path: "/admin", element: <UserLayout />, children: [
        { index: true, Component: UserDashboard},
        // admin/user/123
        { path:"banners", element: <BannerListPage />},
        { path:"banner/create", element: <BannerCreatePage />},
        { path:"banner/:id", element: <BannerEditPage />},
        { path:"user", element: <UserListPage />},
        { path:"user/:userId", element: <UserListPage />},
        { path: "*", element:(<ErrorPage code={404} redirectLink="/" redirectTxt="Go Back To Home!!!" />), },]
}]