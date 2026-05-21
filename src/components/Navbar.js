import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [mounted, setMounted]       = useState(false);
  const location = useLocation();

  // Entry animation on mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/works', label: 'Works' },
    { to: '/contact', label: 'Contact' },
  ];

  const base = isDarkMode
    ? 'bg-[#0a0a0a]/90 border-white/10 text-white'
    : 'bg-white/90 border-black/10 text-black';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-500
        ${base}
        ${scrolled ? 'shadow-[0_4px_30px_rgba(0,102,255,0.08)]' : ''}
        ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      `}
      style={{ transition: 'transform 0.5s cubic-bezier(0.16,1,0.3,1), opacity 0.5s ease, box-shadow 0.3s ease, background 0.3s ease' }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8 shrink-0 overflow-hidden logo-shimmer">
            {/* Outer rotating ring */}
            <svg
              className="absolute inset-0 w-8 h-8 transition-transform duration-700 group-hover:rotate-180"
              viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="16" cy="16" r="14" stroke="#0066ff" strokeWidth="1.5"
                strokeDasharray="6 4" strokeLinecap="round" opacity="0.4" />
            </svg>
            {/* Inner pulsing circle */}
            <svg
              className="absolute inset-0 w-8 h-8"
              viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ filter: 'drop-shadow(0 0 4px rgba(0,102,255,0.5))', animation: 'logoPulse 2.5s ease-in-out infinite' }}
            >
              <circle cx="16" cy="16" r="11" fill="#0066ff" />
              <text x="16" y="21" textAnchor="middle" fill="white"
                fontSize="13" fontWeight="900" fontFamily="Inter, Arial Black, sans-serif">P</text>
            </svg>
          </div>
          <span className={`text-sm font-bold tracking-tight transition-opacity duration-200 group-hover:opacity-80 ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Prolific<span className="text-blue-500">Dev</span>
          </span>
        </Link>

        {/* ── Desktop nav ── */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-8">
            {navLinks.map(({ to, label }, i) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className="relative text-sm font-medium tracking-wide group"
                  style={{
                    animationDelay: `${i * 80}ms`,
                    animation: mounted ? `navLinkDrop 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 80}ms both` : 'none',
                  }}
                >
                  {/* Active blue dot */}
                  {isActive && (
                    <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"
                      style={{ animation: 'dotPop 0.3s cubic-bezier(0.34,1.56,0.64,1) both' }} />
                  )}
                  <span className={isActive ? 'nav-link-active font-semibold' : 'nav-link-muted'}>
                    {label}
                  </span>
                  {/* Hover underline */}
                  {!isActive && (
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title="Toggle theme"
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 border hover:scale-110 active:scale-95 ${
              isDarkMode
                ? 'border-white/15 hover:border-blue-500/50 text-white/60 hover:text-white'
                : 'border-black/15 hover:border-blue-500/50 text-black/60 hover:text-black'
            }`}
          >
            <span className="transition-transform duration-500" style={{ display: 'inline-flex', transform: isDarkMode ? 'rotate(0deg)' : 'rotate(180deg)' }}>
              {isDarkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="4" />
                  <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
                </svg>
              )}
            </span>
          </button>
        </div>

        {/* ── Mobile right side ── */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme toggle mobile */}
          <button
            onClick={toggleTheme}
            title="Toggle theme"
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all border ${
              isDarkMode
                ? 'border-white/15 hover:border-white/40 text-white/60 hover:text-white'
                : 'border-black/15 hover:border-black/40 text-black/60 hover:text-black'
            }`}
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="4" />
                <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            )}
          </button>

          {/* Animated three-dash hamburger → X */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            className="w-8 h-8 flex flex-col items-center justify-center gap-[5px] group"
          >
            <span className={`block h-[2px] rounded-full transition-all duration-300 ease-in-out origin-center
              ${isDarkMode ? 'bg-white' : 'bg-black'}
              ${mobileOpen ? 'w-5 rotate-45 translate-y-[7px]' : 'w-5'}`}
            />
            <span className={`block h-[2px] rounded-full transition-all duration-300 ease-in-out
              ${isDarkMode ? 'bg-white' : 'bg-black'}
              ${mobileOpen ? 'w-0 opacity-0' : 'w-4 group-hover:w-5'}`}
            />
            <span className={`block h-[2px] rounded-full transition-all duration-300 ease-in-out origin-center
              ${isDarkMode ? 'bg-white' : 'bg-black'}
              ${mobileOpen ? 'w-5 -rotate-45 -translate-y-[7px]' : 'w-5'}`}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile dropdown menu ── */}
      <div
        className={`md:hidden border-t overflow-hidden transition-all duration-400 ease-in-out
          ${isDarkMode ? 'border-white/10 bg-[#0a0a0a]' : 'border-black/10 bg-white'}
          ${mobileOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}
        `}
        style={{ transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease' }}
      >
        <div className="px-6 py-6 flex flex-col gap-1">
          {navLinks.map(({ to, label }, i) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-3 py-3 text-base font-medium tracking-wide border-b last:border-0 transition-all duration-200
                  ${isDarkMode ? 'border-white/5' : 'border-black/5'}
                  ${isActive ? 'nav-link-active' : 'nav-link-muted'}
                `}
                style={{
                  transform: mobileOpen ? 'translateX(0)' : 'translateX(-12px)',
                  opacity: mobileOpen ? 1 : 0,
                  transition: `transform 0.35s cubic-bezier(0.16,1,0.3,1) ${i * 60}ms, opacity 0.35s ease ${i * 60}ms`,
                }}
              >
                {/* Active indicator */}
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200 ${isActive ? 'bg-blue-500' : isDarkMode ? 'bg-white/20' : 'bg-black/20'}`} />
                {label}
                {isActive && <span className={`ml-auto text-[10px] font-mono tracking-widest uppercase ${isDarkMode ? 'text-white/30' : 'text-black/30'}`}>current</span>}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
