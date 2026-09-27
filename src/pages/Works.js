import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projects = [
  {
    id: 1,
    index: '01',
    title: 'DigitalWash',
    year: '2026',
    category: 'SaaS · Full Stack',
    description:
      'A laundry business management platform that replaces notebooks and spreadsheets. Manage orders, payments, expenses, staff, and multiple branches from one dashboard — built for laundromats and dry cleaners.',
    technologies: ['React', 'Node.js', 'Express', 'Supabase', 'Tailwind CSS'],
    features: [
      'Orders, pickup & delivery tracking',
      'Payments & finance reporting',
      'Inventory & purchasing management',
      'Staff accounts with role permissions',
      'Multi-branch support from one login',
      'Loyalty program & WhatsApp messaging',
    ],
    link: 'https://digitalwashapp.com',
    github: 'https://github.com/ProlificDev',
    screenshot: '/images/digitalwash.jpg',
  },
  {
    id: 2,
    index: '02',
    title: 'Kennis Power House',
    year: '2024',
    category: 'E-Commerce · React',
    description:
      'A full-featured e-commerce platform for phone accessories and tech solutions. Built with React, Context API, and WhatsApp order integration. Fully responsive with a light/dark mode toggle.',
    technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Context API'],
    features: [
      'Product catalog with filtering',
      'Shopping cart with quantity control',
      'WhatsApp order integration',
      'Light / Dark mode toggle',
      'Mobile-first responsive design',
      'Smooth page transitions',
    ],
    link: 'https://kennis-ph.netlify.app',
    github: 'https://github.com/ProlificDev/Kennis-power-house',
    screenshot: '/images/kennis.jpg',
  },
  {
    id: 3,
    index: '03',
    title: 'NumShift',
    year: '2026',
    category: 'SaaS · Full Stack',
    description:
      "A WhatsApp account recovery tool that notifies all your contacts of your new number — with a personalised message and a voice note to prove it's really you. No spam flags. No scam vibes.",
    technologies: ['React', 'Node.js', 'Express', 'Supabase', 'Tailwind CSS'],
    features: [
      'Secure contact sync from phonebook',
      'Voice note recording & cloud hosting',
      'Personalised bulk SMS blast',
      'Local SIM & Cloud SMS options',
      'Spam-filter-safe message delivery',
      'Trusted by users across 30+ countries',
    ],
    link: 'https://numshift.netlify.app',
    github: 'https://github.com/cyperpro20/NumShift',
    screenshot: '/images/numshift.jpg',
  },
  {
    id: 4,
    index: '04',
    title: 'ReachBack',
    year: '2026',
    category: 'SaaS · Full Stack',
    description:
      'A social media backup tool that protects your followers and friends list across all major platforms. If your account gets banned, your full contact list is ready to rebuild instantly.',
    technologies: ['React', 'Node.js', 'Express', 'Supabase', 'Tailwind CSS'],
    features: [
      'Backup followers from 5 platforms',
      'AES-256 encrypted contact storage',
      'Instant recovery after a ban',
      'Export contacts as CSV anytime',
      'Simple file upload — no tech skills needed',
      'You own & control your data',
    ],
    link: 'https://reachback.netlify.app',
    github: 'https://github.com/cyperpro20/reachback',
    screenshot: '/images/reachback.jpg',
  },
  {
    id: 5,
    index: '05',
    title: 'EldTrip Planner',
    year: '2026',
    category: 'Full Stack · React · Django',
    description:
      'Enter your trip details and get a fully HOS-compliant schedule with ELD log sheets — automatically. Built for truck drivers to stay FMCSA compliant on every route.',
    technologies: ['React', 'Vite', 'Tailwind CSS', 'Django', 'Django REST Framework', 'Python', 'Leaflet.js', 'Render'],
    features: [
      'HOS-compliant trip schedule generation',
      'Auto-generated ELD daily log sheets',
      '11h max driving/day enforcement',
      '70h/8-day cycle tracking',
      'Auto fuel stop calculation',
      'Interactive route map with Leaflet.js',
    ],
    link: 'https://eldtrip-plannner.netlify.app',
    github: 'https://github.com/ProlificDev/eld-trip-planner',
    screenshot: '/images/eldtrip.jpg',
  },
  {
    id: 6,
    index: '06',
    title: 'MovieDrop',
    year: '2026',
    category: 'Web App · Full Stack',
    description:
      'A sleek platform for exploring movies and TV shows. Browse catalogs, find details, and discover the latest releases with an intuitive user interface.',
    technologies: ['React', 'FastAPI', 'Python', 'Supabase', 'Tailwind CSS'],
    features: [
      'Comprehensive movie catalog',
      'Fast search and filtering',
      'Responsive UI for all devices',
      'Dynamic API integration',
      'Smooth animations and transitions',
    ],
    link: 'https://moviedrop.site/',
    github: 'https://github.com/cyperpro20/moviedrop',
    screenshot: '/images/moviedrop.jpg',
  },
];

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

const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      className="border-b border-gray-200 py-12 text-center"
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.05 * index }}
    >
      {/* Screenshot */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block mb-8 rounded-2xl overflow-hidden border border-gray-200 relative"
        style={{ aspectRatio: '16/9' }}
      >
        <div className="absolute inset-0 bg-gray-50 animate-pulse" />
        <img
          src={project.screenshot}
          alt={`${project.title} screenshot`}
          className="relative w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onLoad={(e) => { e.target.previousSibling.style.display = 'none'; }}
          onError={(e) => {
            e.target.previousSibling.style.display = 'none';
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className="absolute inset-0 items-center justify-center text-xs font-mono hidden text-gray-500">
          {project.title}
        </div>
        <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-900 text-xs font-semibold bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-sm">
            Visit site ↗
          </span>
        </div>
      </a>

      <p className="text-[10px] font-mono tracking-widest uppercase mb-3 text-gray-500">
        {project.index} · {project.category}
      </p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">{project.title}</h2>
      <p className="text-sm leading-relaxed max-w-lg mx-auto mb-8 text-gray-500">{project.description}</p>

      {/* Links */}
      <div className="flex gap-3 justify-center mb-10">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-gray-900 text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,102,255,0.4)]"
        >
          Live ↗
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 text-sm font-semibold rounded-full border border-gray-300 text-gray-700 hover:border-gray-500 hover:text-gray-900 transition-all duration-200"
        >
          GitHub
        </a>
      </div>

      {/* Features + Stack */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
        <div className="rounded-xl p-5 bg-gray-50">
          <p className="text-[10px] font-mono tracking-widest uppercase mb-3 text-center text-gray-500">Key Features</p>
          <ul className="space-y-2">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-500">
                <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl p-5 bg-gray-50">
          <p className="text-[10px] font-mono tracking-widest uppercase mb-3 text-center text-gray-500">Stack</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-700">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="bg-white text-gray-900 transition-colors duration-300">

      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 px-5 max-w-2xl mx-auto text-center">
        <motion.p
          className="text-[10px] font-mono tracking-widest uppercase mb-4 text-gray-500"
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Selected Works
        </motion.p>
        <motion.h1
          className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight"
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Things I've <span className="text-blue-500">built.</span>
        </motion.h1>
      </section>

      <motion.div
        className="border-t border-gray-200"
        initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{ originX: 0 }}
      />

      {/* ── PROJECT LIST ── */}
      <section className="px-5 max-w-2xl mx-auto py-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </section>

      {/* ── MORE COMING ── */}
      <FadeUp>
        <section className="py-16 px-5 max-w-2xl mx-auto text-center">
          <p className="text-[10px] font-mono tracking-widest uppercase mb-3 text-gray-500">Stay tuned</p>
          <h2 className="text-2xl sm:text-3xl font-black mb-3">More projects on the way.</h2>
          <p className="text-sm text-gray-500">I'm constantly building. Check back soon.</p>
        </section>
      </FadeUp>

    </div>
  );
};

export default Works;
