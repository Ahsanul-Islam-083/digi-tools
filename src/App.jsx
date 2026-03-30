
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import GetStarted from './components/GetStarted'
import Navbar from './components/Navbar'
import PremiumHeading from './components/PremiumTools/PremiumHeading'
import Pricing from './components/Pricing'
import Stats from './components/Stats'
import Workflow from './components/Workflow'

const toolsPromise = fetch("/tools.json").then(res => res.json());

function App() {


  return (
    <>
      <Navbar/>
      <Banner/>
      <Stats/>

      <Suspense fallback={<span className="loading loading-dots loading-xl"></span>}>
      <PremiumHeading toolsPromise={toolsPromise}/>
      </Suspense>

      <GetStarted/>
      <Pricing/>
      <Workflow/>
      <Footer/>
    </>
  )
}

export default App
