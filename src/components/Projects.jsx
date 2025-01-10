import React, { useState, useEffect } from 'react';
import CustomHeading from '../common/CustomHeading';
const Projects = () => {
  return (
      <div style={{ backgroundImage: `url(./assets/images/png/project-bg.png)` }} className='bg-cover bg-center bg-no-repea xl:h-[902px] pt-[99px] min-h-screen pb-[160px]' >
          <div className="container">
              <img className=' mx-auto max-w-[344px] lg:mr-[21.7rem] mb-1' src="./assets/images/svg/project-line1.svg" alt="line" />
              <CustomHeading text={'Projects'}
                  classStyle={'!text-black'}
              />
              <img className=' mx-auto max-w-[344px] -mt-2 lg:ml-[21.7rem]' src="./assets/images/svg/project-line1.svg" alt="line" />
              <p className='text-base max-w-[532px] mx-auto text-center leading-custom-xl font-normal'>Id nam massa sit ut purus tortor est ultrices nunc. Ipsum, nibh egestas vehicula tellus. Molestie adipiscing diam nibh lectus. Magna id nisl quis vestibulum rhoncus.</p>
              <div className="flex-col pt-[53px]">
                  <div className='flex max-xl:flex-wrap max-xl:justify-center gap-4 mb-4'>
                      <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="./assets/images/png/project-one-image.png" alt="image-one" />
                      <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="./assets/images/png/project-two-image.png" alt="image-two" />
                      <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="./assets/images/png/project-three-image.png" alt="image-three" />
                      <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="./assets/images/png/project-four-image.png" alt="image-four" />
                  </div>
                  <div className='flex max-xl:flex-wrap max-xl:justify-center gap-4'>
                      <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="./assets/images/png/project-five-image.png" alt="image-one" />
                      <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="./assets/images/png/project-six-image.png" alt="image-two" />
                      <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="./assets/images/png/project-seven-image.png" alt="image-three" />
                      <img className='max-w-[273px] max-xl:max-w-[212px] max-lg:max-w-[273px] hover:scale-110 transition-all duration-500' src="./assets/images/png/project-eight-image.png" alt="image-four" />
                  </div>
                  <button className="mt-14 px-8 py-3 border border-black hover:text-white flex justify-center mx-auto items-center text-black font-sunflower hover:bg-black font-medium text-base leading-5 rounded-full transition-all duration-500">
                      View All
                  </button>         
          </div>
          </div>
    </div>
  )
}

export default Projects