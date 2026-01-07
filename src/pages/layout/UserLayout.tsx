export default function UserLayout() {
    return( <>\

    <header     className="h-20 bg-gray-900 w-full text-white">
        user
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
        <aside className=" bg-gray-800 w-100 text-white">Sidebar</aside>
        <section className="p-5 bg-gray-300 m-3 rounded-lg w-full">
            content
        </section>
    </main>
    <footer className="h-7 bg-gray-900 w-full text-white text-center">
        &copy; Design and developed by Kshitiz
    </footer>
    </>)
}