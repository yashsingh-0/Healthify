import React from 'react'
import { useState } from 'react'
import Curve from '../components/Curve';
const Login = () => {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    }

  return (
    <div>
        <section className="bg-white dark:bg-gray-900">
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form className="w-full max-w-md">
            <div className="flex justify-center mx-auto">
            <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
              HEALTHIFY
            </div>
            </div>
            
            <div className="flex items-center justify-center mt-8">
                <a href="#" onClick={() => toggleTab(1)} className={toggleState === 1 ? "w-1/2 pb-4 font-medium transition duration-700  text-center text-gray-800 capitalize border-b-2 border-emerald-500 dark:border-emerald-400 dark:text-gray-300" : "w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-white"}>
                    E-mail / Patient Id 
                </a>

                <a href="#"  onClick={() => toggleTab(2)} className={toggleState === 2 ? "w-1/3 pb-4 font-medium transition duration-700  text-center text-gray-800 capitalize border-b-2 border-emerald-500 dark:border-emerald-400 dark:text-gray-300" : "w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-white"}>
                    Mobile
                </a>
            </div>

            <div className={toggleState === 1 ? "relative flex items-center mt-8" : "hidden"}>
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>

                <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="E-mail / Patient Id" />
            </div>

            
            <div className={toggleState === 1 ? "relative flex items-center mt-4" : "hidden"}>
                <span className="absolute">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </span>

                <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
            </div>
            <div className={toggleState === 2 ? "relative flex items-center mt-8" : "hidden"}>
                <span className="absolute">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500 bi bi-telephone" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                 <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                </svg>
                </span>

                <input type="tel" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-400 dark:focus:border-emerald-300 focus:ring-emerald-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Mobile No." />
            </div>

            <div className={toggleState === 1 ? "mt-6" : "hidden"}>
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-500 rounded-lg hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-50">
                    Login
                </button>

                <div className="mt-6 float-left ">
                    <a href="#" className="text-sm text-emerald-500 hover:underline dark:text-emerald-400">
                        Forgot Password
                    </a> 
                </div>    
                <div className="mt-6 float-right ">    
                    <a href="signup" className="text-sm text-emerald-500 hover:underline dark:text-emerald-400">
                        Create Account
                    </a>
                </div>
                
            </div>
            <div className={toggleState === 2 ? "mt-6" : "hidden"}>
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-emerald-500 rounded-lg hover:bg-emerald-400 focus:outline-none focus:ring focus:ring-emerald-300 focus:ring-opacity-50">
                    Send OTP
                </button>
            </div>    
        </form>
    </div>
</section>
<Curve />
    </div>
    
  )
}

export default Login