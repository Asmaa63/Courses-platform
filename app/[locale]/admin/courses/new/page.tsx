'use client';

import { useState } from 'react';
import { ArrowLeft, Upload, Plus, X, Save } from 'lucide-react';
import Link from 'next/link';

export default function NewCoursePage() {
  const [courseData, setCourseData] = useState({
    title: '',
    subtitle: '',
    description: '',
    category: '',
    level: '',
    language: '',
    price: '',
    duration: '',
    thumbnail: null as File | null
  });

  const [curriculum, setCurriculum] = useState([
    {
      id: 1,
      title: 'Introduction',
      lessons: [
        { id: 1, title: 'Welcome to the course', duration: '5:00' }
      ]
    }
  ]);

  const [requirements, setRequirements] = useState(['']);
  const [learningPoints, setLearningPoints] = useState(['']);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setCourseData({
      ...courseData,
      [e.target.name]: e.target.value
    });
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCourseData({
        ...courseData,
        thumbnail: e.target.files[0]
      });
    }
  };

  const addSection = () => {
    setCurriculum([
      ...curriculum,
      {
        id: curriculum.length + 1,
        title: '',
        lessons: []
      }
    ]);
  };

  const addLesson = (sectionId: number) => {
    setCurriculum(curriculum.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          lessons: [
            ...section.lessons,
            { id: section.lessons.length + 1, title: '', duration: '' }
          ]
        };
      }
      return section;
    }));
  };

  const addRequirement = () => {
    setRequirements([...requirements, '']);
  };

  const addLearningPoint = () => {
    setLearningPoints([...learningPoints, '']);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Course Data:', courseData);
    console.log('Curriculum:', curriculum);
    console.log('Requirements:', requirements);
    console.log('Learning Points:', learningPoints);
    // Here you would typically send this data to your API
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/admin/courses"
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ArrowLeft size={24} />
        </Link>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Add New Course</h1>
          <p className="text-gray-600 mt-1">Fill in the information below to create a new course</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Information */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Basic Information</h2>
          
          <div className="space-y-4">
            {/* Course Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Title *
              </label>
              <input
                type="text"
                name="title"
                value={courseData.title}
                onChange={handleInputChange}
                placeholder="e.g., Complete Web Development Bootcamp"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            {/* Subtitle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Subtitle
              </label>
              <input
                type="text"
                name="subtitle"
                value={courseData.subtitle}
                onChange={handleInputChange}
                placeholder="A brief subtitle for your course"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                name="description"
                value={courseData.description}
                onChange={handleInputChange}
                rows={5}
                placeholder="Write a comprehensive description of your course..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            {/* Category, Level, Language */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  name="category"
                  value={courseData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="business">Business</option>
                  <option value="marketing">Marketing</option>
                  <option value="data-science">Data Science</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Level *
                </label>
                <select
                  name="level"
                  value={courseData.level}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Language *
                </label>
                <select
                  name="language"
                  value={courseData.language}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Language</option>
                  <option value="english">English</option>
                  <option value="arabic">Arabic</option>
                  <option value="french">French</option>
                </select>
              </div>
            </div>

            {/* Price & Duration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price (USD) *
                </label>
                <input
                  type="number"
                  name="price"
                  value={courseData.price}
                  onChange={handleInputChange}
                  placeholder="99"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration (hours)
                </label>
                <input
                  type="text"
                  name="duration"
                  value={courseData.duration}
                  onChange={handleInputChange}
                  placeholder="10"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Thumbnail Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Course Thumbnail *
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors">
                <Upload className="mx-auto text-gray-400 mb-2" size={32} />
                <p className="text-sm text-gray-600 mb-2">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-500">
                  PNG, JPG up to 5MB (Recommended: 1280x720px)
                </p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleThumbnailChange}
                  className="mt-4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">What You&apos;ll Learn</h2>
          
          <div className="space-y-3">
            {learningPoints.map((point, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={point}
                  onChange={(e) => {
                    const newPoints = [...learningPoints];
                    newPoints[index] = e.target.value;
                    setLearningPoints(newPoints);
                  }}
                  placeholder="Enter a learning outcome"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {learningPoints.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setLearningPoints(learningPoints.filter((_, i) => i !== index))}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addLearningPoint}
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <Plus size={20} />
              Add Learning Point
            </button>
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Requirements</h2>
          
          <div className="space-y-3">
            {requirements.map((req, index) => (
              <div key={index} className="flex gap-2">
                <input
                  type="text"
                  value={req}
                  onChange={(e) => {
                    const newReqs = [...requirements];
                    newReqs[index] = e.target.value;
                    setRequirements(newReqs);
                  }}
                  placeholder="Enter a requirement"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                {requirements.length > 1 && (
                  <button
                    type="button"
                    onClick={() => setRequirements(requirements.filter((_, i) => i !== index))}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addRequirement}
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
            >
              <Plus size={20} />
              Add Requirement
            </button>
          </div>
        </div>

        {/* Curriculum */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Course Curriculum</h2>
            <button
              type="button"
              onClick={addSection}
              className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Plus size={20} />
              Add Section
            </button>
          </div>

          <div className="space-y-4">
            {curriculum.map((section, sectionIndex) => (
              <div key={section.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-medium text-gray-700">Section {sectionIndex + 1}:</span>
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) => {
                      const newCurriculum = [...curriculum];
                      newCurriculum[sectionIndex].title = e.target.value;
                      setCurriculum(newCurriculum);
                    }}
                    placeholder="Section title"
                    className="flex-1 px-3 py-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>

                <div className="space-y-2 ml-8">
                  {section.lessons.map((lesson, lessonIndex) => (
                    <div key={lesson.id} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={lesson.title}
                        placeholder="Lesson title"
                        className="flex-1 px-3 py-1 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                      <input
                        type="text"
                        value={lesson.duration}
                        placeholder="Duration"
                        className="w-24 px-3 py-1 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addLesson(section.id)}
                    className="flex items-center gap-2 text-sm text-primary-600 hover:text-primary-700 font-medium"
                  >
                    <Plus size={16} />
                    Add Lesson
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Submit Buttons */}
        <div className="flex items-center justify-end gap-4">
          <Link
            href="/admin/courses"
            className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Save size={20} />
            Save Course
          </button>
        </div>
      </form>
    </div>
  );
}