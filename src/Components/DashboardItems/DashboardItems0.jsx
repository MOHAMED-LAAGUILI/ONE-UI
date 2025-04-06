
import {
  BarChart,
  Calendar,
  ChevronUp,
  CreditCard,
  DollarSign,
  Server,
  ShoppingCart,
  Users,
} from "lucide-react";


export default function DashboardItems0() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
    {/* Stats Cards Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Stats Card 1: Bookings */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex justify-between items-start transition-all duration-300 hover:shadow-xl">
        <div className="p-4 rounded-lg bg-gradient-to-r from-gray-700 to-gray-900 shadow-lg shadow-gray-500/50">
          <Calendar className="h-6 w-6 text-white" />
        </div>
        <div className="text-right">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Bookings</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-1">281</h2>
          <p className="text-green-500 text-sm mt-1">+55% than last week</p>
        </div>
      </div>

      {/* Stats Card 2: Today's Users */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex justify-between items-start transition-all duration-300 hover:shadow-xl">
        <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg shadow-blue-500/50">
          <BarChart className="h-6 w-6 text-white" />
        </div>
        <div className="text-right">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Todays Users</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-1">2,300</h2>
          <p className="text-green-500 text-sm mt-1">+3% than last month</p>
        </div>
      </div>

      {/* Stats Card 3: Revenue */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex justify-between items-start transition-all duration-300 hover:shadow-xl">
        <div className="p-4 rounded-lg bg-gradient-to-r from-green-500 to-green-700 shadow-lg shadow-green-500/50">
          <DollarSign className="h-6 w-6 text-white" />
        </div>
        <div className="text-right">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Revenue</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-1">34k</h2>
          <p className="text-green-500 text-sm mt-1">+1% than yesterday</p>
        </div>
      </div>

      {/* Stats Card 4: Followers */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex justify-between items-start transition-all duration-300 hover:shadow-xl">
        <div className="p-4 rounded-lg bg-gradient-to-r from-pink-500 to-pink-700 shadow-lg shadow-pink-500/50">
          <Users className="h-6 w-6 text-white" />
        </div>
        <div className="text-right">
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Followers</p>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mt-1">+91</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Just updated</p>
        </div>
      </div>
    </div>

    {/* Orders Overview Section */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            Orders Overview
          </h2>
          <div className="text-green-500 flex items-center">
            <ChevronUp className="h-4 w-4 mr-1" />
            <span className="text-sm">24% this month</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 space-y-8">
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200 dark:bg-gray-600"></div>

          {/* Timeline Item 1 */}
          <div className="relative flex items-start ps-5">
            <div className="absolute left-[-32px] w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-700 flex items-center justify-center text-white shadow-lg shadow-green-500/50">
              <DollarSign className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">$2400, Design changes</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">22 DEC 7:20 PM</p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative flex items-start ps-5">
            <div className="absolute left-[-32px] w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center text-white shadow-lg shadow-red-500/50">
              <ShoppingCart className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">New order #1832412</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">21 DEC 11 PM</p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="relative flex items-start ps-5">
            <div className="absolute left-[-32px] w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/50">
              <Server className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">Server payments for April</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">21 DEC 9:34 PM</p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="relative flex items-start ps-5">
            <div className="absolute left-[-32px] w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-orange-700 flex items-center justify-center text-white shadow-lg shadow-orange-500/50">
              <CreditCard className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 dark:text-gray-100">New card added for order #4395133</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">20 DEC 2:20 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  )
}
 

