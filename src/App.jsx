
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

  const [visible,setVisible]=useState(false)

  function handleProgress(){
    setCountProgress(countProgress+1)
    toast("In Progress!")
  }

  const handleResolved=()=>{
    setCountResolved(countResolved+1)
  }

  function handleVisible(){
    setVisible(true)
  }

  return (
    <>
      <Nav></Nav>
      <Cards countProgress={countProgress} countResolved={countResolved}></Cards>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Ticket fetchPromise={fetchPromise} handleProgress={handleProgress} handleResolved={handleResolved} visible={visible}></Ticket>
      </Suspense>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
