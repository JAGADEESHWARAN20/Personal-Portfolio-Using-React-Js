import React, { useRef, useEffect, useState } from 'react';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  const headerRef = useRef(null);

  // Sticky Header for Scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('sticky_header', 'backdrop-blur-md');
      } else {
        headerRef.current.classList.remove('sticky_header', 'backdrop-blur-md');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Sticky Message Header for Scrolling
  useEffect(() => {
    const handleMessageScroll = () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header_message');
      } else {
        headerRef.current.classList.remove('sticky_header_message');
      }
    };

    window.addEventListener('scroll', handleMessageScroll);

    return () => {
      window.removeEventListener('scroll', handleMessageScroll);
    };
  }, []);

  // Dark Mode State and Toggle Function
  const [isDarkMode, setDarkMode] = useState(true);

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
      document.documentElement.classList.add('dark'); // Ensure the class is added
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark'); // Remove dark class if not in dark mode
    }
  }, []);

  // Keyboard Shortcut for Dark Mode Toggle
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.shiftKey && event.key === 'F8') {
        toggleDarkMode();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`w-full lg:h-[90px] small-devices:h-[90px] transition-all duration-300 ${isDarkMode ? 'dark:bg-slate-900 bg-opacity-25' : 'bg-white bg-opacity-25'} flex justify-center lg:flex-row items-center overflow-hidden sticky_header backdrop-blur-md`}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[10px]">
            <span className={`w-[35px] h-[35px] bg-violet-600 text-white rounded-full flex items-center justify-center`}>
              J
            </span>
            <div className={`leading-[20px] ${isDarkMode ? 'dark:text-white' : 'text-smallTextColor-light'}`}>
              <h2 className={`text-2xl font-[700]`}>
                <Link to="/">Jagadeesh</Link>
              </h2>
              <p className={`text-[18px] font-[500]`}>Personal</p>
            </div>
          </div>

          <div className="menu">
            <ul className="list-none flex items-center gap-10 md:gap-2">
              <li className={`px-5 py-3 transition-all rounded-md font-[600] ${isDarkMode ? 'dark:text-purple-700' : 'hover:text-white'}`}>
                <Link to="/about">About</Link>
              </li>
              <li className={`px-5 py-3 transition-all rounded-md font-[600] ${isDarkMode ? 'dark:text-purple-700' : 'hover:text-white'}`}>
                <Link to="/experience">Experience</Link>
              </li>
              <li className={`px-5 py-3 transition-all rounded-md font-[600] ${isDarkMode ? 'dark:text-purple-700' : 'hover:text-white'}`}>
                <Link to="/projects">Projects</Link>
              </li>
              <li className={`px-5 py-3 transition-all rounded-md font-[600] ${isDarkMode ? 'dark:text-purple-700' : 'hover:text-white'}`}>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <button
                  className={`focus:outline-none px-4 py-2 flex flex-row gap-3 font-bold rounded-xl transition duration-300 ${isDarkMode ? 'dark:bg-slate-900 dark:text-white' : 'text-black hover:bg-violet-800 hover:text-white'}`}
                  onClick={toggleDarkMode}
                >
                  {!isDarkMode ? <RiMoonLine className="text-white" /> : <RiSunLine className="text-smallTextColor hover:text-white" />}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
