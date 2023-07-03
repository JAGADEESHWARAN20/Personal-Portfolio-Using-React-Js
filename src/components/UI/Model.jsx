import React from 'react'
import portfolios from '../../assets/data/portfolioData'

const Model = ({activeID,setShowModel}) => {
  const portfolio = portfolios.find(portfolio=>portfolio.id === activeID);
  return (
    <div className='w-full lg:w-[100%] small-devices:w-[100%] h-full backdrop-blur-sm fixed top-0 left-0 z-10 bg-slate-900 bg-opacity-40 transition-all duration-200'>

      <div className="max-w-[600px] lg:h-[660px] small-devices:h-[590px] lg:top-[55%] small-devices:w-11/12 absolute top-1/2 left-1/2 z-20 bg-white dark:bg-gradient-to-r from-slate-500 to-violet-500  rounded-[9px] transform -translate-x-1/2 small-devices:-translate-y-[42%] lg:-translate-y-1/2 p-5 transition-opacity duration-400">
        <div>
          <figure>
            <img className='rounded-[8px] lg:w-[560px] small-devices:w-full' src={portfolio.imgUrl} alt="" /> 
          </figure>
        </div>
        <div>
          <h2 className='small-devices:text-[18px] lg:text-[20px] text-headingColor-light font-[700] my-5 small-devices:my-2'>
            {portfolio.title}
          </h2>
          <p className='small-devices:text-[15px] lg:text-[15px] leading-6 text-smallTextColor-light dark:text-white'>
            {portfolio.description}
          </p>
          <div className='mt-5 small-devices:mt-3 pb-3 flex items-center gap-2 flex-wrap'>
            <h4 className='text-headingColor-light lg:text-[18px] small-devices:text-[17px] font-[900]'>
              Technologies:
            </h4>
            {
              portfolio.technologies.map((item,index)=>(
                <span key={index} className='text-smallColor-light small-devices:text-[15px] border border-solid border-smallTextColor-light py-1 hover:border-transparent cursor-pointer hover:bg-black hover:text-white px-3 rounded-[8px] mr-2 leading-0'>
                  {item}
                </span>

              ))}
          </div>
          
          <a href={portfolio.siteUrl}>
            <button className="bg-violet-500 dark:bg-white dark:hover:bg-slate-900 dark:hover:text-white dark:text-slate-700 text-white py-2 px-4 my-3 mt-2 bottom-4 rounded-[8px] font-[500] hover:bg-violet-900 ease-in duration-300" style={{whitespace:'nowrap'}}>{portfolio.siteButton}</button>
          </a>
        </div>
        <button onClick={()=>setShowModel(false)} className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] font-[500] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer dark:text-black">&times;</button>
      </div>

    </div>
  )
}

export default Model
