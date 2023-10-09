import React, { useState } from 'react';
import './Contact.css';
import support1 from '../../assets/images/support1.png';
import support2 from '../../assets/images/Patreon-Logo-Icon.png';
import emailjs from 'emailjs-com';
import Messagebox from './Messagebox';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showMessageBox, setShowMessageBox] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = 'service_Portfolio23';
    const templateId = 'template_357vgae';
    const userId = '22WH5cXbJiCnoiZKc'; // Replace with your emailjs user ID

    emailjs
      .sendForm(serviceId, templateId, e.target, userId)
      .then((result) => {
        setMessageSent(true);
        setIsSubmitted(true);
        setShowMessageBox(true);
        console.log('Email sent successfully');
      })
      .catch((error) => {
        setMessageSent(false);
        setIsSubmitted(true);
        setShowMessageBox(true);
        console.log('Error sending email:', error);
      });
      
    e.target.reset();
  };
  
  const handleMessageBoxClose = () => {
    setShowMessageBox(false);
  };
  
  
  
  return (
    <>
      <section id="contact" className="dark:bg-slate-900 pb-[80px] small-devices:flex small-devices:flex-col small-devices:justify-center">
        <center>
          <h1 className='text-[4rem] dark:text-white font-[100] h-[32px] lg:pb-24 mt-8 small-devices:-mb-[42px]'>Contact</h1>
        </center>
        <div className="container-fluid">
    {showMessageBox && (
       <Messagebox
         messageSent={messageSent}
         isSubmitted={isSubmitted}
         onClose={handleMessageBoxClose}
       />
     )}
          <div className='lg:w-full flex gap-5 justify-around flex-row flex-wrap small-devices:gap-[72px]'>
            <div className='lg:h-[383px] small-devices:h-[300px] w-[500px]  items-center justify-center flex'>
              <div className="flex flex-col justify-between items-center h-[120px]">
                <h1 className='pb-[12px] font-[300] text-[28px] pt-[22px] dark:text-white'>Connect</h1>
                <button id='getin' className="px-[20px] py-[10px]  transition-all duration-300 dark:hover:bg-white dark:hover:border-orange-400 text-yellow-500 dark:hover:text-neutral-900 dark:bg-white font-[600] rounded-[5px] tracking-[2px] cursor-pointer small-devices:mb-[35px]"><a href="mailto:jagadeeshwaransp5@gmail.com">Get in touch</a></button>
                <div className='cursor-pointer transition-all duration-200 small-devices:mt-[40px]' id='supportheading'><h1 className='text-[22px] font-[300] flex flex-col justify-center items-center text-black dark:text-white small-devices:-mt-[32px]'>Support<div className='w-[10px] dark:bg-yellow-600 hover:w-[90px] h-[2px] bg-black transition-all duration-200'></div></h1></div>
                <div className='flex flex-row gap-4 pt-5'>
                  <div id='buymecoffee' className='w-auto flex justify-center items-center cursor-pointer bg-yellow-400 transition-all duration-300 p-[20px] rounded-xl dark:bg-white'>
                    <a href="https://donate.stripe.com/dR62a0bDh7nT41i4gh"><img src={support1} alt="" className='small-devices:w-[22px]' /></a>
                  </div>
                  <div id='patreon' className='w-auto flex justify-center items-center cursor-pointer bg-red-200 transition-all duration-300 p-[20px] rounded-xl dark:bg-white'>
                    <a href="https://patreon.com/jagadeesh20"><img src={support2} alt="" className='small-devices:w-[22px]' /></a>
                  </div>
                </div>
              </div>
            </div>
            <span className='small-devices:mt-[50px] dark:bg-slate-900  small-devices:ml-[10px] small-devices:mr-[10px]  pt-[22px]'>
              <div className='small-devices:py-[20px] dark:bg-slate-100   bg-slate-200 transition-colors duration-500 rounded-[12px]'>
                <form onSubmit={sendEmail}>
                  <div className='flex flex-col small-devices:gap-2 lg:gap-6 md:ml-4 small-devices:ml-2 small-devices:mr-2 items-center'>
                    <div className="text-black  dark:text-black text-[32px] font-[300] pb-3">
                      <h1 className=''>Message</h1>
                    </div>
                    <div className="small-devices:mx-[6px] lg:mx-5"><input required type="text" name='email' placeholder='enter email' className='dark:border-white dark:border small-devices:w-[300px] pl-[23px] tracking-[1px] bg-slate-900  py-3 lg:w-[800px] rounded-lg text-green-300' /></div>
                    <div className="small-devices:mx-[6px] lg:mx-5"><textarea required type="text" name='message' placeholder='enter message' className='dark:border-white dark:border small-devices:w-[300px] lg:h-[200px] bg-slate-900  lg:w-[800px] pb-[25px] pr-[25px] pl-[25px] pt-[10px] rounded-lg text-white' /></div>
                    <button type='submit' className='bg-yellow-500 hover:bg-orange-500 transition-all duration-200 text-black p-[10px] w-[225px] rounded-[35px] items-center'>Submit</button>
                  </div>
                </form>
              </div>
            </span>
          </div>
        </div>

      </section>
    </>
  );
};

export default Contact;


