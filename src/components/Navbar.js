import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [mounted, setMounted]       = useState(false);
  const location = useLocation();

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/works', label: 'Works' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* ── Floating pill navbar ── */}
      <div
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        style={{
          transform: mounted ? 'translateY(0)' : 'translateY(-24px)',
          opacity: mounted ? 1 : 0,
          transition: 'transform 0.6s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease',
        }}
      >
        <header
          className={`
            flex items-center justify-between gap-4
            h-11 px-3 rounded-2xl border
            backdrop-blur-xl transition-all duration-300
            ${isDarkMode
              ? 'bg-[#0f0f0f]/80 border-white/10 text-white'
              : 'bg-white/80 border-black/10 text-black'}
            ${scrolled
              ? isDarkMode
                ? 'shadow-[0_8px_32px_rgba(0,0,0,0.6)] border-white/15'
                : 'shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-black/15'
              : ''}
          `}
          style={{ minWidth: 0, width: '100%', maxWidth: '560px' }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group shrink-0">
            <div className="relative w-7 h-7 shrink-0 overflow-hidden rounded-full border border-white/10 shadow-[0_0_8px_rgba(0,102,255,0.5)]" style={{ animation: 'logoPulse 2.5s ease-in-out infinite' }}>
              <img src="/favicon.png" alt="ProlificDev Logo" className="w-full h-full object-cover" />
            </div>
            <span className={`text-xs font-bold tracking-tight hidden sm:block ${isDarkMode ? 'text-white' : 'text-black'}`}>
              Prolific<span className="text-blue-500">Dev</span>
            </span>
          </Link>

          {/* Desktop links — centered */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }, i) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`
                    relative px-3 py-1.5 rounded-xl text-xs font-medium tracking-wide
                    transition-all duration-200
                    ${isActive
                      ? isDarkMode
                        ? 'bg-white/10 text-white'
                        : 'bg-black/8 text-black'
                      : isDarkMode
                        ? 'text-white/50 hover:text-white hover:bg-white/5'
                        : 'text-black/50 hover:text-black hover:bg-black/5'}
                  `}
                  style={{
                    animation: mounted ? `navLinkDrop 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 60 + 100}ms both` : 'none',
                  }}
                >
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"
                      style={{ animation: 'dotPop 0.3s cubic-bezier(0.34,1.56,0.64,1) both' }} />
                  )}
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right side — theme + hamburger */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              title="Toggle theme"
              className={`w-7 h-7 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95
                ${isDarkMode
                  ? 'text-white/50 hover:text-white hover:bg-white/10'
                  : 'text-black/50 hover:text-black hover:bg-black/8'}`}
            >
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="4" />
                  <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                </svg>
              )}
            </button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className={`md:hidden w-7 h-7 rounded-xl flex flex-col items-center justify-center gap-[4px]
                transition-all duration-200
                ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-black/8'}`}
            >
              <span className={`block h-[1.5px] rounded-full transition-all duration-300 origin-center
                ${isDarkMode ? 'bg-white' : 'bg-black'}
                ${mobileOpen ? 'w-4 rotate-45 translate-y-[5.5px]' : 'w-4'}`} />
              <span className={`block h-[1.5px] rounded-full transition-all duration-300
                ${isDarkMode ? 'bg-white' : 'bg-black'}
                ${mobileOpen ? 'w-0 opacity-0' : 'w-3'}`} />
              <span className={`block h-[1.5px] rounded-full transition-all duration-300 origin-center
                ${isDarkMode ? 'bg-white' : 'bg-black'}
                ${mobileOpen ? 'w-4 -rotate-45 -translate-y-[5.5px]' : 'w-4'}`} />
            </button>
          </div>
        </header>
      </div>

      {/* ── Mobile dropdown — floats below pill ── */}
      <div
        className={`
          fixed top-[72px] left-4 right-4 z-40 md:hidden
          rounded-2xl border overflow-hidden
          transition-all duration-400
          ${isDarkMode ? 'bg-[#0f0f0f]/95 border-white/10' : 'bg-white/95 border-black/10'}
          ${mobileOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-3 pointer-events-none'}
        `}
        style={{
          backdropFilter: 'blur(20px)',
          transition: 'opacity 0.3s ease, transform 0.35s cubic-bezier(0.16,1,0.3,1)',
          boxShadow: isDarkMode
            ? '0 16px 48px rgba(0,0,0,0.6)'
            : '0 16px 48px rgba(0,0,0,0.12)',
        }}
      >
        <div className="p-3 flex flex-col gap-1">
          {navLinks.map(({ to, label }, i) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium
                  transition-all duration-200
                  ${isActive
                    ? isDarkMode ? 'bg-white/10 text-white' : 'bg-black/8 text-black'
                    : isDarkMode ? 'text-white/50 hover:text-white hover:bg-white/5' : 'text-black/50 hover:text-black hover:bg-black/5'}
                `}
                style={{
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(-8px)',
                  opacity: mobileOpen ? 1 : 0,
                  transition: `transform 0.35s cubic-bezier(0.16,1,0.3,1) ${i * 50}ms, opacity 0.3s ease ${i * 50}ms`,
                }}
              >
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${isActive ? 'bg-blue-500' : isDarkMode ? 'bg-white/20' : 'bg-black/20'}`} />
                {label}
                {isActive && (
                  <span className={`ml-auto text-[10px] font-mono tracking-widest uppercase ${isDarkMode ? 'text-white/30' : 'text-black/30'}`}>
                    current
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Backdrop — closes menu on outside tap */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
