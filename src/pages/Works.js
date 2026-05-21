import React from 'react';

const projects = [
  {
    id: 1,
    index: '01',
    title: 'Kennis Power House',
    year: '2024',
    category: 'E-Commerce · React',
    description:
      'A full-featured e-commerce platform for phone accessories and tech solutions. Built with React, Context API, and WhatsApp order integration. Fully responsive with a light/dark mode toggle.',
    technologies: ['React', 'React Router', 'Context API', 'CSS3', 'Responsive Design'],
    features: [
      'Product catalog with filtering',
      'Shopping cart with quantity control',
      'WhatsApp order integration',
      'Light / Dark mode toggle',
      'Mobile-first responsive design',
      'Smooth page transitions',
    ],
    link: 'https://kennis-ph.netlify.app',
    github: 'https://github.com/cyperpro20/kennis-power-house',
  },
  {
    id: 2,
    index: '02',
    title: 'NumShift',
    year: '2026',
    category: 'SaaS · React',
    description:
      'A WhatsApp account recovery tool that notifies all your contacts of your new number — with a personalised message and a voice note to prove it\'s really you. No spam flags. No scam vibes.',
    technologies: ['React', 'React Router', 'Netlify', 'Cloud SMS', 'CSS3'],
    features: [
      'Secure contact sync from phonebook',
      'Voice note recording & cloud hosting',
      'Personalised bulk SMS blast',
      'Local SIM & Cloud SMS options',
      'Spam-filter-safe message delivery',
      'Trusted by users across 30+ countries',
    ],
    link: 'https://numshift.online',
    github: 'https://github.com/cyperpro20/NumShift',
  },
  {
    id: 3,
    index: '03',
    title: 'ReachBack',
    year: '2026',
    category: 'SaaS · React',
    description:
      'A social media backup tool that protects your followers and friends list across all major platforms. If your account gets banned, your full contact list is ready to rebuild instantly.',
    technologies: ['React', 'React Router', 'AES-256 Encryption', 'Netlify', 'CSS3'],
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
  },
  {
    id: 4,
    index: '04',
    title: 'EldTrip Planner',
    year: '2026',
    category: 'Tool · React',
    description:
      'Enter your trip details and get a fully HOS-compliant schedule with ELD log sheets — automatically. Built for truck drivers to stay FMCSA compliant on every route.',
    technologies: ['React', 'React Router', 'Netlify', 'CSS3'],
    features: [
      'HOS-compliant trip schedule generation',
      'Auto-generated ELD daily log sheets',
      '11h max driving/day enforcement',
      '70h/8-day cycle tracking',
      'Auto fuel stop calculation',
      'Driver, carrier & truck info support',
    ],
    link: 'https://eldtrip-plannner.netlify.app',
    github: 'https://github.com/ProlificDev/eld-trip-planner',
  },
];

const Works = ({ isDarkMode }) => {
  const bg     = isDarkMode ? 'bg-[#0a0a0a] text-white' : 'bg-white text-black';
  const muted  = isDarkMode ? 'text-white/50'            : 'text-black/50';
  const border = isDarkMode ? 'border-white/10'          : 'border-black/10';
  const cardBg = isDarkMode ? 'bg-white/5'               : 'bg-black/[0.03]';
  const tagBg  = isDarkMode ? 'bg-white/10 text-white/70': 'bg-black/10 text-black/70';

  return (
    <div className={`${bg} transition-colors duration-300`}>

      {/* ── HEADER ── */}
      <section className="pt-32 pb-12 px-5 max-w-2xl mx-auto text-center">
        <p className={`text-[10px] font-mono tracking-widest uppercase mb-4 ${muted}`}>Selected Works</p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight tracking-tight">
          Things I've <span className="text-blue-500">built.</span>
        </h1>
      </section>

      <div className={`border-t ${border}`} />

      {/* ── PROJECT LIST ── */}
      <section className="px-5 max-w-2xl mx-auto py-6">
        {projects.map((project) => (
          <div key={project.id} className={`border-b ${border} py-12 text-center`}>

            {/* Index + category */}
            <p className={`text-[10px] font-mono tracking-widest uppercase mb-3 ${muted}`}>
              {project.index} · {project.category} · {project.year}
            </p>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4">{project.title}</h2>

            {/* Description */}
            <p className={`text-sm leading-relaxed max-w-lg mx-auto mb-8 ${muted}`}>
              {project.description}
            </p>

            {/* Links */}
            <div className="flex gap-3 justify-center mb-10">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold rounded-full transition-all duration-200 hover:shadow-[0_0_20px_rgba(0,102,255,0.4)]"
              >
                Live ↗
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-5 py-2.5 text-sm font-semibold rounded-full border transition-all duration-200 ${
                  isDarkMode
                    ? 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'
                    : 'border-black/20 text-black/70 hover:border-black/50 hover:text-black'
                }`}
              >
                GitHub
              </a>
            </div>

            {/* Features + Tech — stack on mobile, side by side on md+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className={`rounded-xl p-5 ${cardBg}`}>
                <p className={`text-[10px] font-mono tracking-widest uppercase mb-3 text-center ${muted}`}>Key Features</p>
                <ul className="space-y-2">
                  {project.features.map((f) => (
                    <li key={f} className={`flex items-center gap-2.5 text-xs sm:text-sm ${muted}`}>
                      <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`rounded-xl p-5 ${cardBg}`}>
                <p className={`text-[10px] font-mono tracking-widest uppercase mb-3 text-center ${muted}`}>Stack</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.technologies.map((tech) => (
                    <span key={tech} className={`px-3 py-1 rounded-full text-xs font-semibold ${tagBg}`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </section>

      {/* ── MORE COMING ── */}
      <section className="py-16 px-5 max-w-2xl mx-auto text-center">
        <p className={`text-[10px] font-mono tracking-widest uppercase mb-3 ${muted}`}>Stay tuned</p>
        <h2 className="text-2xl sm:text-3xl font-black mb-3">More projects on the way.</h2>
        <p className={`text-sm ${muted}`}>I'm constantly building. Check back soon.</p>
      </section>

    </div>
  );
};

export default Works;
