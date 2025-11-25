'use client';

import Image from 'next/image';
import { Star } from '@mui/icons-material';
import { Review } from '@/types';

interface CourseReviewsProps {
  reviews: Review[];
  rating: number;
  reviewsCount: number;
  locale: string;
}

export default function CourseReviews({
  reviews,
  rating,
  reviewsCount,
  locale,
}: CourseReviewsProps) {
  return (
    <div className="card">
      <h2 className="text-2xl font-display font-bold text-neutral-900 mb-6">
        {locale === 'ar' ? 'تقييمات الطلاب' : 'Student Reviews'}
      </h2>

      {/* Rating Summary */}
      <div className="flex items-center gap-8 mb-8 pb-8 border-b border-neutral-200">
        <div className="text-center">
          <div className="text-5xl font-bold text-neutral-900 mb-2">{rating}</div>
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-neutral-600">
            {reviewsCount.toLocaleString()} {locale === 'ar' ? 'تقييم' : 'reviews'}
          </p>
        </div>

        <div className="flex-1">
          {[5, 4, 3, 2, 1].map((stars) => (
            <div key={stars} className="flex items-center gap-3 mb-2">
              <div className="flex gap-1">
                {[...Array(stars)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <div className="flex-1 bg-neutral-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-yellow-400 h-full"
                  style={{
                    width: `${stars === 5 ? 80 : stars === 4 ? 15 : 5}%`,
                  }}
                ></div>
              </div>
              <span className="text-sm text-neutral-600 w-12">
                {stars === 5 ? 80 : stars === 4 ? 15 : 5}%
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="pb-6 border-b border-neutral-200 last:border-0">
            <div className="flex items-start gap-4">
              <Image
                src={review.user.image}
                alt={review.user.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-neutral-900">{review.user.name}</h4>
                  <span className="text-sm text-neutral-500">{review.date}</span>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 text-lg" />
                  ))}
                </div>
                <p className="text-neutral-700 leading-relaxed">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <button className="btn-outline w-full mt-6">
        {locale === 'ar' ? 'عرض المزيد من التقييمات' : 'Load More Reviews'}
      </button>
    </div>
  );
}