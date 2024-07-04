import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';

import "./homepage.css"



const Navbar = () => {
   useEffect(() => {
       const wow = new WOW({
            live: false // Optional: set to true if you want to re-initialize on DOM changes
        });
        wow.init();
    }, []);
  return (
    <>
  {/*  <h2 classNameName="text-3xl font-bold text-center mb-8 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">Features</h2>  */}
    <nav className="bg-white-50 dark:bg-white-900   w-full z-20 top-0 start-0   dark:border-gray-600 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto ">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-9  wow animate__animated animate__fadeInUp" data-wow-delay="0.1s" alt="Flowbite Logo"/>
      <span className="self-left text-2xl font-semibold whitespace-nowrap dark:text-white wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">Flowbite</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button type="button" className="wow animate__animated animate__fadeInUp text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" data-wow-delay="1.8s" ><Link to="/signin">Sign In</Link></button>
      <button type="button" className="wow animate__animated animate__fadeInUp text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-4" data-wow-delay="1.8s" ><Link to="/signup">Sign Up</Link></button>

      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center  justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul className="flex flex-col  md:p-0 mt-3 mb-3 font-medium  border-gray-100 rounded-lg bg-white-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white-50 dark:bg-white-800 md:dark:bg-white-900 dark:border-gray-700">
      <li>
        <a href="#" className="block py-2 px-3 text-black bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 wow animate__animated animate__fadeInUp" aria-current="page" data-wow-delay="0.4s">Home</a>
      </li>
      <li>
        <a href="#" data-wow-delay="0.8s" className="wow animate__animated animate__fadeInUp block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" data-wow-delay="1s" className="wow animate__animated animate__fadeInUp block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" data-wow-delay="1.2s" className="wow animate__animated animate__fadeInUp block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
      <li>
        <a href="#" data-wow-delay="1.6s" className="wow animate__animated animate__fadeInUp block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
       </ul>
  </div>
  </div>
</nav>
</>
)
}
export default Navbar;
