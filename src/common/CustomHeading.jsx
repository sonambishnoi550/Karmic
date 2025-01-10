import React from 'react'

const CustomHeading = ({ text, classStyle }) => {
    return (
        <h2
            className={`font-light lg:text-custom-5xl md:text-5xl text-3xl text-center !font-sunflower text-white uppercase ${classStyle}
`}>
            {text}</h2 >
    );
};

export default CustomHeading