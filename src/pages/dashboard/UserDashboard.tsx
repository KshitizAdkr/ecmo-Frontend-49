import { useOutletContext } from "react-router"
import type { IUserLayoutContext } from "../layout/UserLayout"
import { useEffect } from "react"

export default function  UserDashboard() {
  const outletContext = useOutletContext<IUserLayoutContext>()
  useEffect(() => {
    outletContext.setShowSidebar(true)
  }, [])
    return ( <>
         <div className="min-h-screen bg-gray-100">
  {/* Main Content - Full Width */}
  <main className="p-8 w-full pb-16">
    <div className="w-full">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
        <p className="text-gray-600 mt-2">Overview of your Point of Sale application</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Total Sales */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Total Sales</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">$15,200</p>
          <p className="text-sm text-green-600 font-medium">+12% this month</p>
        </div>

        {/* Orders */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Orders</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">328</p>
          <p className="text-sm text-green-600 font-medium">+8% this month</p>
        </div>

        {/* Inventory */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Inventory</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">1,560</p>
          <p className="text-sm text-orange-600 font-medium">Stable</p>
        </div>

        {/* Staff Users */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <p className="text-sm text-gray-600 mb-1">Staff Users</p>
          <p className="text-3xl font-bold text-gray-900 mb-2">8</p>
          <p className="text-sm text-blue-600 font-medium">+1 new this month</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Recent Sales - Takes 2 columns */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Recent Sales</h2>
              <p className="text-sm text-gray-500 mt-1">Latest transactions from your store</p>
            </div>
            <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
              View all
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Customer</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">#00158</td>
                  <td className="px-6 py-4 text-sm text-gray-900">John Doe</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">$120</td>
                  <td className="px-6 py-4 text-sm text-gray-600">2024-06-27</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      Completed
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">#00157</td>
                  <td className="px-6 py-4 text-sm text-gray-900">Jane Smith</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">$89</td>
                  <td className="px-6 py-4 text-sm text-gray-600">2024-06-27</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                      Pending
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">#00156</td>
                  <td className="px-6 py-4 text-sm text-gray-900">David Lee</td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">$45</td>
                  <td className="px-6 py-4 text-sm text-gray-600">2024-06-26</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700">
                      Cancelled
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Stock Alerts & Top Products - Takes 1 column */}
        <div className="space-y-6">
          {/* Stock Alerts */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stock Alerts</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Coca-Cola 500ml</span>
                <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">Low: 6 left</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Snickers Bar</span>
                <span className="text-xs font-semibold text-yellow-600 bg-yellow-50 px-2 py-1 rounded">Warning: 14 left</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-700">Pepsi 1L</span>
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">Safe: 32 left</span>
              </div>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Products</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Oreo Cookies</span>
                <span className="text-sm font-semibold text-gray-900">324 sold</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-gray-100">
                <span className="text-sm text-gray-700">Lays Chips</span>
                <span className="text-sm font-semibold text-gray-900">281 sold</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span className="text-sm text-gray-700">Milk (1L)</span>
                <span className="text-sm font-semibold text-gray-900">268 sold</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button className="bg-green-600 text-white rounded-xl p-6 hover:bg-green-700 transition-colors shadow-md flex items-center justify-center space-x-3">
          <span className="text-2xl">🛒</span>
          <span className="font-semibold text-lg">Process Sale</span>
        </button>
        <button className="bg-blue-600 text-white rounded-xl p-6 hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center space-x-3">
          <span className="text-2xl">📊</span>
          <span className="font-semibold text-lg">View Reports</span>
        </button>
        <button className="bg-orange-600 text-white rounded-xl p-6 hover:bg-orange-700 transition-colors shadow-md flex items-center justify-center space-x-3">
          <span className="text-2xl">📦</span>
          <span className="font-semibold text-lg">Manage Inventory</span>
        </button>
      </div>
    </div>
  </main>
</div>
    </>
    )
}