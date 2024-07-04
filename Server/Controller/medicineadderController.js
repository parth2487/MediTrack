import express from "express"
import mongoose from "mongoose"
import doctor from "../models/doctorModel.js"
import patient from "../models/patientModel.js"
import medicine from "../models/medicineModel.js"

export const Medicine=async(req,res)=>{
 try {
    const doctorId = req.params.id;
    
console.log("hiii")
    // Check if the doctor exists
    const doctor2 = await doctor.findById(doctorId);
    if (!doctor2) {
      return res.status(404).json({ message: 'Doctor not found' });
    }

    // Create a new medicine
    const kp={
      "doctor":doctorId
    }
    const fp={...req.body,...kp}
    console.log(fp)
    const newMedicine = new medicine(fp);

    // Save the medicine to the database
    await newMedicine.save();

    res.status(201).json(newMedicine);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


export const GetMedicine=async(req,res)=>{
const doctorId = req.params.id;
console.log(doctorId)
 const doctor2 = await medicine.find({doctor:doctorId});
  if (!doctor2) {
      return res.status(404).json({ message: 'Medicine not found' });
    }else{
      res.status(201).json(doctor2);
    }
}



export const updateMedicine=async(req,res)=>{



console.log(req.body)
  
  const upd = await medicine.findByIdAndUpdate(req.body.user._id,req.body.formData);
 
  if (!upd) {
      return res.status(404).json({ message: 'Medicine not found' });
    }else{
      res.status(201).json(upd);
    }
}

export const deleteMedicine=async(req,res)=>{



console.log(req.body)
  
  const upd = await medicine.deleteOne({_id:req.body._id});
            console.log(upd)
  if (!upd) {
      return res.status(404).json({ message: 'Medicine not found' });
    }else{
      res.status(201).json(upd);
    }
}