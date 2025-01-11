import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className='lg:pt-[60px] pt-5'>
            <div className="container">
                <img src="./assets/images/png/footer-logo.png" alt="footer-logo" className='md:pb-[69px] pb-[50px] flex mx-auto md:max-w-[255px] max-w-[190px]' />
                <div className="flex items-center justify-center gap-6  pb-4">
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        className="hover:scale-110 transition-all duration-300"
                        rel="noreferrer"
                    >
                        <img src="./assets/images/svg/instagram.svg" alt="instagram" />
                    </a>
                    <a
                        href="https://x.com/?lang=en&mx=2"
                        target="_blank"
                        className="hover:scale-110 transition-all duration-300"
                        rel="noreferrer"
                    >
                        <img src="./assets/images/svg/twitter.svg" alt="twitter" />
                    </a>
                    <a
                        href="www.facebook.com"
                        target="_blank"
                        className="hover:scale-110 transition-all duration-300"
                        rel="noreferrer"
                    >
                        <img src="./assets/images/svg/facebook.svg" alt="facebook" />
                    </a>
                    <a
                        href="https://www.youtube.com/"
                        target="_blank"
                        className="hover:scale-110 transition-all duration-300"
                        rel="noreferrer"
                    >
                        <img src="./assets/images/svg/youtube.svg" alt="you-tube" />
                    </a>
                </div>
            </div>
            <div className="!border-[0.5px] border-white w-full"></div>
            <p className="text-white opacity-70 text-center max-sm:text-sm pt-4 pb-[18px]">
                © Karmic labs {currentYear}
            </p>
        </div>
    )
}

export default Footer