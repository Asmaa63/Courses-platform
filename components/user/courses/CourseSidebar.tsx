'use client';

import { useState } from 'react';
import {
  ShoppingCart,
  FavoriteBorder,
  Favorite,
  Share,
  AccessTime,
  PlayCircleOutline,
  CloudDownload,
  PhoneAndroid,
  EmojiEvents,
  CheckCircle,
} from '@mui/icons-material';
import Image from 'next/image';
import { CourseDetails } from '@/types';

interface CourseSidebarProps {
  course: CourseDetails;
  locale: string;
}

export default function CourseSidebar({ course, locale }: CourseSidebarProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  const features = [
    {
      icon: <AccessTime />,
      text: `${course.duration} ${locale === 'ar' ? 'ساعة من الفيديو' : 'hours of video'}`,
    },
    {
      icon: <PlayCircleOutline />,
      text: `${course.lessonsCount} ${locale === 'ar' ? 'درس' : 'lessons'}`,
    },
    {
      icon: <CloudDownload />,
      text: locale === 'ar' ? 'موارد قابلة للتحميل' : 'Downloadable resources',
    },
    {
      icon: <PhoneAndroid />,
      text: locale === 'ar' ? 'وصول من الموبايل' : 'Mobile access',
    },
    {
      icon: <EmojiEvents />,
      text: locale === 'ar' ? 'شهادة إتمام' : 'Certificate of completion',
    },
    {
      icon: <CheckCircle />,
      text: locale === 'ar' ? 'وصول مدى الحياة' : 'Lifetime access',
    },
  ];

  return (
    <div className="sticky top-24">
      <div className="card">
        {/* Preview Image */}
        <div className="relative rounded-xl overflow-hidden mb-6">
          <Image
            src={course.thumbnail}
            alt={course.title}
            width={400}
            height={250}
            className="w-full"
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="text-4xl font-bold text-primary-600">
              {course.price} {locale === 'ar' ? 'جنيه' : 'EGP'}
            </span>
            <span className="text-xl text-neutral-400 line-through">
              {course.originalPrice} {locale === 'ar' ? 'جنيه' : 'EGP'}
            </span>
          </div>
          <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">
            {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%{' '}
            {locale === 'ar' ? 'خصم' : 'OFF'}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 mb-6">
          <button className="btn-primary w-full flex items-center justify-center gap-2">
            <ShoppingCart />
            {locale === 'ar' ? 'أضف للسلة' : 'Add to Cart'}
          </button>
          <button className="btn-outline w-full">
            {locale === 'ar' ? 'اشتري الآن' : 'Buy Now'}
          </button>
        </div>

        {/* Favorite & Share */}
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-neutral-200">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg hover:border-primary-500 transition-colors"
          >
            {isFavorite ? (
              <Favorite className="text-red-500" />
            ) : (
              <FavoriteBorder className="text-neutral-600" />
            )}
            <span className="text-sm font-semibold text-neutral-700">
              {locale === 'ar' ? 'مفضلة' : 'Wishlist'}
            </span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-neutral-300 rounded-lg hover:border-primary-500 transition-colors">
            <Share className="text-neutral-600" />
            <span className="text-sm font-semibold text-neutral-700">
              {locale === 'ar' ? 'مشاركة' : 'Share'}
            </span>
          </button>
        </div>

        {/* Course Features */}
        <div>
          <h3 className="font-bold text-neutral-900 mb-4">
            {locale === 'ar' ? 'تشمل هذه الدورة:' : 'This course includes:'}
          </h3>
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 text-sm text-neutral-700">
                <span className="text-primary-500">{feature.icon}</span>
                <span>{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Money Back Guarantee */}
      <div className="card mt-6 bg-green-50 border border-green-200">
        <div className="flex items-center gap-3 mb-2">
          <CheckCircle className="text-green-600 text-3xl" />
          <h3 className="font-bold text-neutral-900">
            {locale === 'ar' ? 'ضمان استرجاع المال' : 'Money-Back Guarantee'}
          </h3>
        </div>
        <p className="text-sm text-neutral-700">
          {locale === 'ar'
            ? 'استرجع أموالك كاملة خلال 30 يوم إذا لم تكن راضياً عن الدورة.'
            : 'Get a full refund within 30 days if you are not satisfied with the course.'}
        </p>
      </div>
    </div>
  );
}