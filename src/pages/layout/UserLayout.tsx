import { Outlet } from "react-router";

export default function UserLayout() {
    return( <>

    <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50 shadow-lg">
  <div className="flex items-center justify-between px-6 py-4">
    {/* Left Section - Logo & Brand */}
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
        <span className="text-white text-xl">🛒</span>
      </div>
      <div>
        <h1 className="text-xl font-bold text-white">POS Admin</h1>
        <p className="text-xs text-slate-400">Management Portal</p>
      </div>
    </div>
    
    {/* Right Section - User Profile */}
    <div className="flex items-center space-x-3">
      <div className="text-right hidden sm:block">
        <p className="text-sm font-semibold text-white">Admin User</p>
        <p className="text-xs text-slate-400">admin@pos.com</p>
      </div>
      <div className="relative">
        <img
          src="https://ui-avatars.com/api/?name=Admin+User&background=3b82f6&color=fff&bold=true"
          alt="Admin"
          className="w-10 h-10 rounded-full ring-2 ring-slate-700 cursor-pointer hover:ring-blue-500 transition-all"
        />
        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full"></span>
      </div>
    </div>
  </div>
</header>

        <nav className="flex items-center justify-between px-8 py-4 bg-gray-800 shadow">
            <div className="flex items-center space-x-4">
                <span className="text-xl font-bold text-white">Admin Dashboard</span>
                <ul className="flex space-x-6">
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white transition">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white transition">Users</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-300 hover:text-white transition">Settings</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center space-x-4">
                <span className="text-gray-300">Admin</span>
                <button className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded transition">Logout</button>
            </div>
        </nav>

    <main className="flex h-screen w-full">
        <aside className="bg-gray-800 text-white w-64">
  <nav className="flex flex-col h-full">
    {/* Main Navigation */}
    <div className="flex-1 px-4 py-6 space-y-2">
      {/* Dashboard */}
      <a
        href="#"
        className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md transition-all"
      >
        <span className="text-xl">📊</span>
        <span>Dashboard</span>
      </a>

      {/* Sales */}
      <a
        href="#"
        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
      >
        <span className="text-xl">💰</span>
        <span>Sales</span>
      </a>

      {/* Products */}
      <a
        href="#"
        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
      >
        <span className="text-xl">📦</span>
        <span>Products</span>
      </a>

      {/* Inventory */}
      <a
        href="#"
        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
      >
        <span className="text-xl">📊</span>
        <span>Inventory</span>
      </a>

      {/* Users */}
      <a
        href="#"
        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
      >
        <span className="text-xl">👥</span>
        <span>Users</span>
      </a>

      {/* Reports */}
      <a
        href="#"
        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
      >
        <span className="text-xl">📈</span>
        <span>Reports</span>
      </a>

      {/* Settings */}
      <a
        href="#"
        className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
      >
        <span className="text-xl">⚙️</span>
        <span>Settings</span>
      </a>
    </div>

    {/* Bottom Section */}
    <div className="px-4 py-4 border-t border-gray-700">
      <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-900 hover:text-red-300 transition-all">
        <span className="text-xl">🚪</span>
        <span className="font-medium">Logout</span>
      </button>
    </div>
  </nav>
</aside>
        <section className="p-5 bg-gray-300 m-3 rounded-lg w-full">
            <Outlet />
            content
        </section>
    </main>
    <footer className="h-7 bg-gray-900 w-full text-white text-center">
        &copy; Design and developed by Kshitiz
    </footer>
    </>)
}