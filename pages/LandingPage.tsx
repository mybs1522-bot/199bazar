import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, CheckCircle2, X, ChevronDown, Sparkles, Layers, Play, Award, Bot, Cpu } from 'lucide-react';
import { WhatsAppButton } from '../components/WhatsAppButton';
import {
  Logo, CallToActionWidget, SocialProofToast,
  PROBLEM_POINTS, TRANSFORMATION_STORIES, CHOOSE_PATH_DATA, INDUSTRIES, BUSINESS_MODULES,
  PHASE_DATA, PAGE_PREVIEWS_ROW1, PAGE_PREVIEWS_ROW2, FEAR_STATS, AI_TRUTH,
  VALUE_STACK_ITEMS, TESTIMONIALS_LANDING, FAQ_ITEMS_LANDING, INCOME_TIERS, MENTORS,
  COURSES_LANDING,
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

      {/* ═══ DEAL STRIP ═══ */}
      <section className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-b border-blue-100 grid-bg">
        <div className="max-w-5xl mx-auto px-5 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/80 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]"><Sparkles size={12} />Deal</span>
            <p className="font-semibold text-blue-800">SketchUp Studio (Student) + D5 Render (Education) access included — <span className="font-black">FREE.</span></p>
          </div>
        </div>
      </section>

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
        {/* ═══ HERO ═══ */}
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 w-full max-w-2xl">
                {['Lifetime access + free updates', 'Software installation free', '7‑din money‑back guarantee'].map((t, i) => (
                  <div key={i} className="flex items-start gap-2 bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-soft text-left">
                    <CheckCircle2 size={16} className="text-blue-500 mt-0.5 shrink-0" />
                    <span className="text-sm font-semibold text-slate-800 leading-snug">{t}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
                <button onClick={openCheckout} className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.03] transition-all flex items-center gap-3 group whitespace-nowrap premium-stroke">
                  Start Learning Now <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
              </div>
              <p className="text-xs text-slate-500 mb-10">Instant access • Laptop se chalega • Beginner friendly • Support included</p>
              {/* Hero Video */}
              <div className="w-full max-w-4xl mb-10 overflow-hidden rounded-2xl shadow-2xl" style={{ position: 'relative', paddingTop: '56.25%' }}>
                <iframe title="Course overview video" src="https://iframe.mediadelivery.net/embed/489113/e68f78b5-c535-4e8f-aaee-8a44b514a9ec?autoplay=true&loop=true&muted=true&preload=true&responsive=true" loading="eager" style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'transparent' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen={true} />
              </div>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-3 w-full max-w-4xl">
                {COURSES_LANDING.map((c) => (
                  <div key={c.id} className="relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 group cursor-pointer hover:border-blue-500/50 transition-all hover:scale-105">
                    <img src={c.imageUrl} alt={c.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                      <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">{c.software}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PROOF STATS ═══ */}
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

        {/* ═══ AI TRUTH ═══ */}
        <section className="py-16 md:py-24 bg-white grid-bg">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6"><Bot size={16} className="text-blue-400" /><span className="text-xs font-bold text-blue-400">AI KA SACH</span></div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Sab AI Ki Baat Kar Rahe Hain.<br /><span className="text-blue-500">Ye Baat Koi Nahi Bata Raha.</span></h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">AI rendering revolutionize karega. Lekin ek fatal flaw hai jo koi mention nahi karta.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {AI_TRUTH.map((item, i) => (
                <div key={i} className={`reveal bg-white border rounded-2xl p-6 shadow-soft ${item.color === 'green' ? 'border-emerald-200' : item.color === 'red' ? 'border-red-200' : 'border-blue-200'}`}>
                  <div className={`inline-flex px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 ${item.color === 'green' ? 'bg-green-500/10 text-green-400' : item.color === 'red' ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400'}`}>{item.verdict}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="reveal text-center mt-10">
              <p className="text-slate-800 text-lg font-semibold mb-2">Ye course tumhe <span className="text-blue-500">Hybrid Workflow</span> sikhata hai.</p>
              <p className="text-slate-500 text-sm">Tum precisely design karo. AI heavy rendering handle kare. Dono milke — akele se 10x fast.</p>
            </div>
          </div>
        </section>

        {/* ═══ ALL-IN-ONE BRIDGE ═══ */}
        <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200 grid-bg">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <p className="text-slate-500 text-xs font-mono uppercase tracking-widest mb-4">Zero se Advanced. Ek Bundle. Koi Paid Software Nahi.</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4 tracking-tight">AutoCAD. SketchUp. V-Ray. Lumion. D5. <span className="text-blue-500">AI.</span></h2>
            <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-4">Pura architect ka pipeline ek system mein. Har tool, har technique, har shortcut — pehle click se pehle ₹5,00,000 walkthrough tak.</p>
            <p className="text-sm font-bold text-emerald-600 mb-8 flex items-center justify-center gap-2"><CheckCircle size={16} /> Sab software links & free licenses included — tools ke liye ek paisa nahi dena</p>
            <button onClick={openCheckout} className="px-8 py-4 bg-white text-black rounded-2xl font-bold text-base hover:bg-zinc-100 transition-all inline-flex items-center gap-3 group whitespace-nowrap premium-stroke">Andar Kya Hai Dekho <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} /></button>
            <div className="w-full max-w-3xl mx-auto mt-10 rounded-2xl overflow-hidden border border-slate-200 shadow-2xl" style={{ position: 'relative', paddingTop: '56.25%' }}>
              <iframe title="Course preview walkthrough" src="https://iframe.mediadelivery.net/embed/489113/a214b199-e64a-4eaf-af70-edfbc586e5fd?autoplay=true&loop=true&muted=true&preload=true&responsive=true" loading="lazy" style={{ border: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowFullScreen={true} />
            </div>
          </div>
        </section>

        {/* ═══ INCOME TIERS ═══ */}
        <section className="py-16 md:py-24 bg-white grid-bg">
          <div className="max-w-4xl mx-auto px-5">
            <div className="reveal text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Tum Kitna <span className="text-blue-500">Kama Sakte Ho</span></h2>
              <p className="text-slate-500 text-sm">₹199 pehli gig mein wapas aa jaata hai.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {INCOME_TIERS.map((tier, i) => (
                <div key={i} className="reveal bg-white border border-slate-200 rounded-2xl p-6 hover:border-blue-400/40 transition-all shadow-soft">
                  <div className="flex items-center gap-3 mb-4"><span className="text-3xl">{tier.icon}</span><span className="text-sm font-bold text-slate-900">{tier.label}</span></div>
                  <div className="flex items-center gap-4">
                    <div><p className="text-[10px] font-mono text-slate-500 uppercase mb-1">Pehle</p><p className="text-slate-400 text-sm line-through">{tier.before}</p></div>
                    <ArrowRight size={16} className="text-blue-400" />
                    <div><p className="text-[10px] font-mono text-blue-500 uppercase mb-1">Baad Mein</p><p className="text-slate-900 text-sm font-bold">{tier.after}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ STUDENT WORK CAROUSEL ═══ */}
        <section className="py-16 md:py-24 bg-white overflow-hidden border-t border-slate-200 grid-bg">
          <div className="max-w-5xl mx-auto px-5 mb-12 text-center">
            <div className="reveal">
              <p className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-4">Portfolio results</p>
              <h2 className="text-3xl md:text-6xl font-display font-bold text-slate-900 tracking-tight mb-6">Students <span className="text-blue-500">Designs and Renders</span></h2>
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

        {/* ═══ WHAT YOU GET ═══ */}
        <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200 grid-bg">
          <div className="max-w-5xl mx-auto px-5">
            <div className="reveal text-center mb-10">
              <p className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-3">Enrollment mein included</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Aaj start karne ke liye <span className="text-blue-500">sab kuch</span></h2>
              <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto">Ek bundle, ek workflow, lifetime access. Plus software access included free.</p>
            </div>
            <div className="reveal bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-soft">
              {VALUE_STACK_ITEMS.slice(0, 7).map((item, i) => (
                <div key={i} className={`flex justify-between items-center px-6 py-4 ${i !== 6 ? 'border-b border-slate-200' : ''}`}>
                  <div className="flex items-center gap-3"><CheckCircle size={16} className="text-blue-500 shrink-0" /><span className="text-sm text-slate-800 font-medium">{item.name}</span></div>
                  <span className="text-sm font-bold text-slate-500">{item.value}</span>
                </div>
              ))}
              <div className="bg-blue-50/50 border-t border-blue-200 px-6 py-5 flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center">
                <span className="text-slate-900 font-bold">Har course ke saath sab kuch included</span>
                <div className="flex items-center gap-3">
                  <span className="text-lg font-bold text-blue-600">Lifetime Access</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ DETAILED BREAKDOWN ═══ */}
        <div className="border-t border-slate-200">

                {/* Manifesto */}
                <section className="py-16 md:py-28 grid-bg">
                  <div className="max-w-3xl mx-auto px-5">
                    <div className="reveal text-center mb-12">
                      <p className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-4">Instructor ka message</p>
                      <h2 className="text-3xl md:text-5xl font-serif italic text-slate-900 mb-8 leading-snug">"Maine is industry ko talented logon ko punish karte dekha hai jo apne ideas visualize nahi kar paate."</h2>
                    </div>
                    <div className="reveal space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
                      <p>Sach ye hai jo koi nahi batata: <strong className="text-slate-900">sirf design skill se ab clients nahi milte.</strong></p>
                      <p>Woh architect jo cinematic walkthroughs dikhata hai — woh jeetta hai. Woh designer jo photorealistic images render karta hai — woh jeetta hai. Woh freelancer jo 2 hafton ki jagah 2 din mein deliver karta hai — woh jeetta hai. Har. Baar.</p>
                      <p>Aur ab? <strong className="text-red-500">AI is gap ko aur badha raha hai.</strong> AI hybrid workflow seekhne wale designers 3x zyada charge kar rahe hain. Jo nahi seekh rahe, unka inbox khaali ho raha hai.</p>
                      <p>Universities ye tools nahi sikhati. YouTube fragments deta hai. Expensive courses ₹1,50,000+ lete hain aur phir bhi struggle hota hai.</p>
                      <p>Toh maine ye system banaya. <strong className="text-slate-900">12 courses. Pipeline ka har tool. Zero paid software required.</strong></p>
                      <p className="text-slate-900 font-semibold text-lg md:text-xl border-l-2 border-blue-500 pl-4">Sawaal ye nahi ki ₹999 afford kar sakte ho ya nahi. Sawaal ye hai ki afford kar sakte ho peeche rehna — jab 50,000+ students woh exact skills seekh rahe hain jo hire, promote, aur pay karati hain?</p>
                    </div>
                  </div>
                </section>

                {/* Old vs New */}
                <section className="py-16 md:py-24 grid-bg">
                  <div className="max-w-5xl mx-auto px-5">
                    <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Purana Tarika vs. <span className="text-blue-500">Hybrid System</span></h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="reveal grid-bg border border-red-200 rounded-2xl p-8 shadow-soft">
                        <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center"><X size={20} className="text-red-500" /></div><h3 className="text-xl font-bold text-red-500">Abhi Bhi Ye Kar Rahe Ho?</h3></div>
                        <ul className="space-y-4">
                          {['Random tutorials Google kar rahe jo ek dusre se contradict karein', '₹1,50,000+ courses le रहे jo AI cover na karein', 'Floor plan mein 4 ghante. Competitor 40 minute mein kare.', 'Clients ko flat PDFs dete ho. Woh 3D walkthrough wale ko hire karte hain.', '₹40,000/month software ke liye pay karte ho jo free mil सकता है', 'Graduation ke baad ek bhi portfolio-ready render nahi'].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm"><X size={14} className="text-red-500 mt-1 shrink-0" />{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="reveal bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6"><div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center"><CheckCircle size={20} className="text-blue-500" /></div><h3 className="text-xl font-bold text-slate-900">Is System Ke Saath</h3></div>
                        <ul className="space-y-4">
                          {['Structured pipeline: AutoCAD → SketchUp → V-Ray → Lumion → D5 → AI', 'AI rendering kare. Tum design karo. 10x output.', '15 din mein professional portfolio — zero se bhi', 'Sab software FREE — koi expensive license kabhi nahi', '10,000+ textures, models, AI prompts included', 'Mentor support jab raat 11 baje deadline se pehle stuck ho'].map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-slate-700 text-sm"><CheckCircle size={14} className="text-blue-500 mt-1 shrink-0" />{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Is This You */}
                <section className="py-16 md:py-24 grid-bg">
                  <div className="max-w-4xl mx-auto px-5">
                    <div className="reveal text-center mb-12">
                      <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Sachchi Batao. <span className="text-blue-500">Kya Ye Tum Ho?</span></h2>
                      <p className="text-slate-500 text-sm">Har hafta jo tum fix nahi karte, koi bhookha banda kar leta hai.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {PROBLEM_POINTS.map((point, i) => (
                        <div key={i} className="reveal grid-bg border border-slate-200 rounded-2xl p-6 flex items-start gap-4 hover:border-red-200 transition-all shadow-soft">
                          <span className="text-3xl">{point.emoji}</span>
                          <p className="text-slate-700 text-sm md:text-base leading-relaxed">{point.text}</p>
                        </div>
                      ))}
                    </div>
                    <div className="reveal text-center mt-10"><p className="text-slate-500 text-sm">Agar EK bhi check kiya — <strong className="text-slate-900">ye system tumhare liye bana hai.</strong></p></div>
                  </div>
                </section>

                {/* Who Is This For */}
                <section className="py-16 md:py-24 grid-bg">
                  <div className="max-w-4xl mx-auto px-5 text-center">
                    <div className="reveal"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-10 tracking-tight">Agar Tum Inme Se Ho, <span className="text-blue-500">Already Peeche Ho.</span></h2></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {INDUSTRIES.map((ind, i) => (
                        <div key={i} className="reveal grid-bg border border-slate-200 rounded-xl p-5 hover:border-blue-400/40 transition-all group text-left shadow-soft">
                          <div className="text-3xl mb-3">{ind.icon}</div>
                          <span className="text-sm font-bold text-slate-900 block mb-1">{ind.label}</span>
                          <span className="text-xs text-slate-500">{ind.hook}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Free Software */}
                <section className="py-16 md:py-24 grid-bg">
                  <div className="max-w-4xl mx-auto px-5 text-center">
                    <div className="reveal">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full mb-6"><CheckCircle size={16} className="text-emerald-600" /><span className="text-xs font-bold text-emerald-700">KOI PAID SOFTWARE NAHI CHAHIYE</span></div>
                      <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">"Lekin Expensive Software Afford Nahi Kar Sakta..."</h2>
                      <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">Ye excuse aaj khatam hota hai. <strong className="text-slate-900">Is system ka har software free mein available hai.</strong> SketchUp, AutoCAD, D5 Render — sab free. V-Ray aur Lumion ke bhi free student editions hain.</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
                        {[
                          { icon: <Cpu size={24} />, title: 'Software Provided', desc: 'Har free/student version ke direct links. No hunting. No piracy. Legit aur ready.' },
                          { icon: <Sparkles size={24} />, title: 'AI Tools = Free', desc: 'Jo AI rendering tools hum sikhate hain woh completely free hain. ₹0/month.' },
                          { icon: <Award size={24} />, title: 'Lifetime Access', desc: 'Ek baar enroll karo, hamesha access karo. Har update, har naya module — free for life.' }
                        ].map((item, i) => (
                          <div key={i} className="reveal grid-bg border border-slate-200 rounded-2xl p-6 text-left shadow-soft">
                            <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 text-emerald-600">{item.icon}</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                      <p className="text-blue-500 font-bold text-sm">sirf ₹199 se start karo. Baki sab hum dete hain.</p>
                    </div>
                  </div>
                </section>

                {/* Not Just Tutorials */}
                <section className="py-16 md:py-24 grid-bg">
                  <div className="max-w-4xl mx-auto px-5 text-center">
                    <div className="reveal">
                      <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Ye sirf <span className="text-blue-500">"tutorials"</span> nahi hain.</h2>
                      <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto mb-8">Ye complete pipeline hai jo tumhe <strong className="text-slate-900">pehli baar AutoCAD kholne</strong> se <strong className="text-slate-900">cinematic renders deliver karne</strong> tak le jaata hai. Har course project-based, hands-on, aur real-world results ke liye designed.</p>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                          { icon: <Layers size={24} />, title: '12 Complete Courses', desc: 'AutoCAD → SketchUp → V-Ray → Lumion → D5 → AI + 6 more. Zero se advanced. Full pipeline.' },
                          { icon: <Play size={24} />, title: 'Project-Based', desc: 'Real interiors, renders, aur walkthroughs banao. End tak 6+ portfolio pieces.' },
                          { icon: <Bot size={24} />, title: 'AI-Powered Rendering', desc: 'AI se rendering, concept generation, aur style transfer seekho. Sirf free tools.' }
                        ].map((item, i) => (
                          <div key={i} className="reveal grid-bg border border-slate-200 rounded-2xl p-6 text-left shadow-soft">
                             <div className="w-12 h-12 rounded-xl bg-blue-50/50 flex items-center justify-center mb-4 text-blue-500">{item.icon}</div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-slate-600">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Choose Path */}
                <section className="py-16 md:py-24 grid-bg">
                  <div className="max-w-5xl mx-auto px-5">
                    <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Apna Raasta Chuno</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {CHOOSE_PATH_DATA.map((path, i) => (
                        <div key={i} className={`reveal bg-gradient-to-br ${path.color} border border-slate-200 rounded-2xl p-8 hover:border-blue-500/30 transition-all`}>
                          <span className="text-3xl mb-4 block">{path.emoji}</span>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{path.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{path.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Before & After */}
                <section className="py-16 md:py-24 grid-bg">
                  <div className="max-w-5xl mx-auto px-5">
                    <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-2">Pehle & Baad Mein</h2><p className="text-slate-500 text-sm">Student transformations. Same ₹199 investment.</p></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {TRANSFORMATION_STORIES.map((story, i) => (
                        <div key={i} className="reveal grid-bg border border-slate-200 rounded-2xl p-6 shadow-soft">
                          <span className="text-4xl mb-4 block">{story.emoji}</span>
                          <div className="flex items-center gap-2 mb-4"><span className="font-bold text-slate-900">{story.name}</span><span className="text-xs text-slate-500">• {story.role}</span></div>
                          <div className="mb-3"><p className="text-[10px] font-mono uppercase text-red-500 mb-1">Pehle</p><p className="text-slate-600 text-sm">{story.before}</p></div>
                          <div><p className="text-[10px] font-mono uppercase text-blue-600 mb-1">Baad Mein</p><p className="text-slate-800 text-sm font-medium">{story.after}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* The Math */}
                <section className="py-16 md:py-24 grid-bg">
                  <div className="max-w-5xl mx-auto px-5">
                    <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Math <span className="text-blue-500">Jhooth Nahi Bolta</span></h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="reveal grid-bg border border-red-200 rounded-2xl p-8 shadow-soft">
                        <h3 className="text-lg font-bold text-red-500 mb-6 font-mono uppercase tracking-wider">Mehnga Tarika</h3>
                        <div className="space-y-4">
                          {[['University Arch-Viz Course', '₹1,50,000 – ₹4,00,000'], ['Premium Software Licenses', '₹40,000+/year'], ['Outsourced Renders', '₹50,000/image'], ['Random YouTube (tumhara time)', '100+ ghante waste'], ['Lost Clients (flat PDFs)', '₹₹₹₹ uncountable']].map(([l, c], i) => (
                            <div key={i} className="flex justify-between items-center py-2 border-b border-slate-200"><span className="text-slate-600 text-sm">{l}</span><span className="text-slate-800 text-sm font-medium">{c}</span></div>
                          ))}
                        </div>
                      </div>
                      <div className="reveal bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8">
                        <h3 className="text-lg font-bold text-emerald-600 mb-6 font-mono uppercase tracking-wider">Ye System</h3>
                        <div className="space-y-4">
                          {[['Saare 12 Courses (Zero se Advanced)', '₹999'], ['Sab Software (Free Licenses)', '₹0'], ['10,000+ Textures & Models', '₹0 (included)'], ['AI Prompt Vault & Tools', '₹0 (included)'], ['Mentor Support + Diploma', '₹0 (included)'], ['Lifetime Access + Updates', '₹0 (forever)']].map(([l, c], i) => (
                            <div key={i} className="flex justify-between items-center py-2 border-b border-blue-100/60"><span className="text-slate-800 text-sm">{l}</span><span className="text-emerald-600 text-sm font-bold">{c}</span></div>
                          ))}
                          <div className="flex justify-between items-center pt-2"><span className="text-slate-900 font-bold text-lg">Start Learning Now</span><span className="text-emerald-600 font-black text-2xl">Today</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                <CallToActionWidget timeLeft={timeLeft} onClick={openCheckout} headline="Abhi bhi soch rahe ho?" subtext="50,000+ students ne ye decision already le liya hai. Question sirf ye hai — tum aaj join karoge ya baad mein wish karoge ki kar liya hota." />



                {/* 6 Courses */}
                <section className="py-16 md:py-24 grid-bg">
                  <div className="max-w-5xl mx-auto px-5">
                    <div className="reveal text-center mb-12">
                      <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">6 Core Courses. Ek Pipeline. <span className="text-blue-500">Total Mastery.</span></h2>
                      <p className="text-slate-500 text-sm mt-2">Har course mein free software, project files, aur mentor support included</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {COURSES_LANDING.map((course) => (
                        <div key={course.id} className="reveal grid-bg border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-400/40 transition-all group shadow-soft">
                          <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                            <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full"><span className="text-[10px] font-bold text-blue-300 uppercase tracking-wider">{course.software}</span></div>
                            <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full"><span className="text-[10px] font-bold text-slate-100">{course.students} students</span></div>
                          </div>
                          <div className="p-5">
                            <h3 className="text-lg font-bold text-slate-900 mb-2">{course.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">{course.description}</p>
                            <ul className="space-y-2">{course.learningPoints.map((p, j) => (<li key={j} className="flex items-start gap-2 text-xs text-slate-500"><CheckCircle2 size={12} className="text-blue-500 mt-0.5 shrink-0" />{p}</li>))}</ul>
                            <div className="mt-4 flex items-center justify-between">
                              <p className="text-blue-500 text-xs font-semibold">{course.workflowImpact}</p>
                              <span className="text-[10px] text-emerald-600 font-bold">FREE SOFTWARE</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* 9 Phases */}
                <section className="py-16 md:py-24 grid-bg">
                  <div className="max-w-5xl mx-auto px-5">
                    <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">9 Phases. Zero se <span className="text-blue-500">Advanced.</span></h2></div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {PHASE_DATA.map((phase, i) => (
                        <div key={i} className="reveal bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-400/40 transition-all shadow-soft">
                          <div className="flex items-center gap-3 mb-3"><span className="text-3xl font-display font-black text-blue-300">{phase.phase}</span><h3 className="text-sm font-bold text-slate-900">{phase.title}</h3></div>
                          <p className="text-xs text-slate-500 leading-relaxed">{phase.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Use Cases */}
                <section className="py-16 md:py-24 grid-bg">
                  <div className="max-w-5xl mx-auto px-5">
                    <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">In Skills Se <span className="text-blue-500">Kya Karoge?</span></h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {BUSINESS_MODULES.map((mod, i) => (
                        <div key={i} className="reveal bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-5 hover:border-blue-400/40 transition-all shadow-soft">
                          <div className="text-3xl">{mod.icon}</div>
                          <div><h3 className="text-lg font-bold text-slate-900 mb-2">{mod.title}</h3><p className="text-slate-600 text-sm leading-relaxed">{mod.description}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>



        </div>

        {/* ═══ TESTIMONIALS ═══ */}
        <section className="py-16 md:py-24 bg-white border-t border-slate-200 overflow-hidden grid-bg">
          <div className="px-5 mb-12 text-center">
            <p className="text-blue-500 text-xs font-mono uppercase tracking-widest mb-4">Social proof</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4">Student Reviews</h2>
            <p className="text-slate-600 text-lg">50,000+ learners • 4.9★ average rating</p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex gap-6 animate-scroll-left hover:pause">
              {[...TESTIMONIALS_LANDING, ...TESTIMONIALS_LANDING].map((t, i) => (
                <div key={i} className="w-[350px] shrink-0 bg-white border border-slate-200 p-8 rounded-3xl hover:border-orange-300 transition-all shadow-soft">
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
            <div className="flex gap-6 animate-scroll-right hover:pause">
              {[...TESTIMONIALS_LANDING.slice().reverse(), ...TESTIMONIALS_LANDING.slice().reverse()].map((t, i) => (
                <div key={i} className="w-[350px] shrink-0 bg-white border border-slate-200 p-8 rounded-3xl hover:border-orange-300 transition-all shadow-soft">
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

        {/* ═══ FINAL CTA ═══ */}
        <CallToActionWidget timeLeft={timeLeft} onClick={openCheckout} headline="Ye Tumhara Mauka Hai." subtext="AI har din gap badha raha hai. 50,000+ students ne sahi side choose kiya. Ab tumhari baari." />

        {/* ═══ FAQ ═══ */}
        <section className="py-16 md:py-24 grid-bg">
          <div className="max-w-3xl mx-auto px-5">
            <div className="reveal text-center mb-12"><h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 tracking-tight">Aam Sawaal</h2></div>
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
