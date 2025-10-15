import { Calendar } from 'lucide-react';
import React from 'react';

const Tickets = ({data}) => {
    const ticketData=data
    return (
        <div className='bg-white h-[150px] w-[450px] border-2
         border-green-600 rounded-[8px]'>
            <div className=' flex justify-between '>
                <h1>{ticketData.title}</h1>
                <div>{ticketData.status}</div>
            </div>
            <div className='mt-4'>{ticketData.description}</div>

            <div className='flex gap-5'>
                <p>#{ticketData.id}</p>
                <p>{ticketData.priority}</p>
                <p>{ticketData.customer}</p>
                <p className='flex'><Calendar></Calendar>
                {ticketData.createdAt}
                </p>
            </div>
        </div>
    );
};

export default Tickets;