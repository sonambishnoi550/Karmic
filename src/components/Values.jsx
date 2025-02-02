import React from 'react'
import { VALUES_DATA } from '../utils/helper'
import CustomHeading from '../common/CustomHeading'

const Values = () => {
    return (
        <div className='container relative'>
            <div className='relative'>
                <img className='absolute mx-auto md:max-w-[344px] pointer-events-none max-w-[190px] lg:left-[33%] sm:left-[28%] left-[24%] sm:top-[-45%] top-[-31%] lg:top-[-32%]' src="./assets/images/svg/karmic.svg" alt="line" />
                <CustomHeading text={'Values'} />
            </div>
            
                <div className='flex flex-row flex-wrap -mx-3 xl:pt-[63px] md:pt-12 pt-8 max-lg:justify-center'>
                    {VALUES_DATA.map((service, index) => (
                        <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-[10.5px] lg:mb-10 sm:mb-6 mb-5 relative group'>
                            <div className='absolute -top-[22px] xl:-right-[1.25rem] -right-2 group-hover:opacity-100 opacity-0 transition-opacity duration-700 -z-10'>
                                <img src={service.circle} alt="circle" className='xl:w-[73px] xl:h-[74px] size-16 pointer-events-none' />
                            </div>
                            <div className="md:max-w-[369px] lg:min-h-[276px] sm:min-h-[256px] min-h-[200px] h-full xl:p-5 p-4 border border-light-black rounded-xl hover:border hover:border-dusk-black hover:bg-white/10 hover:backdrop-blur-lg duration-700 z-20">
                                <img src={service.image} alt={service.title} className="size-10 pointer-events-none"/>
                                <h3 className="font-bold text-xl text-white lg:pt-5 pt-4 pb-[6px]">
                                    {service.title}</h3>
                                {service.description && (
                                    <p className="font-normal text-base text-white xl:max-w-[329px]">
                                        {service.description}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    )
}

export default Values