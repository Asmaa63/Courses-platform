'use client';

import { useState } from 'react';
import { 
  Search, 
  Star,
  Eye,
  Trash2,
  CheckCircle,
  XCircle,
  MessageSquare,
  ThumbsUp,
  Flag
} from 'lucide-react';

// Mock data
const reviews = [
  {
    id: 1,
    student: 'John Doe',
    course: 'Complete Web Development',
    rating: 5,
    comment: 'Excellent course! Very comprehensive and easy to follow.',
    date: '2024-11-28',
    status: 'Approved',
    helpful: 24,
    avatar: 'https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff'
  },
  {
    id: 2,
    student: 'Jane Smith',
    course: 'Python Programming',
    rating: 4,
    comment: 'Great content but could use more practical examples.',
    date: '2024-11-27',
    status: 'Pending',
    helpful: 12,
    avatar: 'https://ui-avatars.com/api/?name=Jane+Smith&background=ec4899&color=fff'
  },
  {
    id: 3,
    student: 'Mike Johnson',
    course: 'Data Science Bootcamp',
    rating: 5,
    comment: 'Best data science course I have ever taken!',
    date: '2024-11-26',
    status: 'Approved',
    helpful: 45,
    avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson&background=10b981&color=fff'
  },
  {
    id: 4,
    student: 'Sarah Williams',
    course: 'UI/UX Design',
    rating: 3,
    comment: 'Good basics but lacks advanced topics.',
    date: '2024-11-25',
    status: 'Flagged',
    helpful: 8,
    avatar: 'https://ui-avatars.com/api/?name=Sarah+Williams&background=f59e0b&color=fff'
  },
  {
    id: 5,
    student: 'Tom Brown',
    course: 'Mobile Development',
    rating: 5,
    comment: 'Instructor is amazing! Clear explanations and great examples.',
    date: '2024-11-24',
    status: 'Approved',
    helpful: 31,
    avatar: 'https://ui-avatars.com/api/?name=Tom+Brown&background=8b5cf6&color=fff'
  }
];

export default function AdminReviewsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = 
      review.student.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRating = selectedRating === 'all' || review.rating.toString() === selectedRating;
    const matchesStatus = selectedStatus === 'all' || review.status.toLowerCase() === selectedStatus;
    return matchesSearch && matchesRating && matchesStatus;
  });

  const avgRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const approvedCount = reviews.filter(r => r.status === 'Approved').length;
  const pendingCount = reviews.filter(r => r.status === 'Pending').length;
  const flaggedCount = reviews.filter(r => r.status === 'Flagged').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reviews Management</h1>
        <p className="text-gray-600 mt-1">Manage and moderate course reviews</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <Star className="text-yellow-600" size={24} />
            </div>
          </div>
          <p className="text-gray-600 text-sm">Average Rating</p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-3xl font-bold text-gray-900">{avgRating}</p>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  className={`${parseFloat(avgRating) >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="text-green-600" size={24} />
            </div>
          </div>
          <p className="text-gray-600 text-sm">Approved</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{approvedCount}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <MessageSquare className="text-orange-600" size={24} />
            </div>
          </div>
          <p className="text-gray-600 text-sm">Pending</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{pendingCount}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
              <Flag className="text-red-600" size={24} />
            </div>
          </div>
          <p className="text-gray-600 text-sm">Flagged</p>
          <p className="text-3xl font-bold text-gray-900 mt-1">{flaggedCount}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <div className="md:col-span-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search reviews..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Rating Filter */}
          <select
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>

          {/* Status Filter */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="all">All Status</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="flagged">Flagged</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="bg-white rounded-xl shadow-sm divide-y divide-gray-200">
        {filteredReviews.map((review) => (
          <div key={review.id} className="p-6 hover:bg-gray-50 transition-colors">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.student}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium text-gray-900">{review.student}</p>
                  <p className="text-sm text-gray-600">{review.course}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                review.status === 'Approved'
                  ? 'bg-green-100 text-green-700'
                  : review.status === 'Pending'
                  ? 'bg-orange-100 text-orange-700'
                  : 'bg-red-100 text-red-700'
              }`}>
                {review.status}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={16}
                    className={`${review.rating >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">{review.date}</span>
            </div>

            <p className="text-gray-700 mb-4">{review.comment}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <ThumbsUp size={16} />
                <span>{review.helpful} people found this helpful</span>
              </div>

              <div className="flex items-center gap-2">
                {review.status === 'Pending' && (
                  <>
                    <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors" title="Approve">
                      <CheckCircle size={18} />
                    </button>
                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Reject">
                      <XCircle size={18} />
                    </button>
                  </>
                )}
                <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors" title="View Details">
                  <Eye size={18} />
                </button>
                <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="bg-white rounded-xl shadow-sm px-6 py-4 flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredReviews.length}</span> of{' '}
          <span className="font-medium">{reviews.length}</span> results
        </p>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50" disabled>
            Previous
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}