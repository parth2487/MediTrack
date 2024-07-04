import React,{useEffect} from 'react';
import "./features.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faLock } from '@fortawesome/free-solid-svg-icons';

function Features() {
   useEffect(() => {
       const wow = new WOW({
            live: false // Optional: set to true if you want to re-initialize on DOM changes
        });
        wow.init();
    }, []);
  return (

    <div className="container mx-auto px-4 py-8">
      {/*  <h2 classNameName="text-3xl font-bold text-center mb-8 wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">Features</h2>  */}

      <h2 className="text-3xl font-bold text-center mb-8 wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">Features</h2>
      <p className="text-lg text-gray-600 text-center mb-16 wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">Start growing in half the time with an all-in-one website builder - no more long hours spent on the boring stuff!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
        <div className="bg-white rounded-lg shadow-md p-6 text-center card  wow animate__animated animate__fadeInUp" data-wow-delay="0.6s">
          <FontAwesomeIcon icon={faHeart} className="text-yellow-500 text-4xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
          <p className="text-gray-600 mb-4">Want to create something beautiful? Now you can. In hours, not weeks.</p>
          <button className="bg-white hover:bg-white text-green font-bold py-2 px-4 rounded sop">Learn more</button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center card  wow animate__animated animate__fadeInUp" data-wow-delay="1s">
          <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-4xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Variety of Designs</h3>
          <p className="text-gray-600 mb-4">That's a brilliant idea you've got. Build it, and they will come.</p>
          <button className="bg-white hover:bg-white text-green font-bold py-2 px-4 rounded sop">Learn more</button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 text-center card  wow animate__animated animate__fadeInUp" data-wow-delay="1.4s">
          <FontAwesomeIcon icon={faLock} className="text-yellow-500 text-4xl mb-4" />
          <h3 className="text-xl font-bold mb-2">Feel Our Design</h3>
          <p className="text-gray-600 mb-4">Now you're one step closer to the optimal design workflow.</p>
          <button className="bg-white hover:bg-white text-green font-bold py-2 px-4 rounded sop">Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default Features;
