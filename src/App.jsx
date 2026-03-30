
import { Suspense } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import Rating from './Components/Rating'
import Steps from './Components/Steps'
import Transfrom from './Components/Transfrom'
import DigitalTools from './Components/DigitalTools'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const fetchproduct = async() => {
  const res = await fetch("/data.json")
  return res.json();
}

function App() {
const productPromise = fetchproduct()

  return (
    <>
    
      <Navbar></Navbar>
      <Hero></Hero>
      <Rating></Rating>

      <Suspense fallback= {<span className="loading loading-spinner loading-xl"></span>}>
          <DigitalTools productPromise={productPromise}></DigitalTools>
      </Suspense>
    
      <Steps></Steps>
      <Pricing></Pricing>
      <Transfrom></Transfrom>
      <Footer></Footer>
     
     <ToastContainer position="top-right" autoClose={2000} />
    </>
  )
}

export default App
