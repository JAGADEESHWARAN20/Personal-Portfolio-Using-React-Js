import React from 'react'
import frontendImg from '../../assets/images/front-end.png';
import backendImg from '../../assets/images/backend.png';
import uiuxImg from '../../assets/images/design.png';
import '../../components/UI/Experience.css';

const Experience = () => {
  return (
    <section id='experience' className='lg:pt-24 transition-all duration-300 dark:bg-slate-900 overflow-hidden'>
      
    <div className='container lg:pt-5'> 
        <div className="text-center">
            <h2 className='text-headingColor-light dark:text-orange-500 font-[800] text-[2.4rem] mb-5'>Work & study</h2>
            <p data-aos='fade-up' data-aos-duration='1000' className="lg:max-w-[600px] lg:mx-auto text-headingColor-light dark:text-white font-medium text-16px leading-7">
           I gained practical expertise in web development, specializing in advanced frameworks such as React and Css Framework such as Daisy UI, Tailwind css. Collaborating closely with cross-functional teams, I sharpened my problem-solving skills and consistently delivered high-quality projects within demanding timelines.
          </p>
        </div>
        <div className="flex flex-col justify-center sm:py-12">
          <div className="w-full py-3 sm:max-w-xl sm:mx-auto sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold"> 
                 <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2">
                 </div>
                 <div className="mt-6 sm:mt-0 sm:mb-12 ">
                  <div data-aos="fade-down"
                            data-aos-duration="1200" className="flex items-center flex-col sm:flex-row ">
                    <div className="flex justify-start w-full mx-auto items-center ">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="">
                      <div
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor-light cursor-pointer dark:hover:bg-purple-700 dark:hover:text-white transition ease-in-out delay-150 duration-300 "
                        >
                          <h3 className="text-primaryColor-light font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl small-devices:pt-5 ">
                            Currently a Trainee at Pentagon Space
                          </h3>
                          <p className="text-[15px] text-smallTextColor-light group-hover:text-white group-hover:font-[500] leading-7">
                            Enrolled in a Java Full Stack course. Learning core Java, Hibernate, Spring Boot, and other related technologies.
                          </p>
                        </div>
                        </div>


                      </div>
                    </div>
                  <div className="rounded-full bg-primaryColor-light border-white dark:border-white  border-2 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img src={frontendImg} alt="" />
                      </figure>
                  </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-0 sm:mb-12 ">
                  <div data-aos="fade-down"
                            data-aos-duration="1200" className="flex items-center flex-col sm:flex-row ">
                    <div className="flex justify-end w-full mx-auto items-center ">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="">
                      <div
                          data-aos="fade-left"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor-light cursor-pointer dark:hover:bg-purple-600 dark:hover:text-white transition ease-in-out delay-150 duration-300 "
                        >
                          <h3 className="text-primaryColor-light font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl small-devices:pt-5">
                             Internship at Exposys Data Labs for Cybersecurity (Cryptography)
                          </h3>
                          <p className="text-[15px] text-smallTextColor-light group-hover:text-white group-hover:font-[500] leading-7">
                              Worked on a project based on image encryption
                          </p>
                        </div>
                        </div>


                      </div>
                    </div>
                  <div className="rounded-full bg-primaryColor-light border-white dark:border-white  border-2 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img src={backendImg} alt="" />
                      </figure>
                  </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-0 sm:mb-12 ">
                  <div data-aos="fade-down"
                            data-aos-duration="1200" className="flex items-center flex-col sm:flex-row ">
                    <div className="flex justify-start w-full mx-auto items-center ">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div className="">
                      <div
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor-light cursor-pointer dark:hover:bg-purple-500 dark:hover:text-white transition ease-in-out delay-150 duration-300 "
                        >
                          <h3 className="text-primaryColor-light font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl small-devices:pt-5">
                           Internship at Internshala for Graphic Design
                          </h3>
                          <p className="text-[15px] text-smallTextColor-light group-hover:text-white group-hover:font-[500] leading-7">
                          Gained a comprehensive understanding of graphic design concepts. Completed various projects related to the internship.
                          </p>
                        </div>
                        </div>


                      </div>
                    </div>
                  <div className="rounded-full bg-primaryColor-light border-white dark:border-white  border-2 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img src={uiuxImg} alt="" />
                      </figure>
                  </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-0 sm:mb-12 ">
                  <div data-aos="fade-down"
                            data-aos-duration="1200" className="flex items-center flex-col sm:flex-row ">
                    <div className="flex justify-end w-full mx-auto items-center ">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div className="">
                      <div
                          data-aos="fade-left"
                          data-aos-duration="1200"
                          className="bg-white p-4 rounded shadow group hover:bg-primaryColor-light cursor-pointer dark:hover:bg-purple-600 dark:hover:text-white transition ease-in-out delay-150 duration-300 "
                        >
                          <h3 className="text-primaryColor-light font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl small-devices:pt-5">
                           Study Experience
                          </h3>
                          <p className="text-[15px] text-smallTextColor-light group-hover:text-white text-left group-hover:font-[500] leading-7">
                           During my college graduation, I worked on a project based on a Python GUI system application. Developed a student management system with resume generator using Python GUI. Integrated database connectivity and authentication features. Ensured the project is ATS (Applicant Tracking System) friendly.
                          </p>
                        </div>
                        </div>


                      </div>
                    </div>
                  <div className="rounded-full bg-primaryColor-light border-white dark:border-white  border-2 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img src={backendImg} alt="" />
                      </figure>
                  </div>
                  </div>
                </div>
                <div className="mt-6 sm:mt-0 sm:mb-12 ">
                  <div  data-aos="fade-down"
                            data-aos-duration="1200" className="flex items-center flex-col sm:flex-row ">
                    <div className="flex justify-start w-full mx-auto items-center ">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                      <div className="max-w-md mx-auto ">
                          <div
                            data-aos="fade-right"
                            data-aos-duration="1200"
                            className="bg-white p-4 rounded shadow group hover:bg-primaryColor-light cursor-pointer dark:hover:bg-purple-400  transition ease-in-out delay-150 duration-300"
                          >
                            <h3 className="text-primaryColor-light font-semibold mb-3 group-hover:text-white group-hover:font-medium text-xl small-devices:pt-5">
                              Additionally, MERN <br/> Stack  Developer Projects
                            </h3>
                            <p className="text-sm text-smallTextColor-light group-hover:text-white group-hover:font-medium leading-7">
                              <b>Chat Application</b> using MERN Stack
                            </p>
                            <p className="text-sm text-smallTextColor-light group-hover:text-white group-hover:font-medium leading-7">
                              <b>Movie App</b> using MERN Stack
                            </p>
                            <p className="text-sm text-smallTextColor-light group-hover:text-white group-hover:font-medium leading-7">
                              <b>Animated portfolio</b> using Three.js and Tailwind CSS
                            </p>
                          </div>
                        </div>


                      </div>
                    </div>
                  <div className="rounded-full bg-primaryColor-light border-white dark:border-white  border-2 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                      <figure>
                        <img src={uiuxImg} alt="" />
                      </figure>
                  </div>
                  </div>
                  <div data-aos="fade-up" className="rounded-full p-3 text-white dark:bg-white dark:text-primaryColor-light font-[2px] bg-primaryColor-light border-white w-3 h-3 absolute inset-x-0 mx-auto bottom-4 sm:bottom-0 flex items-center justify-center small-devices:hidden lg:flex ">
                      O
                    </div>


                </div>
                

                
              </div>
          </div>
        </div>


    </div>
    </section>
  )
}

export default Experience