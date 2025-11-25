'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { ExpandMore, Star } from '@mui/icons-material';

export default function CoursesFilter() {
  const locale = useLocale();
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);

  const categories = [
    { id: 'programming', name: locale === 'ar' ? 'البرمجة' : 'Programming', count: 450 },
    { id: 'design', name: locale === 'ar' ? 'التصميم' : 'Design', count: 320 },
    { id: 'business', name: locale === 'ar' ? 'الأعمال' : 'Business', count: 280 },
    { id: 'marketing', name: locale === 'ar' ? 'التسويق' : 'Marketing', count: 210 },
    { id: 'photography', name: locale === 'ar' ? 'التصوير' : 'Photography', count: 180 },
    { id: 'music', name: locale === 'ar' ? 'الموسيقى' : 'Music', count: 150 },
  ];

  const levels = [
    { id: 'beginner', name: locale === 'ar' ? 'مبتدئ' : 'Beginner' },
    { id: 'intermediate', name: locale === 'ar' ? 'متوسط' : 'Intermediate' },
    { id: 'advanced', name: locale === 'ar' ? 'متقدم' : 'Advanced' },
  ];

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const toggleLevel = (levelId: string) => {
    setSelectedLevels((prev) =>
      prev.includes(levelId) ? prev.filter((id) => id !== levelId) : [...prev, levelId]
    );
  };

  return (
    <div className="space-y-6">
      {/* Price Range */}
      <div className="card">
        <h3 className="font-bold text-lg mb-4">{locale === 'ar' ? 'السعر' : 'Price'}</h3>
        <div className="space-y-4">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full accent-primary-500"
          />
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-600">0 {locale === 'ar' ? 'جنيه' : 'EGP'}</span>
            <span className="font-semibold text-neutral-900">
              {priceRange[1]} {locale === 'ar' ? 'جنيه' : 'EGP'}
            </span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="card">
        <h3 className="font-bold text-lg mb-4">{locale === 'ar' ? 'التصنيفات' : 'Categories'}</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label
              key={category.id}
              className="flex items-center justify-between cursor-pointer hover:bg-neutral-50 p-2 rounded-lg transition-colors"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => toggleCategory(category.id)}
                  className="w-4 h-4 accent-primary-500 rounded"
                />
                <span className="text-neutral-700">{category.name}</span>
              </div>
              <span className="text-sm text-neutral-500">({category.count})</span>
            </label>
          ))}
        </div>
      </div>

      {/* Level */}
      <div className="card">
        <h3 className="font-bold text-lg mb-4">{locale === 'ar' ? 'المستوى' : 'Level'}</h3>
        <div className="space-y-2">
          {levels.map((level) => (
            <label
              key={level.id}
              className="flex items-center gap-3 cursor-pointer hover:bg-neutral-50 p-2 rounded-lg transition-colors"
            >
              <input
                type="checkbox"
                checked={selectedLevels.includes(level.id)}
                onChange={() => toggleLevel(level.id)}
                className="w-4 h-4 accent-primary-500 rounded"
              />
              <span className="text-neutral-700">{level.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div className="card">
        <h3 className="font-bold text-lg mb-4">{locale === 'ar' ? 'التقييم' : 'Rating'}</h3>
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <button
              key={rating}
              onClick={() => setSelectedRating(rating)}
              className={`w-full flex items-center gap-2 p-2 rounded-lg transition-colors ${
                selectedRating === rating ? 'bg-primary-50' : 'hover:bg-neutral-50'
              }`}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`text-sm ${
                      i < rating ? 'text-yellow-400' : 'text-neutral-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-neutral-600">
                {locale === 'ar' ? 'وأعلى' : '& Up'}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <button className="w-full btn-outline">
        {locale === 'ar' ? 'إعادة تعيين الفلاتر' : 'Reset Filters'}
      </button>
    </div>
  );
}