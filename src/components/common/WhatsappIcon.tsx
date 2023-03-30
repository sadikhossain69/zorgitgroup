import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const WhatsappIcon = () => {
    return (
        <button className='fixed bottom-16 right-5 md:bottom-24 md:right-8 z-50'>
            <a href="https://wa.me/message/VUQHDAMVQEK5A1" target={'_blank'}>
                <AiOutlineWhatsApp className={`bg-gradient-to-tr from-[#48f15d] to-[#3f4839c2] text-white p-2 rounded-full hover:bg-white hover:duration-300 duration-300 h-8 w-8 md:h-12 md:w-12`} />
            </a>
        </button>
    );
};

export default WhatsappIcon;