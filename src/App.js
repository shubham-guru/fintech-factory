import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Byof from "./components/Byof";
import { Faq } from "./components/Faq";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Products from "./components/Products";
import WhyUs from "./components/WhyUs";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import CloudPlans from "./components/CloudPlans";
import Plans from "./components/Plans";

const App = () =>{
  return(
    <>
      <div className="container">
      <NavBar />
        <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route exact path="/products" element={<Products/>}/>
         <Route exact path="/whyus" element={<WhyUs/>}/>
         <Route exact path="/gallery" element={<Gallery/>}/>
         <Route exact path="/about" element={<About/>}/>
         {/* <Route eaxct path="/plans" element={<Plans/>}/> */}
         <Route eaxct path="/byof" element={<Byof/>}/>
         <Route exact path="/cloud-plans" element={<CloudPlans/>} />
         <Route exact path="/faq" element={<Faq/>}/>
         <Route element={<NotFound/>} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </>
  )
}


export default App;