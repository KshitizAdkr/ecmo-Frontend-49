import { FaCog, FaImage, FaPowerOff, FaShoppingBag, FaShoppingCart, FaSitemap, FaUsers } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router";  
import { FaB, FaMessage } from "react-icons/fa6";
import type { BaseSyntheticEvent } from "react";
import { useAuth } from "../../hooks/auth";
import { toast } from "sonner";
import type { IUserLayoutProps } from "./UserHeader";

export const UserSidebar = ({loggedInUser, showSidebar}: Readonly<IUserLayoutProps>) => {
    const navigate = useNavigate();
    const {logout}= useAuth()
    const handleLogout = (e: BaseSyntheticEvent) => {
      e.preventDefault()
      logout();
      toast.success("You have been logged out succesfully.")
      navigate("/")
    }
  return (
    <aside className={`bg-gray-800 text-white ${showSidebar? 'w-100' : 'w-20'}`}>
      <nav className="flex flex-col h-full py-8 px-5 w-56 justify-between">
        <div>
          <ul className="space-y-3">
            <li>
              <NavLink
                to={loggedInUser && `/${loggedInUser.role}`}
                className={`flex ${showSidebar? "gap-3 hover:bg-gray-700" : "gap-7"} items-center px-3 py-2 rounded-lg transition font-medium`}>
                <FaCog className="text-green-400 size-5  " />
                Dashboard
              </NavLink>
            </li>

             {
                loggedInUser && loggedInUser.role === 'admin' ? <li>
                <NavLink
                 to={loggedInUser && `/${loggedInUser.role}/banners`}
                className={`flex ${showSidebar? "gap-3 hover:bg-gray-700" : "gap-7"} items-center px-3 py-2 rounded-lg transition font-medium`}>
                  <FaB className="text-green-400 size-5  "/>
                     Banners
                  </ NavLink>
              </li> : <></>
            }

            {
                loggedInUser && (loggedInUser.role === 'admin' || loggedInUser.role === 'seller')? <li>
                <NavLink
                 to={loggedInUser && `/${loggedInUser.role}/brands`}
                className={`flex ${showSidebar? "gap-3 hover:bg-gray-700" : "gap-7"} items-center px-3 py-2 rounded-lg transition font-medium`} >
                  <FaImage className="text-green-400 size-5  "/>
                    Brand
                </ NavLink>
              </li> : <></>
            }

           {
                loggedInUser && (loggedInUser.role === 'admin' || loggedInUser.role === 'seller') ? <li>
                <NavLink
                 to={loggedInUser && `/${loggedInUser.role}/categories`}
                className={`flex ${showSidebar? "gap-3 hover:bg-gray-700" : "gap-7"} items-center px-3 py-2 rounded-lg transition font-medium`} >
                  <FaSitemap className="text-green-400 size-5  "/>
                     Categories
                  </ NavLink>
              </li> : <></>
            }
              <li>
                <NavLink
                 to={loggedInUser && `/${loggedInUser.role}/users`}
                className={`flex ${showSidebar? "gap-3 hover:bg-gray-700" : "gap-7"} items-center px-3 py-2 rounded-lg transition font-medium`} >
                  <FaUsers className="text-green-400 size-5  "/>
                     Userse
                  </ NavLink>
              </li>

             {
                loggedInUser && (loggedInUser.role === 'admin' || loggedInUser.role === 'seller')? <li>
                <NavLink
                 to={loggedInUser && `/${loggedInUser.role}/products`}
                className={`flex ${showSidebar? "gap-3 hover:bg-gray-700" : "gap-7"} items-center px-3 py-2 rounded-lg transition font-medium`} >
                  <FaShoppingBag className="text-green-400 size-5  "/>
                    Products
                </ NavLink>
              </li> : <></>
            }

                <li>
                <NavLink
                 to={loggedInUser && `/${loggedInUser.role}/orders`}
                className={`flex ${showSidebar? "gap-3 hover:bg-gray-700" : "gap-7"} items-center px-3 py-2 rounded-lg transition font-medium`} >
                  <FaShoppingCart className="text-green-400 size-5  "/>
                    Orders
                </ NavLink>
                </li> 

                <li>
                <NavLink
                 to={loggedInUser && `/${loggedInUser.role}/messages`}
                className={`flex ${showSidebar? "gap-3 hover:bg-gray-700" : "gap-7"} items-center px-3 py-2 rounded-lg transition font-medium`} >
                  <FaMessage className="text-green-400 size-5  "/>
                    Messages
                </ NavLink>
                </li> 

          </ul>
        </div>

        <div>
          <button
          onClick={handleLogout}          
          className="w-full gap-2 px-3 py-2 mt-3 hover:cursor-pointer bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition flex items-center justify-center font-medium">
            <FaPowerOff className="size-5" />
            Logout
          </button>
        </div>
      </nav>
    </aside>
  );
};
