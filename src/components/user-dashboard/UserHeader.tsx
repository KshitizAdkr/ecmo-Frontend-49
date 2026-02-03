import type { Dispatch, SetStateAction } from "react"
import type { IUser } from "../../pages/auth/auth.contract"
import { FaBars} from "react-icons/fa"
import { FaBarsStaggered } from "react-icons/fa6"

export interface IUserLayoutProps {
  loggedInUser: IUser,
  setShowSidebar: Dispatch<SetStateAction<boolean>>,
  showSidebar: boolean
}

export const UserHeader = ({loggedInUser, showSidebar, setShowSidebar}: Readonly<IUserLayoutProps>) => {
  return(<>
    <header className="h-20 bg-gray-900 w-full text-white">
        <div className="flex items-center justify-between h-full px-8">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold tracking-tight text-green-400">
              POS Admin
            </span>
          <button className="hover:cursor-pointer" onClick={() => {
            setShowSidebar(!showSidebar)
          }} >
            { showSidebar ? <FaBars />: <FaBarsStaggered /> }
          </button>
          </div>

          {/* Right: User Info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-full border-2 border-green-400"
                src={loggedInUser?.image?.url}
                alt="Admin Avatar"
              />
              <div className="flex flex-col">
                <span className="font-semibold">{loggedInUser?.name}</span>
                <span className="text-sm text-gray-300">
                  {loggedInUser?.role}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>
  </>)
}