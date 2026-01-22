import { FaCog, FaImage, FaPowerOff, FaShoppingBag, FaShoppingCart, FaSitemap, FaUsers } from "react-icons/fa";
import type { IUser } from "../../pages/auth/auth.contract";
import { NavLink, useNavigate } from "react-router";
import { FaB, FaMessage } from "react-icons/fa6";
import type { BaseSyntheticEvent } from "react";
import { useAuth } from "../../hooks/auth";
import { toast } from "sonner";

export const UserSidebar = ({loggedInUser}: Readonly<{loggedInUser: IUser}>) => {
    const navigate = useNavigate();
    const {logout}= useAuth()
    const handleLogout = (e: BaseSyntheticEvent) => {
      e.preventDefault()
      logout();
      toast.success("You have been logged out succesfully.")
      navigate("/")
    }
  return (
    <aside className="bg-gray-800 text-white w-100">
      <nav className="flex flex-col h-full py-8 px-5 w-56 justify-between">
        <div>
          <ul className="space-y-3">
            <li>
              <NavLink
                to={loggedInUser && `/${loggedInUser.role}`}
                className="flex gap-3 items-center px-3 py-2 rounded-lg hover:bg-gray-700 transition font-medium">
                <FaCog className="text-green-400 size-5  " />
                Dashboard
              </NavLink>
            </li>

             {
                loggedInUser && loggedInUser.role === 'admin' ? <li>
                <NavLink
                 to={loggedInUser && `/${loggedInUser.role}/banners`}
                className="flex gap-3 items-center px-3 py-2 rounded-lg hover:bg-gray-700 transition font-medium" >
                  <FaB className="text-green-400 size-5  "/>
                     Banners
                  </ NavLink>
              </li> : <></>
            }

            {
                loggedInUser && (loggedInUser.role === 'admin' || loggedInUser.role === 'seller')? <li>
                <NavLink
                 to={loggedInUser && `/${loggedInUser.role}/brands`}
                className="flex gap-3 items-center px-3 py-2 rounded-lg hover:bg-gray-700 transition font-medium" >
                  <FaImage className="text-green-400 size-5  "/>
                    Brand
                </ NavLink>
              </li> : <></>
            }

           {
                loggedInUser && (loggedInUser.role === 'admin' || loggedInUser.role === 'seller') ? <li>
                <NavLink
                 to={loggedInUser && `/${loggedInUser.role}/categories`}
                className="flex gap-3 items-center px-3 py-2 rounded-lg hover:bg-gray-700 transition font-medium" >
                  <FaSitemap className="text-green-400 size-5  "/>
                     Categories
                  </ NavLink>
              </li> : <></>
            }
              <li>
                <NavLink
                 to={loggedInUser && `/${loggedInUser.role}/users`}
                className="flex gap-3 items-center px-3 py-2 rounded-lg hover:bg-gray-700 transition font-medium" >
                  <FaUsers className="text-green-400 size-5  "/>
                     Userse
                  </ NavLink>
              </li>

             {
                loggedInUser && (loggedInUser.role === 'admin' || loggedInUser.role === 'seller')? <li>
                <NavLink
                 to={loggedInUser && `/${loggedInUser.role}/products`}
                className="flex gap-3 items-center px-3 py-2 rounded-lg hover:bg-gray-700 transition font-medium" >
                  <FaShoppingBag className="text-green-400 size-5  "/>
                    Products
                </ NavLink>
              </li> : <></>
            }

                <li>
                <NavLink
                 to={loggedInUser && `/${loggedInUser.role}/orders`}
                className="flex gap-3 items-center px-3 py-2 rounded-lg hover:bg-gray-700 transition font-medium" >
                  <FaShoppingCart className="text-green-400 size-5  "/>
                    Orders
                </ NavLink>
                </li> 

                <li>
                <NavLink
                 to={loggedInUser && `/${loggedInUser.role}/messages`}
                className="flex gap-3 items-center px-3 py-2 rounded-lg hover:bg-gray-700 transition font-medium" >
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
