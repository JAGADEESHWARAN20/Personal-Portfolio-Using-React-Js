import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Menu, X, Sun, Moon } from 'lucide-react';

const Header = () => {
  const headerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(true);

  // Sticky Header for Scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };

  // Set Default Dark Mode Based on Preference
  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localStorageTheme === 'dark' || (!localStorageTheme && prefersDarkMode)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/experience', label: 'Experience' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
        ${isDarkMode 
          ? 'dark:bg-slate-900/95 dark:text-white' 
          : 'bg-white/95 text-slate-900'
        } ${isMenuOpen ? 'h-screen md:h-auto' : 'h-20'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center font-bold">
              J
            </span>
            <div className="leading-tight">
              <h2 className="text-xl font-bold">
                <Link to="/">Jagadeesh</Link>
              </h2>
              <p className="text-sm font-medium opacity-75">Personal</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md font-medium transition-colors
                  ${isDarkMode
                    ? 'text-white/70 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg transition-colors
                ${isDarkMode
                  ? 'text-white/70 hover:text-white hover:bg-white/10'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg transition-colors hover:bg-slate-100 dark:hover:bg-white/10"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden min-h-screen py-8">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors
                    ${isDarkMode
                      ? 'text-white/70 hover:text-white hover:bg-white/10'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                    }`}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors
                  ${isDarkMode
                    ? 'text-white/70 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
              >
                {isDarkMode ? (
                  <>
                    <Sun size={20} />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon size={20} />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;