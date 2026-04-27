import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const skills = [
  { category: 'Frontend',  items: ['React', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS'] },
  { category: 'Tooling',   items: ['Git & GitHub', 'Webpack', 'NPM / Yarn', 'VS Code'] },
  { category: 'Design',    items: ['UI/UX Principles', 'Figma', 'CSS Animations', 'Accessibility'] },
  { category: 'Other',     items: ['REST APIs', 'Performance', 'SEO Basics', 'Problem Solving'] },
];

const stats = [
  { value: '4+',   label: 'Years' },
  { value: '20+',  label: 'Projects' },
  { value: '100%', label: 'Satisfaction' },
];

const roles = ['Frontend Dev', 'React Engineer', 'UI Craftsman', 'Web Builder'];

const WordCycler = ({ isDarkMode }) => {
  const [index, setIndex]     = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % roles.length);
        setVisible(true);
      }, 350);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold tracking-widest uppercase
        border transition-all duration-300
        ${isDarkMode
          ? 'border-blue-500/40 bg-blue-500/10 text-blue-400'
          : 'border-blue-500/30 bg-blue-50 text-blue-600'}
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
      `}
      style={{ transition: 'opacity 0.35s ease, transform 0.35s ease' }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-blink shrink-0" />
      {roles[index]}
    </span>
  );
};

const Home = ({ isDarkMode }) => {
  const bg     = isDarkMode ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black';
  const muted  = isDarkMode ? 'text-white/50'            : 'text-black/50';
  const border = isDarkMode ? 'border-white/10'          : 'border-black/10';
  const cardBg = isDarkMode ? 'bg-white/5'               : 'bg-black/5';
  const strong = isDarkMode ? 'text-white font-medium'   : 'text-black font-medium';

  return (
    <div className={`${bg} transition-colors duration-300`}>

      {/* ══ HERO ══ */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 pt-20 pb-12 max-w-3xl mx-auto">

        {/* Status badge */}
        <div className="mb-6 animate-slide-up-fade-1">
          <span className={`
            inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase border
            ${isDarkMode ? 'border-white/10 text-white/40' : 'border-black/10 text-black/40'}
          `}>
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Available for work · Worldwide
          </span>
        </div>

        {/* Greeting */}
        <div className="mb-2 animate-slide-up-fade-2">
          <p className={`text-sm md:text-base font-mono ${muted}`}>
            Emmanuel Awuzie · aka <span className="text-blue-500 font-semibold">ProlificDev</span>
          </p>
        </div>

        {/* Big name + word cycler */}
        <div className="animate-slide-up-fade-3 w-full">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-1">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight">
              Emmanuel
            </h1>
            <div className="flex items-center">
              <WordCycler isDarkMode={isDarkMode} />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight text-blue-500">
            Awuzie
          </h1>
        </div>

        {/* Sub-line */}
        <p className={`text-sm md:text-base max-w-md leading-relaxed mt-6 mb-8 animate-slide-up-fade-4 ${muted}`}>
          I'm <span className={strong}>Emmanuel Awuzie</span> — a frontend developer
          with <span className={strong}>4 years</span> of professional experience
          designing and building high-performance web applications. I go by{' '}
          <span className="text-blue-500 font-semibold">ProlificDev</span> — a name
          that reflects my commitment to shipping quality work, consistently.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center w-full animate-slide-up-fade-5">
          <Link
            to="/works"
            className="w-full sm:w-auto px-6 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-[0_0_24px_rgba(0,102,255,0.4)]"
          >
            View my work ↗
          </Link>
          <Link
            to="/contact"
            className={`w-full sm:w-auto px-6 py-2.5 text-sm font-semibold rounded-full border transition-all duration-200 ${
              isDarkMode
                ? 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'
                : 'border-black/20 text-black/70 hover:border-black/50 hover:text-black'
            }`}
          >
            Get in touch
          </Link>
        </div>

        {/* Scroll hint */}
        <div className={`mt-14 flex items-center justify-center gap-3 animate-slide-up-fade-5 ${muted}`}>
          <div className={`w-8 h-px ${isDarkMode ? 'bg-white/20' : 'bg-black/20'}`} />
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll to explore</span>
          <div className={`w-8 h-px ${isDarkMode ? 'bg-white/20' : 'bg-black/20'}`} />
        </div>
      </section>

      {/* ══ STATS ══ */}
      <section className={`border-y ${border} py-8 px-4`}>
        <div className={`max-w-3xl mx-auto grid grid-cols-3 divide-x ${border}`}>
          {stats.map(({ value, label }) => (
            <div key={label} className="px-3 sm:px-6 first:pl-0 last:pr-0 text-center">
              <p className="text-2xl sm:text-4xl font-black text-blue-500 mb-1">{value}</p>
              <p className={`text-[10px] sm:text-xs font-mono tracking-widest uppercase ${muted}`}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══ ABOUT ══ */}
      <section className="py-16 px-5 max-w-2xl mx-auto text-center">
        <p className={`text-[10px] font-mono tracking-widest uppercase mb-4 ${muted}`}>About</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black leading-tight mb-8">
          Turning ideas into{' '}
          <span className="text-blue-500">polished products.</span>
        </h2>
        <div className={`space-y-4 text-sm leading-relaxed ${muted}`}>
          <p>
            I'm <span className={strong}>Emmanuel Awuzie</span>, a frontend developer
            known professionally as <span className="text-blue-500 font-semibold">ProlificDev</span>.
            Over the past 4 years, I've built and shipped production-ready web applications
            for real clients — from e-commerce platforms to interactive landing pages.
          </p>
          <p>
            My core stack is <span className={strong}>React and modern JavaScript</span>, paired
            with a sharp eye for UI design and a relentless focus on performance. I don't just
            write code — I craft experiences that feel intuitive, look great, and load fast.
          </p>
          <p>
            I work remotely and collaborate with clients and teams across the globe.
            Whether you need a full product built from scratch or an existing codebase
            improved, I bring professionalism, clear communication, and clean code to every project.
          </p>
        </div>
      </section>

      {/* ══ SKILLS ══ */}
      <section className={`border-t ${border} py-16 px-5`}>
        <div className="max-w-3xl mx-auto">
          <p className={`text-[10px] font-mono tracking-widest uppercase mb-8 text-center ${muted}`}>Skills & Technologies</p>
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-px ${isDarkMode ? 'bg-white/10' : 'bg-black/10'}`}>
            {skills.map(({ category, items }) => (
              <div key={category} className={`${cardBg} p-4 sm:p-6 text-center`}>
                <h3 className="text-xs font-bold text-blue-500 mb-4 tracking-wide">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className={`text-xs sm:text-sm ${muted}`}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══ */}
      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          <div className={`rounded-2xl p-8 sm:p-12 flex flex-col items-center text-center gap-6 ${
            isDarkMode
              ? 'bg-blue-500/10 border border-blue-500/20'
              : 'bg-blue-50 border border-blue-100'
          }`}>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black mb-2">Let's build something great.</h2>
              <p className={`text-sm ${muted}`}>
                Have a project in mind? I'm <span className={strong}>Emmanuel Awuzie</span> — and I'm ready to bring it to life.
              </p>
            </div>
            <Link
              to="/contact"
              className="px-6 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-full transition-all duration-200 hover:shadow-[0_0_32px_rgba(0,102,255,0.4)] text-sm"
            >
              Start a conversation →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
