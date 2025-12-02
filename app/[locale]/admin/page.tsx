'use client';

import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

const stats = [
  {
    name: 'Total Revenue',
    value: '$45,231',
    change: '+12.5%',
    isPositive: true,
    icon: DollarSign,
    color: 'bg-green-500'
  },
  {
    name: 'Total Students',
    value: '2,845',
    change: '+8.2%',
    isPositive: true,
    icon: Users,
    color: 'bg-blue-500'
  },
  {
    name: 'Total Courses',
    value: '126',
    change: '+4.3%',
    isPositive: true,
    icon: BookOpen,
    color: 'bg-purple-500'
  },
  {
    name: 'Conversion Rate',
    value: '3.24%',
    change: '-2.1%',
    isPositive: false,
    icon: TrendingUp,
    color: 'bg-orange-500'
  }
];

const recentOrders = [
  { id: 1, student: 'John Doe', course: 'Web Development', amount: '$99', status: 'Completed' },
  { id: 2, student: 'Jane Smith', course: 'Python Programming', amount: '$79', status: 'Pending' },
  { id: 3, student: 'Mike Johnson', course: 'Data Science', amount: '$149', status: 'Completed' },
  { id: 4, student: 'Sarah Williams', course: 'UI/UX Design', amount: '$89', status: 'Completed' },
  { id: 5, student: 'Tom Brown', course: 'Mobile Development', amount: '$129', status: 'Pending' }
];

const topCourses = [
  { name: 'Complete Web Development', students: 1234, revenue: '$24,680' },
  { name: 'Python Programming', students: 987, revenue: '$19,740' },
  { name: 'Data Science Bootcamp', students: 856, revenue: '$34,240' },
  { name: 'UI/UX Design', students: 745, revenue: '$14,900' },
  { name: 'Mobile App Development', students: 623, revenue: '$18,690' }
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here&apos;s what&apos;s happening with your platform.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                  <Icon className="text-white" size={24} />
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.isPositive ? <ArrowUp size={16} /> : <ArrowDown size={16} />}
                  {stat.change}
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-sm">{stat.name}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Recent Orders</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{order.student}</p>
                    <p className="text-sm text-gray-600">{order.course}</p>
                  </div>
                  <div className="text-right mr-4">
                    <p className="font-bold text-gray-900">{order.amount}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    order.status === 'Completed' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {order.status}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-center text-primary-600 hover:text-primary-700 font-medium">
              View All Orders
            </button>
          </div>
        </div>

        {/* Top Courses */}
        <div className="bg-white rounded-xl shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Top Performing Courses</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topCourses.map((course, index) => (
                <div key={course.name} className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate">{course.name}</p>
                    <p className="text-sm text-gray-600">{course.students} students</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{course.revenue}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-center text-primary-600 hover:text-primary-700 font-medium">
              View All Courses
            </button>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
            <BookOpen className="mx-auto mb-2 text-gray-600" size={24} />
            <span className="text-sm font-medium text-gray-900">Add Course</span>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
            <Users className="mx-auto mb-2 text-gray-600" size={24} />
            <span className="text-sm font-medium text-gray-900">Add User</span>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
            <TrendingUp className="mx-auto mb-2 text-gray-600" size={24} />
            <span className="text-sm font-medium text-gray-900">View Analytics</span>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors">
            <DollarSign className="mx-auto mb-2 text-gray-600" size={24} />
            <span className="text-sm font-medium text-gray-900">View Reports</span>
          </button>
        </div>
      </div>
    </div>
  );
}