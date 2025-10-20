import React, { use, useState } from 'react';
import Tickets from './Tickets';
import Cards from './Cards';


const Ticket = ({fetchPromise}) => {
  const [inProgress, setInProgress]=useState(0)

  function increment(){
      setInProgress(inProgress+1)
  }

  <Cards increment={increment} inProgress={inProgress}></Cards>

    const data=use(fetchPromise)
    console.log(data);
    return (
       <>
        <div className='flex max-sm:flex-col'>

        <div className='flex flex-col '>
          <h1 className='text-4xl font-semibold mt-[80px] ml-[40px] mb-[20px]'>Customer Tickets</h1>
            <div className='grid grid-cols-2 gap-y-8 gap-x-[24px] ml-[40px] max-sm:flex 
            max-sm:flex-col max-sm:ml-1 max-sm:h-auto'>
            {
                data.map(data=><Tickets
                key={data.id}
                increment={increment}
                data={data}
                ></Tickets>)
            }

        </div>
        </div>

           <div>
              <h1 className='text-4xl font-semibold mt-[80px] ml-[20px]'>Task Status</h1> <br />
              <p className='ml-[20px] text-[#627382]'>Select a ticket to add to Task Status</p>
              <p className=' text-3xl font-semibold mt-[40px] ml-[20px]'>Resolved Task</p>
            </div>

        </div>
       </> 

    );
};

export default Ticket;