import React from 'react';
import CustomHeading from '../common/CustomHeading';
import { UPCOMING_DATA } from '../utils/helper';
import CustomButton from '../common/CustomButton';
const UpComing = () => {
    return (
        <div className="lg:pt-20 xl:pb-[136px] md:pb-20 pb-16">
            <div className="container">
                <img className='-mt-1 pointer-events-none mx-auto md:max-w-[344px] md:mr-[9rem] mr-[2rem] max-w-[190px] lg:mr-[21.7rem] mb-1' src="./assets/images/svg/karmic.svg" alt="line" />
                <CustomHeading text={'Upcoming Projects'} />
                <img className='pointer-events-none mx-auto md:max-w-[344px] max-w-[190px] -mt-2 lg:ml-[21.7rem]' src="./assets/images/svg/karmic.svg" alt="line" />
                <div className="flex max-lg:flex-wrap justify-center xl:gap-[29px] gap-3 pt-10">
                    {UPCOMING_DATA.map((project) => (
                        <div key={project.id}
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
                <CustomButton classStyle="!text-white flex mx-auto py-3 px-[29px] border-white border rounded-[82px] mt-12 hover:!text-black hover:bg-white transition-all duration-500" text="View All"/>
            </div>
        </div>
    );
};

export default UpComing;