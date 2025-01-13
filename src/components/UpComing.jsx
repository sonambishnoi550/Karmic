import React from 'react';
import CustomHeading from '../common/CustomHeading';
import { UPCOMING_DATA } from '../utils/helper';
import CustomButton from '../common/CustomButton';
const UpComing = () => {
    return (
        <div id='upcoming project' className="lg:pt-20 xl:pb-[136px] md:pb-20 pb-16">
            <div className="container">
                <div className='relative'>
                    <img className='absolute mx-auto md:max-w-[344px] pointer-events-none max-w-[190px] lg:left-[33%] sm:left-[28%] left-[24%] sm:top-[-45%] top-[-31%] lg:top-[-32%]' src="./assets/images/svg/karmic.svg" alt="line" />
                    <CustomHeading text={'Upcoming Projects '} />
                </div>
                <div className="flex max-lg:flex-wrap justify-center xl:gap-[29px] gap-3 md:pt-10 pt-5">
                    {UPCOMING_DATA.map((project) => (
                        <div key={project}
                            className="p-4 border backdrop-blur-lg bg-white/10 rounded-3xl border-gray-700" >
                            <img src={project.image} alt={project.title} className="pb-4 xl:max-w-[231px] pointer-events-none"/>
                            <div className="flex justify-between">
                                <p className="font-sunflower font-medium text-xl leading-custom-xl text-white">
                                    {project.title}</p>
                                <p className="font-sunflower font-bold text-base leading-custom-xl text-white">
                                    {project.time} </p>
                            </div>
                            <p className="font-space font-light text-base leading-custom-2xl text-white">
                                {project.category} </p>
                        </div>
                    ))}
                </div>
                <CustomButton classStyle={'px-8 py-[11px] border border-white flex justify-center mx-auto items-center md:mt-12 mt-5 text-white font-sunflower font-medium text-base rounded-full transition-all duration-700 ease-in-out hover:bg-white hover:text-black'} text={'View All'} />
            </div>
        </div>
    );
};

export default UpComing;