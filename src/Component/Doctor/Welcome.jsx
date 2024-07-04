import "./welcome.css"
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './../../utils/doctorAction.jsx';

const Welcome = () => {
const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  return (
    <>
{   user && <div className="head">
      <h1 className="header">Welcome {user.fname} {user.lname}</h1>
      
      <div > <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt=""/></div>
      </div>
  }

  {
    !user &&  <h1 className="header">Welcome But Doctor not found</h1>
  }
    </>
  
  );
};

export default Welcome;