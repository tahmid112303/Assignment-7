
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
      <Ticket fetchPromise={fetchPromise}></Ticket>
      <Footer></Footer>
    </>
  )
}

export default App
