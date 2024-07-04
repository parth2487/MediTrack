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
   diseas: {
    type: String,
    required: true
  },
  doctor: {
    type: Schema.Types.ObjectId,
    ref: 'Doctor',
    required: true
  }
});

const Medicine = mongoose.model('Medicine', medicineSchema);
export default Medicine;
