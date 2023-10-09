import React, {useRef, useEffect, useState } from 'react';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Header = () => {
  const headerRef = useRef(null);
  const stickyHeaderFunc = () => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('sticky_header ', 'backdrop-blur-md');
      } else {
        headerRef.current.classList.remove('sticky_header ', 'backdrop-blur-md');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  };

  useEffect(()=>{
    stickyHeaderFunc();
    return window.removeEventListener('scroll',stickyHeaderFunc);
  },[]);

  const headerMessageRef = useRef(null);

  const stickyMessageHeaderFunc = () =>{
    window.addEventListener('scroll',()=>{
      if(document.body.scrollTop>80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky_header_message');
      }else{
        headerRef.current.classList.remove('sticky_header_message');
      }
    });
  };

  useEffect(()=>{
    stickyMessageHeaderFunc();
    return window.removeEventListener('scroll',stickyHeaderFunc);
  },[]);

  const [isDarkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newMode);
  };
  useEffect(() => {
    const localStorageTheme = localStorage.getItem('theme');
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (localStorageTheme === 'dark' || (!localStorageTheme && prefersDarkMode)) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

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
<header  ref={headerRef}  className={`w-full lg:h-[90px] small-devices:h-[90px] transition-all duration-300 ${isDarkMode ? 'dark:bg-slate-900 bg-opacity-25' : 'bg-white bg-opacity-25'} flex justify-center lg:flex-row items-center overflow-hidden sticky_header backdrop-blur-md`}>
      <div className="container">
        <div className="flex items-center justify-between">
          
            <div className="flex items-center gap-[10px]">
              <span className={`w-[35px] h-[35px] bg-violet-600 text-white ${isDarkMode ? 'dark:bg-violet-600 dark:text-white' : 'bg-violet-700 text-white'} text-[18px] font-[500] rounded-full flex items-center justify-center`}>
                J
              </span>
              <div className={`leading-[20px] ${isDarkMode ? 'dark:text-white' : 'text-smallTextColor-light'}`}>
                <h2 className={`text-2xl font-[700] ${isDarkMode ? 'dark:text-white' : 'text-smallTextColor-light'}`}>
                  <Link rel="stylesheet" to="/hero" >Jagadeesh</Link></h2>
                <p className={`text-[18px] font-[500] ${isDarkMode ? 'dark:text-white' : 'text-smallTextColor-light'}`}>Personal</p>
              </div>
            </div>
          
          <div className={`menu `} >

            <ul className={`list-none flex items-center gap-10 md:gap-2 md:flex`}>
              <li className={`text-smallTextColor small-devices:hidden lg:inline-block ${isDarkMode ? 'dark:text-purple-700' : 'hover:text-white'} px-5 py-3 transition-all rounded-md hover:bg-violet-700 hover:text-white dark:hover:bg-white dark:hover:text-violet-700 font-[600]`}>
                <Link to={'/hero'} >About</Link>
              </li>
              <li className={`text-smallTextColor small-devices:hidden lg:inline-block ${isDarkMode ? 'dark:text-purple-700' : 'hover:text-white'} px-5 py-3 transition-all rounded-md hover:bg-violet-700 hover:text-white dark:hover:bg-white dark:hover:text-violet-700 font-[600]`}>
              <Link to={'/experience'} >Experience</Link>
              </li>
              <li className={`text-smallTextColor small-devices:hidden lg:inline-block ${isDarkMode ? 'dark:text-purple-700' : 'hover:text-white'} px-5 py-3 transition-all rounded-md hover:bg-violet-700 hover:text-white dark:hover:bg-white dark:hover:text-violet-700 font-[600]`}>
              <Link to={'/projects'} >Projects</Link>
              </li>
              <li className={`text-smallTextColor small-devices:hidden lg:inline-block ${isDarkMode ? 'dark:text-purple-700' : 'hover:text-white'} px-5 py-3 transition-all rounded-md hover:bg-violet-700 hover:text-white dark:hover:bg-white dark:hover:text-violet-700 font-[600]`}>
              <Link to={'/contact'} >Contact</Link>
              </li>
              <div className="tooltipmode">
                <span className="tooltiptextmode dark:bg-white bg-black dark:text-black text-black">Clrl+Shift+F8</span>
                <li>
                  <button
                    className={`focus:outline-none hover:bg-violet-800 dark:hover:bg-violet-800 text-black hover:text-white transition duration-300 rounded-xl cursor-pointer ${isDarkMode ? 'dark:bg-slate-900 dark:text-white' : 'text-black'} px-4 py-2 flex flex-row gap-3 font-bold`}
                    onClick={toggleDarkMode}
                  >
                    {isDarkMode ? <RiMoonLine className="hover:bg-violet-600 text-white" /> : <RiSunLine className="text-smallTextColor hover:text-white" />}
                  </button>
                </li>
              </div>
            </ul>
          </div>
          <div className="flex items-center gap-4">
                <div ref={headerMessageRef} className={`dark:text-white p-5 ${isDarkMode ? 'dark:text-white' : 'text-black'}`}>
                            <h1 className={`hover:font-bold text-black dark:text-white font-bold px-4 py-2 small-devices:text-center small-devices:items-center border border-violet-700 flex flex-row gap-3 rounded-xl cursor-pointer hover:bg-violet-800 hover:text-white transition duration-300 lg:flex md:flex`} style={{ whiteSpace: 'nowrap' }}>
                    <div className=""><i className="ri-send-plane-fill"></i></div>
                  <Link to={"/contact"} >Let's Talk</Link>                
                </h1>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
