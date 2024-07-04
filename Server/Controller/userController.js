import express from "express"
import mongoose from "mongoose"
import doctor from "../models/doctorModel.js"
import patient from "../models/patientModel.js"
export const SignupDoctor=async(req,res)=>{
	//  const [formData, setFormData] = useState({
  //   fname: '',
  //   lname: '',
  //   email: '',
  //   password: '',
  //   address: '',
  //   city: '',
   
  // });
 // const [DoctorData, setDoctorData] = useState({
 //    clinicName: '',
 //    id:'',
 //    photo: '',
 //    experience: '',
 //    specialization: '',
 //    educationQualification: ''
 //  });

	const {fname,lname, email,password, address,city,clinicName,id,photo,experience,specialization,educationQualification}=req.body;
	console.log(req.body)
	console.log(fname)
	console.log(specialization)


	//****************
	// if (!name || !email || !password) {
 //    res.send(400);
 //    throw Error("All necessary input fields have not been filled");
 //  }
 //  //******************
 //  //*****************
 // // pre-existing user
  const doctorExist = await doctor.findOne({ email });
  if (doctorExist) {
    // res.send(405);
    throw new Error("doctor exixt");
  }
 //    // userName already Taken
  const doctorid = await doctor.findOne({ id });
  if (doctorid) {
    // res.send(406);
    throw new Error("doctor id is there");
  }
 //  //***************
 //  //****************
 // // create an entry in the db
  const user = await doctor.create({fname,lname, email,password, address,city,clinicName,id,photo,experience,specialization,educationQualification});
  if (user) {
    res.status(201).json({
      _id: user._id,
      
    });
  } else {
    res.status(400);
    throw new Error("Registration Error");
  }

}





export const SignupPatient=async(req,res)=>{
	//  const [formData, setFormData] = useState({
  //   fname: '',
  //   lname: '',
  //   email: '',
  //   password: '',
  //   address: '',
  //   city: '',
   
  // });
  //  const [PatientData, setPatientData] = useState({
  //   doctorId:'',
  //   clinicName:'',
  //   diseasesName:'',
  //   patientAge:'',
  //   photo:''
  // });

	const {fname,lname, email,password, address,city,doctorId,clinicName,diseasesName,patientAge,photo}=req.body;
	console.log(req.body)
	console.log(fname)
	console.log(diseasesName)
	//****************
	// if (!name || !email || !password) {
 //    res.send(400);
 //    throw Error("All necessary input fields have not been filled");
 //  }
 //  //******************
 //  //*****************
  const patientExist = await patient.findOne({ email });
  if (patientExist) {
    // res.send(405);
    throw new Error("patient exixt");
  }
 //  }
 //    // userName already Taken
 //  const userNameExist = await UserModel.findOne({ name });
 //  if (userNameExist) {
 //    // res.send(406);
 //    throw new Error("UserName already taken");
 //  }
 //  //***************
 //  //****************
 // // create an entry in the db
  const user = await patient.create({fname,lname, email,password, address,city,doctorId,clinicName,diseasesName,patientAge});
  if (user) {
    res.status(201).json({
      _id: user._id,
    });
  } else {
    res.status(400);
    throw new Error("Registration Error");
  }


}


