import "./welcome.css"
 import { useDispatch, useSelector } from 'react-redux';
import { setPatient } from './../../utils/patientAction.jsx';
const Welcome = () => {

const dispatch = useDispatch();
  const patient = useSelector((state) => state.patient);
  return (
    <>
   {   patient && <div className="head">
      <h1 className="header">Welcome {patient.fname} {patient.lname}</h1>
      
      <div > <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt=""/></div>
      </div>
  }

  {
    !patient &&  <h1 className="header">Welcome But Patient not found</h1>
  }
    </>
  );
};

export default Welcome;