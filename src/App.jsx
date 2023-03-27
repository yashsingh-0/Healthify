import React, { useRef } from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import Home from "./pages/Home";
import otpverification from "./pages/otpverification";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
          <BrowserRouter>
          <Routes>
           <Route index element={<Home />}></Route>
           <Route path="login" Component={Login} />
           <Route path="signup" Component={Signup} />
           <Route path="otpverification" Component={otpverification} />
          </Routes>
          </BrowserRouter>
        </div>  
      }
    </main>
  </LocomotiveScrollProvider>
  </div>
  );
}