

const LandingPage=()=>{
return(
<section class="sm:mt-6 lg:mt-8 mt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/*  <h2 classNameName="text-3xl font-bold text-center mb-8 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">Features</h2>  */}

    <div
        class="my-1 mx-auto mr-16 max-w-9xl px-12s sm:mt-1 sm:px-[500px] md:mt-1 lg:mt-2 lg:px-16 xl:mt-2 flex gap-8 lg:flex-justify lg:flex flex-col lg:flex-row">
        <div class="sm:text-center lg:text-left mr-16">
            <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Welcome to </span>
                <span class="block text-indigo-600 xl:inline">MediTrack</span>
            </h1>
            <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Track your health seamlessly with Meditrack. Stay on top of your wellness goals, monitor progress, and get personalized insights. Your journey to better health starts here
            </p>
          
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="mt-3 rounded-md shadow">
                    <a href="#"
                        class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                        Get started
                    </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#"
                        class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                        Live demo
                    </a>
                </div>
            </div>
           
        </div>

       
        <div class="lg:inset-y-0 lg:right-0 lg:w-1/2 my-4">
            <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D" alt=""/>
        </div>
   
    </div>

</section>
)
}
export default LandingPage;