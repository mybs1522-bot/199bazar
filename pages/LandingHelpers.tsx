import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Zap, CheckCircle, Users, X } from 'lucide-react';

export const getDriveUrl = (id: string) => `https://drive.google.com/thumbnail?id=${id}&sz=w1600`;

export const RAW_JOINERS = [
  { name: "Priya S.", city: "Mumbai", time: "2 min pehle" },
  { name: "Rahul V.", city: "Delhi", time: "5 min pehle" },
  { name: "Ananya G.", city: "Pune", time: "8 min pehle" },
  { name: "Vikram S.", city: "Jaipur", time: "12 min pehle" },
  { name: "Meera I.", city: "Chennai", time: "15 min pehle" },
  { name: "Aravind S.", city: "Bangalore", time: "18 min pehle" },
  { name: "Neha K.", city: "Lucknow", time: "22 min pehle" },
  { name: "Rohit M.", city: "Ahmedabad", time: "25 min pehle" },
  { name: "Simran P.", city: "Chandigarh", time: "30 min pehle" },
  { name: "Arjun D.", city: "Hyderabad", time: "33 min pehle" },
];

export const PROBLEM_POINTS = [
  { emoji: "⏰", text: "Ek floor plan banane mein 4 ghante lag rahe? Yahan ke students 40 minute mein finish karte hain." },
  { emoji: "💸", text: "Agency ko ₹50,000 per render de rahe ho? Ye paisa tumhare pocket mein hona chahiye!" },
  { emoji: "📉", text: "₹15 lakh ke projects haar rahe ho kyunki competitor 3D walkthrough dikhata hai aur tum flat PDF?" },
  { emoji: "🤖", text: "AI se trained designers 3x zyada charge kar rahe hain — aur tum abhi bhi purane tarike se kaam kar rahe ho?" },
  { emoji: "🎓", text: "Degree toh le li lekin ek bhi portfolio-ready render nahi hai — phir interview mein silence kyu?" },
  { emoji: "😤", text: "50 YouTube tutorials dekh liye, kuch connect nahi hota — abhi tak ek professional render nahi bana?" },
];

export const TRANSFORMATION_STORIES = [
  { name: "Priya P.", role: "Freelancer → ₹80,000/project", before: "₹15,000 per project charge karti thi. Raat-raat bhar kaam. Clients ghost kar dete the.", after: "3 mahine mein income triple ho gayi. Ab clients ₹80,000+ bina negotiate kiye dete hain.", emoji: "💰" },
  { name: "Rahul V.", role: "Student → 3 Job Offers", before: "Zero experience. 40 jagah apply kiya: silence. Professors bhi help nahi kar paaye.", after: "15 din mein portfolio bana liya. Graduation se pehle 3 offers aa gaye. Ab professors unse tips maangte hain.", emoji: "🎓" },
  { name: "Vikram S.", role: "Developer → ₹30L Saved/Year", before: "Agency ko ₹50,000 per render image deta tha. Hafton wait karna padta. Zero control.", after: "Ab sab in-house hota hai. Is saal ₹30 lakh bachaye. Renders ghanton mein, hafton nahi.", emoji: "📈" },
  { name: "Ananya G.", role: "Junior → AI Skills se Hired", before: "40 firms mein apply kiya generic portfolio se. Silence. Interview tak nahi mili.", after: "AI + rendering skills se portfolio rebuild kiya. 2 hafte mein 3 offers. AI workflow ke liye specifically hire hui.", emoji: "🤖" },
];

export const CHOOSE_PATH_DATA = [
  { title: 'Dream Job Pakdo', description: '15 din mein aisa portfolio banao ki HR scroll karna band kar de. AI + rendering skills se hire ho — sirf degree se nahi.', color: 'from-purple-500/20 to-purple-600/10', emoji: '🎯' },
  { title: 'Global Freelancing Shuru Karo', description: '₹3,000–₹10,000 per rendered image charge karo. ₹50,000–₹5,00,000 per walkthrough. Kahin se bhi kaam karo.', color: 'from-blue-500/20 to-blue-600/10', emoji: '🌍' },
  { title: 'Apna Studio Level-Up Karo', description: 'Renders outsource karna band karo. Apni team ko full pipeline sikho. Is quarter profit double karo.', color: 'from-indigo-500/20 to-indigo-600/10', emoji: '🏢' }
];

export const INDUSTRIES = [
  { label: 'Architecture Students', icon: '🎓', hook: 'Aise portfolio ke saath graduate ho ki callbacks aayein' },
  { label: 'Interior Designers', icon: '🎨', hook: 'Better presenters se clients mat khona' },
  { label: '3D Visualizers', icon: '🖥️', hook: 'AI se render time 80% kam karo' },
  { label: 'Freelancers', icon: '💼', hook: 'Kahin se bhi ₹1 lakh/month tak scale karo' },
  { label: 'Studio Owners', icon: '🏢', hook: 'Outsourcing band karo — profit apne paas rakho' },
  { label: 'Real Estate Developers', icon: '🏗️', hook: 'Properties bech do construction se pehle' },
];

export const BUSINESS_MODULES = [
  { title: 'Freelance Rendering Services', description: '₹3,000–₹10,000 per photorealistic image charge karo. Ek walkthrough = ₹5,00,000. Math simple hai.', icon: '🖼️' },
  { title: 'Cinematic Walkthroughs', description: '₹50,000–₹5,00,000 ke video tours becho jo 60 second mein deal close kar dein. Client ek eent rakhne se pehle pyaar ho jayega.', icon: '🎬' },
  { title: 'In-House Visualization', description: 'Agency ko ₹50,000/image dena band karo. Team ko pipeline sikao. Har paisa apne paas aaye.', icon: '🏢' },
  { title: 'AI-Powered Concept Generation', description: '10 minute mein 10 stunning concepts generate karo FREE AI tools se jo ₹40,000/month software replace kare.', icon: '🤖' },
];

export const PHASE_DATA = [
  { phase: '01', title: 'AutoCAD Precision Drafting', desc: 'Shortcuts jo drafting time 60% kam kar dein. Plans jo builders ko pasand aayein.' },
  { phase: '02', title: 'SketchUp 3D Modeling', desc: 'Complex models 5x fast banao. Organized scenes jo kabhi crash na ho.' },
  { phase: '03', title: 'V-Ray Photorealistic Rendering', desc: 'Lighting aur materials jo real photos se alag nahi dikhte. ₹10,000/image charge karo.' },
  { phase: '04', title: 'Lumion Cinematic Walkthroughs', desc: 'Movie-quality tours jo projects 60 second mein bech dein.' },
  { phase: '05', title: 'D5 Real-Time Rendering', desc: 'Changes instantly dekho. Client ke saamne live present karo. Meetings mein deals close karo.' },
  { phase: '06', title: 'AI Architecture Mastery', desc: 'AI rendering kare, tum design karo. Free tools se 10x output badhao.' },
  { phase: '07', title: '10,000+ Asset Library', desc: 'Drag-and-drop textures aur models. Har project mein 10+ ghante bachao. Free included.' },
  { phase: '08', title: 'Software & Pipeline Setup', desc: 'Har tool FREE mein install — koi expensive license nahi. Sab hum dete hain.' },
  { phase: '09', title: 'Portfolio & Income System', desc: '6+ portfolio pieces banao. Rates set karo. Pehle hafte mein ₹50,000+ ki gig lo.' },
];

export const PAGE_PREVIEWS_ROW1 = [
  '/renders/RENDER-1.jpg', '/renders/RENDER-2.jpg', '/renders/RENDER-3.jpg',
  '/renders/RENDER-4.jpg', '/renders/RENDER-5.jpg', '/renders/RENDER-6.jpg',
  '/renders/RENDER-7.jpg', '/renders/RENDER-8.jpg', '/renders/RENDER-9.jpg',
  '/renders/RENDER-10.jpg', '/renders/RENDER-11.jpg', '/renders/RENDER-12.jpg',
  '/renders/RENDER-13.jpg',
];
export const PAGE_PREVIEWS_ROW2 = [
  '/renders/RENDER-14.jpg', '/renders/RENDER-15.jpg', '/renders/RENDER-16.jpg',
  '/renders/RENDER-17.jpg', '/renders/RENDER-18.jpg', '/renders/RENDER-19.jpg',
  '/renders/RENDER-20.jpg', '/renders/RENDER-21.jpg', '/renders/RENDER-22.jpg',
  '/renders/RENDER-23.jpg', '/renders/RENDER-24.jpg', '/renders/RENDER-25.jpg',
];

export const FEAR_STATS = [
  { stat: '73%', label: 'architecture graduates ek bhi professional render nahi bana paate', icon: '📉' },
  { stat: '5x', label: 'zyada chances hire hone ke agar AI + rendering skills portfolio mein ho', icon: '🚀' },
  { stat: '₹30L+', label: 'average amount studios har saal renders outsource karne mein waste karte hain', icon: '💸' },
  { stat: '15 din', label: 'zero experience se pehla paid render — agar abhi start karo toh', icon: '⏳' },
];

export const AI_TRUTH = [
  { title: 'AI Render KAR Sakta Hai', desc: 'AI seconds mein photorealistic images generate karta hai. Lighting, materials, textures, post-production — sab handle karta hai jo pehle ghanton lagta tha.', verdict: 'SACH', color: 'green' },
  { title: 'AI Design NAHI Kar Sakta', desc: 'AI ko structural integrity, clearances, building codes, client requirements, ya spatial logic nahi samajh aata. Beautiful images banata hai impossible buildings ki.', verdict: 'PROBLEM', color: 'red' },
  { title: 'Hybrid Workflow Jeetega', desc: 'TUM accurately design karo AutoCAD + SketchUp mein. AI rendering handle kare. Result: 10x faster output, accuracy mein zero compromise. Yahi future hai.', verdict: 'SOLUTION', color: 'blue' },
];

/* ─── LOGO ─── */
export const Logo = () => (
  <div className="flex flex-col items-center text-center cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
    <span className="font-display font-bold text-lg tracking-tight leading-none text-slate-900 whitespace-nowrap">Avada</span>
    <span className="text-[9px] font-medium uppercase tracking-widest text-slate-500 whitespace-nowrap mt-1">Design & Architecture</span>
  </div>
);

/* ─── FLIP CLOCK ─── */
const FlipDigit = ({ value }: { value: string }) => (
  <div className="flip-digit-wrapper"><div className="flip-digit"><span>{value}</span></div></div>
);

/* ─── CTA WIDGET ─── */
export const CallToActionWidget = ({ timeLeft, onClick, headline, subtext }: { timeLeft: { h: number; m: number; s: number }; onClick: () => void; headline?: string; subtext?: string }) => {
  const f = (v: number) => v.toString().padStart(2, '0');
  const h = f(timeLeft.h), m = f(timeLeft.m), s = f(timeLeft.s);
  return (
    <div className="relative py-12 md:py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-slate-900"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="max-w-2xl mx-auto relative z-10 text-center">
        {headline && <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2 tracking-tight">{headline}</h3>}
        {subtext && <p className="text-zinc-400 text-sm mb-6">{subtext}</p>}
        {!headline && <p className="text-zinc-500 text-xs font-mono uppercase tracking-widest mb-6">⚠️ Enroll karo timer zero hone se pehle</p>}
        <div className="flex items-center justify-center gap-1 md:gap-2 mb-6">
          <div className="flip-clock-group"><div className="flex gap-1"><FlipDigit value={h[0]} /><FlipDigit value={h[1]} /></div><span className="flip-clock-label">HRS</span></div>
          <span className="text-xl md:text-3xl font-bold text-zinc-600 -mt-4">:</span>
          <div className="flip-clock-group"><div className="flex gap-1"><FlipDigit value={m[0]} /><FlipDigit value={m[1]} /></div><span className="flip-clock-label">MIN</span></div>
          <span className="text-xl md:text-3xl font-bold text-zinc-600 -mt-4">:</span>
          <div className="flip-clock-group"><div className="flex gap-1"><FlipDigit value={s[0]} /><FlipDigit value={s[1]} /></div><span className="flip-clock-label">SEC</span></div>
        </div>
        <div className="mb-6">
          <p className="text-blue-400 font-semibold text-sm mt-2">Special Offer — Ye price hamesha nahi rahega</p>
        </div>
        <div className="w-full max-w-md mx-auto">
          <button onClick={onClick} className="cta-primary w-full text-white px-8 py-4 md:py-5 rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 group hover:scale-[1.03] active:scale-[0.98] premium-stroke" style={{ background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)', boxShadow: '0 6px 20px -4px rgba(37,99,235,0.5), 0 12px 40px -8px rgba(29,78,216,0.3)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <span className="text-lg md:text-xl font-display font-bold uppercase tracking-widest relative z-10">Start Learning Now</span>
            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="mt-4 flex items-center justify-center gap-4 md:gap-8 text-[9px] md:text-[11px] font-medium uppercase tracking-[0.15em] text-zinc-500">
          <div className="flex items-center gap-1.5"><ShieldCheck size={14} className="text-emerald-500" /> 7-Din Money-Back</div>
          <div className="w-[1px] h-3 bg-zinc-700"></div>
          <div className="flex items-center gap-1.5"><Zap size={14} className="text-blue-400" /> Instant Access</div>
          <div className="w-[1px] h-3 bg-zinc-700 hidden sm:block"></div>
          <div className="hidden sm:flex items-center gap-1.5"><Users size={14} className="text-blue-400" /> Software Free Included</div>
        </div>
      </div>
    </div>
  );
};

/* ─── SOCIAL PROOF TOAST ─── */
export const SocialProofToast: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const show = () => { setVisible(true); setTimeout(() => { setVisible(false); setTimeout(() => setIdx(p => (p + 1) % RAW_JOINERS.length), 500); }, 4000); };
    const t1 = setTimeout(show, 6000);
    const t2 = setInterval(show, 15000);
    return () => { clearTimeout(t1); clearInterval(t2); };
  }, []);
  const j = RAW_JOINERS[idx];
  return (
    <div className={`fixed bottom-20 left-4 z-[70] transition-all duration-500 ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
      <div className="bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl px-5 py-3 shadow-2xl flex items-center gap-3 max-w-xs">
        <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center shrink-0"><CheckCircle size={16} className="text-emerald-600" /></div>
        <div>
          <p className="text-sm font-bold text-slate-900">{j.name} from {j.city}</p>
          <p className="text-xs text-slate-500">abhi enroll kiya • {j.time}</p>
        </div>
      </div>
    </div>
  );
};

/* ─── HINGLISH CONSTANTS ─── */
export const VALUE_STACK_ITEMS = [
  { name: 'AutoCAD Precision Drafting Course', value: 'Included' },
  { name: 'SketchUp 3D Modeling Course', value: 'Included' },
  { name: 'V-Ray Photo-Realism Masterclass', value: 'Included' },
  { name: 'Lumion Cinematic Walkthroughs', value: 'Included' },
  { name: 'D5 Real-Time Rendering', value: 'Included' },
  { name: 'AI Design & Rendering Course', value: 'Included' },
  { name: '10,000+ Premium Texture Library', value: 'Included' },
  { name: '2,000+ Drag-and-Drop 3D Models', value: 'Included' },
  { name: 'Software Installation Hub', value: 'Included' },
  { name: 'Private Mentor Access & Portfolio Review', value: 'Included' },
  { name: 'Freelancing Pricing Playbook', value: 'Included' },
  { name: 'Certified Digital Diploma', value: 'Included' },
];

export const TESTIMONIALS_LANDING = [
  { name: 'Priya P.', role: 'Freelance Designer', location: 'Mumbai, IN', content: 'AutoCAD se AI tak, sab kuch cover hai. Texture library ek goldmine hai. Pehle materials dhundhne mein ghante lagte the, ab sab ready hai.' },
  { name: 'Aravind S.', role: 'Senior Architect', location: 'Bangalore, IN', content: 'Revit workflow section ne hamari firm ke countless ghante bachaye. Indian projects ke liye undeniable value.' },
  { name: 'Meera I.', role: '3D Visualizer', location: 'Chennai, IN', content: 'V-Ray + 3ds Max combo game-changer hai. Mere real estate clients render ki realism dekh ke pagal ho jaate hain.' },
  { name: 'Rahul V.', role: 'Architecture Student', location: 'Delhi, IN', content: 'Top firm mein dream internship mili kyunki main akela tha jise Enscape VR aur AI Design aata tha.' },
  { name: 'Ananya G.', role: 'Interior Designer', location: 'Pune, IN', content: 'Ab 10 variations present karti hoon uss time mein jo pehle ek ke liye lagta tha. Best ₹199 I ever spent.' },
  { name: 'Vikram S.', role: 'Landscape Architect', location: 'Jaipur, IN', content: 'D5 Render se client meetings mein live changes karti hoon. Har baar unke hosh ud jaate hain. Highly recommended.' },
  { name: 'Neha K.', role: 'Studio Owner', location: 'Lucknow, IN', content: 'Meri 4 logo ki team ab woh kaam karti hai jo pehle 8 log karte the. Outsourcing band. Profit double.' },
  { name: 'Rohit M.', role: 'Freelance Visualizer', location: 'Ahmedabad, IN', content: '₹40,000/month freelancing se consistent ₹3,00,000+ months. V-Ray module akela 100x price worth tha.' },
  { name: 'Simran P.', role: 'Design Student', location: 'Chandigarh, IN', content: 'Zero experience se start kiya. SketchUp kya hai pata nahi tha. 15 din baad portfolio se pehla paid gig mila (₹25,000!).' },
  { name: 'Arjun D.', role: 'Architect & Educator', location: 'Hyderabad, IN', content: 'Main university mein padhata hoon aur ab sabhi students ko recommend karta hoon. Most 4-year programs se zyada practical hai.' },
];

export const FAQ_ITEMS_LANDING = [
  { question: "Kya sach mein sirf ₹199 per course hai? Catch kya hai?", answer: "Koi catch nahi. Koi subscription nahi. Hidden fees nahi. Upsell nahi. Hum maante hain ki sabko world-class design education milni chahiye, bas expensive firms ke logon ko nahi. 50,000+ students aur counting — isliye affordable rakh sakte hain." },
  { question: "Kya mujhe expensive computer chahiye?", answer: "Nahi! Ek decent laptop basic graphics card ke saath perfectly kaam karega. Cloud rendering tricks bhi sikhate hain slow machines ke liye, toh ₹30,000 ka laptop bhi stunning results de sakta hai." },
  { question: "Main complete beginner hoon, zero experience. Kya lost feel hoga?", answer: "Bilkul nahi. Hum literally 'software download aur open kaise karein' se start karte hain. Har module step-by-step build karta hai, aur stuck hone par mentor support milta hai." },
  { question: "Results kitni jaldi dikhenge?", answer: "15 focused din do (1-2 ghante daily). Day 5 tak pehla photorealistic render ban jayega. Day 15 tak portfolio piece hoga jo professional studio se aaya lagega. Agar dramatically zyada confident nahi feel hote, toh full refund." },
  { question: "Software bhi milta hai kya?", answer: "Hum direct links dete hain official free/student/trial versions ke — SketchUp, V-Ray, Lumion, D5, AutoCAD. Expensive licenses ki zarurat NAHI hai. Bahut se tools students ke liye completely free hain." },
  { question: "Agar pasand nahi aaya toh refund milega?", answer: "100%. No-questions-asked 7-din refund policy. Email karo, 48 ghante mein paisa wapas. Agar value se blown away nahi hue, toh tumhare ₹199 nahi chahiye. Simple." },
  { question: "Sirf theory hai ya real projects banenge?", answer: "Har module project-based hai. Sirf dekhoge nahi — real interiors, exteriors, renders, aur walkthroughs banayoge instructor ke saath. End mein 6+ portfolio-ready projects, sirf certificates nahi." },
  { question: "YouTube tutorials se kaise alag hai?", answer: "YouTube random fragments deta hai. Ye complete, structured system hai — zero se professional — ek specific order mein jo skills properly build kare. Plus 10,000+ assets, mentor support, aur certification. 50,000+ students ne free content ke badle ye isliye choose kiya." },
  { question: "Kya ye skills sach mein zyada paisa kamane mein help karenge?", answer: "Hamare students ₹3,000-₹10,000 per rendered image, ₹50,000+ per design, aur ₹1,00,000-₹5,00,000 per cinematic walkthrough kamate hain. ₹199 ka ROI pagal hai. Bahut students pehle hafte mein paise wapas earn kar lete hain." },
  { question: "Mobile pe access kar sakta hoon kya?", answer: "Haan! Sab courses online hosted hain aur kisi bhi device pe chalte hain — laptop, tablet, ya phone. Apni speed se dekho, kabhi bhi, kahin bhi. Access kabhi expire nahi hota." },
];

export const INCOME_TIERS = [
  { label: 'Single Render Image', before: '₹500–₹1,000', after: '₹3,000–₹10,000', icon: '🖼️' },
  { label: 'Interior Design (1000 sq.ft)', before: '₹5,000–₹15,000', after: '₹50,000–₹1,50,000', icon: '🏠' },
  { label: 'Cinematic Walkthrough', before: '₹0', after: '₹1,00,000–₹5,00,000', icon: '🎬' },
  { label: 'Monthly Freelance Income', before: '₹20,000–₹50,000', after: '₹2,00,000–₹10,00,000', icon: '💰' },
];

export const MENTORS = [
  {
    name: 'Marcus Reid',
    title: 'Lead Instructor — SketchUp, V-Ray, Lumion',
    bio: '12+ saal architectural visualization mein. 50,000+ students ko 42 countries mein train kiya. Former visualization lead at a top Sydney firm.',
    students: '50,000+',
    rating: 4.8,
  },
  {
    name: 'Lucas Ferreira',
    title: 'Instructor — AutoCAD, D5 Render, Revit',
    bio: '10+ saal ka industry experience. BIM workflows aur real-time rendering specialist. Europe aur South America mein 200+ commercial projects.',
    students: '35,000+',
    rating: 4.9,
  }
];

export const WHO_IS_THIS_FOR = [
  'Tumhe aisa portfolio chahiye jo sach mein job dilaye',
  'Tum ₹50,000+ per render charge karna chahte ho aur confident feel karna chahte ho',
  'Tum all-nighters band karna chahte ho aur 5 baje ghar jaana chahte ho',
  'Tumhe design ideas bechne ke liye photorealistic visuals chahiye',
  'Tum struggle karna band karke deserve kiye hue paisa kamana chahte ho',
  'Tum globally freelance karna chahte ho aur kahin se bhi kaam karna chahte ho'
];

export const WHO_IS_THIS_NOT_FOR = [
  'Tumhe "magic button" chahiye jo tumhare liye kaam kare',
  'Tum 15 din tak roz 1-2 ghante dene ko ready nahi ho',
  'Tum naye tools sikhna ya modern workflows adopt karna nahi chahte',
  'Tum purane tarike se kaam karte rehna chahte ho',
  'Tum bina mehnat overnight crorepati banna chahte ho'
];

export const COURSES_LANDING = [
  {
    id: '1', title: 'AutoCAD Mastery', software: 'AutoCAD', students: '42.5k',
    description: '4 ghante floor plan banane mein waste karna band karo. Top firms ke exact shortcuts, workflows, aur drafting secrets master karo.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1fV5bz4JDugh8HxLMJ0fXu5K5sDj3qlSR',
    learningPoints: ['Builders ke liye precision plans draft karo', 'Speed shortcuts jo kaam 60% kam karein', 'Professional detailing jo bids jeete'],
    workflowImpact: 'Weekends wapas milenge — permanently.'
  },
  {
    id: '3', title: 'SketchUp 3D', software: 'SketchUp', students: '55k',
    description: 'Flat sketches ko jaw-dropping 3D models mein badlo. Complex interiors aur exteriors ghanton mein banao, dinon mein nahi.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1wl6by5AO5MiPeoYsZ8F6Zi5AJahoeTQo',
    learningPoints: ['Peers se 5x fast model karo', 'Scenes organize karo jo kabhi crash na ho', 'One-click render-ready models'],
    workflowImpact: 'Ghanton mein woh banao jo doosron ko din lagte hain.'
  },
  {
    id: '5', title: 'V-Ray Realism', software: 'V-Ray', students: '48k',
    description: 'Models ko aise photographs mein badlo ki clients difference nahi bata paayenge. Lighting, materials, aur post-production master karo.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1aHEt_z78tYD_0Cn66DiduAnhwn-o8El8',
    learningPoints: ['₹5k photoshoot jaisi lighting', 'Real life se alag nahi dikhne wale materials', 'Top studios ke post-production secrets'],
    workflowImpact: '₹3,000–₹10,000 per render image charge karo.'
  },
  {
    id: '6', title: 'Lumion Cinema', software: 'Lumion', students: '31k',
    description: 'Static images clients ko bore karti hain. Cinematic video walkthroughs 60 second mein projects bech deti hain.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1XW2DDHVa1Qc15NcZ3wUKMFRT7LkyZMCt',
    learningPoints: ['Cinematic camera moves jo bechein', 'Life add karo: log, ped, mausam, gaadiyan', '60fps walkthroughs fast render karo'],
    workflowImpact: '60 second mein clients close karo.'
  },
  {
    id: '7', title: 'D5 Render', software: 'D5 Render', students: '19k',
    description: 'Real-time rendering game change karta hai. Har material, lighting, angle change instantly dekho.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1vbV4j6K9sgzbbZ7qlRdgqPTXWiHBPLsr',
    learningPoints: ['Zero render wait time — changes live dekho', 'Drag-and-drop asset workflow', '4K cinematic images seconds mein'],
    workflowImpact: 'Client meetings mein live designs badlo.'
  },
  {
    id: '9', title: 'AI Advantage', software: 'AI Architecture', students: '75k',
    description: 'Coffee khatam hone se pehle stunning design concepts generate karo. Top studios ke AI tricks seekho.',
    imageUrl: 'https://lh3.googleusercontent.com/d/1s-HzZVKpc9F92mLW2gMOPk0kVrKAqUIS',
    learningPoints: ['10 minute mein 10 concepts generate karo', 'AI se renders fix karo — re-rendering nahi', 'Free tools jo ₹40,000/month software replace karein'],
    workflowImpact: 'Kabhi blank page se start nahi karna padega.'
  },
];
