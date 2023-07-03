import React,{useState,useEffect} from 'react'
import data from "../../assets/data/portfolioData";
import Model from './Model';
import './portfolio.css';

const Portfolio = () => {
  const [nextItems,setNextItems] = useState(6);
  const [portfolios,setPortfolios] = useState(data);
  const [selectTab,setSelectedTab] = useState('all');
  const [activeID,setActiveID] = useState(null);
  const [showModel,setShowModel] = useState(false);

  const loadMoreHandler = () =>{
    setNextItems(prev=>prev+3);
  };
  const showModelHandler = (id) =>{
    setShowModel(true);
    setActiveID(id);
  }
  useEffect(()=>{
    if(selectTab === 'all'){
      setPortfolios(data);
    }
    if(selectTab === 'web-design'){
      const filteredData = data.filter(item=> item.category === 'web-design');
      setPortfolios(filteredData);
    }
    if(selectTab === 'Cryptography'){
      const filteredData = data.filter(item=> item.category === 'Cryptography');
      setPortfolios(filteredData);
    }
    if(selectTab === 'Python'){
      const filteredData = data.filter(item=> item.category === 'Python');
      setPortfolios(filteredData);
    }
  },[selectTab])

  return (
    <>
      <section id='project' className='dark:bg-slate-900 dark:text-white overflow-hidden lg:pt-64 lg:pb-64'>
          <div className="container ">
                <div className="flex items-center justify-between flex-wrap">
                      <div className="mb-7 sm:mb-0 w-full flex items-center justify-center">
                        <h3 className="text-headingColor-light dark:text-white text-[3rem] font-[100]">
                          My recent projects
                        </h3>
                      </div>
                      <div className="flex mt-3 small-devices:items-center small-devices:justify-center small-devices:w-full small-devices:overflow-x-auto">
                        <div className="flex space-x-3 min-w-[100%]">
                          <button onClick={() => setSelectedTab('all')} className="text-smallColor-light border border-solid border-smallTextColor-light py-2 px-4 rounded-[8px]">
                            All
                          </button>
                          <button onClick={() => setSelectedTab('web-design')} className="text-smallColor-light border border-solid border-smallTextColor-light py-2 px-4 rounded-[8px]" style={{ whiteSpace: 'nowrap' }}>
                            MERN Stack
                          </button>
                          <button onClick={() => setSelectedTab('Cryptography')} className="text-smallColor-light border border-solid border-smallTextColor-light py-2 px-4 rounded-[8px]" style={{ whiteSpace: 'nowrap' }}>
                            Cryptography
                          </button>
                          <button onClick={() => setSelectedTab('Python')} className="text-smallColor-light border border-solid border-smallTextColor-light py-2 px-4 rounded-[8px]" style={{ whiteSpace: 'nowrap' }}>
                            Python
                          </button>
                        </div>
                      </div>
                    </div>

            <div className="flex small-devices:justify-center items-center gap-4 flex-wrap mt-12 transition-all">
              {portfolios.slice(0,nextItems)?.map((portfolio,index)=>(
                <div
                  key={index} data-aos='fade-zoom-in' data-aos-duration='1200' data-aos-delay='50' className="group max-w-full sm:w-[48.8%] md:[31.8%] lg:w-[32.2%] relative z-[1] transition-all duration-150 ease-in">
                  <figure>
                    <img src={portfolio.imgUrl} alt="" className="rounded-[8px]" />
                    </figure>
                    <div className="w-full h-full backdrop-blur-md transition-all duration-150  bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                     
                      <div className="w-full h-full flex items-center justify-center">
                        <button onClick={()=>showModelHandler(portfolio.id)} className='text-white bg-headingColor-light hover:bg-smallTextColor-light py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                          See Details
                        </button>
                        </div>
                    </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
                { nextItems < portfolios.length && data.length > 6 && (
                    <button onClick={loadMoreHandler} className='text-white bg-violet-600 hover:bg-smallTextColor-light dark:bg-white dark:text-violet-600 dark:hover:bg-violet-500 dark:hover:text-slate-800 py-2 px-4 rounded-[8px] font-[500] ease-in duration-200'>
                    Load More
                  </button>
                  )}           
            </div>
          </div>
            {showModel && <Model activeID={activeID} setShowModel={setShowModel} />}
      </section>
    </>
  )
}

export default Portfolio
