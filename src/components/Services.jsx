import React from 'react'
import { SERVICES_DATA } from '../utils/helper'
import CustomHeading from '../common/CustomHeading'

const Services = () => {
    return (
        <div>
            <div className='container relative'>
                <img className='-mt-1 mx-auto max-w-[344px] mr-[21.7rem] mb-1' src="./assets/images/svg/karmic.svg" alt="line" />
                <CustomHeading
                    text={'Services'}
                />
                <img className=' mx-auto max-w-[344px] -mt-2 lg:ml-[21.7rem]' src="./assets/images/svg/karmic.svg" alt="line" />
                <div className='flex flex-row flex-wrap -mx-3 xl:pt-[77px] md:pt-12 pt-8'>
                    {SERVICES_DATA.map((testimonial, index) => (
                        <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-[10.5px] lg:mb-10 sm:mb-6 mb-5 relative group'>
                            <div className='absolute -top-[18px] -right-6 -z-10 hidden group-hover:block transition-all duration-700 ease-in-out'>
                                <img src={testimonial.circle} alt="circle" className='w-[73px] h-74px] ' />
                            </div>
                            <div className="xl:p-5 p-4 border border-transparent rounded-xl hover:shadow-custom-xl hover:border hover:border-dusk-black hover:bg-dusk-black hover:backdrop-blur-lg hover:bg-white/10 duration-700 z-20">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="size-10"
                                />
                                <h3 className="font-bold text-xl leading-custom-4xl text-white lg:pt-5 pt-4 pb-[6px]">
                                    {testimonial.title}
                                </h3>
                                <p className="font-normal text-base text-white xl o[]:max-w-[329px]">{testimonial.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services