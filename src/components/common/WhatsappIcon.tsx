import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';

const WhatsappIcon = () => {
    return (
        <button className='fixed bottom-16 right-4 md:bottom-24 md:right-4 z-50'>
            <div className='flex flex-col'>
                <a href="https://wa.me/message/VUQHDAMVQEK5A1" target={'_blank'} className='mx-auto'>
                    <AiOutlineWhatsApp className={`bg-green-500  text-white p-2 rounded-full hover:bg-white hover:text-green-700 hover:duration-300 duration-300 h-8 w-8 md:h-12 md:w-12 shadow-lg`} />
                </a>
                <a href="https://wa.me/message/VUQHDAMVQEK5A1" target={'_blank'}>
                    <p className='w-12 md:w-auto shadow-lg py-1 px-2 bg-white rounded-lg mt-1'>
                        Live Chat
                    </p>
                </a>
            </div>
        </button>
    );
};

export default WhatsappIcon;