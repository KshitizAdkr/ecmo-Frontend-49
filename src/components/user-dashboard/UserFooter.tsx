export const UserFooter = () => {
    return((
        <footer className="bg-gray-800 w-full text-gray-200 py-4 px-2 flex flex-col md:flex-row items-center justify-between shadow-inner">
        <div className="flex items-center space-x-2">
          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V5a4 4 00-8 0v2m12 5V5a2 2 0 00-2-2H6a2 2 0 00-2 2v7a2 2 0 002 2h12a2 2 0 002-2z" />
          </svg>
          <span className="text-base font-semibold">POS Admin Dashboard</span>
        </div>

        <div className="text-sm mt-2 md:mt-0">
          &copy; {new Date().getFullYear()} Powered by{" "}
          <span className="font-semibold text-green-400">Kshitiz</span>
        </div>

        <div className="text-xs md:text-sm mt-2 md:mt-0">
          <a href="mailto:support@posapp.com" className="hover:underline text-green-300">
            Support
          </a>
           &middot;
          <a href="#" className="hover:underline text-green-300">
            Privacy
          </a>
        </div>
      </footer>)
    )
}