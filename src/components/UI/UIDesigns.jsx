import React from 'react';
import { useState } from 'react';
import logo from '../../assets/images/dribbble-logo.png';
import data from '../../assets/data/UiDesign.js';

const UIDesigns = () => {
  
  const [uiDesigns, setUiDesigns] = useState(data);

  return (
    <section className='bg-white dark:bg-slate-900 dark:text-white lg:h-auto small-devices:h-auto '>
      <center>
        <h1 className='lg:text-[40px] small-devices:text-[20px] '>UI Designs</h1>
        <div className="w-[200px] small-devices:mt-4 lg:mt-2 h-[3px] lg:mb-[92px] bg-black transition-colors dark:bg-violet-800"></div>
        <div className='grid lg:pb-[92px] lg:grid-cols-3 lg:grid-rows-auto mx-10 my-10 gap-y-3 gap-x-3 small-devices:grid-cols-1 small-devices:grid-rows-auto transition-all duration-300 '>
          {uiDesigns.map((design, index) => (
            <div
              key={index}
              className='py-5 px-5  bg-transparent  cursor-pointer rounded-[10px] transition-all duration-300  text-black'
            >
              <img
                src={design.imageUrl}
                className='border-1 hover:scale-105 w-[800px]  transition-all duration-150 dark:border-white border-black border rounded-[10px]'
                alt=''
              />
            </div>
          ))}
        </div>
        <a href="https://dribbble.com/JAGADEESH_20">
          <div className="bg-pink-600 flex items-center justify-center w-12 hover:bg-pink-500 cursor-pointer h-12 rounded-md">
            <img src={logo} className='absolute w-[24px] h-[24px]' alt='' />
          </div>
        </a>
      </center>
    </section>
  );
};

export default UIDesigns;
