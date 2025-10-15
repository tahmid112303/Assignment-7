import { Calendar } from 'lucide-react';
import React from 'react';

const Tickets = ({data}) => {
    const ticketData=data
    return (
        <div className='bg-white h-[170px] w-[480px] border-2
         border-green-600 rounded-[8px] pl-3 cursor-pointer max-sm:h-auto 
         max-sm:w-auto '>
            <div className=' flex justify-between mt-4'>
                <h1 className='text-[20px] font-semibold'>{ticketData.title}</h1>
                <div className='mr-3'>{ticketData.status}</div>
            </div>
            <div className='mt-4'>{ticketData.description}</div>

            <div className='flex gap-5 mt-[30px]'>
                <p>#{ticketData.id}</p>
                <p>{ticketData.priority}</p>
                <p>{ticketData.customer}</p>
                <p className='flex gap-2'><Calendar></Calendar>
                {ticketData.createdAt}
                </p>
            </div>
        </div>
    );
};

export default Tickets;