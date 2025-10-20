
import { Suspense } from 'react'
import './App.css'
import Cards from './Cards'
import Footer from './Footer'
import './index.css'
import Nav from './Nav'
import Ticket from './Ticket'

const fetchPromise=fetch("ticketData.json")
.then(res=>res.json())

function App() {


  return (
    <>
      <Nav></Nav>
      <Cards></Cards>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Ticket fetchPromise={fetchPromise}></Ticket>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
