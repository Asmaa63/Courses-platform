'use client';

import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  DollarSign,
  ArrowUp,
  ArrowDown,
  Calendar
} from 'lucide-react';

export default function AdminAnalyticsPage() {
  // Mock data for charts
  const revenueData = [
    { month: 'Jan', revenue: 12000 },
    { month: 'Feb', revenue: 15000 },
    { month: 'Mar', revenue: 18000 },
    { month: 'Apr', revenue: 22000 },
    { month: 'May', revenue: 25000 },
    { month: 'Jun', revenue: 28000 }
  ];

  const enrollmentData = [
    { month: 'Jan', students: 120 },
    { month: 'Feb', students: 180 },
    { month: 'Mar', students: 250 },
    { month: 'Apr', students: 320 },
    { month: 'May', students: 380 },
    { month: 'Jun', students: 450 }
  ];

  const topCategories = [
    { name: 'Development', courses: 45, percentage: 35 },
    { name: 'Design', courses: 32, percentage: 25 },
    { name: 'Business', courses: 28, percentage: 22 },
    { name: 'Marketing', courses: 23, percentage: 18 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="text-gray-600 mt-1">Detailed insights and performance metrics</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 3 months</option>
            <option>Last year</option>
          </select>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="text-green-600" size={24} />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <ArrowUp size={16} />
              12.5%
            </div>
          </div>
          <p className="text-gray-600 text-sm">Total Revenue</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">$120,450</p>
          <p className="text-xs text-gray-500 mt-2">vs last month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="text-blue-600" size={24} />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <ArrowUp size={16} />
              8.2%
            </div>
          </div>
          <p className="text-gray-600 text-sm">New Students</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">450</p>
          <p className="text-xs text-gray-500 mt-2">vs last month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <BookOpen className="text-purple-600" size={24} />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-green-600">
              <ArrowUp size={16} />
              4.3%
            </div>
          </div>
          <p className="text-gray-600 text-sm">Course Enrollments</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">1,280</p>
          <p className="text-xs text-gray-500 mt-2">vs last month</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-orange-600" size={24} />
            </div>
            <div className="flex items-center gap-1 text-sm font-medium text-red-600">
              <ArrowDown size={16} />
              2.1%
            </div>
          </div>
          <p className="text-gray-600 text-sm">Conversion Rate</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">3.24%</p>
          <p className="text-xs text-gray-500 mt-2">vs last month</p>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Revenue Trend</h2>
            <select className="text-sm px-3 py-1 border border-gray-300 rounded-lg">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
          </div>
          <div className="space-y-4">
            {revenueData.map((item, index) => (
              <div key={item.month} className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-600 w-12">{item.month}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-primary-500 to-primary-600 h-full flex items-center justify-end pr-3"
                    style={{ width: `${(item.revenue / 30000) * 100}%` }}
                  >
                    <span className="text-white text-xs font-medium">
                      ${item.revenue.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enrollment Chart */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Student Enrollments</h2>
            <select className="text-sm px-3 py-1 border border-gray-300 rounded-lg">
              <option>Monthly</option>
              <option>Weekly</option>
              <option>Daily</option>
            </select>
          </div>
          <div className="space-y-4">
            {enrollmentData.map((item) => (
              <div key={item.month} className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-600 w-12">{item.month}</span>
                <div className="flex-1 bg-gray-100 rounded-full h-8 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-full flex items-center justify-end pr-3"
                    style={{ width: `${(item.students / 500) * 100}%` }}
                  >
                    <span className="text-white text-xs font-medium">
                      {item.students} students
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Categories */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Top Categories</h2>
          <div className="space-y-4">
            {topCategories.map((category, index) => (
              <div key={category.name}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                      <span className="text-primary-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{category.name}</p>
                      <p className="text-sm text-gray-600">{category.courses} courses</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-gray-900">{category.percentage}%</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-primary-600 h-2 rounded-full"
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {[
              { user: 'John Doe', action: 'enrolled in', course: 'Web Development', time: '2 hours ago' },
              { user: 'Jane Smith', action: 'completed', course: 'Python Programming', time: '5 hours ago' },
              { user: 'Mike Johnson', action: 'enrolled in', course: 'Data Science', time: '1 day ago' },
              { user: 'Sarah Williams', action: 'reviewed', course: 'UI/UX Design', time: '1 day ago' },
              { user: 'Tom Brown', action: 'enrolled in', course: 'Mobile Development', time: '2 days ago' }
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-100 last:border-0">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-semibold text-sm">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">
                    <span className="font-medium">{activity.user}</span> {activity.action}{' '}
                    <span className="font-medium">{activity.course}</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}