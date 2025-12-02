'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Delete, ShoppingCartOutlined } from '@mui/icons-material';

interface CartItem {
  id: string;
  course: {
    id: string;
    title: string;
    titleAr: string;
    thumbnail: string;
    price: number;
    instructor: {
      name: string;
    };
  };
}

export default function CartPage() {
  const { data: session, status } = useSession();
  const locale = useLocale();
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`/${locale}/login`);
      return;
    }

    if (status === 'authenticated') {
      fetchCart();
    }
  }, [status, locale, router]);

  const fetchCart = async () => {
    try {
      const response = await fetch('/api/cart');
      if (response.ok) {
        const data = await response.json();
        setCartItems(data);
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  const removeFromCart = async (courseId: string) => {
    try {
      const response = await fetch(`/api/cart?courseId=${courseId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setCartItems(cartItems.filter((item) => item.course.id !== courseId));
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.course.price, 0);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-12">
        <h1 className="text-3xl font-display font-bold text-neutral-900 mb-8">
          {locale === 'ar' ? 'سلة التسوق' : 'Shopping Cart'}
        </h1>

        {cartItems.length === 0 ? (
          <div className="card text-center py-12">
            <ShoppingCartOutlined className="text-neutral-400 text-6xl mx-auto mb-4" />
            <h2 className="text-xl font-bold text-neutral-900 mb-2">
              {locale === 'ar' ? 'السلة فارغة' : 'Your cart is empty'}
            </h2>
            <p className="text-neutral-600 mb-6">
              {locale === 'ar'
                ? 'ابدأ بإضافة دورات إلى سلتك'
                : 'Start adding courses to your cart'}
            </p>
            <Link href={`/${locale}/user/courses`} className="btn-primary inline-block">
              {locale === 'ar' ? 'تصفح الدورات' : 'Browse Courses'}
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="card">
                  <div className="flex gap-4">
                    <Image
                      src={item.course.thumbnail}
                      alt={item.course.title}
                      width={160}
                      height={90}
                      className="rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <Link href={`/${locale}/user/course/${item.course.id}`}>
                        <h3 className="font-bold text-neutral-900 mb-2 hover:text-primary-600">
                          {locale === 'ar' ? item.course.titleAr : item.course.title}
                        </h3>
                      </Link>
                      <p className="text-sm text-neutral-600 mb-4">
                        {locale === 'ar' ? 'بواسطة' : 'By'} {item.course.instructor.name}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-2xl font-bold text-primary-600">
                          {item.course.price} {locale === 'ar' ? 'جنيه' : 'EGP'}
                        </p>
                        <button
                          onClick={() => removeFromCart(item.course.id)}
                          className="text-red-600 hover:text-red-700 p-2"
                        >
                          <Delete />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="card sticky top-24">
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {locale === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
                </h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-neutral-700">
                    <span>{locale === 'ar' ? 'المجموع الفرعي' : 'Subtotal'}</span>
                    <span>{total} {locale === 'ar' ? 'جنيه' : 'EGP'}</span>
                  </div>
                  <div className="flex justify-between text-neutral-700">
                    <span>{locale === 'ar' ? 'الضريبة' : 'Tax'}</span>
                    <span>0 {locale === 'ar' ? 'جنيه' : 'EGP'}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between text-xl font-bold text-neutral-900">
                    <span>{locale === 'ar' ? 'الإجمالي' : 'Total'}</span>
                    <span>{total} {locale === 'ar' ? 'جنيه' : 'EGP'}</span>
                  </div>
                </div>
                <Link href={`/${locale}/user/checkout`} className="btn-primary w-full">
  {locale === 'ar' ? 'إتمام الشراء' : 'Checkout'}
</Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}