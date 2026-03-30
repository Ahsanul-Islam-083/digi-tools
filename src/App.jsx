import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'
import Navbar from './components/Navbar'
import PremiumHeading from './components/PremiumTools/PremiumHeading'
import Pricing from './components/Pricing'
import Stats from './components/Stats'
import Workflow from './components/Workflow'
import { ToastContainer } from 'react-toastify'

const toolsPromise = fetch("/tools.json").then(res => res.json());

function App() {
  const [cart,setCart] = useState([]);


  return (
    <>
      <Navbar cart={cart}/>
      <Banner/>
      <Stats/>

      <Suspense fallback={<div className='flex justify-center items-center py-90'><span className="loading loading-dots loading-xl"></span></div>}>
      <PremiumHeading toolsPromise={toolsPromise} cart={cart} setCart={setCart} />
      </Suspense>

      <GetStarted/>
      <Pricing/>
      <Workflow/>
      <Footer/>

      <ToastContainer  position="top-center"/>
    </>
  )
}

export default App
