import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

// Get user enrollments
export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const enrollments = await prisma.enrollment.findMany({
      where: { userId: session.user.id },
      include: {
        course: {
          include: {
            instructor: {
              select: {
                id: true,
                name: true,
                image: true,
              },
            },
          },
        },
      },
      orderBy: {
        enrolledAt: 'desc',
      },
    });

    return NextResponse.json(enrollments);
  } catch (error) {
    console.error('Error fetching enrollments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch enrollments' },
      { status: 500 }
    );
  }
}

// Create enrollment (after successful payment)
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { courseIds } = body; // Array of course IDs from cart

    if (!courseIds || !Array.isArray(courseIds)) {
      return NextResponse.json(
        { error: 'Course IDs are required' },
        { status: 400 }
      );
    }

    // Create enrollments for all courses
    const enrollments = await Promise.all(
      courseIds.map((courseId: string) =>
        prisma.enrollment.create({
          data: {
            userId: session.user.id,
            courseId,
            progress: 0,
            completedLessons: [],
          },
        })
      )
    );

    // Clear cart after successful enrollment
    await prisma.cartItem.deleteMany({
      where: {
        userId: session.user.id,
        courseId: {
          in: courseIds,
        },
      },
    });

    return NextResponse.json(enrollments, { status: 201 });
  } catch (error) {
    console.error('Error creating enrollment:', error);
    return NextResponse.json(
      { error: 'Failed to create enrollment' },
      { status: 500 }
    );
  }
}