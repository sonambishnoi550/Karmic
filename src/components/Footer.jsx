import React from 'react'
import { SOCIAL_LINKS } from '../utils/helper';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div id='about' className='xl:pt-[60px] pt-5'>
            <div className="container">
                <img src="./assets/images/png/footer-logo.png" alt="footer-logo" className='md:pb-[69px] pb-[50px] flex mx-auto md:max-w-[255px] max-w-[190px]' />
                <div className="flex items-center justify-center gap-6 pb-4">
                    {SOCIAL_LINKS.map((link, index) => (
                        <a
                            key={index}
                            href={link.link}
                            target="_blank"
                            className="hover:scale-110 transition-all duration-300"
                            rel="noreferrer"
                        >
                            <img src={link.image} alt={link.alt} />
                        </a>
                    ))}
                </div>
            </div>
            <div className="!border-[0.5px] border-white w-full"></div>
            <p className="text-white opacity-70 text-center max-sm:text-sm pt-4 pb-[18px]">
                © Karmic labs {currentYear} </p>
        </div>
    )
}

export default Footer