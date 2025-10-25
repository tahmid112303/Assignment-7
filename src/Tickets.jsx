import { Calendar } from 'lucide-react';
import React from 'react';



const Tickets = ({data,handleProgress}) => {

    const ticketData=data
    return (
        <div className='bg-white h-[170px] w-[480px] rounded-[8px] pl-3 cursor-pointer max-sm:h-auto 
         max-sm:w-auto ' onClick={()=>handleProgress(ticketData.title)}>
            <div className=' flex justify-between mt-4'>
                <h1 className='text-[20px] font-bold'>{ticketData.title}</h1>
                <div className={`font-bold mr-3 ${ticketData.status=== 'Open' ?'text-green-600 bg-[#B9F8CF] p-2 rounded-4xl': ticketData.status==="In Progress" ? 
                    'text-[#9C7700] bg-[#F8F3B9] p-2 rounded-4xl' : ''}`}>{ticketData.status}</div>

            </div>
            <div className='mt-4'>{ticketData.description}</div>

            <div className='flex gap-5 mt-[30px]'>
                <p className='font-semibold'>#{ticketData.id}</p>
                <p className={`font-bold ${ticketData.priority?.toLowerCase()==='low priority' ? 'text-green-600': ticketData.priority?.toLowerCase()===
                'high priority' ? 'text-red-600' : ticketData.priority?.toLowerCase()==='medium priority' ? 'text-yellow-600' : ''}`}>
                {ticketData.priority}</p>
                <p className='font-semibold'>{ticketData.customer}</p>
                <p className='flex gap-2'><Calendar></Calendar>
                {ticketData.createdAt}
                </p>
            </div>
        </div>
    );
};

export default Tickets;