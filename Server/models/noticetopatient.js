import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const medicineSchema = new Schema({
	notice:{
		type:String,
	},
	Id:{
		type: Schema.Types.ObjectId,
   		ref: 'Patient',
    	required: true
	}
})


const noticetopatient = mongoose.model('noticetopatient', medicineSchema);
export default noticetopatient;
