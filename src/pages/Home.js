import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// --- SHARED COMPONENTS ---
const FadeUp = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  );
};

// --- DATA ---
const projects = [
  { id: 1, index: '01', title: 'DigitalWash', category: 'SaaS', description: 'A laundry business management platform that replaces notebooks and spreadsheets. Manage orders, payments, expenses, staff, and multiple branches from one dashboard.', link: 'https://digitalwashapp.com', github: 'https://github.com/ProlificDev', screenshot: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fdigitalwashapp.com?w=800&h=500' },
  { id: 2, index: '02', title: 'Kennis Power House', category: 'E-Commerce', description: 'A full-featured e-commerce platform for phone accessories and tech solutions. Built with React, Context API, and WhatsApp order integration.', link: 'https://kennis-ph.netlify.app', github: 'https://github.com/ProlificDev/Kennis-power-house', screenshot: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fkennis-ph.netlify.app?w=800&h=500' },
  { id: 3, index: '03', title: 'NumShift', category: 'SaaS', description: "A WhatsApp account recovery tool that notifies all your contacts of your new number — with a personalised message and a voice note to prove it's really you.", link: 'https://numshift.online', github: 'https://github.com/cyperpro20/NumShift', screenshot: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Fnumshift.online?w=800&h=500' },
  { id: 4, index: '04', title: 'ReachBack', category: 'SaaS', description: 'A social media backup tool that protects your followers and friends list across all major platforms. If your account gets banned, your full contact list is ready to rebuild instantly.', link: 'https://reachback.online', github: 'https://github.com/cyperpro20/reachback', screenshot: 'https://s0.wp.com/mshots/v1/https%3A%2F%2Freachback.online?w=800&h=500' },
];

const contactItems = [
  { label: 'Email', value: 'Prolificdevinnovations@gmail.com', href: 'mailto:Prolificdevinnovations@gmail.com' },
  { label: 'WhatsApp', value: '+234 813 378 7926', href: 'https://wa.me/2348133787926' },
  { label: 'GitHub', value: 'github.com/ProlificDev', href: 'https://github.com/ProlificDev' },
  { label: 'LinkedIn', value: 'linkedin.com/in/ifechukwu-awuzie', href: 'https://www.linkedin.com/in/ifechukwu-awuzie-0289632b9' },
];

const SpaceHero = () => (
  <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#e6e6e6] pt-10" id="home">
    
    {/* Dynamic SVG Blob Background */}
    <div className="absolute top-[20%] left-[-10%] right-[-10%] bottom-[-20%] z-0 pointer-events-none">
      <svg viewBox="0 0 1000 600" preserveAspectRatio="xMidYMax slice" className="w-full h-full text-[#111] drop-shadow-[0_-20px_40px_rgba(0,0,0,0.15)]">
        <path fill="currentColor" d="M0,300 C150,150 250,400 450,200 C600,50 750,250 1000,150 L1000,800 L0,800 Z" />
        <path fill="currentColor" d="M0,600 C200,450 350,700 550,500 C700,350 850,550 1000,450 L1000,800 L0,800 Z" className="opacity-90" />
      </svg>
    </div>

    {/* Starry texture inside blob using CSS */}
    <div className="absolute top-[25%] left-0 right-0 bottom-0 z-0 opacity-50 pointer-events-none" style={{
      backgroundImage: 'radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 4px), radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 3px)',
      backgroundSize: '350px 350px, 200px 200px',
      backgroundPosition: '0 0, 40px 60px'
    }}></div>

    {/* Floating Retro Illustrations (Placeholders mapped to the image layout) */}
    {/* Alien (Left) */}
    <div className="absolute left-[5%] top-[45%] w-20 h-32 animate-float z-10 hidden md:flex items-center justify-center grayscale contrast-[1.5]">
      <span className="text-7xl">👽</span>
    </div>
    
    {/* Moon (Bottom Left) */}
    <div className="absolute left-[15%] bottom-[10%] w-24 h-24 animate-float z-10 hidden md:flex items-center justify-center grayscale contrast-125" style={{ animationDelay: '1s' }}>
      <span className="text-[100px]">🌑</span>
    </div>
    
    {/* UFO (Bottom Center) */}
    <div className="absolute left-[40%] bottom-[5%] w-32 h-20 animate-float-slow z-10 hidden md:flex items-center justify-center grayscale contrast-125" style={{ animationDelay: '2s' }}>
      <span className="text-[120px]">🛸</span>
    </div>

    {/* Telescope (Bottom Right) */}
    <div className="absolute right-[25%] bottom-[5%] w-24 h-32 animate-float z-10 hidden md:flex items-center justify-center grayscale contrast-125" style={{ animationDelay: '0.5s' }}>
      <span className="text-7xl">🔭</span>
    </div>

    {/* Astronaut (Right) */}
    <div className="absolute right-[5%] top-[55%] w-40 h-40 animate-float-slow z-10 hidden md:flex items-center justify-center grayscale contrast-125">
      <span className="text-[140px]">👨‍🚀</span>
    </div>

    {/* Saturn (Top Right) */}
    <div className="absolute right-[15%] top-[25%] w-32 h-32 animate-float z-10 hidden md:flex items-center justify-center grayscale contrast-125" style={{ animationDelay: '1.5s' }}>
      <span className="text-[130px]">🪐</span>
    </div>

    {/* Main Text Content inside the blob */}
    <div className="relative z-20 text-center max-w-4xl mx-auto px-6 mt-16 md:mt-32">
      <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mb-6">
          Ifechukwu Awuzie:<br/>Full Stack Developer
        </h1>
        <p className="font-sans text-sm md:text-base text-white/90 max-w-3xl mx-auto leading-relaxed">
          It WAS gone almost as soon as it came, so it is hardly surprising that we didn't even notice it. 
          Only in 2026, four years after the event, did clients start realising the sheer velocity at which robust, 
          scalable applications could be built. Scouring the codebase, they noticed a burst of elegant logic and 
          perfect UI with unimaginable ferocity. Lasting less than a few sprints, it hit production, releasing 
          roughly as much value as an entire engineering team spits out over five years.
        </p>
      </motion.div>
    </div>
  </div>
);

const Home = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  const handleChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    const rawPhone = form.phone.replace(/[\s\-()]/g, '');
    const text = `Hi Ifechukwu!%0A%0AName: ${encodeURIComponent(form.name)}%0AEmail: ${encodeURIComponent(form.email)}%0APhone: ${encodeURIComponent(form.phone)}%0A%0AMessage:%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/2348133787926?text=${text}`, '_blank');
    setSent(true);
    setForm({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="bg-[#111] text-white min-h-screen font-sans">
      <SpaceHero />
      
      {/* ── ABOUT ── */}
      <section className="py-24 px-6 max-w-4xl mx-auto bg-[#111] relative z-10" id="about">
        <h2 className="font-display text-4xl md:text-5xl mb-12 text-center">Beyond the Event Horizon</h2>
        <div className="grid md:grid-cols-2 gap-12 font-sans text-sm md:text-base leading-relaxed text-white/80">
          <div>
            <p className="mb-6">Just as the universe expanded from a singularity, my journey started with an obsession for systems and physics. Before writing code, I visualized energy flow. Now, I architect scalable web applications.</p>
            <p>I'm <strong className="text-white">Ifechukwu Awuzie</strong>, building production-ready products for over 4 years. From React and Node.js to database orchestration, I handle everything end-to-end.</p>
          </div>
          <div className="border-l-2 border-white/20 pl-8">
            <p className="italic mb-4 text-lg text-white">"If you want to find the secrets of the universe, think in terms of energy, frequency and vibration."</p>
            <p className="font-sans text-xs tracking-widest uppercase mt-4 text-white/50">— Nikola Tesla</p>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section className="py-24 px-6 bg-[#f4f4f4] text-[#111] rounded-t-[60px]" id="experience">
        <div className="max-w-5xl mx-auto">
          <FadeUp>
            <p className="font-sans text-sm font-bold tracking-[0.3em] uppercase mb-4 text-center opacity-60">Career</p>
            <h2 className="font-display text-4xl md:text-5xl mb-16 text-center">Work Experience</h2>
          </FadeUp>

          {/* Role 1 - Fomowl (Current) */}
          <FadeUp delay={0.1}>
            <div className="border-2 border-[#111] rounded-3xl p-8 md:p-12 shadow-[4px_4px_0px_#111] mb-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl mb-1">Intern Full Stack Developer</h3>
                  <p className="font-sans text-sm font-bold tracking-widest uppercase opacity-60">Fomowl · Fintech</p>
                </div>
                <span className="font-sans text-xs font-bold tracking-widest uppercase bg-[#111] text-white px-4 py-2 rounded-full whitespace-nowrap self-start">July 2026 – Present</span>
              </div>
              <p className="font-sans text-sm leading-relaxed text-[#111]/70 mb-6">
                Fomowl is a fintech company building a non-custodian crypto wallet — giving users full sovereignty over their digital assets without third-party control.
              </p>
              <ul className="space-y-4 font-sans text-sm leading-relaxed text-[#111]/80">
                {[
                  'Contributing to the development of a non-custodian crypto wallet with a focus on secure, user-friendly interfaces.',
                  'Working across the full stack — from React-based frontend flows to backend API integrations and blockchain interactions.',
                  'Collaborating with the product team to implement wallet features including transaction history, asset management, and onboarding flows.',
                  'Gaining hands-on experience with Web3 tooling including Ethers.js within a professional fintech environment.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#111] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Role 2 - Freelance */}
          <FadeUp delay={0.15}>
            <div className="border-2 border-[#111] rounded-3xl p-8 md:p-12 shadow-[4px_4px_0px_#111] mb-12">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl mb-1">Freelance Full Stack Developer</h3>
                  <p className="font-sans text-sm font-bold tracking-widest uppercase opacity-60">Self-Employed · Nigeria</p>
                </div>
                <span className="font-sans text-xs font-bold tracking-widest uppercase bg-[#111] text-white px-4 py-2 rounded-full whitespace-nowrap self-start">Mar 2023 – Present</span>
              </div>
              <ul className="space-y-4 font-sans text-sm leading-relaxed text-[#111]/80">
                {[
                  'Architect and scale modern web applications and client business solutions using React.js and Node.js.',
                  'Translate custom business requirements and creative briefs into highly responsive, mobile-first user interfaces.',
                  'Optimize frontend-backend communication and integrate secure APIs, reducing layout latency and improving cross-device performance.',
                  'Manage end-to-end project lifecycles independently, delivering clean, maintainable codebases to client specifications.',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-[#111] flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>

          {/* Skills Grid */}
          <FadeUp delay={0.2}>
            <h3 className="font-display text-2xl mb-8 text-center">Technical Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Frontend', skills: ['React.js', 'Next.js', 'JavaScript', 'TypeScript', 'HTML5 / CSS3', 'Tailwind CSS', 'Responsive UI/UX'] },
                { label: 'Backend & Data', skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Firebase', 'JWT / OAuth', 'API Integration'] },
                { label: 'Tools & DevOps', skills: ['Git & GitHub', 'Netlify / Vercel', 'Postman', 'VS Code', 'Web3 (Solidity, Ethers.js)'] },
              ].map(({ label, skills }) => (
                <div key={label} className="border-2 border-[#111] rounded-2xl p-6 shadow-[3px_3px_0px_#111]">
                  <h4 className="font-display text-lg mb-4">{label}</h4>
                  <ul className="space-y-2">
                    {skills.map(s => (
                      <li key={s} className="font-sans text-xs font-bold tracking-wider uppercase border-b border-[#111]/15 pb-2 last:border-0 last:pb-0">{s}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </FadeUp>

          {/* Education */}
          <FadeUp delay={0.3}>
            <div className="mt-12 border-2 border-[#111] rounded-3xl p-8 shadow-[4px_4px_0px_#111]">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display text-2xl mb-1">Full Stack Web Development</h3>
                  <p className="font-sans text-sm font-bold tracking-widest uppercase opacity-60">Udemy & FreeCodeCamp</p>
                </div>
                <span className="font-sans text-xs font-bold tracking-widest uppercase bg-[#111] text-white px-4 py-2 rounded-full whitespace-nowrap self-start">2022 – Present</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Responsive Web Design', 'JS Algorithms & Data Structures', 'Frontend Libraries (React)', 'Backend & APIs (Node.js)'].map(cert => (
                  <div key={cert} className="bg-[#111]/5 border border-[#111]/20 rounded-xl px-4 py-3 font-sans text-xs font-bold tracking-wider uppercase text-center">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── WORKS ── */}
      <section className="py-24 px-6 bg-[#f4f4f4] text-[#111] relative rounded-t-[60px]" id="works">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="font-display text-4xl md:text-5xl mb-16 text-center">Stellar Projects</h2>
          </FadeUp>
          
          <div className="grid md:grid-cols-2 gap-10">
            {visibleProjects.map((p, i) => (
              <FadeUp key={p.id} delay={i * 0.1}>
                <div className="group border-2 border-[#111] p-8 rounded-3xl hover:bg-white transition-colors duration-300 relative overflow-hidden bg-transparent shadow-[4px_4px_0px_#111]">
                  <div className="mb-6 overflow-hidden rounded-xl aspect-video border-2 border-[#111]">
                    <img src={p.screenshot} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0" />
                  </div>
                  <h3 className="font-display text-2xl mb-2">{p.index} - {p.title}</h3>
                  <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-70 mb-4">{p.category}</p>
                  <p className="font-sans text-sm opacity-80 mb-6">{p.description}</p>
                  <div className="flex gap-4 font-sans font-bold tracking-widest uppercase text-xs">
                    <a href={p.link} target="_blank" rel="noreferrer" className="bg-[#111] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform">Launch ↗</a>
                    <a href={p.github} target="_blank" rel="noreferrer" className="border-2 border-[#111] px-6 py-2 rounded-full hover:bg-gray-100 transition-colors">Code ↗</a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* See All / Show Less toggle */}
          {projects.length > 2 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAll(prev => !prev)}
                className="inline-flex items-center gap-2 border-2 border-[#111] font-sans font-bold tracking-widest uppercase text-xs px-8 py-3 rounded-full shadow-[3px_3px_0px_#111] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 bg-transparent text-[#111]"
              >
                {showAll ? 'Show Less ↑' : `See All Projects (${projects.length - 2} more) ↓`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="py-24 px-6 max-w-4xl mx-auto bg-[#111] text-white" id="contact">
        <FadeUp>
          <h2 className="font-display text-4xl md:text-5xl mb-16 text-center">Establish Contact</h2>
        </FadeUp>

        <div className="grid md:grid-cols-2 gap-16">
          <FadeUp delay={0.1}>
            <div className="space-y-6">
              <h3 className="font-display text-2xl mb-6">Coordinates</h3>
              {contactItems.map(item => (
                <div key={item.label} className="border-b border-white/20 pb-4">
                  <p className="font-sans text-xs tracking-widest uppercase opacity-50 mb-1">{item.label}</p>
                  <a href={item.href} target="_blank" rel="noreferrer" className="font-sans text-lg hover:text-gray-300 transition-colors">
                    {item.value} ↗
                  </a>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <form onSubmit={handleSubmit} className="space-y-6 font-sans">
              <h3 className="font-display text-2xl mb-6">Send Signal</h3>
              <div>
                <label className="block text-xs tracking-widest uppercase opacity-70 mb-2">Name</label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required className="w-full bg-transparent border-b-2 border-white/50 py-2 outline-none focus:border-white font-sans text-lg" />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase opacity-70 mb-2">Email</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full bg-transparent border-b-2 border-white/50 py-2 outline-none focus:border-white font-sans text-lg" />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase opacity-70 mb-2">WhatsApp</label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full bg-transparent border-b-2 border-white/50 py-2 outline-none focus:border-white font-sans text-lg" />
              </div>
              <div>
                <label className="block text-xs tracking-widest uppercase opacity-70 mb-2">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} required rows={4} className="w-full bg-transparent border-b-2 border-white/50 py-2 outline-none focus:border-white font-sans text-lg resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-white text-[#111] font-bold tracking-widest uppercase py-4 hover:scale-[1.02] transition-transform duration-300 rounded-full">
              Transmit via WhatsApp
              </button>
              {sent && <p className="text-center font-bold tracking-widest text-sm mt-4 text-green-400">✓ Signal prepared!</p>}
            </form>
          </FadeUp>
        </div>
      </section>

    </div>
  );
};

export default Home;
