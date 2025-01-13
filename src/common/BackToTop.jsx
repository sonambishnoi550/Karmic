import React, { useState } from "react";

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    window.onscroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            {isVisible && (
                <button onClick={scrollToTop}
                    className="fixed bottom-5 right-5 z-20 bg-white p-2 w-12 border-black border rounded-md flex justify-center">
                        <img src="./assets/images/svg/backtotop.svg" alt="backtotop" />
                </button>
            )}
        </>
    );
};
export default BackToTop;