import "./profile.css"
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './../../utils/doctorAction.jsx';
 
const Profile = () => {
   const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log(user)
    return (
       <section className="section about-section gray-bg" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">About Me</h3>
                            <h6 className="theme-color lead">A Lead UX &amp; UI designer based in Canada</h6>
                            <p>Hello, I am {user.fname} {user.lname}, a {user.specialization} with over {user.experience} years of experience. I specialize in {user.educationQualification} from Harvard Medical School. Dedicated to providing exceptional patient care, I continually update my skills with the latest medical advancements and research.</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Clinic</label>
                                        <p>{user.clinicName}</p>
                                    </div>
                                    <div className="media">
                                        <label>Age</label>
                                        <p>{user.age}</p>
                                    </div>
                                    <div className="media">
                                        <label>Residence</label>
                                        
                                        <p>{user.city}</p>
                                    </div>
                                    <div className="media">
                                        <label>Address</label>
                                        <p>India</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>{user.email}</p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p>820-885-3321</p>
                                    </div>
                                    <div className="media">
                                    
                                        <label>Id No.</label>
                                        <p>{user.id}</p>
                                    </div>
                                    <div className="media">
                                        <label>Doctor</label>
                                        <p>Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="counter">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="500" data-speed="500">500</h6>
                                <p className="m-0px font-w-600">Happy Patients</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="150" data-speed="150">150</h6>
                                <p className="m-0px font-w-600">Operation Completed</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="850" data-speed="850">850</h6>
                                <p className="m-0px font-w-600">Rating</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="190" data-speed="190">190</h6>
                                <p className="m-0px font-w-600">Team Size</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
