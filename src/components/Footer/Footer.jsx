import React from 'react';

const Footer = () => {
  const urllinks = ["","","","","https://merchant.razorpay.com/policy/Mm5bhtanFlmeNw/privacy"]
  return (
    <section className='lg:w-full mobile2:w-auto md:w-auto small-devices:w-auto bg-white dark:bg-slate-900 small-devices:flex small-devices:flex-col bg-transparent items-center flex flex-row justify-center h-[10px] '>
      <div className='lg:w-full small-devices:flex-col list-none flex lg:flex-row gap-5 justify-evenly'>
        <div className='flex flex-row gap-3 items-center'>
          <h1 className='text-[12px] text-black dark:text-white font-[poppins]'>
            Developed by{' '}
            <a href='https://github.com/JAGADEESHWARAN20' className='text-green-500 hover:underline'>
              @jagadeesh
            </a>
          </h1>
          <span className='relative flex h-2 w-2'>
            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
            <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
          </span>
        </div>
      </div>

      {/* Add your list of items in a row here */}
      <ul className='lg:w-full small-devices:flex-col list-none flex lg:flex-row gap-5 justify-evenly mt-5'>
        <li>
          <a href={urllinks[0]}>Terms and Conditions</a>
        </li>
        <li>
          <a href={urllinks[1]}>Cancellation and Refund</a>
        </li>
        <li>
          <a href={urllinks[2]}>Shipping and Delivery</a>
        </li>
        <li>
          <a href={urllinks[3]}>Contact Us</a>
        </li>
        <li>
          <a href={urllinks[4]}>Privacy Policy</a>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
