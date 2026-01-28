import { TableHeader } from "../../components/ui/TableHeader";

export default function BannerListPage() {
    return( <>
    <div className="flex felx-col gap-6">
        {/* Header */}
        <TableHeader title="Banner" showSearch={true} btnText="+ Add Banner" btnUrl={'admin/banner/create'}/>

        {/*  Table */}
        <div className="overflow-x-auto bg-white rounded shadow p-5">
            <div className="grid grid-cols-4 gap-5">
                <div className="w-full">
                <div className="flex flex-col w-full border border-gray-  300 shadow rounded-md ">
                    <img src="https://placeholder.co/1000x 300" alt="banner 1" />
                </div>
                </div>
                <div className="w-full">
                <div className="flex flex-col w-full border border-gray-  300 shadow rounded-md ">
                    <img src="https://placeholder.co/1000x 300" alt="banner 1" />
                </div>
                </div>
                <div className="w-full">
                <div className="flex flex-col w-full border border-gray-  300 shadow rounded-md ">
                    <img src="https://placeholder.co/1000x 300" alt="banner 1" />
                </div>
                </div>
                <div className="w-full">
                <div className="flex flex-col w-full border border-gray-  300 shadow rounded-md ">
                    <img src="https://placeholder.co/1000x 300" alt="banner 1" />
                </div>
                </div>
                <div className="w-full">
                <div className="flex flex-col w-full border border-gray-  300 shadow rounded-md ">
                    <img src="https://placeholder.co/1000x 300" alt="banner 1" />
                </div>
                </div>
                <div className="w-full">
                <div className="flex flex-col w-full border border-gray-  300 shadow rounded-md ">
                    <img src="https://placeholder.co/1000x 300" alt="banner 1" />
                </div>
                </div>
                <div className="w-full">
                <div className="flex flex-col w-full border border-gray-  300 shadow rounded-md ">
                    <img src="https://placeholder.co/1000x 300" alt="banner 1" />
                </div>
                </div>
                <div className="w-full">
                <div className="flex flex-col w-full border border-gray-  300 rounded-md ">
                    <img src="https://placeholder.co/1000x 300" alt="banner 1" />
                </div>
                </div>
            </div>

        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
            <span className="text-sm text-gray-600">Showing 1 to 10 of 50 results</span>
            <div className="inline-flex -space-x-px">
                <button className="px-3 py-1 rounded-l border border-gray-300 bg-white text-gray-500 hover:bg-gray-100">Prev</button>
                <button className="px-3 py-1 border-t border-b border-gray-300 bg-blue-600 text-white">1</button>
                <button className="px-3 py-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100">2</button>
                <button className="px-3 py-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-100">3</button>
                <button className="px-3 py-1 rounded-r border border-gray-300 bg-white text-gray-500 hover:bg-gray-100">Next</button>
            </div>
        </div>
    </div>
    </>)
}