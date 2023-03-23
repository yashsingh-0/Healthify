import React, { useRef } from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Header from "./components/Header";
import Curve from "./components/curve";
import Hero from "./components/hero";
import Footer from  "./components/footer";
import Features from "./components/Features";
export default function App() {
  const containerRef = useRef(null)
  return (
    <div className="App">
    <LocomotiveScrollProvider
    options={
      {
        smooth: true,
        lerp: 0.5,
        // ... all available Locomotive Scroll instance options 
      }
    }
    watch={
      [
        //..all the dependencies you want to watch to update the scroll.
        //  Basicaly, you would want to watch page/location changes
        //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
      ]
    }
    containerRef={containerRef}
  >
    <main data-scroll-container ref={containerRef}>
      {/* ...your app */
        <div>
          <Header />
          <Hero />
          <Features />
          <Footer />
          <Curve />
        </div>  
      }
    </main>
  </LocomotiveScrollProvider>
  </div>
  );
}