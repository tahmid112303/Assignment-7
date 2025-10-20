import React from 'react';

const Cards = ({inProgress,increment}) => {
    return (
        <div className='flex gap-[24px] mx-[50px] mt-[80px]'>
            <div className='h-[250px] w-[700px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] rounded-[8px] flex flex-col justify-center items-center text-[24px] text-white' onClick={increment}> {increment} In-Progress  <span className='font-semibold text-white text-[60px]'></span>

            </div>

            <div className='h-[250px] w-[700px] bg-linear-to-r from-[#54CF68] to-[#00827A] rounded-[8px] flex flex-col justify-center items-center text-[24px] text-white'> Resolved  <span className='font-semibold text-white text-[60px]'>0</span>


            </div>
        </div>
    );
};

export default Cards;