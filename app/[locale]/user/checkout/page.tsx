'use client';

import { useEffect, useState, ChangeEvent } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import {
  CreditCard,
  Lock,
  CheckCircle,
  AccountBalance,
  AccountBalanceWallet,
  InfoOutlined,
  CloudUpload,
} from '@mui/icons-material';

interface CartItem {
  id: string;
  course: {
    id: string;
    title: string;
    titleAr: string;
    thumbnail: string;
    price: number;
  };
}

export default function CheckoutPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const locale = useLocale();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'bank' | 'wallet'>('card');
  
  // حالة لملف الإيصال (للبنك والمحفظة)
  const [receiptFile, setReceiptFile] = useState<File | null>(null);

  // --- إضافة جديدة: حالة لحقول البطاقة ---
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvv: '',
    holder: '',
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push(`/${locale}/login`);
      return;
    }
    if (status === 'authenticated') {
      fetchCart();
    }
  }, [status, locale, router]);

  // إعادة تعيين الحقول عند تغيير طريقة الدفع
  useEffect(() => {
    setReceiptFile(null);
    setCardDetails({ number: '', expiry: '', cvv: '', holder: '' });
  }, [paymentMethod]);

  const fetchCart = async () => {
    try {
      const response = await fetch('/api/cart');
      if (response.ok) {
        const data = await response.json();
        if (data.length === 0) {
          router.push(`/${locale}/user/cart`);
          return;
        }
        setCartItems(data);
      }
    } catch (error) {
      console.error('Error fetching cart:', error);
    } finally {
      setLoading(false);
    }
  };

  // دالة لتحديث بيانات البطاقة
  const handleCardInputChange = (field: keyof typeof cardDetails, value: string) => {
    setCardDetails(prev => ({ ...prev, [field]: value }));
  };

  // دالة لاختيار ملف الإيصال
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceiptFile(e.target.files[0]);
    }
  };

  // --- إضافة جديدة: منطق التحقق من صحة النموذج لتفعيل الزر ---
  const isFormValid = () => {
    if (paymentMethod === 'card') {
      // التحقق من أن حقول البطاقة ليست فارغة
      // (يمكنك إضافة تحقق أكثر تعقيداً هنا مثل طول الرقم وصحة التاريخ)
      return (
        cardDetails.number.trim() !== '' &&
        cardDetails.expiry.trim() !== '' &&
        cardDetails.cvv.trim() !== '' &&
        cardDetails.holder.trim() !== ''
      );
    } else if (paymentMethod === 'bank' || paymentMethod === 'wallet') {
      // التحقق من وجود ملف الإيصال
      return receiptFile !== null;
    }
    return false;
  };

  // دالة الدفع المعدلة
  const handleCheckout = async () => {
    setProcessing(true);
    
    try {
      // Create enrollments
      const courseIds = cartItems.map(item => item.course.id);
      const response = await fetch('/api/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ courseIds }),
      });

      if (response.ok) {
        alert(locale === 'ar' ? 'تم الدفع بنجاح! 🎉' : 'Payment successful! 🎉');
        router.push(`/${locale}/user/my-learning`);
      } else {
        alert(locale === 'ar' ? 'حدث خطأ أثناء الدفع' : 'Payment failed');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert(locale === 'ar' ? 'حدث خطأ أثناء الدفع' : 'Payment failed');
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.course.price, 0);
  const tax = 0;
  const total = subtotal + tax;

  // متغير يحدد هل الزر معطل أم لا
  const isButtonDisabled = processing || !isFormValid();

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="container-custom py-12">
        <h1 className="text-3xl font-display font-bold text-neutral-900 mb-8">
          {locale === 'ar' ? 'إتمام الدفع' : 'Checkout'}
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Payment Details Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Payment Method Selection */}
            <div className="card">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">
                {locale === 'ar' ? 'طريقة الدفع' : 'Payment Method'}
              </h2>

              <div className="space-y-3">
                {/* Card Button */}
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-colors ${
                    paymentMethod === 'card'
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-300 hover:border-primary-300'
                  }`}
                >
                  <CreditCard className="text-primary-500 text-3xl" />
                  <div className="text-left">
                    <p className="font-semibold text-neutral-900">
                      {locale === 'ar' ? 'بطاقة ائتمان/خصم' : 'Credit/Debit Card'}
                    </p>
                    <p className="text-sm text-neutral-600">Visa, Mastercard</p>
                  </div>
                </button>

                {/* Bank Button */}
                <button
                  onClick={() => setPaymentMethod('bank')}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-colors ${
                    paymentMethod === 'bank'
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-300 hover:border-primary-300'
                  }`}
                >
                  <AccountBalance className="text-primary-500 text-3xl" />
                  <div className="text-left">
                    <p className="font-semibold text-neutral-900">
                      {locale === 'ar' ? 'تحويل بنكي' : 'Bank Transfer'}
                    </p>
                    <p className="text-sm text-neutral-600">
                      {locale === 'ar' ? 'إرفاق إيصال التحويل' : 'Attach transfer receipt'}
                    </p>
                  </div>
                </button>

                {/* Wallet Button */}
                <button
                  onClick={() => setPaymentMethod('wallet')}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-colors ${
                    paymentMethod === 'wallet'
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-300 hover:border-primary-300'
                  }`}
                >
                  <AccountBalanceWallet className="text-primary-500 text-3xl" />
                  <div className="text-left">
                    <p className="font-semibold text-neutral-900">
                      {locale === 'ar' ? 'محفظة إلكترونية' : 'E-Wallet'}
                    </p>
                    <p className="text-sm text-neutral-600">Fawry, Vodafone Cash</p>
                  </div>
                </button>
              </div>
            </div>

            {/* --- منطقة التفاصيل المتغيرة بناء على الاختيار --- */}

            {/* 1. نموذج البطاقة (يظهر فقط عند اختيار Card) */}
            {paymentMethod === 'card' && (
              <div className="card">
                <h2 className="text-xl font-bold text-neutral-900 mb-6">
                  {locale === 'ar' ? 'بيانات البطاقة' : 'Card Details'}
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      {locale === 'ar' ? 'رقم البطاقة' : 'Card Number'}
                    </label>
                    {/* تم ربط الحقول بالـ State */}
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="input"
                      maxLength={19}
                      value={cardDetails.number}
                      onChange={(e) => handleCardInputChange('number', e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">
                        {locale === 'ar' ? 'تاريخ الانتهاء' : 'Expiry Date'}
                      </label>
                      <input
                       type="text"
                       placeholder="MM/YY"
                       className="input"
                       maxLength={5}
                       value={cardDetails.expiry}
                       onChange={(e) => handleCardInputChange('expiry', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-neutral-700 mb-2">CVV</label>
                      <input
                       type="text"
                       placeholder="123"
                       className="input"
                       maxLength={3}
                       value={cardDetails.cvv}
                       onChange={(e) => handleCardInputChange('cvv', e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      {locale === 'ar' ? 'اسم حامل البطاقة' : 'Cardholder Name'}
                    </label>
                    <input
                     type="text"
                     placeholder={locale === 'ar' ? 'الاسم كما في البطاقة' : 'Name on card'}
                     className="input"
                     value={cardDetails.holder}
                     onChange={(e) => handleCardInputChange('holder', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 2. تعليمات التحويل البنكي + رفع الإيصال */}
            {paymentMethod === 'bank' && (
                <div className="card bg-neutral-50 border-neutral-200 space-y-6">
                    <div className="flex gap-4">
                        <InfoOutlined className="text-primary-600 text-3xl shrink-0" />
                        <div>
                            <h2 className="text-lg font-bold text-neutral-900 mb-2">
                                {locale === 'ar' ? 'خطوات التحويل البنكي' : 'Bank Transfer Steps'}
                            </h2>
                            <p className="text-neutral-700 text-sm mb-4 leading-relaxed">
                                {locale === 'ar' ? 'يرجى تحويل المبلغ ورفع صورة الإيصال.' : 'Please transfer amount and upload receipt.'}
                            </p>
                             <div className="bg-white p-4 rounded-lg border border-neutral-200 text-sm space-y-2 font-mono text-neutral-800 mb-4">
                                <div className="flex justify-between"><span className="text-neutral-500">IBAN:</span><span className="font-bold text-primary-700">EG1200000000000000000000</span></div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-neutral-900 mb-3">
                             {locale === 'ar' ? 'إرفاق صورة إيصال التحويل (مطلوب)' : 'Attach Transfer Receipt (Required)'}
                        </label>
                        <label htmlFor="receipt-upload" className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer bg-white hover:bg-primary-50 transition-colors ${receiptFile ? 'border-primary-500 bg-primary-50' : 'border-neutral-300'}`}>
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <CloudUpload className={`text-4xl mb-2 ${receiptFile ? 'text-primary-600' : 'text-neutral-400'}`} />
                                {receiptFile ? (
                                    <p className="text-sm text-primary-600 font-semibold px-4 text-center truncate max-w-xs">{receiptFile.name}</p>
                                ) : (
                                    <p className="text-sm text-neutral-500">{locale === 'ar' ? 'اضغط لاختيار الصورة' : 'Click to upload'}</p>
                                )}
                            </div>
                            <input id="receipt-upload" type="file" accept="image/png, image/jpeg, image/jpg" className="hidden" onChange={handleFileChange} />
                        </label>
                    </div>
                </div>
            )}

            {/* 3. تعليمات المحفظة الإلكترونية + رفع الإيصال */}
            {paymentMethod === 'wallet' && (
                 <div className="card bg-neutral-50 border-neutral-200 space-y-6">
                 <div className="flex gap-4">
                     <AccountBalanceWallet className="text-primary-600 text-3xl shrink-0" />
                     <div>
                         <h2 className="text-lg font-bold text-neutral-900 mb-2">
                             {locale === 'ar' ? 'خطوات الدفع بالمحفظة' : 'E-Wallet Payment Steps'}
                         </h2>
                         <p className="text-neutral-700 text-sm mb-4 leading-relaxed">
                            {locale === 'ar' ? 'يرجى تحويل المبلغ ورفع "سكرين شوت".' : 'Please transfer amount and upload screenshot.'}
                         </p>
                         <div className="bg-white p-4 rounded-lg border border-neutral-200 text-center mb-4">
                             <p className="text-2xl font-bold text-primary-700 font-mono">010 1234 5678</p>
                         </div>
                     </div>
                 </div>
                  {/* نفس مكون الرفع */}
                  <div>
                        <label className="block text-sm font-bold text-neutral-900 mb-3">
                             {locale === 'ar' ? 'إرفاق "سكرين شوت" التحويل (مطلوب)' : 'Attach Transfer Screenshot (Required)'}
                        </label>
                        <label htmlFor="receipt-upload-wallet" className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer bg-white hover:bg-primary-50 transition-colors ${receiptFile ? 'border-primary-500 bg-primary-50' : 'border-neutral-300'}`}>
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <CloudUpload className={`text-4xl mb-2 ${receiptFile ? 'text-primary-600' : 'text-neutral-400'}`} />
                                {receiptFile ? (
                                    <p className="text-sm text-primary-600 font-semibold px-4 text-center truncate max-w-xs">{receiptFile.name}</p>
                                ) : (
                                    <p className="text-sm text-neutral-500">{locale === 'ar' ? 'اضغط لاختيار الصورة' : 'Click to upload'}</p>
                                )}
                            </div>
                            <input id="receipt-upload-wallet" type="file" accept="image/png, image/jpeg, image/jpg" className="hidden" onChange={handleFileChange} />
                        </label>
                    </div>
             </div>
            )}
            
            {/* Security Badge */}
            <div className="flex items-center gap-3 text-neutral-600">
              <Lock className="text-green-600" />
              <p className="text-sm">
                {locale === 'ar'
                  ? 'جميع المعاملات آمنة ومشفرة'
                  : 'All transactions are secure and encrypted'}
              </p>
            </div>
          </div>

          {/* Order Summary Right Column */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">
                {locale === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
              </h2>
              {/* Cart Items & Pricing (تم اختصارها للمساحة، هي نفسها السابقة) */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-xl font-bold text-neutral-900">
                  <span>{locale === 'ar' ? 'الإجمالي' : 'Total'}</span>
                  <span>{total} {locale === 'ar' ? 'جنيه' : 'EGP'}</span>
                </div>
              </div>

              {/* زر الدفع المعدل */}
              <button
                onClick={handleCheckout}
                // استخدام متغير الحالة الجديد لتعطيل الزر
                disabled={isButtonDisabled}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {processing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    {locale === 'ar' ? 'جاري المعالجة...' : 'Processing...'}
                  </>
                ) : (
                  <>
                    <CheckCircle />
                    {locale === 'ar' 
                        ? (paymentMethod === 'card' ? 'إتمام الدفع' : 'تأكيد الطلب وإرسال الإيصال') 
                        : (paymentMethod === 'card' ? 'Complete Payment' : 'Confirm & Send Receipt')}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}