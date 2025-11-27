import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting seed...');

  // إنشاء Admin User
  const adminPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@academy.com' },
    update: {},
    create: {
      email: 'admin@academy.com',
      name: 'Admin User',
      password: adminPassword,
      role: 'ADMIN',
      image: 'https://i.pravatar.cc/150?img=1',
    },
  });
  console.log('✅ Admin created:', admin.email);

  // إنشاء Instructor User
  const instructorPassword = await bcrypt.hash('instructor123', 10);
  const instructor = await prisma.user.upsert({
    where: { email: 'instructor@academy.com' },
    update: {},
    create: {
      email: 'instructor@academy.com',
      name: 'Ahmed Hassan',
      password: instructorPassword,
      role: 'INSTRUCTOR',
      image: 'https://i.pravatar.cc/150?img=2',
    },
  });
  console.log('✅ Instructor created:', instructor.email);

  // إنشاء دورات تجريبية (14 دورة)
  const courses = [
    {
      title: 'Complete Web Development Bootcamp',
      titleAr: 'دورة تطوير الويب الشاملة',
      slug: 'complete-web-development-bootcamp',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js and more.',
      descriptionAr: 'تعلم HTML, CSS, JavaScript, React, Node.js والمزيد.',
      price: 499,
      thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600',
      category: 'Programming',
      level: 'BEGINNER',
      duration: 40,
      lessonsCount: 120,
      studentsCount: 15420,
      rating: 4.8,
      published: true,
      instructorId: instructor.id,
    },
    {
      title: 'UI/UX Design Masterclass',
      titleAr: 'دورة تصميم واجهات المستخدم المتقدمة',
      slug: 'ui-ux-design-masterclass',
      description: 'Master Figma, Adobe XD, and design principles.',
      descriptionAr: 'إتقان Figma و Adobe XD ومبادئ التصميم.',
      price: 399,
      thumbnail: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600',
      category: 'Design',
      level: 'INTERMEDIATE',
      duration: 30,
      lessonsCount: 85,
      studentsCount: 8750,
      rating: 4.9,
      published: true,
      instructorId: instructor.id,
    },
    {
      title: 'Digital Marketing Complete Guide',
      titleAr: 'دليل التسويق الرقمي الشامل',
      slug: 'digital-marketing-complete-guide',
      description: 'Learn SEO, Social Media Marketing and more.',
      descriptionAr: 'تعلم SEO والتسويق عبر السوشيال ميديا والمزيد.',
      price: 349,
      thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
      category: 'Marketing',
      level: 'BEGINNER',
      duration: 25,
      lessonsCount: 70,
      studentsCount: 12300,
      rating: 4.7,
      published: true,
      instructorId: instructor.id,
    },
    {
      title: 'Python Programming for Beginners',
      titleAr: 'برمجة بايثون للمبتدئين',
      slug: 'python-programming-for-beginners',
      description: 'Start programming with Python.',
      descriptionAr: 'ابدأ البرمجة باستخدام بايثون.',
      price: 299,
      thumbnail: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600',
      category: 'Programming',
      level: 'BEGINNER',
      duration: 20,
      lessonsCount: 60,
      studentsCount: 18900,
      rating: 4.9,
      published: true,
      instructorId: instructor.id,
    },
    {
      title: 'Data Science & Machine Learning',
      titleAr: 'علم البيانات والتعلم الآلي',
      slug: 'data-science-machine-learning',
      description: 'Learn ML algorithms and data analysis.',
      descriptionAr: 'تعلم ML وتحليل البيانات.',
      price: 599,
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
      category: 'Programming',
      level: 'ADVANCED',
      duration: 50,
      lessonsCount: 150,
      studentsCount: 9800,
      rating: 4.8,
      published: true,
      instructorId: instructor.id,
    },
    {
      title: 'Mobile App Development with React Native',
      titleAr: 'تطوير تطبيقات الموبايل مع React Native',
      slug: 'react-native-mobile-development',
      description: 'Build apps using React Native.',
      descriptionAr: 'بناء تطبيقات باستخدام React Native.',
      price: 449,
      thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600',
      category: 'Programming',
      level: 'INTERMEDIATE',
      duration: 35,
      lessonsCount: 100,
      studentsCount: 11200,
      rating: 4.7,
      published: true,
      instructorId: instructor.id,
    },
    {
      title: 'Cyber Security Fundamentals',
      titleAr: 'أساسيات الأمن السيبراني',
      slug: 'cyber-security-fundamentals',
      description: 'Learn ethical hacking & OSINT.',
      descriptionAr: 'تعلم الاختراق الأخلاقي و OSINT.',
      price: 530,
      thumbnail: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9',
      category: 'Security',
      level: 'BEGINNER',
      duration: 28,
      lessonsCount: 95,
      studentsCount: 6200,
      rating: 4.8,
      published: true,
      instructorId: instructor.id,
    },
    {
      title: 'AI for Everyone',
      titleAr: 'الذكاء الاصطناعي للجميع',
      slug: 'ai-for-everyone',
      description: 'Understand AI and neural networks',
      descriptionAr: 'فهم الذكاء الاصطناعي والشبكات العصبية',
      price: 380,
      thumbnail: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d',
      category: 'AI',
      level: 'BEGINNER',
      duration: 18,
      lessonsCount: 44,
      studentsCount: 4500,
      rating: 4.6,
      published: true,
      instructorId: instructor.id,
    },
    {
      title: 'Advanced JavaScript Concepts',
      titleAr: 'مفاهيم جافاسكريبت المتقدمة',
      slug: 'advanced-javascript-concepts',
      description: 'Master advanced JavaScript topics.',
      descriptionAr: 'إتقان المفاهيم المتقدمة لجافاسكريبت.',
      price: 335,
      thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600',
      category: 'Programming',
      level: 'ADVANCED',
      duration: 32,
      lessonsCount: 90,
      studentsCount: 7100,
      rating: 4.8,
      published: true,
      instructorId: instructor.id,
    },
    {
      title: 'Full Stack MERN Advanced',
      titleAr: 'مطوّر Full Stack MERN المتقدم',
      slug: 'fullstack-mern-advanced',
      description: 'Learn MongoDB, Express, React, Node',
      descriptionAr: 'تعلم MongoDB و Express و React و Node',
      price: 590,
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600',
      category: 'Programming',
      level: 'ADVANCED',
      duration: 60,
      lessonsCount: 180,
      studentsCount: 9500,
      rating: 4.9,
      published: true,
      instructorId: instructor.id,
    },
    {
      title: 'Business English Essentials',
      titleAr: 'أساسيات اللغة الإنجليزية للأعمال',
      slug: 'business-english-essentials',
      description: 'Improve your business communication',
      descriptionAr: 'تحسين التواصل في مجال الأعمال',
      price: 180,
      thumbnail: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=600',
      category: 'Language',
      level: 'BEGINNER',
      duration: 12,
      lessonsCount: 35,
      studentsCount: 4300,
      rating: 4.4,
      published: true,
      instructorId: instructor.id,
    },
    {
      title: 'Video Editing with Adobe Premiere',
      titleAr: 'مونتاج الفيديو باستخدام Adobe Premiere',
      slug: 'video-editing-adobe-premiere',
      description: 'Learn professional video editing.',
      descriptionAr: 'تعلم مونتاج الفيديو الاحترافي.',
      price: 260,
      thumbnail: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg',
      category: 'Media',
      level: 'INTERMEDIATE',
      duration: 22,
      lessonsCount: 63,
      studentsCount: 5100,
      rating: 4.5,
      published: true,
      instructorId: instructor.id,
    },
    {
      title: 'Freelancing & Earning Online',
      titleAr: 'العمل الحر والربح من الإنترنت',
      slug: 'freelancing-earning-online',
      description: 'Learn freelancing & Upwork success tips.',
      descriptionAr: 'تعلم العمل الحر ونصائح النجاح على Upwork.',
      price: 199,
      thumbnail: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=600&q=80',
      category: 'Business',
      level: 'BEGINNER',
      duration: 16,
      lessonsCount: 48,
      studentsCount: 8600,
      rating: 4.6,
      published: true,
      instructorId: instructor.id,
    },
    {
      title: 'Photography Masterclass',
      titleAr: 'احتراف التصوير الفوتوغرافي',
      slug: 'photography-masterclass',
      description: 'Master DSLR photography & lighting.',
      descriptionAr: 'إتقان تصوير DSLR والإضاءة.',
      price: 420,
      thumbnail: 'https://images.unsplash.com/photo-1484704849700-f032a568e944',
      category: 'Media',
      level: 'INTERMEDIATE',
      duration: 26,
      lessonsCount: 77,
      studentsCount: 7200,
      rating: 4.8,
      published: true,
      instructorId: instructor.id,
    },
  ];

  for (const courseData of courses) {
    const course = await prisma.course.upsert({
      where: { slug: courseData.slug },
      update: {},
      create: courseData,
    });
    console.log('📌 Course created:', course.title);

    const lessons = [
      {
        title: 'Introduction to the Course',
        titleAr: 'مقدمة الدورة',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        duration: 10,
        order: 1,
        published: true,
        courseId: course.id,
      },
      {
        title: 'Getting Started',
        titleAr: 'البدء',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        duration: 15,
        order: 2,
        published: true,
        courseId: course.id,
      },
      {
        title: 'First Project',
        titleAr: 'المشروع الأول',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        duration: 30,
        order: 3,
        published: true,
        courseId: course.id,
      },
    ];

    for (const lesson of lessons) {
      await prisma.lesson.create({ data: lesson });
    }

    console.log(`  ➕ Added ${lessons.length} lessons to ${course.title}`);
  }

  console.log('🎉 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
