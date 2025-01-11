import React from 'react'
import CustomHeading from '../common/CustomHeading'
const Karmic = () => {
  return (
      <div className=' lg:pb-[136px] pb-20'>
          <div className="container lg:pt-16 pt-4">
        <img className='-mt-1 mx-auto md:max-w-[344px] md:mr-[10rem] mr-[2rem] max-w-[190px] lg:mr-[21.7rem] mb-1' src="./assets/images/svg/karmic.svg" alt="line" />
              <CustomHeading text={'Who is karmic?'}
              />
              <img className=' mx-auto md:max-w-[344px] max-w-[190px] -mt-2 lg:ml-[21.7rem]' src="./assets/images/svg/karmic.svg" alt="line" />
              <p className='text-base max-w-[532px] mx-auto text-center leading-custom-xl pb-[2px] font-normal text-white pt-2'>We are builders, innovaters, and believers.</p>
              <p className='text-base max-w-[532px] mx-auto text-center leading-custom-xl font-normal text-white'>We believe in a future that rests in your hands, and yours alone. The future is decentralized, The future is web3.</p>
              <div className="flex max-xl:flex-wrap pt-10 max-xl:justify-center">
                  <img className='max-w-[369px] max-xl:max-w-[300px] max-lg:max-w-[329px]' src="./assets/images/png/karmic-one.png" alt="one" />
                  <img className='max-w-[369px] max-xl:max-w-[300px] max-lg:max-w-[329px]' src="./assets/images/png/karmic-two.png" alt="two" />
                  <img className='max-w-[369px] max-xl:max-w-[300px] max-lg:max-w-[329px]' src="./assets/images/png/karmic-three.png" alt="three" />
              </div>
          </div>
    </div>
  )
}

export default Karmic