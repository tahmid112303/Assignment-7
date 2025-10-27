
import { Suspense, useState } from 'react'
import './App.css'
import Cards from './Cards'
import Footer from './Footer'
import './index.css'
import Nav from './Nav'
import Ticket from './Ticket'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

const fetchPromise=fetch("ticketData.json")
.then(res=>res.json())


function App() {

  const [countProgress,setCountProgress]=useState(0)

  const [countResolved,setCountResolved]=useState(0)

  const [taskStatus,setTaskStatus]=useState([])

  const [resolvedStatus,setResolvedStatus]=useState([])
  

  const handleProgress = (ticketTitle) => {
    setTaskStatus(taskStatus=>{
      const existing=taskStatus.some(task=>task.title === ticketTitle);
      if(existing===true){
        setCountProgress(countProgress);
        alert("Already in Progress!")
        return taskStatus;
      }
      else{
        return [...taskStatus,{title:ticketTitle}]
      }
    });
    setCountProgress(countProgress+1);
    toast("In Progress!")
  };

  const handleResolved=(ticketTitle)=>{
    setCountResolved(countResolved+1);
    setResolvedStatus(resolvedStatus=>[...resolvedStatus,{title:ticketTitle}]);
    setTaskStatus(oldTasks => oldTasks.filter(task => task.title !== ticketTitle));
    setCountProgress(countProgress-1);
    toast("Completed!");
  }



  return (
    <>
      <Nav></Nav>
      <Cards countProgress={countProgress} countResolved={countResolved}></Cards>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Ticket fetchPromise={fetchPromise} handleProgress={handleProgress} handleResolved={handleResolved} taskStatus={taskStatus} resolvedStatus={resolvedStatus}></Ticket>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
