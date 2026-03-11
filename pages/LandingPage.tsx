import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, CheckCircle2, X, ChevronDown, Sparkles } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import {
  Logo, CallToActionWidget, SocialProofToast,
  PROBLEM_POINTS, TRANSFORMATION_STORIES, FEAR_STATS,
  VALUE_STACK_ITEMS, TESTIMONIALS_LANDING, FAQ_ITEMS_LANDING, INCOME_TIERS,
  COURSES_LANDING, PAGE_PREVIEWS_ROW1, PAGE_PREVIEWS_ROW2
} from './LandingHelpers';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(() => { const D = (3 * 3600 + 36 * 60 + 20) * 1000, r = D - (Date.now() % D); return { h: Math.floor((r / 3600000) % 24), m: Math.floor((r / 60000) % 60), s: Math.floor((r / 1000) % 60) }; });
  const [showStickyBar, setShowStickyBar] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    const calc = () => { const D = (3 * 3600 + 36 * 60 + 20) * 1000, now = Date.now(), r = D - (now % D); setTimeLeft({ h: Math.floor((r / 3600000) % 24), m: Math.floor((r / 60000) % 60), s: Math.floor((r / 1000) % 60) }); };
    const t = setInterval(calc, 1000); calc(); return () => clearInterval(t);
  }, []);
  useEffect(() => { const h = () => setShowStickyBar(window.scrollY > 600); window.addEventListener('scroll', h, { passive: true }); return () => window.removeEventListener('scroll', h); }, []);

  const openCheckout = () => navigate('/checkout');

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden selection:bg-blue-100 grid-bg">
      {/* ═══ STICKY HEADER ═══ */}
      <header className="sticky top-0 z-[60] bg-white/90 backdrop-blur-xl border-b border-slate-200 px-5 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <button onClick={openCheckout} className="hidden md:block text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-all shadow-glow premium-stroke" style={{ background: 'linear-gradient(135deg,#2563eb,#1d4ed8)' }}>Start Learning Now — ₹199</button>
          </div>
        </div>
      </header>

      <main>
        {/* 1. HERO — The Hook */}
        <section className="relative pt-0 pb-16 md:pb-24 overflow-hidden bg-white grid-bg">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl pointer-events-none">
            <div className="absolute top-10 left-1/3 w-[400px] h-[400px] bg-blue-500/10 blur-[150px] rounded-full" />
            <div className="absolute top-10 right-1/3 w-[300px] h-[300px] bg-blue-400/8 blur-[120px] rounded-full" />
          </div>
          <div className="max-w-5xl mx-auto px-5 relative z-10">
            <div className="flex flex-col items-center text-center pt-8 md:pt-16">
              <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
                <CheckCircle size={14} className="text-emerald-600" />
                <span className="text-xs font-bold text-emerald-700">Complete, job-ready pipeline (koi paid software nahi chahiye)</span>
              </div>
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 bg-slate-50 border border-slate-200 rounded-full">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-medium text-slate-600">50,000+ students enrolled • 4.9★ average rating</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-slate-900 tracking-tight">
                Poora ghar <span className="text-blue-500">Interior/Exterior</span> <br className="hidden md:block" /> 3D design karo, <br className="hidden md:block" />
                client se <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">easily project lo.</span>
              </h1>
              <p className="text-lg md:text-2xl text-slate-700 font-bold mb-6 leading-relaxed max-w-3xl">
                Ache renders apke <span className="text-blue-600">slow career ko boost</span> kar sakte hain. <br className="hidden md:block" />
                <span className="text-slate-500 text-base md:text-xl font-medium italic block mt-2">sirf ₹199 se start karo aur join the top 1%.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
                <button onClick={openCheckout} className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.03] transition-all flex items-center gap-3 group whitespace-nowrap premium-stroke">
                  Start Learning Now <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
              <p className="text-xs text-slate-500 mb-10 font-medium">Lifetime access • Laptop se chalega • All software FREE included • 7-din guarantee</p>
              
              {/* Hero Video */}
              <div className="w-full max-w-4xl mb-6 overflow-hidden rounded-2xl shadow-2xl" style={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe title="Course overview video" src="https://iframe.mediadelivery.net/embed/489113/e68f78b5-c535-4e8f-aaee-8a44b514a9ec?autoplay=true&loop=true&muted=true&preload=true&responsive=true" loading="eager" style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'transparent' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen={true} />
              </div>

              {/* Course Thumbnails */}
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 w-full max-w-4xl mb-8">
                {COURSES_LANDING.map((c) => (
                  <div key={c.id} className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 group cursor-pointer hover:border-blue-500/50 transition-all hover:scale-105">
                    <img src={c.imageUrl} alt={c.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                      <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">{c.software}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* The Bridge */}
              <p className="text-lg md:text-xl font-medium text-slate-600 italic reveal mt-8">"50,000+ students ne yahi dekha... <strong className="text-slate-900 border-b-2 border-blue-200">aur decision le liya.</strong>"</p>
            </div>
          </div>
        </section>

        {/* 2. PROOF STATS — "Ye real hai" */}
        <section className="py-10 bg-slate-50 border-y border-slate-200 grid-bg">
          <div className="max-w-5xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {FEAR_STATS.map((s, i) => (
              <div key={i} className="text-center reveal">
                <span className="text-2xl mb-2 block">{s.icon}</span>
                <span className="text-3xl md:text-4xl font-display font-black text-blue-500">{s.stat}</span>
                <p className="text-xs text-slate-500 mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. MANIFESTO — The Story & The Gap */}
        <section className="py-16 md:py-28 grid-bg bg-white border-b border-slate-200">
          <div className="max-w-3xl mx-auto px-5">
            <div className="reveal text-center mb-12">
              <p className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-4">Instructor ka message</p>
              <h2 className="text-3xl md:text-5xl font-serif italic text-slate-900 mb-8 leading-snug">"Maine is industry ko talented logon ko punish karte dekha hai jo apne ideas visualize nahi kar paate."</h2>
            </div>
            <div className="reveal space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>Sach ye hai jo koi nahi batata: <strong className="text-slate-900">sirf design skill se ab clients nahi milte.</strong></p>
              <p>Woh architect jo cinematic walkthroughs dikhata hai — woh jeetta hai. Woh designer jo photorealistic images render karta hai — woh jeetta hai. Woh freelancer jo 2 hafton ki jagah 2 din mein deliver karta hai — woh jeetta hai. Har. Baar.</p>
              <p>Aur ab? <strong className="text-red-500">AI is gap ko aur badha raha hai.</strong> AI beautiful images render zaroor karta hai, par design nahi kar sakta. AI hybrid workflow seekhne wale designers 3x zyada charge kar rahe hain kyunki woh accurately design karte hain (AutoCAD/SketchUp mein) aur instantly render karte hain (AI/V-Ray se).</p>
              <p>Universities ye tools nahi sikhati. Expensive courses ₹1,50,000+ lete hain, random YouTube videos 100+ ghante waste karti hain, aur tumhare haath mein phir bhi koi portfolio nahi hota.</p>
              
              <div className="my-10 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6 md:p-8 shadow-soft">
                <p className="font-bold text-slate-900 text-xl mb-4">Toh maine ye system banaya.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-blue-500 shrink-0" /><span className="text-slate-800">12 Courses. The complete pipeline.</span></li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-blue-500 shrink-0" /><span className="text-slate-800">Har software FREE mein install karne ke direct links.</span></li>
                  <li className="flex items-center gap-3"><CheckCircle size={18} className="text-blue-500 shrink-0" /><span className="text-slate-800">Mentor support aur 10,000+ assets included.</span></li>
                </ul>
                <div className="mt-6 pt-6 border-t border-blue-100 flex items-center justify-between">
                  <span className="text-slate-600 text-sm italic">Ye sab sirf ₹199 per course mein.</span>
                  <button onClick={openCheckout} className="text-blue-600 font-bold text-sm hover:text-blue-800 flex items-center gap-1 group">Enroll Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></button>
                </div>
              </div>

              <p className="text-slate-900 font-semibold text-lg md:text-xl border-l-2 border-blue-500 pl-4">Sawaal ye nahi ki ₹999 total (bundle) afford kar sakte ho ya nahi. Sawaal ye hai ki afford kar sakte ho peeche rehna — jab 50,000+ students woh exact skills seekh rahe hain jo hire, promote, aur pay karati hain?</p>
            </div>
          </div>
        </section>

        {/* 4. STUDENT WORK CAROUSEL — Visual Proof */}
        <section className="py-16 md:py-24 bg-slate-50 overflow-hidden border-b border-slate-200 grid-bg">
          <div className="max-w-5xl mx-auto px-5 mb-12 text-center">
            <div className="reveal">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Ye sab <span className="text-blue-500">₹199 investment ke</span> results hain.</h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto italic font-serif">"15 din pehle SketchUp kya hai pata nahi tha. Ab 3 job offers hain."</p>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-8">
            <div className="flex gap-3 md:gap-8 animate-scroll-left hover:pause">
              {[...PAGE_PREVIEWS_ROW1, ...PAGE_PREVIEWS_ROW1].map((img, i) => (
                <div key={i} className="w-[200px] md:w-[400px] shrink-0 aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 shadow-2xl relative group bg-slate-100">
                  <img src={img} alt="Student Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              ))}
            </div>
            <div className="flex gap-3 md:gap-8 animate-scroll-right hover:pause">
              {[...PAGE_PREVIEWS_ROW2, ...PAGE_PREVIEWS_ROW2].map((img, i) => (
                <div key={i} className="w-[200px] md:w-[400px] shrink-0 aspect-video rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 shadow-2xl relative group bg-slate-100">
                  <img src={img} alt="Student Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. OLD vs NEW — The Contrast */}
        <section className="py-16 md:py-24 bg-white grid-bg">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Purana Tarika vs. <span className="text-blue-500">Hybrid System</span></h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="reveal grid-bg border border-red-200 rounded-2xl p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center"><X size={20} className="text-red-500" /></div><h3 className="text-xl font-bold text-red-500">Abhi Bhi Ye Kar Rahe Ho?</h3></div>
                <ul className="space-y-4">
                  {PROBLEM_POINTS.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm"><span className="mt-1 shrink-0 text-base">{item.emoji}</span>{item.text}</li>
                  ))}
                  {['Random tutorials Google kar rahe jo ek dusre se contradict karein', '₹40,000/month software ke liye pay karte ho jo free mil sakta hai', 'Degree toh le li lekin ek bhi portfolio-ready render nahi'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600 text-sm"><X size={14} className="text-red-500 mt-1 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
              <div className="reveal bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 shadow-soft">
                <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center"><CheckCircle size={20} className="text-blue-500" /></div><h3 className="text-xl font-bold text-slate-900">Is System Ke Saath</h3></div>
                <ul className="space-y-4">
                  {['Structured pipeline: AutoCAD → SketchUp → V-Ray → Lumion → D5 → AI', 'AI rendering kare. Tum design karo. 10x output.', '15 din mein professional portfolio — zero se bhi', 'Sab software FREE — koi expensive license kabhi nahi', 'Mentor support jab raat 11 baje deadline se pehle stuck ho'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700 text-sm"><CheckCircle size={14} className="text-blue-500 mt-1 shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* 6. INCOME TIERS — The ROI */}
            <div className="mt-20 pt-16 border-t border-slate-200">
              <div className="reveal text-center mb-10">
                <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">₹199 pehli gig mein wapas. <span className="text-blue-500">Baaki sab profit.</span></h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {INCOME_TIERS.map((tier, i) => (
                  <div key={i} className="reveal bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-400/40 transition-all shadow-soft flex flex-col justify-between">
                    <div className="flex items-center justify-between mb-4"><span className="text-sm font-bold text-slate-900 leading-tight w-2/3">{tier.label}</span><span className="text-3xl">{tier.icon}</span></div>
                    <div className="flex items-center justify-between">
                      <div><p className="text-[10px] font-mono text-slate-500 uppercase">Pehle</p><p className="text-slate-400 text-sm line-through">{tier.before}</p></div>
                      <ArrowRight size={16} className="text-blue-400" />
                      <div className="text-right"><p className="text-[10px] font-mono text-blue-500 uppercase">Baad Mein</p><p className="text-emerald-600 text-sm font-bold">{tier.after}</p></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. WHAT YOU GET — The Offer */}
        <section className="py-16 md:py-20 bg-slate-50 border-y border-slate-200 grid-bg">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-10">
              <p className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-3">Enrollment mein included</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Aaj start karne ke liye <span className="text-blue-500">sab kuch</span></h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Ek bundle, ek workflow, lifetime access. Plus software access included free.</p>
            </div>
            <div className="reveal max-w-3xl mx-auto bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-soft">
              {VALUE_STACK_ITEMS.map((item, i) => (
                <div key={i} className={`flex justify-between items-center px-6 py-4 ${i !== VALUE_STACK_ITEMS.length - 1 ? 'border-b border-slate-100' : ''}`}>
                  <div className="flex items-center gap-3"><CheckCircle size={16} className="text-blue-500 shrink-0" /><span className="text-sm text-slate-800 font-medium">{item.name}</span></div>
                  <span className="text-sm font-bold text-slate-500">{item.value}</span>
                </div>
              ))}
              
              <div className="bg-emerald-50 border-t border-emerald-100 px-6 py-4 flex flex-col sm:flex-row gap-3 justify-between items-center">
                <div className="flex items-center gap-3"><CheckCircle2 size={16} className="text-emerald-600 shrink-0" /><span className="text-sm text-emerald-900 font-bold">Har Software (Free/Student Edition Links)</span></div>
                <span className="text-sm font-black text-emerald-600">INCLUDED</span>
              </div>

              <div className="bg-blue-50/50 border-t border-blue-200 px-6 py-6 flex flex-col items-center gap-6 justify-center">
                <div className="flex flex-col sm:flex-row gap-6 items-center justify-between w-full">
                  <span className="text-slate-900 font-bold text-center sm:text-left">Lifetime Access + Free Updates</span>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-black text-blue-600">₹199 <span className="text-sm text-slate-500 font-medium line-through">₹999</span></span>
                  </div>
                </div>
                <button onClick={openCheckout} className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 group premium-stroke">
                  Access Everything Instantly <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 8. TESTIMONIALS — Social Proof */}
        <section className="py-16 md:py-24 bg-white overflow-hidden grid-bg">
          <div className="max-w-5xl mx-auto px-5 mb-12">
            <div className="text-center mb-12">
              <p className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-4">Student Reviews</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Unse suno jinhone <span className="text-blue-500">already progress kar li</span></h2>
              <p className="text-slate-600 text-lg">50,000+ learners • 4.9★ average rating</p>
            </div>

            {/* Featured Transformations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {TRANSFORMATION_STORIES.map((story, i) => (
                <div key={i} className="reveal bg-gradient-to-br from-slate-50 to-blue-50 border border-slate-200 rounded-2xl p-8 shadow-soft relative overflow-hidden transition-all hover:border-blue-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                  <span className="text-4xl mb-4 block">{story.emoji}</span>
                  <div className="flex items-center gap-2 mb-6"><span className="font-bold text-slate-900 text-lg">{story.name}</span><span className="text-sm font-medium text-blue-600">• {story.role}</span></div>
                  <div className="mb-4"><p className="text-[10px] font-mono uppercase text-slate-400 mb-1 tracking-wider">Pehle</p><p className="text-slate-600 text-sm leading-relaxed">{story.before}</p></div>
                  <div><p className="text-[10px] font-mono uppercase text-blue-500 mb-1 tracking-wider">Baad Mein</p><p className="text-slate-900 text-base font-bold leading-relaxed">{story.after}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex gap-6 animate-scroll-left hover:pause">
              {[...TESTIMONIALS_LANDING, ...TESTIMONIALS_LANDING].map((t, i) => (
                <div key={i} className="w-[350px] shrink-0 bg-white border border-slate-200 p-8 rounded-3xl hover:border-blue-200 transition-all shadow-soft">
                  <div className="flex gap-1 mb-4">{[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-blue-500 text-blue-500" />)}</div>
                  <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">"{t.content}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center font-bold text-blue-600">{t.name[0]}</div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-slate-900 flex items-center gap-1">{t.name} <CheckCircle size={12} className="text-emerald-600" /></p>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest">{t.role} • {t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ + FINAL CTA */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200 grid-bg">
          <div className="max-w-3xl mx-auto px-5 mb-16">
            <div className="reveal text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Aam Sawaal</h2>
              <p className="text-slate-600 text-base">Tumhare saare doubts yahan clear hain.</p>
            </div>
            <div className="space-y-3">
              {FAQ_ITEMS_LANDING.map((faq, i) => (
                <details key={i} className="reveal group bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-soft" open={openFaqIndex === i}>
                  <summary className="flex items-center justify-between p-5 cursor-pointer list-none" onClick={(e) => { e.preventDefault(); setOpenFaqIndex(openFaqIndex === i ? null : i); }}>
                    <span className="text-sm md:text-base font-semibold text-slate-900 pr-6">{faq.question}</span>
                    <ChevronDown size={18} className={`text-slate-400 transition-transform shrink-0 ${openFaqIndex === i ? 'rotate-180' : ''}`} />
                  </summary>
                  <div className="px-5 pb-5"><p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p></div>
                </details>
              ))}
            </div>
          </div>

          <CallToActionWidget 
            timeLeft={timeLeft} 
            onClick={openCheckout} 
            headline="Bas ek sawaal reh gaya — kab start karoge?" 
            subtext="AI har din gap badha raha hai. 50,000+ students ne sahi side choose kiya. Ye tumhara mauka hai." 
          />
        </section>
      </main>

      <footer className="bg-slate-900 py-12 px-6 text-center border-t border-slate-800 text-white/70">
        <p className="text-xs uppercase tracking-[0.2em] mb-4">Avada Design & Architecture • 2026</p>
        <div className="flex justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400"><span>Privacy</span><span>Terms</span><span>Support</span></div>
      </footer>

      <div className={`fixed bottom-0 left-0 right-0 z-[70] bg-white/95 backdrop-blur-xl border-t border-slate-200 p-2 shadow-[0_-4px_30px_rgba(15,23,42,0.08)] transition-transform duration-300 ${showStickyBar ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="max-w-7xl mx-auto">
          <button onClick={openCheckout} className="w-full relative group overflow-hidden text-white rounded-xl shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all h-14 flex items-center px-4" style={{ background: 'linear-gradient(90deg,#2563eb,#1d4ed8,#2563eb)' }}>
            <div className="relative z-10 w-full flex items-center justify-between">
              <div className="flex flex-col items-start leading-none gap-0.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-cyan-300 animate-pulse italic">⚠ OFFER ENDS SOON</span>
                <span className="text-[15px] font-black uppercase tracking-[0.1em] text-white">Start Learning Now — ₹199</span>
              </div>
              <ArrowRight size={20} className="text-white group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
      </div>

      <WhatsAppButton />
      <SocialProofToast />
    </div>
  );
};

export default LandingPage;
