import React, { useEffect,useRef,useState} from 'react';
import heroImg from "../../assets/images/profile01.png.png";
import CountUp from "react-countup";
import { useSpeechSynthesis } from 'react-speech-kit'
import './Ui.css';
import portfolio from '../../assets/data/portfolioData.js'
import music from '../../assets/data/drop_it.mp3'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Hero = () => {
  const divRef = useRef(null);
  const imgRef = useRef(null);

  const { speak } = useSpeechSynthesis();
  const text =
    "HI I'm Jagadeesh! It's great to meet you. As a passionate web developer, the fantastic work of myself will Display in This portfolio and continue to inspire others with my skills and enthusiasm for new technologies!";


  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleStart = () => {
    const audio = audioRef.current;
    if (!isPlaying) {
      audio.volume = 0.5; // Adjust the volume as needed
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };
  
  

  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);
    
  const [playedOnce, setPlayedOnce] = useState(false);
  const handleReload = () => {
    const currentUrl = window.location.href;
    const isPortfolio = currentUrl.includes('https://jagadeeshwaran-dev.vercel.app');
    const isRedirect = currentUrl !== portfolio.siteUrl;
    if (!playedOnce && isPortfolio && isRedirect) {
      speak({ text });
      setPlayedOnce(true);
      
    }
    if(portfolio.siteUrl !== isPortfolio)
      setPlayedOnce(false);
  }; 
  const [isFollowing, setIsFollowing] = useState(false);
  const followbutton = document.getElementById('mySpan');
  const toggleFollow = () => {
    followbutton.classNameList.toggle('Following')
    setIsFollowing((prevFollowing) => !prevFollowing);
  };
  useEffect(() => {
    window.addEventListener('beforeunload',handleReload);
    return () =>{
        window.removeEventListener('beforeunload',handleReload);
    }
  }, []);
  const [scrollOpacity, setScrollOpacity] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0) {
        setScrollOpacity(0);
      } else {
        setScrollOpacity(1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
   

    <div className="">
    <audio ref={audioRef} src={music} onLoad={handleStart} />
    <section className={`pt-0 transition-all bg-white duration-300 dark:bg-slate-900 pb-[80px]`} id='about'>
      <div className='container pt-14'>
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          <div className="w-full md:basis-1/2">
            <h5
              data-aos="fade-right"
              data-aos-duration="1000"
              className='text-headingColor-light dark:text-white font-semibold text-[16px]'
            >
              Hello, Welcome
            </h5>
            <h1 className={`text-headingColor-light dark:text-white font-extrabold text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5 pr-10`} data-aos='fade-up' data-aos-duration='1000'>
                <span className='lg:text-[90px] small-devices:text-[40px] small-devices:gap-[2px] font-[100] flex flex-col lg:gap-[28px]'><span className='px-4 small-devices:px-2'>I'm</span> 
                <span>Jagadeeshwaran</span></span>
                <br />
                <span className="text-[32px]">
                  <span className="infinite-gradient font-['poppins'] font-[50]">Software Developer</span>
                </span>
              </h1>

            <div
              data-aos='fade-right'
              data-aos-duration='1800'
              data-aos-delay='200'
              className="flex items-center gap-6 mt-7"
            >
              <Link to={"/contact"}>
                <button className='bg-yellow-600 text-white hover:text-white font-semibold flex items-center gap-2 hover:bg-orange-700 dark:hover:bg-white dark:bg-transparent dark:hover:text-violet-800 ease-in duration-300 px-4 py-2 rounded-md'>
                  <i className='ri-mail-line'></i><a href="mailto:jagadeeshwaransp5@gmail.com">Hire me</a> 
                </button>
              </Link>
              <Link to={"/projects"} className='dark:text-white dark:bg-violet-600 dark:hover:bg-white dark:hover:text-violet-800 hover:text-violet-600 rounded-md duration-300 dark:hover:border-none transition-all px-4 py-2'>
                <span className='border-smallTextColor-light dark:hover:border-white'>See portfolio</span>
              </Link>
            </div>
            <p   data-aos='fade-left'
              data-aos-duration='1500'
              data-aos-delay='500' className="mt-14 flex gap-2 text-headingColor text-justify font-[500] text-[15px] dark:text-white leading-7 sm:pl-14 sm:pr-10">
              <span> <i className='ri-apps-line'></i> </span>
              HI I'm Jagadeesh! It's great to meet you.
              As a passionate web developer,
              the fantastic work of myself will Display in This portfolio and continue to inspire others with my skills and enthusiasm for new technologies!
            </p>


            <div className="flex items-center gap-9 small-devices:gap-5 mt-14">
              <span
                id="mySpan"
                className={`text-smallTextColor-light font-[600]  px-4 py-2 hover:bg-yellow-500 dark:hover:bg-yellow-500 hover:text-white rounded-md transition-all duration-150 cursor-pointer dark:text-white small-devices:text-[13px] ${
                  isFollowing ? 'Following hover:bg-green-600 text-white dark:hover:bg-green-400' : 'hover:bg-sky-600'
                }`}
                style={{ whiteSpace: 'nowrap' }}
                onClick={toggleFollow}
                >
                {isFollowing ? <>&#10003; Following</> : '+ Follow me'}
              </span>
            <a href="https://instagram.com/jagadeesh.life?igshid=MzNlNGNkZWQ4Mg==">
              <span className="text-smallTextColor-light font-[300] hover:text-violet-600 rounded-md transition-all duration-150 cursor-pointer dark:text-white dark:hover:text-violet-600">
              <i className="ri-instagram-line"></i>
              </span>
            </a>
              <a href="https://www.facebook.com/profile.php?id=100035290433724">
              <span className="text-smallTextColor-light font-[300] hover:text-violet-600 rounded-md transition-all duration-150 cursor-pointer dark:text-white dark:hover:text-violet-600">
              <i className="ri-facebook-line"></i>
              </span>
              </a>
              <a href="https://github.com/JAGADEESHWARAN20">
              <span className="text-smallTextColor-light font-[300] hover:text-violet-600 rounded-md transition-all duration-150 cursor-pointer dark:text-white dark:hover:text-violet-600">
              <i className="ri-github-fill"></i>
              </span>
              </a>
              <div className="tooltip">
                <span className="tooltiptext dark:bg-white bg-black dark:text-black text-white">Only Once</span>
                <div className="transition-opacity duration-300">
                  <div
                    id="hideMeAfter5Seconds"
                    className={`transition-opacity duration-300 ease-in`}
                    onClick={handleStart}
                    tabIndex={0}
                  >
                    {isPlaying ? '' : ''}
                    <ul className="wave-form" id="waveForm">
                      <div className="flex">
                        {[1, 2, 3, 4].map((index) => (
                          <li className={`dark:bg-white`} key={index}></li>
                        ))}
                      </div>
                    </ul> 
                  </div> 
                </div>
              </div> 
            </div> 
          </div>
          <div className="basis-1/3 mt-10 sm:mt-0">
            <figure className='flex items-center justify-center'>
            <div
              data-aos="fade-right"
              data-aos-duration="1500"
              data-aos-delay="500"
              className="w-auto h-auto border border-1 border-black bg-slate-300 bg-opacity-25 dark:border-white backdrop-blur-md dark:bg-violet-600 rounded-[12px] transition-all duration-300"
              style={{ overflow: 'hidden' }}
              ref={divRef}
              onMouseEnter={(e) => {
                e.currentTarget.firstChild.style.transform = 'scale(1.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.firstChild.style.transform = 'scale(1)';
              }}
            >
              <img
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-delay="700"
                width={400}
                src={heroImg}
                className="rounded-[12px]"
                alt=""
                style={{ transition: 'transform 0.5s' }}
                ref={imgRef}
              />
              </div>
            </figure>
          </div>
          <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
            <div className="mb-10">
              <h2 className='text-headingColor font-[700] text-[32px] dark:text-white'>
                <CountUp start={2019} end={2023} duration={8}/>
              </h2>
              <h4 className='text-headingColor font-[600] text-[18px] dark:text-white'>
                Passed Out Year
              </h4>
            </div>
            <div className="mb-10">
              <h2 className='text-headingColor font-[700] text-[32px] dark:text-white'>
                <CountUp start={0} end={5} duration={8} suffix='+'/>
              </h2>
              <h4 className='text-headingColor font-[600] text-[18px] dark:text-white'>
                Projects Completed
              </h4>
            </div>
          </div>
        </div>
       
        </div>
    </section>
    </div>
  );
}

export default Hero;


