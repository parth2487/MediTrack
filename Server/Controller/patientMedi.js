import express from "express"
import mongoose from "mongoose"
import doctor from "../models/doctorModel.js"
import patient from "../models/patientModel.js"
import medicine from "../models/medicineModel.js"
import givenmedi from "../models/givenMedicine.js"
import noticetopatient from "../models/noticetopatient.js"

export const givenMedi=async(req,res)=>{
		const { name,power,age,disease,duration,quantity,times,when}=req.body;
		const patientId=req.params.id
		  const user = await givenmedi.create({ name,power,age,disease,duration,quantity,times,when,patientId});
		  if(user){
		  	res.send(user)
		  }else{
		  	throw new Error("Not ok bro")
		  }
}


export const givenMediget=async(req,res)=>{
	const Id=req.params.id
	const tp=await givenmedi.find({patientId:Id});
	if(tp){
		res.status(201).send(tp)
	}else{
		throw new Error("no no no")
	}
}


export const notice=async(req,res)=>{
	const Id=req.params.id
	console.log(req.body)
	const {notice}=req.body;
	 const user = await noticetopatient.create({notice,Id});
	 if(user){
	 	res.status(201).send(user)
	 }
	 else{
	 	throw new Error("This Error is Successfully removed")
	 }
}