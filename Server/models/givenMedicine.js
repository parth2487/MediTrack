import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const medicineSchema = new Schema({
	 name: {
    type: String,
    required: true
  },
  power: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
   disease: {
    type: String,
    required: true
  },
  duration:{
  	type:String,
  },
  quantity:{
  	type:String,
  },
  times:{
  	type:String,
  },
  when:{
  	type:String,
  },
  patientId:{
  	type:Schema.Types.ObjectId,
  	ref: 'Patient',
    required: true
  }
});

const GivenMedicine = mongoose.model('GivenMedicine', medicineSchema);
export default GivenMedicine;
