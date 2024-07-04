import express from "express"
import mongoose from "mongoose"
const doctorModel=mongoose.Schema({
	fname:{
		type:String
	},
	lname:{
		type:String
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
    id:{
    	type:Number
    },
    experience:{
    	type:Number
    },
	specialization:{
		type:String
	},
	educationQualification:{
		type:String,
	},
	
})

const doctor= mongoose.model('Doctor', doctorModel);

export default doctor;