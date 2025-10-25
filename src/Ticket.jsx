import React, { use } from 'react';
import Tickets from './Tickets';




const Ticket = ({fetchPromise,handleProgress,handleResolved,taskStatus}) => {

    console.log(taskStatus);
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
                handleProgress={handleProgress}
                data={data}
                ></Tickets>)
            }

        </div>
        </div>

           <div>
              <h1 className='text-4xl font-semibold mt-[80px] ml-[20px]'>Task Status</h1> <br />

              <div className='ml-[20px] flex flex-col gap-3'>
                {taskStatus.length===0 ? (
                   <p className="text-gray-500">No task added yet</p>
                  ) : (
                    taskStatus.map(task => (
                      <div className=" bg-white 
                        text-lg flex flex-col justify-between  w-[300px] h-[100px]
                         rounded-[8px] "
                        key={task.id}
                      >
                        <span className='text-center font-bold text-[20px]'>{task.title}</span>
                        <button className="btn bg-green-500 mx-2 mb-2 
                         rounded-[8px]" onClick={handleResolved}>Complete</button>
                      </div>
                    ))
                  )}
      

              </div>

              <p className=' text-3xl font-semibold mt-[40px] ml-[20px]'>Resolved Task</p>
            </div>

        </div>
       </> 

    );
};

export default Ticket;