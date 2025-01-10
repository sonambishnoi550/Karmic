import React from 'react';
import { ButtonArrow } from '../utils/icons';

const CustomButton = ({ text, classStyle, customClass }) => {
    return (
        <button
            className={`text-black rounded-[82px] font-bold text-base leading-5 ${classStyle}`}
        >
            {text}
            <span className={`${customClass} hidden`}>
                <ButtonArrow />
            </span>
        </button>
    );
};

export default CustomButton;