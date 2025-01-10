import React from 'react'
import CustomButton from '../common/CustomButton'
import { DownArrow } from '../utils/icons'

const Hero = () => {
    return (
        <div className='lg:bg-hero-layer bg-no-repeat max-lg:bg-center bg-cover lg:min-h-[726px] relative max-lg:bg-gray' id='home'>
            <div className='container'>
                <div className='lg:flex-row flex-col flex justify-between lg:pt-[173px] max-lg:py-20 max-sm:py-12 gap-5'>
                    <div className='lg:w-[570px] w-full flex flex-col justify-center'>
                        <div className='flex flex-col justify-center max-lg:items-center'>
                            <h1 className='lg:text-custom-6xl font-sunflower leading-custom-sm sm:text-5xl text-4xl text-white uppercase lg:max-w-[570px] max-lg:text-center'>We are believers decentralization <img className='ms-[167px] -mt-2 max-w-[158px] w-full block' src="./assets/images/svg/hero-line.svg" alt="second-line" /> And Web3.
                                <img className='ms-[150px] -mt-3 max-w-[169px] w-full ' src="./assets/images/svg/hero-line.svg" alt="first-line" />
                            </h1>
                            <p className='font-normal text-base max-w-[570px] text-white pt-3'>Vulputate tristique habitant neque, accumsan. Vitae ultrices nulla erat nibh aliquam, quis tempus volutpat arcu. Leo convallis luctus dis malesuada turpis non consequat ac. </p>
                            <div className='flex sm:pt-10 pt-5 sm:gap-8 gap-5'>
                                <CustomButton classStyle="!py-[12px] !px-[19px] bg-white flex items-center gap-[10px] hover:bg-gray-500 group transition-all duration-500" text="Get Started" customClass="!block fill-black group-hover:translate-x-0.5 transition-all duration-500" />
                                <CustomButton text="Read More" classStyle="!py-[9.2px] !px-[27px] font-thin hover:font-bold bg-transparent text-white border border-white hover:bg-gray-500 hover:!bg-white hover:text-black transition-all duration-500" />
                            </div>
                        </div>
                    </div>
                    <div className='lg:w-[398px] w-full flex max-lg:justify-center max-lg:items-center'>
                        <img className='max-w-[398px] w-full' src="./assets/images/png/hero-image.png" alt="hero-image" />
                    </div>
                    <div className='absolute bottom-[45px] left-[50%] lg:block hidden'>
                        <DownArrow />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero