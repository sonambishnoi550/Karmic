import React from 'react';
import CustomHeading from '../common/CustomHeading';
import { UPCOMING_DATA } from '../utils/helper';


const Upcoming = () => {


    return (
        <div className="lg:pt-24 md:pt-20 pt-16 lg:pb-[136px] md:pb-20 pb-16">
            <div className="container relative">
                <div className="absolute lg:top-[-4%] lg:left-[33%] md:top-[-3%] md:left-[28%] left-[15%] top-[-1%]">
                    <img
                        src="./assets/images/svg/karmic.svg"
                        alt="line"
                        className="md:w-[344px] w-[250px]"
                    />
                    
                </div>
                <CustomHeading
                    text={'Upcoming Projects'}
                    classStyle={'lg:!pb-12 md:!pb-10 !pb-8'}
                />
                
                <div className="flex max-lg:flex-wrap justify-center md:gap-[29px] gap-5">
                    {UPCOMING_DATA.map((project) => (
                        <div
                            key={project.id}
                            className="p-4 border backdrop-blur-lg bg-white/10 rounded-3xl border-gray-700"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="pb-4"
                            />
                            <div className="flex justify-between">
                                <p className="font-sunflower font-medium text-xl leading-custom-xl text-white">
                                    {project.title}
                                </p>
                                <p className="font-sunflower font-bold text-base leading-custom-xl text-white">
                                    {project.time}
                                </p>
                            </div>
                            <p className="font-space font-light text-base leading-custom-2xl text-white">
                                {project.category}
                            </p>
                        </div>
                    ))}
                </div>
                <button className="mt-12 px-8 py-3 border flex justify-center mx-auto items-center text-white font-sunflower font-medium text-base rounded-full transition-all duration-700 ease-in-out hover:bg-gray-700">
                    View All
                </button>
            </div>
        </div>
    );
};

export default Upcoming;