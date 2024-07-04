import React, { useState } from 'react';
import axios from "axios"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './../../utils/doctorAction.jsx';
import { setPatient } from './../../utils/patientAction.jsx';
const SignUp = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const patient = useSelector((state) => state.patient);
  const [step, setStep] = useState(1);
  const [role, setRole] = useState('');
  const [finalResult, setfinalResult] = useState({});
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    address: '',
    city: '',
   
  });
    const navigate = useNavigate();
   const [PatientData, setPatientData] = useState({
    doctorId:'',
    clinicName:'',
    diseasesName:'',
    patientAge:'',
    photo:''
  });
  const [DoctorData, setDoctorData] = useState({
    clinicName: '',
    id:'',
    photo: '',
    experience: '',
    specialization: '',
    educationQualification: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctorData({ ...DoctorData, [name]: value });
  };

     const handleChange2 = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleChange3=(e)=>{
      const { name, value } = e.target;
    setPatientData({ ...PatientData, [name]: value });
  }
 const handlePatient= async(e)=>{
  e.preventDefault();
  const fp={...formData,...PatientData}
  console.log(fp)

   try{
  axios.post("http://127.0.0.1:8000/user/signup/patient",fp).then((req,rev)=>{
    console.log("yes ok ne bro")
    console.log("Set user to rudux")
      const kp={...req.data,...fp}; 
      console.log(kp) 
       dispatch(setPatient(kp));
     navigate("/patient");
  }).catch((err)=>{
    console.log("nonon")
  })
}
  catch(err){
    navigate("/")
 console.log(err);
}
 
 }
  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handlePhotoChange = (e) => {
    setFormData({ ...formData, photo: URL.createObjectURL(e.target.files[0]) });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log("formData")
    console.log(formData);
    console.log("patientData")
    console.log(PatientData)
    console.log("DoctorData")
    console.log(DoctorData)
  };
const handleDoctorSubmit=(e)=>{
  e.preventDefault()
  const fp={...formData,...DoctorData}
  console.log(fp)
  setfinalResult(fp)
  try{
  axios.post("http://127.0.0.1:8000/user/signup/doctor",fp).then((req,rev)=>{
   console.log("yes ok ne bro")
   console.log("req is")
  console.log(req.data)
   const kp={...req.data,...fp};
    // console.log("Set user to rudux")
    console.log(kp)
     console.log("rev is")
   console.log(rev)
    dispatch(setUser(kp));

     navigate("/doctor", { state: { doctorDetails: fp } })
  }).catch((err)=>{
    console.log("nonon")
  })
 
 
}
  catch(err){
    navigate("/")
 console.log(err);
}
}

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-center">Sign Up for MediTrack</h2>
        <form  className="space-y-4">
          {step === 1 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange2}
                  placeholder="First Name"
                  className="p-3 border rounded"
                  required
                />
                <input
                  type="text"
                  name="lname"
                  value={formData.lname}
                  onChange={handleChange2}
                  placeholder="Last Name"
                  className="p-3 border rounded"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange2}
                  placeholder="Email"
                  className="p-3 border rounded"
                  required
                />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange2}
                  placeholder="Password"
                  className="p-3 border rounded"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange2}
                  placeholder="Address"
                  className="p-3 border rounded"
                  required
                />
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange2}
                  placeholder="City"
                  className="p-3 border rounded"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select
                  value={role}
                  onChange={handleRoleChange}
                  className="p-3 border rounded"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleNextStep}
                  className="bg-blue-500 text-white p-3 rounded"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {step === 2 && role === 'patient' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="doctorId"
                  value={PatientData.doctorName}
                  onChange={handleChange3}
                  placeholder="Doctor Id"
                  className="p-3 border rounded"
                  required
                />
                <input
                  type="text"
                  name="clinicName"
                  value={PatientData.clinicName}
                  onChange={handleChange3}
                  placeholder="Clinic Name"
                  className="p-3 border rounded"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="diseasesName"
                  value={PatientData.diseasesName}
                  onChange={handleChange3}
                  placeholder="Diseases Name"
                  className="p-3 border rounded"
                  required
                />
                <input
                  type="text"
                  name="patientAge"
                  value={PatientData.patientCity}
                  onChange={handleChange3}
                  placeholder="Age"
                  className="p-3 border rounded"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                <div className="flex flex-col items-center">
                  <div className="w-52 h-52 border rounded-lg overflow-hidden">
                    {PatientData.photo && (
                      <img
                        src={PatientData.photo}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <input
                    accept="image/*"
                    type="file"
                    onChange={handlePhotoChange}
                    className="mt-2"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="bg-gray-500 text-white p-3 rounded"
                >
                  Previous
                </button>
                <button
                
                  className="bg-blue-500 text-white p-3 rounded"
                  onClick={handlePatient}
                >
                  Submit
                </button>
              </div>
            </>
          )}


          {step === 2 && role === 'doctor' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="clinicName"
                  value={DoctorData.clinicName}
                  onChange={handleChange}
                  placeholder="Clinic Name"
                  className="p-3 border rounded"
                  required
                />
                <input
                  type="number"
                  name="experience"
                  value={DoctorData.experience}
                  onChange={handleChange}
                  placeholder="Experience"
                  className="p-3 border rounded"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="specialization"
                  value={DoctorData.specialization}
                  onChange={handleChange}
                  placeholder="Specialization Area"
                  className="p-3 border rounded"
                  required
                />
                <select
                  value={DoctorData.educationQualification}
                  onChange={handleChange}
                  name="educationQualification"
                  className="p-3 border rounded"
                  required
                >
                  <option value="">Select Education Qualification</option>
                  <option value="MBBS">MBBS</option>
                  <option value="MD">MD</option>
                  <option value="DO">DO</option>
                  <option value="PhD">PhD</option>
                </select>
              </div>
       <div className="flex flex-col items-center"  style={{justifyContent:"center"  }}>
        <input
                  type="text"
                  name="id"
                  value={DoctorData.id}
                  onChange={handleChange}
                  placeholder="Id Number"
                  className="p-4 border rounded"
                  required
                />
  <div className="w-52 h-52 rounded-lg overflow-hidden"  style={{justifyContent:"center" ,alignItem:"center" }}>

    {formData.photo ? (
      <img
        src={DoctorData.photo}
        alt="Profile"
        className=" w-full h-full"
        style={{justifyContent:"center"  }}
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center text-gray-400">
        <span className="text-sm">Upload Photo</span>
      </div>
    )}
  </div>
  <input
    accept="image/*"
    type="file"
    onChange={handlePhotoChange}
    className="mt-2"
  />
</div>


              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={handlePrevStep}
                  className="bg-gray-500 text-white p-3 rounded"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white p-3 rounded"
                  onClick={handleDoctorSubmit}
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
