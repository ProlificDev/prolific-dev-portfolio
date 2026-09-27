import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: '#home', label: 'HOME' },
    { to: '#works', label: 'WORKS' },
    { to: '#contact', label: 'CONTACT' },
  ];

  return (
    <div className="absolute top-0 left-0 right-0 z-[100] px-6 lg:px-12 py-8 flex items-center justify-between pointer-events-auto bg-transparent">
      {/* Logo */}
      <a href="#home" className="flex items-center gap-3 group">
        <img src="/my logo.jpg" alt="Logo" className="w-8 h-8 rounded-full object-cover grayscale contrast-125" />
        <span className="font-display text-xs tracking-widest uppercase text-[#111] mt-1 hidden sm:block">PROLIFICDEV</span>
      </a>

      {/* Links */}
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map(({ to, label }) => {
          return (
            <a
              key={to}
              href={to}
              className="text-[10px] font-sans font-bold tracking-[0.15em] transition-colors duration-300 text-[#111] hover:text-gray-500 uppercase"
            >
              {label}
            </a>
          );
        })}
      </nav>
      
      {/* Mobile Menu Icon */}
      <button 
        className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`w-6 h-0.5 bg-spaceBlack transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-spaceBlack transition-opacity ${isOpen ? 'opacity-0' : ''}`}></div>
        <div className={`w-6 h-0.5 bg-spaceBlack transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-white shadow-xl flex flex-col items-center justify-center pt-24 pb-8 gap-6 md:hidden">
          {navLinks.map(({ to, label }) => (
            <a
              key={to}
              href={to}
              onClick={() => setIsOpen(false)}
              className="text-sm font-sans font-bold tracking-[0.2em] text-[#111] uppercase"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
