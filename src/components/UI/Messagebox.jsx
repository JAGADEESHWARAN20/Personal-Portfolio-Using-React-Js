import React, { useState, useEffect } from 'react';

const Messagebox = ({ messageSent, isSubmitted, onClose }) => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isSubmitted) {
      setMessage('Successfully Submitted');
    } else {
      setMessage('Failed to submit your message');
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const handleOKClick = () => {
    onClose();
  };

  return (
    <>
      {isLoading ? (
        <div className='w-full h-screen bg-slate-800 bg-opacity-10 backdrop-blur-md absolute flex flex-col justify-center items-center'>
          <div className='bg-white w-[200px] h-[100px] flex flex-col items-center justify-center rounded-md'>
            <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900'></div>
            <p className='mt-2'>Loading...</p>
          </div>
        </div>

      ) : (
        <div className='w-full h-full bg-slate-800 bg-opacity-10 backdrop-blur-md absolute flex flex-col justify-center items-center'>
          <div className='bg-white w-[200px] h-[100px] flex flex-col items-center justify-center rounded-md'>
            <p>{message}</p>
            <button onClick={handleOKClick} className='bg-yellow-500 hover:bg-orange-500 transition-all duration-200 text-black p-[10px] rounded-[5px] mt-3'>
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Messagebox;
