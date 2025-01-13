import React from 'react'
import CustomHeading from '../common/CustomHeading'
import { KARMIC_IMAGES } from '../utils/helper';
const Karmic = () => {
  return (
      <div className=' xl:pb-[136px] pb-6 md:pb-20 max-lg:pt-14 max-sm:pt-10'>
          <div className="container xl:pt-16 pt-4">
        <img className='pointer-events-none -mt-1 mx-auto md:max-w-[344px] md:mr-[10rem] mr-[2rem] max-w-[190px] lg:mr-[21.7rem] mb-1' src="./assets/images/svg/karmic.svg" alt="line" />
              <CustomHeading text={'Who is karmic?'} />
        <img className='pointer-events-none mx-auto md:max-w-[344px] max-w-[190px] -mt-2 lg:ml-[21.7rem]' src="./assets/images/svg/karmic.svg" alt="line" />
        <p className='text-base max-w-[532px] mx-auto text-center md:leading-custom-2xl leading-custom-xl pb-[2px] font-normal text-white pt-2'>We are builders, innovaters, and believers.</p>
        <p className='text-base max-w-[532px] mx-auto text-center md:leading-custom-2xl leading-custom-xl font-normal text-white'>We believe in a future that rests in your hands, and yours alone. The future is decentralized, The future is web3.</p>
              <div className="flex max-xl:flex-wrap md:pt-10 pt-4 max-xl:justify-center">
          {KARMIC_IMAGES.map((image, index) => (
            <img
              key={index}
              className='max-w-[369px] max-xl:max-w-[300px] max-lg:max-w-[329px] pointer-events-none'
              src={image.src}
              alt={image.alt}
            />
          ))}
              </div>
          </div>
    </div>
  )
}

export default Karmic