'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import {
  PlayArrow,
  CheckCircle,
  Lock,
  MenuBook,
  Notes,
  QuestionAnswer,
  CloudDownload,
  Close,
} from '@mui/icons-material';

interface Lesson {
  id: string;
  title: string;
  titleAr: string;
  duration: number;
  order: number;
  videoUrl: string;
  published: boolean;
}

interface Course {
  id: string;
  title: string;
  titleAr: string;
  lessons: Lesson[];
}

export default function CourseLearnPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const locale = useLocale();
  const [course, setCourse] = useState<Course | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'notes' | 'qa' | 'resources'>('overview');
  const [showSidebar, setShowSidebar] = useState(true);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [paramsData, setParamsData] = useState<{ locale: string; id: string } | null>(null);

  useEffect(() => {
    params.then((data) => setParamsData(data));
  }, [params]);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`/${locale}/login`);
      return;
    }

    if (status === 'authenticated' && paramsData) {
      fetchCourse();
    }
  }, [status, paramsData, locale, router]);

  const fetchCourse = async () => {
    if (!paramsData) return;

    try {
      const response = await fetch(`/api/courses/${paramsData.id}`);
      if (response.ok) {
        const data = await response.json();
        setCourse(data);
        if (data.lessons.length > 0) {
          setCurrentLesson(data.lessons[0]);
        }
      }
    } catch (error) {
      console.error('Error fetching course:', error);
    }
  };

  const markAsComplete = (lessonId: string) => {
    if (!completedLessons.includes(lessonId)) {
      setCompletedLessons([...completedLessons, lessonId]);
    }
  };

  if (!paramsData || !course || !currentLesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  const progress = (completedLessons.length / course.lessons.length) * 100;

  return (
    <div className="h-screen flex flex-col bg-neutral-900">
      {/* Top Bar */}
      <div className="bg-neutral-800 border-b border-neutral-700 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push(`/${locale}/course/${paramsData.id}`)}
            className="text-white hover:text-primary-400 transition-colors"
          >
            <Close />
          </button>
          <h1 className="text-white font-bold text-lg truncate max-w-md">
            {locale === 'ar' ? course.titleAr : course.title}
          </h1>
        </div>

        <div className="flex items-center gap-6">
          {/* Progress */}
          <div className="flex items-center gap-3">
            <div className="w-32 bg-neutral-700 rounded-full h-2">
              <div
                className="bg-primary-500 h-full rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-white text-sm">{Math.round(progress)}%</span>
          </div>

          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="lg:hidden text-white hover:text-primary-400"
          >
            <MenuBook />
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Main Content */}
        <div className={`flex-1 flex flex-col ${showSidebar ? 'lg:w-2/3' : 'w-full'}`}>
          {/* Video Player */}
          <div className="bg-black flex items-center justify-center" style={{ height: '60vh' }}>
            <div className="text-center">
              <PlayArrow className="text-white text-6xl mb-4" />
              <p className="text-white text-lg">
                {locale === 'ar' ? 'مشغل الفيديو' : 'Video Player'}
              </p>
              <p className="text-neutral-400 text-sm mt-2">
                {currentLesson.videoUrl}
              </p>
            </div>
          </div>

          {/* Content Tabs */}
          <div className="flex-1 bg-neutral-800 overflow-hidden flex flex-col">
            {/* Tabs */}
            <div className="flex border-b border-neutral-700 px-6">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-4 font-semibold transition-colors ${
                  activeTab === 'overview'
                    ? 'text-primary-500 border-b-2 border-primary-500'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {locale === 'ar' ? 'نظرة عامة' : 'Overview'}
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`px-6 py-4 font-semibold transition-colors ${
                  activeTab === 'notes'
                    ? 'text-primary-500 border-b-2 border-primary-500'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {locale === 'ar' ? 'ملاحظات' : 'Notes'}
              </button>
              <button
                onClick={() => setActiveTab('qa')}
                className={`px-6 py-4 font-semibold transition-colors ${
                  activeTab === 'qa'
                    ? 'text-primary-500 border-b-2 border-primary-500'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {locale === 'ar' ? 'أسئلة' : 'Q&A'}
              </button>
              <button
                onClick={() => setActiveTab('resources')}
                className={`px-6 py-4 font-semibold transition-colors ${
                  activeTab === 'resources'
                    ? 'text-primary-500 border-b-2 border-primary-500'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {locale === 'ar' ? 'موارد' : 'Resources'}
              </button>
            </div>

            {/* Tab Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {activeTab === 'overview' && (
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-4">
                    {locale === 'ar' ? currentLesson.titleAr : currentLesson.title}
                  </h3>
                  <p className="text-neutral-400 mb-6">
                    {locale === 'ar'
                      ? 'مدة الدرس: ' + currentLesson.duration + ' دقيقة'
                      : 'Lesson duration: ' + currentLesson.duration + ' minutes'}
                  </p>
                  <button
                    onClick={() => markAsComplete(currentLesson.id)}
                    className={`btn-primary ${
                      completedLessons.includes(currentLesson.id)
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                    }`}
                    disabled={completedLessons.includes(currentLesson.id)}
                  >
                    {completedLessons.includes(currentLesson.id)
                      ? locale === 'ar'
                        ? '✓ مكتمل'
                        : '✓ Completed'
                      : locale === 'ar'
                      ? 'وضع علامة كمكتمل'
                      : 'Mark as Complete'}
                  </button>
                </div>
              )}

              {activeTab === 'notes' && (
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-4">
                    {locale === 'ar' ? 'ملاحظاتي' : 'My Notes'}
                  </h3>
                  <textarea
                    className="w-full h-64 bg-neutral-700 text-white rounded-xl p-4 outline-none"
                    placeholder={
                      locale === 'ar'
                        ? 'اكتب ملاحظاتك هنا...'
                        : 'Write your notes here...'
                    }
                  ></textarea>
                </div>
              )}

              {activeTab === 'qa' && (
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-4">
                    {locale === 'ar' ? 'الأسئلة والأجوبة' : 'Q&A'}
                  </h3>
                  <p className="text-neutral-400">
                    {locale === 'ar'
                      ? 'لا توجد أسئلة بعد. كن أول من يسأل!'
                      : 'No questions yet. Be the first to ask!'}
                  </p>
                </div>
              )}

              {activeTab === 'resources' && (
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-4">
                    {locale === 'ar' ? 'الموارد' : 'Resources'}
                  </h3>
                  <p className="text-neutral-400">
                    {locale === 'ar'
                      ? 'لا توجد موارد متاحة لهذا الدرس'
                      : 'No resources available for this lesson'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar - Course Content */}
        {showSidebar && (
          <div className="w-full lg:w-1/3 bg-neutral-800 border-l border-neutral-700 overflow-y-auto">
            <div className="p-6">
              <h3 className="text-white font-bold text-lg mb-4">
                {locale === 'ar' ? 'محتوى الدورة' : 'Course Content'}
              </h3>
              <div className="space-y-2">
                {course.lessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => setCurrentLesson(lesson)}
                    className={`w-full text-left p-4 rounded-lg transition-colors ${
                      currentLesson.id === lesson.id
                        ? 'bg-primary-600 text-white'
                        : 'bg-neutral-700 text-neutral-300 hover:bg-neutral-600'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {completedLessons.includes(lesson.id) ? (
                        <CheckCircle className="text-green-400" />
                      ) : currentLesson.id === lesson.id ? (
                        <PlayArrow />
                      ) : (
                        <Lock className="text-neutral-500" />
                      )}
                      <div className="flex-1">
                        <p className="font-semibold">
                          {index + 1}. {locale === 'ar' ? lesson.titleAr : lesson.title}
                        </p>
                        <p className="text-sm opacity-75">{lesson.duration} min</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}