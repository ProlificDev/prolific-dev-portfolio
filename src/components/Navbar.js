import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/works', label: 'Works' },
    { to: '/contact', label: 'Contact' },
  ];

  const base = isDarkMode
    ? 'bg-[#0a0a0a]/90 border-white/10 text-white'
    : 'bg-white/90 border-black/10 text-black';

  const linkActive = 'nav-link-active font-semibold';
  const linkMuted  = 'nav-link-muted';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 backdrop-blur-md ${base} ${scrolled ? 'shadow-lg' : ''}`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          {/* Animated SVG lettermark */}
          <div className="relative w-8 h-8 shrink-0">
            {/* Outer rotating ring — spins on hover */}
            <svg
              className="absolute inset-0 w-8 h-8 transition-transform duration-700 group-hover:rotate-180"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="16" cy="16" r="14"
                stroke="#0066ff"
                strokeWidth="1.5"
                strokeDasharray="6 4"
                strokeLinecap="round"
                opacity="0.4"
              />
            </svg>

            {/* Inner solid circle — pulses glow */}
            <svg
              className="absolute inset-0 w-8 h-8"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                filter: 'drop-shadow(0 0 4px rgba(0,102,255,0.5))',
                animation: 'logoPulse 2.5s ease-in-out infinite',
              }}
            >
              <circle cx="16" cy="16" r="11" fill="#0066ff" />
              {/* P lettermark */}
              <text
                x="16" y="21"
                textAnchor="middle"
                fill="white"
                fontSize="13"
                fontWeight="900"
                fontFamily="Inter, Arial Black, sans-serif"
              >
                P
              </text>
            </svg>
          </div>

          {/* Wordmark */}
          <span className={`text-sm font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-black'}`}>
            Prolific<span className="text-blue-500">Dev</span>
          </span>
        </Link>

        {/* Desktop nav — right-aligned */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-8">
            {navLinks.map(({ to, label }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? linkActive : linkMuted}`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Theme toggle — sun/moon SVG icons */}
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
              /* Sun icon */
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="4" />
                <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              /* Moon icon */
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile right side */}
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

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          >
            <span className={`block w-5 h-px transition-all duration-300 ${isDarkMode ? 'bg-white' : 'bg-black'} ${mobileOpen ? 'rotate-45 translate-y-[5px]' : ''}`} />
            <span className={`block w-5 h-px transition-all duration-300 ${isDarkMode ? 'bg-white' : 'bg-black'} ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-px transition-all duration-300 ${isDarkMode ? 'bg-white' : 'bg-black'} ${mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`md:hidden border-t px-6 py-6 flex flex-col gap-5 ${isDarkMode ? 'border-white/10 bg-[#0a0a0a]' : 'border-black/10 bg-white'}`}>
          {navLinks.map(({ to, label }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`text-lg font-medium tracking-wide ${isActive ? linkActive : linkMuted}`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};

export default Navbar;
