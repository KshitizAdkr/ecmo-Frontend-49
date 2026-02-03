import { useEffect } from "react"
import { useOutletContext } from "react-router"
import { type IUserLayoutContext } from "../../pages/layout/UserLayout"

export default function ChatList() {
    const outletContext = useOutletContext<IUserLayoutContext>()
    useEffect(() => {
        outletContext.setShowSidebar(false)
    },[])
    return (<>
        <div className="flex h-[85vh] rounded-2xl shadow-2xl bg-linear-to-r from-green-950 via-green-900 to-green-800 overflow-hidden border border-gray-800 ">
            {/* User List Sidebar */}
            <aside className="w-1/3 bg-linear-to-b from-gray-800 to-gray-900 border-r border-gray-700 flex flex-col">
                <div className="p-5 border-b border-gray-700">
                    <h2 className="text-xl font-bold text-gray-100 tracking-wide">Users</h2>
                </div>
                <ul className="flex-1 overflow-y-auto">
                    {[
                        {
                            id: 1,
                            username: "john_doe",
                            image: "https://i.pravatar.cc/40?img=1",
                            email: "john@example.com",
                            role: "User",
                        },
                        {
                            id: 2,
                            username: "jane_smith",
                            image: "https://i.pravatar.cc/40?img=2",
                            email: "jane@example.com",
                            role: "Admin",
                        },
                    ].map((user) => (
                        <li
                            key={user.id}
                            className="flex items-center gap-4 px-5 py-4 hover:bg-gray-800/60 cursor-pointer transition group"
                        >
                            <img
                                src={user.image}
                                alt={user.username}
                                className="w-11 h-11 rounded-full object-cover border-2 border-gray-700 group-hover:border-blue-500 transition"
                            />
                            <div>
                                <div className="font-semibold text-gray-100">{user.username}</div>
                                <div className="text-xs text-gray-400">{user.email}</div>
                                <div className="text-xs text-blue-400">{user.role}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Chat Detail Box */}
            <section className="flex-1 flex flex-col bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
                {/* Chat Header */}
                <div className="p-5 border-b border-gray-700 flex items-center gap-4 bg-gray-900/80">
                    <img
                        src="https://i.pravatar.cc/40?img=1"
                        alt="Selected User"
                        className="w-11 h-11 rounded-full object-cover border-2 border-blue-500"
                    />
                    <div>
                        <div className="font-bold text-gray-100">john_doe</div>
                        <div className="text-xs text-green-400">Online</div>
                    </div>
                </div>
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-900/60">
                    {/* Example messages */}
                    <div className="flex flex-col items-start">
                        <div className="bg-gray-800 text-gray-100 px-5 py-3 rounded-2xl max-w-xs shadow">
                            Hi there!
                        </div>
                        <span className="text-xs text-gray-500 mt-1">10:00 AM</span>
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="bg-blue-600 text-white px-5 py-3 rounded-2xl max-w-xs shadow">
                            Hello! How can I help you?
                        </div>
                        <span className="text-xs text-gray-500 mt-1">10:01 AM</span>
                    </div>
                </div>
                {/* Chat Input Box */}
                <form className="p-5 border-t border-gray-700 bg-gray-900/80 flex items-center gap-3 sticky bottom-0">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 border border-gray-700 bg-gray-800 text-gray-100 rounded-full px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-semibold shadow"
                    >
                        Send
                    </button>
                </form>
            </section>
        </div>
    </>)
}