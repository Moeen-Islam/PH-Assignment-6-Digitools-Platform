import { Suspense, useEffect, useMemo, useState } from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Rating from "./Components/Rating";
import Steps from "./Components/Steps";
import Transfrom from "./Components/Transfrom";
import DigitalTools from "./Components/DigitalTools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchproduct = async () => {
  const res = await fetch("/data.json");
  return res.json();
};

function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const productPromise = useMemo(() => fetchproduct(), []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar selectedProducts={selectedProducts} />
      <Hero />
      <Rating />

      <Suspense
        fallback={
          <div className="flex justify-center py-10">
            <span className="loading loading-spinner loading-xl"></span>
          </div>
        }
      >
        <DigitalTools
          productPromise={productPromise}
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      </Suspense>

      <Steps />
      <Pricing />
      <Transfrom />
      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;