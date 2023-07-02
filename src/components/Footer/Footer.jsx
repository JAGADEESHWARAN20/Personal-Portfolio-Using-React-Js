import React from 'react'

const Footer = () => {
  return (

    <section className='lg:w-full mobile2:w-auto md:w-auto small-devices:w-auto  dark:bg-slate-900 small-devices:flex small-devices:flex-col bg-transparent items-center flex flex-row justify-center h-[120px] '>
      <div className='lg:w-full   small-devices:flex-col  list-none flex lg:flex-row gap-5 justify-evenly'>
         <div className='flex flex-row gap-3 items-center'>
         <h1 class='text-[12px] text-black dark:text-white font-[poppins]'>Developed by <a href="https://github.com/JAGADEESHWARAN20">@jagadeesh</a> </h1>
         <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
         </div>
        </div>
    </section>
  )
}

export default Footer