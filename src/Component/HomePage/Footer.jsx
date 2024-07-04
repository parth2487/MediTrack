import React,{useEffect} from 'react';
import "./homepage.css"



const Footer = () => {
      useEffect(() => {
       const wow = new WOW({
            live: false // Optional: set to true if you want to re-initialize on DOM changes
        });
        wow.init();
    }, []);
  return (
    <>
     <div class="container wow animate__animated animate__fadeInUp">

        <div class="grid grid-cols-3 gap-8 mt-10">

            <div>

                <h2 class="text-xl font-bold mb-4">NEW YORK</h2>

                <p>Huntersville, </p>

                <p>957 Hill Hills Suite 491, United States</p>

                <div class="flex items-center mb-2">

                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.5a2 2 0 002-2V8a2 2 0 00-2-2h-.5l-.5-.5a2 2 0 00-2 0l-.5.5V16a2 2 0 002 2z" /></svg>

                    <p>Office: +12(3) 456 7890 1234</p>

                </div>

                <div class="flex items-center">

                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>

                    <p>Support: company@name.com</p>

                </div>

            </div>

            <div>

                <h2 class="text-xl font-bold mb-4">ROME</h2>

                <p>Piazza di Spagna,</p>

                <p>00187 Roma RM, Italy</p>

                <div class="flex items-center mb-2">

                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.5a2 2 0 002-2V8a2 2 0 00-2-2h-.5l-.5-.5a2 2 0 00-2 0l-.5.5V16a2 2 0 002 2z" /></svg>

                    <p>Office: +12(3) 456 7890 1234</p>

                </div>

                <div class="flex items-center">

                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>

                    <p>Support: company@name.it</p>

                </div>

            </div>

            <div>

                <h2 class="text-xl font-bold mb-4">LONDON</h2>

                <p>Fulham Rd,</p>

                <p>London SW6 1HS, United Kingdom</p>

                <div class="flex items-center mb-2">

                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.5a2 2 0 002-2V8a2 2 0 00-2-2h-.5l-.5-.5a2 2 0 00-2 0l-.5.5V16a2 2 0 002 2z" /></svg>

                    <p>Office: +12(3) 456 7890 1234</p>

                </div>

                <div class="flex items-center">

                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>

                    <p>Support: company@name.co.uk</p>

                </div>

            </div>

        </div>

        <div class="flex justify-center mt-10">

            <div class="flex items-center gap-4">

                <p>Sign up to our newsletter</p>

                <div>

                    <div class="relative">

                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">

                            <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>

                        </div>

                        <input type="text" id="email" class="block p-2.5 w-[300px] px-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Your email"/>

                    </div>

                </div>

                <button type="button" class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">

                    Subscribe

                </button>

            </div>

        </div>

        <footer class="mt-10 text-center">

            <p>&copy; 2021-2022 Flowbite™. All Rights Reserved.</p>

            <div class="flex justify-center mt-4">

                <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-500 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-blue-800">

                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.5a2 2 0 002-2V8a2 2 0 00-2-2h-.5l-.5-.5a2 2 0 00-2 0l-.5.5V16a2 2 0 002 2z" /></svg>

                    English (US)

                </button>

            </div>

        </footer>

    </div>


</>
)
}
export default Footer;
