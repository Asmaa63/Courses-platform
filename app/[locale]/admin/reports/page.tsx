'use client';

import { 
  Download, 
  FileText, 
  Calendar,
  DollarSign,
  Users,
  BookOpen,
  TrendingUp
} from 'lucide-react';

export default function AdminReportsPage() {
  const reports = [
    {
      id: 1,
      title: 'Sales Report',
      description: 'Detailed sales and revenue analysis',
      icon: DollarSign,
      color: 'bg-green-500',
      lastGenerated: '2024-11-28'
    },
    {
      id: 2,
      title: 'Student Enrollment Report',
      description: 'Student registration and enrollment statistics',
      icon: Users,
      color: 'bg-blue-500',
      lastGenerated: '2024-11-27'
    },
    {
      id: 3,
      title: 'Course Performance Report',
      description: 'Course completion rates and engagement metrics',
      icon: BookOpen,
      color: 'bg-purple-500',
      lastGenerated: '2024-11-26'
    },
    {
      id: 4,
      title: 'Revenue Trends Report',
      description: 'Revenue growth and forecasting analysis',
      icon: TrendingUp,
      color: 'bg-orange-500',
      lastGenerated: '2024-11-25'
    },
    {
      id: 5,
      title: 'Monthly Summary Report',
      description: 'Comprehensive monthly business overview',
      icon: FileText,
      color: 'bg-indigo-500',
      lastGenerated: '2024-11-01'
    },
    {
      id: 6,
      title: 'Instructor Performance Report',
      description: 'Instructor ratings and course statistics',
      icon: Users,
      color: 'bg-pink-500',
      lastGenerated: '2024-11-20'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-600 mt-1">Generate and download various business reports</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-gray-600 text-sm">Total Reports</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{reports.length}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-gray-600 text-sm">Generated This Month</p>
          <p className="text-3xl font-bold text-blue-600 mt-2">24</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-gray-600 text-sm">Downloaded</p>
          <p className="text-3xl font-bold text-green-600 mt-2">156</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-gray-600 text-sm">Scheduled Reports</p>
          <p className="text-3xl font-bold text-purple-600 mt-2">8</p>
        </div>
      </div>

      {/* Generate Report Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Generate New Report</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Report Type
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Sales Report</option>
              <option>Student Enrollment</option>
              <option>Course Performance</option>
              <option>Revenue Trends</option>
              <option>Monthly Summary</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date Range
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
              <option>Last 6 months</option>
              <option>Last year</option>
              <option>Custom range</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Format
            </label>
            <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
              <option>PDF</option>
              <option>Excel (XLSX)</option>
              <option>CSV</option>
            </select>
          </div>
        </div>

        <button className="mt-6 flex items-center gap-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <Download size={20} />
          Generate Report
        </button>
      </div>

      {/* Available Reports */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-4">Available Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reports.map((report) => {
            const Icon = report.icon;
            return (
              <div key={report.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`${report.color} w-12 h-12 rounded-lg flex items-center justify-center`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                    <Download size={18} />
                  </button>
                </div>

                <h3 className="font-bold text-gray-900 mb-2">{report.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{report.description}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={14} />
                    <span>{report.lastGenerated}</span>
                  </div>
                  <button className="text-primary-600 hover:text-primary-700 font-medium">
                    View
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scheduled Reports */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Scheduled Reports</h2>
          <button className="text-primary-600 hover:text-primary-700 font-medium">
            + Add Schedule
          </button>
        </div>

        <div className="space-y-4">
          {[
            { name: 'Weekly Sales Summary', frequency: 'Every Monday at 9:00 AM', format: 'PDF' },
            { name: 'Monthly Revenue Report', frequency: 'First day of month at 8:00 AM', format: 'Excel' },
            { name: 'Student Enrollment Stats', frequency: 'Every Friday at 5:00 PM', format: 'CSV' }
          ].map((schedule, index) => (
            <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">{schedule.name}</p>
                <p className="text-sm text-gray-600 mt-1">{schedule.frequency}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                  {schedule.format}
                </span>
                <button className="text-gray-600 hover:text-primary-600">
                  Edit
                </button>
                <button className="text-gray-600 hover:text-red-600">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}