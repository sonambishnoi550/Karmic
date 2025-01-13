import React from 'react'
import CustomHeading from '../common/CustomHeading';
import CustomButton from '../common/CustomButton'
import { PROJECTS_DATA } from '../utils/helper'

const Projects = () => {
    return (
        <div className='bg-cover bg-center bg-no-repeat max-lg:bg-white md:bg-white-img xl:h-[870px] pt-12 xl:pt-[80px] lg:pt-[98px] xl:pb-[120px] md:pb-16 pb-10 lg:pb-[7rem]' id='projects'>
            <div className='container relative'>
                <img className='pointer-events-none -mt-1 mx-auto md:max-w-[344px] md:mr-[9rem] mr-[2rem] max-w-[190px] lg:mr-[16.7rem] xl:mr-[21.7rem] mb-1' src="./assets/images/svg/project-line1.svg" alt="line"/>
                <CustomHeading
                    text={'projects'}
                    classStyle={' !text-black'}
                />
                <img className='pointer-events-none -mt-1 mx-auto md:max-w-[344px] max-w-[190px] lg:ml-[21.7rem] mb-1' src="./assets/images/svg/project-line1.svg" alt="line"/>
                <p className='text-base max-w-[532px] mx-auto text-center leading-6 font-normal max-lg:pt-4'>Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.</p>

                <div className='flex flex-wrap pt-[22px] max-md:pt-0 justify-center'>
                    {PROJECTS_DATA.map((obj, i) => (
                        <div key={i} className={`w-3/12 flex max-xl:w-4/12 max-md:w-6/12 max-sm:w-full px-2 pt-6`} >
                            <div className={` hover:sm:scale-125 hover:scale-110 hover:!z-20 overflow-hidden group transition-all relative duration-300 cursor-pointer flex w-full rounded-lg justify-center
                                    `} >
                                <img className=" w-full rounded-lg pointer-events-none"
                                    src={obj.image} alt='projects-image' />
                                <div className='absolute min-h-[47px] flex justify-center items-center shadow-shadow-2xl bg-dark-gray transition-all duration-300 w-full group-hover:bottom-0 bottom-[-50%]'>
                                    <p className='text-white text-base font-sunflower leading-5 sm:text-xl sm:leading-custom-xl font-bold'>
                                        {obj.title} </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex justify-center pt-14 max-lg:pt-10 max-md:pt-8'>
                    <CustomButton classStyle={'px-8 py-[11px] border max-sm:mb-4 border-black flex justify-center mx-auto items-center text-black font-sunflower font-medium text-base rounded-full transition-all duration-700 ease-in-out hover:bg-black hover:text-white'} text={'View All'} />
                </div>
            </div>
        </div>
    )
}

export default Projects