import { Outlet } from "react-router";
import { useAuth } from "../../hooks/auth";

export default function UserLayout() {
  const { loggedInUser } = useAuth();
  return (
    <>
      <header className="h-20 bg-gray-900 w-full text-white">
        <div className="flex items-center justify-between h-full px-8">
          {/* Left: Title */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold tracking-tight text-green-400">
              POS Admin
            </span>
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

      <main className="flex w-full h-screen">
        <aside className="bg-gray-800 text-white w-100">
          <nav className="flex flex-col h-full py-8 px-5 w-56 justify-between">
            {/* sidebar content */}
          </nav>
        </aside>

        <section className="p-5 bg-gray-300 m-3 rounded-lg w-full">
          <Outlet />
        </section>
      </main>

      <footer className="bg-gray-800 w-full text-gray-200 py-4 px-2 flex flex-col md:flex-row items-center justify-between mt-4 shadow-inner">
        <div className="flex items-center space-x-2">
          <svg
            className="w-6 h-6 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V5a4 4 0 00-8 0v2m12 5v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m12 0H4"
            />
          </svg>
          <span className="text-base font-semibold">POS Admin Dashboard</span>
        </div>

        <div className="text-sm mt-2 md:mt-0">
          &copy; {new Date().getFullYear()} Powered by{" "}
          <span className="font-semibold text-green-400">Sandesh</span>
        </div>

        <div className="text-xs md:text-sm mt-2 md:mt-0">
          <a
            href="mailto:support@posapp.com"
            className="hover:underline text-green-300"
          >
            Support
          </a>
          &nbsp;&middot;&nbsp;
          <a href="#" className="hover:underline text-green-300">
            Privacy
          </a>
        </div>
      </footer>
    </>
  );
}
