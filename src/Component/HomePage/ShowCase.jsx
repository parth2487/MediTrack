import React,{useEffect} from 'react';
import "./showcase.css"
function ShowCase() {
   useEffect(() => {
       const wow = new WOW({
            live: false // Optional: set to true if you want to re-initialize on DOM changes
        });
        wow.init();
    }, []);
  return (
    <div className="container mx-auto px-4 my-16">
      {/*  <h2 classNameName="text-3xl font-bold text-center mb-8 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">Features</h2>  */}

      <h1 className="text-3xl font-bold text-center mb-4 wow animate__animated animate__fadeInUp"  data-wow-delay="0.6s">We could create anything</h1>
      <p className="text-center text-gray-500 mb-8 wow animate__animated animate__fadeInUp"  data-wow-delay="0.8s">Start growing in half the time with an all-in-one website builder - no more long hours spent on the boring stuff!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 wow animate__animated animate__fadeInUp">
        <div className="bg-white rounded-lg shadow-md p-4 wow animate__animated animate__fadeInUp" data-wow-delay="1.2s">
          <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D" alt="Design 1" className="rounded-lg mb-4 mx-1 bob" />
          <h2 className="text-xl font-bold mb-2">Branding</h2>
          <h3 className="text-lg font-medium mb-2">Variety of Designs</h3>
          <p className="text-gray-500">Imagine presentation on your device without any troubles and missings</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 wow animate__animated animate__fadeInUp"  data-wow-delay="1.4s">
          <img src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D" alt="Design 2" className="rounded-lg mb-4 mx-1 my-1 bob" />
          <h2 className="text-xl font-bold mb-2">Branding</h2>
          <h3 className="text-lg font-medium mb-2">Variety of Designs</h3>
          <p className="text-gray-500">Imagine presentation on your device without any troubles and missings</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 wow animate__animated animate__fadeInUp"  data-wow-delay="1.8s">
          <img src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Design 3" className="rounded-lg mb-4 mx-1 bob " />
          <h2 className="text-xl font-bold mb-2">Branding</h2>
          <h3 className="text-lg font-medium mb-2">Variety of Designs</h3>
          <p className="text-gray-500">Imagine presentation on your device without any troubles and missings</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white rounded-lg shadow-md p-4 wow animate__animated animate__fadeInUp"  data-wow-delay="0.4s">
          <img src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D" alt="Design 4" className="rounded-lg mb-4 mx-1 bob" />
          <h2 className="text-xl font-bold mb-2">Branding</h2>
          <h3 className="text-lg font-medium mb-2">Variety of Designs</h3>
          <p className="text-gray-500">Imagine presentation on your device without any troubles and missings</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 wow animate__animated animate__fadeInUp"  data-wow-delay="0.8s">
          <img src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Design 5" className="rounded-lg mb-4 mx-1 bob" />
          <h2 className="text-xl font-bold mb-2">Branding</h2>
          <h3 className="text-lg font-medium mb-2">Variety of Designs</h3>
          <p className="text-gray-500">Imagine presentation on your device without any troubles and missings</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 wow animate__animated animate__fadeInUp"  data-wow-delay="1.2s">
          <img src="https://images.unsplash.com/photo-1609342332922-c1d9ace16697?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Design 6" className="rounded-lg mb-4 mx-1 bob" />
          <h2 className="text-xl font-bold mb-2">Branding</h2>
          <h3 className="text-lg font-medium mb-2">Variety of Designs</h3>
          <p className="text-gray-500">Imagine presentation on your device without any troubles and missings</p>
        </div>
      </div>
    </div>
  );
}

export default ShowCase;
