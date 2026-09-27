const Navbar = () => {
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
      <button className="md:hidden flex flex-col gap-1.5 p-2">
        <div className="w-6 h-0.5 bg-spaceBlack"></div>
        <div className="w-6 h-0.5 bg-spaceBlack"></div>
        <div className="w-4 h-0.5 bg-spaceBlack self-end"></div>
      </button>
    </div>
  );
};

export default Navbar;
