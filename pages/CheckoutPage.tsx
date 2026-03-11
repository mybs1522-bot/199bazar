import React, { useState, useEffect } from 'react';
import { CourseCard } from '../components/CourseCard';
import { CartBar } from '../components/CartBar';
import { CartDrawer } from '../components/CartDrawer';
import { CourseDetailModal } from '../components/CourseDetailModal';
import { Course } from '../types';
import { PurchaseTicker } from '../components/PurchaseTicker';
import { COURSES, COURSE_CATEGORIES, BUNDLE_PRICE, TESTIMONIALS, FAQ_ITEMS } from '../constants';
import { ChevronDown, ShoppingCart, Sparkles, ArrowRight, Timer, Star, MapPin, Quote, CheckCircle2, Zap, Shield, ChevronUp, Check } from 'lucide-react';
import { openRazorpayCheckout } from '../services/razorpay';

// Logo Component
const Logo = () => (
  <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
    <div className="relative w-9 h-9 border-2 border-gray-900 flex items-center justify-center bg-white transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-[2px] group-hover:translate-y-[2px]">
      <span className="font-display font-black text-lg tracking-tighter relative z-10">AV</span>
    </div>
    <div className="flex flex-col">
      <span className="font-display font-bold text-lg tracking-[0.2em] leading-none text-gray-900">AVADA</span>
      <div className="w-full h-[1px] bg-gray-200 my-0.5"></div>
      <span className="text-[7px] font-bold uppercase tracking-widest text-gray-400 flex justify-between w-full leading-none">
        <span>BAZAAR</span>
        <span>•</span>
        <span className="text-brand-primary font-black">₹199</span>
      </span>
    </div>
  </div>
);

const CheckoutPage: React.FC = () => {
  const [cart, setCart] = useState<Set<string>>(new Set());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [timeLeft, setTimeLeft] = useState({ h: 2, m: 23, s: 49 });
  const [detailCourse, setDetailCourse] = useState<Course | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState<string | null>(null); // paymentId

  // Timer Logic (synced)
  useEffect(() => {
    const calculateTime = () => {
      const DURATION = (2 * 60 * 60 * 1000) + (23 * 60 * 1000) + (49 * 1000);
      const now = Date.now();
      const remaining = DURATION - (now % DURATION);
      const h = Math.floor((remaining / (1000 * 60 * 60)) % 24);
      const m = Math.floor((remaining / (1000 * 60)) % 60);
      const s = Math.floor((remaining / 1000) % 60);
      setTimeLeft({ h, m, s });
    };
    const timerInterval = setInterval(calculateTime, 1000);
    calculateTime();
    return () => clearInterval(timerInterval);
  }, []);

  const toggleCart = (courseId: string) => {
    setCart(prev => {
      const next = new Set(prev);
      if (next.has(courseId)) {
        next.delete(courseId);
      } else {
        next.add(courseId);
      }
      return next;
    });
  };

  const removeFromCart = (courseId: string) => {
    setCart(prev => {
      const next = new Set(prev);
      next.delete(courseId);
      return next;
    });
  };

  const addAllToCart = () => {
    setCart(new Set(COURSES.map(c => c.id)));
  };

  const cartTotal = cart.size === COURSES.length
    ? BUNDLE_PRICE
    : COURSES.filter(c => cart.has(c.id)).reduce((sum, c) => sum + c.price, 0);

  const handleCheckout = (phone?: string, email?: string) => {
    setIsCartOpen(true);

    if (cart.size === 0) return;
    if (!phone || !email) return;

    openRazorpayCheckout({
      amount: cartTotal,
      courseIds: Array.from(cart),
      userPhone: phone,
      userEmail: email,
      onSuccess: (paymentId) => {
        setPaymentSuccess(paymentId);
        setCart(new Set());
        setIsCartOpen(false);
      },
      onCancel: () => {
        console.log('Payment cancelled by user');
      },
      onError: (err) => {
        console.error('Razorpay Error:', err);
        alert('Payment failed. Please try again or contact support.');
      }
    });
  };

  const formatTime = (val: number) => val.toString().padStart(2, '0');

  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-transparent text-gray-900 font-sans overflow-x-hidden selection:bg-blue-100 grid-bg">
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ═══════ ANNOUNCEMENT BAR ═══════ */}
      <div className="bg-gray-900 text-white py-2.5 px-4 relative overflow-hidden">
        <div className="container mx-auto flex items-center justify-center gap-4 sm:gap-8 text-sm">
          <div className="flex items-center gap-2 shrink-0">
            <Zap size={14} className="text-yellow-400 fill-yellow-400" />
            <span className="text-xs sm:text-sm font-bold">Every course <span className="text-brand-accent">₹199</span> only</span>
          </div>
          <div className="w-px h-4 bg-gray-700 hidden sm:block"></div>
          <div className="flex items-center gap-2 shrink-0">
            <Timer size={14} className="text-brand-primary animate-pulse" />
            <div className="flex items-center gap-0.5 font-display font-bold text-sm tabular-nums text-brand-primary bg-gray-800 px-2.5 py-0.5 rounded-md border border-gray-700">
              <span>{formatTime(timeLeft.h)}</span>
              <span className="text-gray-500">:</span>
              <span>{formatTime(timeLeft.m)}</span>
              <span className="text-gray-500">:</span>
              <span>{formatTime(timeLeft.s)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════ NAVBAR ═══════ */}
      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 py-3">
        <div className="container mx-auto flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-3">
            {/* Bundle CTA — Desktop */}
            <button
              onClick={addAllToCart}
              className="hidden md:flex items-center gap-2 bg-gray-900 text-white font-bold text-xs px-5 py-2.5 rounded-full hover:bg-black transition-colors"
            >
              <Sparkles size={14} className="text-yellow-400 fill-yellow-400" />
              All 12 → ₹{BUNDLE_PRICE}
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart size={20} className="text-gray-700" />
              {cart.size > 0 && (
                <div className="absolute -top-0.5 -right-0.5 bg-brand-primary text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm animate-[fadeIn_0.2s_ease-out]">
                  {cart.size}
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>

      <main>
        {/* ═══════ INSTRUCTION ═══════ */}
        <section className="bg-white py-10 md:py-12 border-b border-gray-100 grid-bg">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-xl md:text-2xl font-display font-bold text-gray-800 leading-relaxed">
              Select jo aapko seekhna hai, <br className="md:hidden" />
              <span className="text-brand-primary">saare if you want to become complete designer.</span>
            </h2>
          </div>
        </section>

        <section className="bg-gray-50 border-y border-gray-100 py-6 md:py-10 grid-bg">
          <div className="container mx-auto px-2 md:px-8">
            <div className="text-center mb-6">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-gray-400">Number of Courses</span>
            </div>
            <div className="flex items-center justify-center gap-3 md:gap-12">
              {COURSE_CATEGORIES.map(cat => (
                <div key={cat.title} className="flex flex-col items-center group cursor-pointer shrink-0 min-w-max" onClick={() => {
                  const el = document.getElementById('courses');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}>
                  <span className="text-lg md:text-3xl font-display font-black text-gray-900 group-hover:text-brand-primary transition-colors">
                    {cat.ids.length}
                  </span>
                  <span className="text-[7.5px] md:text-xs font-bold uppercase tracking-wider text-gray-400 group-hover:text-gray-600 transition-colors">
                    {cat.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════ COURSE GRID ═══════ */}
        <section id="courses" className="py-12 md:py-16 bg-gray-50 scroll-mt-16 grid-bg">
          <div className="container mx-auto px-4 md:px-8">

            {/* Section Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">All Courses</h2>
                <p className="text-gray-500 text-sm mt-1">{COURSES.length} courses · ₹199 each</p>
              </div>
              <button
                onClick={addAllToCart}
                className="flex items-center gap-2 bg-gray-900 text-white font-bold text-sm px-5 py-2.5 rounded-full hover:bg-black transition-colors shrink-0"
              >
                <Sparkles size={14} className="text-yellow-400 fill-yellow-400" />
                Add All 12 → ₹{BUNDLE_PRICE}
              </button>
            </div>

            {/* Categories */}
            {COURSE_CATEGORIES.map(cat => {
              const categoryCourses = cat.ids.map(id => COURSES.find(c => c.id === id)!).filter(Boolean);
              return (
                <div key={cat.title} className="mb-10">
                  <div className="flex items-center gap-3 mb-5">
                    <h3 className="text-lg font-display font-bold text-gray-800">{cat.title}</h3>
                    <div className="h-px flex-1 bg-gray-200"></div>
                    <span className="text-xs text-gray-400 font-medium">{categoryCourses.length} courses</span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
                    {categoryCourses.map(course => (
                      <CourseCard
                        key={course.id}
                        course={course}
                        isInCart={cart.has(course.id)}
                        onToggleCart={toggleCart}
                        onViewDetails={(c) => setDetailCourse(c)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══════ BUNDLE BANNER ═══════ */}
        <section className="py-12 md:py-16 px-4 md:px-8 bg-white grid-bg">
          <div className="container mx-auto">
            <div className="relative bg-gray-900 rounded-3xl p-8 md:p-14 overflow-hidden">
              {/* BG Glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary rounded-full blur-[120px] opacity-20 -mr-32 -mt-32 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[100px] opacity-10 -ml-20 -mb-20 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-lg text-center md:text-left">
                  <div className="inline-flex items-center gap-2 text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">
                    <Sparkles size={14} className="fill-yellow-400" />
                    Best Value Deal
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                    All 12 Courses <span className="text-brand-accent">₹{BUNDLE_PRICE}</span>
                  </h2>
                  <p className="text-gray-400 text-sm">
                    That's ₹{Math.round(BUNDLE_PRICE / 12)}/course instead of ₹199. Save ₹{(12 * 199 - BUNDLE_PRICE).toLocaleString()}.
                  </p>
                </div>
                <button
                  onClick={addAllToCart}
                  className="px-10 py-5 bg-brand-primary text-white font-bold text-lg rounded-2xl shadow-glow hover:shadow-glow-lg hover:bg-blue-700 transition-all flex items-center gap-3 group shrink-0"
                >
                  Grab All Courses
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════ TESTIMONIALS — Compact ═══════ */}
        <section className="py-12 md:py-16 bg-gray-50 overflow-hidden grid-bg">
          <div className="container mx-auto px-4 md:px-8 mb-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-1">Real Results</h2>
            <p className="text-gray-500 text-sm">From architects and designers like you</p>
          </div>
          <div className="overflow-x-auto no-scrollbar px-4 md:px-8 flex gap-4 snap-x snap-mandatory pb-6">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] md:min-w-[360px] p-6 bg-white rounded-2xl border border-gray-100 shadow-sm snap-center flex flex-col justify-between hover:border-gray-200 hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex text-yellow-400 mb-3 gap-0.5">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">"{t.content}"</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-gray-600 text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-xs text-gray-400">{t.role} · {t.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ FAQ ═══════ */}
        <section className="py-16 px-4 md:px-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-display font-bold text-center mb-8 text-gray-900">Questions?</h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-100 overflow-hidden transition-all hover:border-gray-200">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-medium text-gray-900 text-sm">{item.question}</span>
                  <div className={`transition-transform duration-300 shrink-0 ml-4 ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                    <ChevronDown size={18} className="text-gray-400" />
                  </div>
                </button>
                <div className={`px-5 text-gray-500 text-sm transition-all duration-300 overflow-hidden ${openFaqIndex === index ? 'max-h-32 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="border-t border-gray-100 bg-white py-10 px-4 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Logo />
          <p className="text-[10px] text-gray-400 tracking-wider">© 2025 Avada Inc. All rights reserved.</p>
        </div>
      </footer>

      {/* ═══════ CART BAR (Sticky Bottom) ═══════ */}
      <CartBar
        itemCount={cart.size}
        total={cartTotal}
        onCheckout={handleCheckout}
        onViewCart={() => setIsCartOpen(true)}
      />

      {/* ═══════ CART DRAWER ═══════ */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartIds={cart}
        onRemove={removeFromCart}
        onAddAll={addAllToCart}
        onCheckout={handleCheckout}
        timeLeft={timeLeft}
      />

      {/* ═══════ COURSE DETAIL MODAL ═══════ */}
      <CourseDetailModal
        course={detailCourse}
        isOpen={detailCourse !== null}
        onClose={() => setDetailCourse(null)}
        isInCart={detailCourse ? cart.has(detailCourse.id) : false}
        onToggleCart={toggleCart}
      />

      {/* ═══════ PAYMENT SUCCESS OVERLAY ═══════ */}
      {
        paymentSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-[fadeIn_0.5s_ease]">
            <div className="bg-white rounded-[2rem] p-8 max-w-lg w-full text-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-gray-100 relative overflow-hidden max-h-[90vh] overflow-y-auto">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>

              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                <Check size={40} className="text-blue-600" strokeWidth={3} />
              </div>

              <h2 className="text-3xl font-display font-black text-gray-900 mb-2">Payment Successful!</h2>
              <p className="text-gray-500 mb-6 leading-relaxed">
                Your payment of <span className="font-bold text-gray-900">₹{cartTotal}</span> was received. Welcome to Avada!
              </p>

              <div className="bg-gray-50 rounded-2xl p-5 mb-6 text-left border border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles size={16} className="text-brand-primary" />
                  <h3 className="font-bold text-gray-900">Your Course Access Link:</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  Click the link below to access all your courses on Google Drive. <strong>Please bookmark or save this link securely.</strong>
                </p>
                <a
                  href="https://drive.google.com/drive/folders/1CCyv9u82HiYI8jnyULISfBoGMcbcqd9U?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold py-3 px-4 rounded-xl text-center border border-blue-200 transition-colors break-all text-xs sm:text-sm"
                >
                  Access Courses on Google Drive
                </a>
              </div>

              <div className="bg-gray-50 rounded-2xl p-4 mb-8 text-left border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Receipt Number</div>
                  <div className="font-mono text-xs text-gray-600 truncate">{paymentSuccess}</div>
                </div>
                <div className="sm:text-right w-full sm:w-auto p-3 bg-white rounded-lg border border-gray-100">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Support / WhatsApp</div>
                  <a href="https://wa.me/918545015333" target="_blank" rel="noopener noreferrer" className="font-bold text-green-600 hover:text-green-700">+91 8545015333</a>
                </div>
              </div>

              <button
                onClick={() => setPaymentSuccess(null)}
                className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl hover:bg-black transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                Close & Start Learning
              </button>
            </div>
          </div>
        )
      }

      {/* Bottom spacer to not hide content behind the CartBar */}
      {cart.size > 0 && <div className="h-20"></div>}
      {/* Floating Elements */}
      <PurchaseTicker />
    </div>
  );
};

export default CheckoutPage;