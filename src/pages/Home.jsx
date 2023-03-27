import React, { useRef } from "react";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Header from "../components/Header";
import Curve from "../components/Curve";
import Hero from "../components/Hero";
import Footer from  "../components/Footer";
import Features from "../components/Features";
const Home = () => {
    const containerRef = useRef(null)
  return (
    <div>
          <Header />
          <Hero />
          <Features />
          <Footer />
          <Curve />
  </div>
  )
}

export default Home