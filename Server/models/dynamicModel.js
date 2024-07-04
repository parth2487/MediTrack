const mongoose = require('mongoose');
const medicineBaseSchema = require('./medicineModel.js');

const getMedicineModelForPatient = (patientId) => {
  const collectionName = `medicines_patient_${patientId}`;
  return mongoose.model(collectionName, medicineBaseSchema, collectionName);
};
export default getMedicineModelForPatient 
