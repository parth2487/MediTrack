import React, { useEffect } from 'react';


import './pricing.css'; // Import CSS file for animations

const Pricing = () => {
    useEffect(() => {
       const wow = new WOW({
            live: false // Optional: set to true if you want to re-initialize on DOM changes
        });
        wow.init();
    }, []);

    return (
        <>
            <div className="bg-white-100 py-12">
                <h2 className="text-3xl font-bold text-center mb-8 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">Features</h2>
                <p className="text-lg text-gray-600 text-center mb-6 wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">Start growing in half the time with an all-in-one website builder - no more long hours spent on the boring stuff!</p>

                <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap -mx-4">
                        {/* Pricing Cards */}
                        <div className="pricing-card w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-gray-800">Basic Plan</h2>
                                <div className="mt-4">
                                    <span className="text-5xl font-bold text-gray-900">$19</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                                <ul className="mt-6 space-y-2">
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Unlimited Access
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        24/7 Customer Support
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Premium Features
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <a href="#" className="block w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-center py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">Get Started</a>
                                </div>
                            </div>
                        </div>
                        {/* Repeat for other pricing cards with different data-wow-delay values */}
                        <div className="pricing-card w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-gray-800">Pro Plan</h2>
                                <div className="mt-4">
                                    <span className="text-5xl font-bold text-gray-900">$39</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                                <ul className="mt-6 space-y-2">
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Unlimited Access
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        24/7 Customer Support
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Premium Features
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <a href="#" className="block w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-center py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">Get Started</a>
                                </div>
                            </div>
                        </div>
                        <div className="pricing-card w-full sm:w-1/2 lg:w-1/3 px-4 mb-8 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
                            <div className="bg-white p-6 rounded-lg shadow-lg">
                                <h2 className="text-2xl font-semibold text-gray-800">Premium Plan</h2>
                                <div className="mt-4">
                                    <span className="text-5xl font-bold text-gray-900">$59</span>
                                    <span className="text-gray-600">/month</span>
                                </div>
                                <ul className="mt-6 space-y-2">
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Unlimited Access
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        24/7 Customer Support
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        Premium Features
                                    </li>
                                </ul>
                                <div className="mt-8">
                                    <a href="#" className="block w-full bg-indigo-500 hover:bg-indigo-400 text-white font-semibold text-center py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">Get Started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;
