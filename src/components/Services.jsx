import React from 'react'
import { SERVICES_DATA } from '../utils/helper'
import CustomHeading from '../common/CustomHeading'

const Services = () => {
    return (
        <div>
            <div className='container relative'>
                <img className='-mt-1 pointer-events-none mx-auto md:max-w-[344px] md:mr-[9rem] mr-[2rem] max-w-[190px] lg:mr-[21.7rem] mb-1' src="./assets/images/svg/karmic.svg" alt="line" />
                <CustomHeading
                    text={'Services'}
                />
                <img className='pointer-events-none mx-auto md:max-w-[344px] max-w-[190px] -mt-2 lg:ml-[21.7rem]' src="./assets/images/svg/karmic.svg" alt="line" />
                <div className='flex flex-row flex-wrap -mx-3 xl:pt-[77px] md:pt-12 pt-8'>
                    {SERVICES_DATA.map((service, index) => (
                        <div key={index} className='lg:w-[33.33%] sm:w-[50%] w-full px-[10.5px] lg:mb-10 sm:mb-6 mb-5 relative group'>
                            <div className='absolute -top-[18px] xl:-right-1 -right-2 group-hover:opacity-100 opacity-0 transition-opacity duration-700 -z-10'>
                                <img src={service.circle} alt="circle" className='xl:w-[73px] xl:h-[74px] size-16 pointer-events-none' />
                            </div>
                            <div className="md:max-w-[369px] lg:min-h-[276px] sm:min-h-[256px] min-h-[200px] h-full pl-3 pt-3 max-sm:p-3 border border-transparent rounded-xl hover:border hover:border-dusk-black hover:bg-white/10 hover:backdrop-blur-lg duration-700 z-20">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="size-10 pointer-events-none"
                                />
                                <h3 className="font-bold text-xl text-white lg:pt-5 pt-4 pb-[6px]">
                                    {service.title}
                                </h3>
                                {service.description && (
                                    <p className="font-normal leading-custom-xl text-base text-white xl:max-w-[329px]">
                                        {service.description}
                                    </p>
                                )}
                                {service.content && service.content.length > 0 && (
                                    <div>
                                        {service.content.map((list, item) => (
                                            <div key={item} className='flex items-center '>
                                                <p className='size-1 bg-white rounded-full mx-2'></p>
                                                <a href='#' className='font-normal text-base text-white'>
                                                    {list.text || list.textTwo || list.textThree || list.textFour || list.textFive || list.textSix}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services