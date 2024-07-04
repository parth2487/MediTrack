import express from "express"
import mongoose from "mongoose"
import doctor from "../models/doctorModel.js"
import patient from "../models/patientModel.js"
import medicine from "../models/medicineModel.js"
export const getPatient=async(req,res)=>{
	 const Id = req.params.id;
	 const fp=await patient.find({doctorId:Id});
	 res.status(201).send(fp)
}



export const PatientMedi=async(req,res)=>{
	 const Id = req.params.id;
	  const fp=await medicine.find({doctor:Id});
	  res.status(201).send(fp)
}