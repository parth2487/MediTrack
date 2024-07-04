import express from "express"
import mongoose from "mongoose"
const patientModel=mongoose.Schema({
	fname:{
		type:String,
	},
	lname:{
		type:String,
	},
	PatientAge:{
		type:Number,
	},
	email:{
		type:String
	},
	password:{
		type:String
	},
	address:{
		type:String
    },
    city:{
    	type:String
    },
    clinicName:{
    	type:String
    },
    doctorId:{
    	type:Number
    },
    diseasesName:{
    	type:String
    }
	
})

const patient= mongoose.model('Patient', patientModel);

export default patient;