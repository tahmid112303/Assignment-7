import React, { use } from 'react';
import Tickets from './Tickets';

const Ticket = ({fetchPromise}) => {
    const data=use(fetchPromise)
    console.log(data);
    return (
       <>
       <h1 className='text-3xl mt-[80px] ml-[40px] mb-[20px]'>Customer Tickets</h1>
        <div className='grid grid-cols-2 gap-y-8 gap-x-[24px] ml-[40px] '>
            {
                data.map(data=><Tickets
                key={data.id}
                data={data}
                ></Tickets>)
            }
        </div>
       </> 

    );
};

export default Ticket;