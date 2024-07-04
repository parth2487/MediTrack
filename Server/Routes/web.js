import express from "express"
import mongoose from "mongoose"
const router=express.Router();
import {SignupDoctor} from "../Controller/userController.js"
import {SignupPatient} from "../Controller/userController.js"
import {Medicine} from "../Controller/medicineadderController.js"
import {GetMedicine} from "../Controller/medicineadderController.js"
import {updateMedicine} from "../Controller/medicineadderController.js"
import {deleteMedicine} from "../Controller/medicineadderController.js"
import {getPatient} from "../Controller/getPatient.js"
import {PatientMedi} from "../Controller/getPatient.js"
import {givenMedi} from "../Controller/patientMedi.js"
import {givenMediget} from "../Controller/patientMedi.js"
import {notice} from "../Controller/patientMedi.js"
router.post("/signup/doctor",SignupDoctor);
router.post("/signup/patient",SignupPatient);
router.post("/medicine/:id",Medicine);
router.get("/getmedi/:id",GetMedicine);
router.post("/updatemedi",updateMedicine);
router.post("/deletemedi",deleteMedicine);
router.get("/getPatient/:id",getPatient);
router.get("/PatientMedi/:id",PatientMedi);
router.post("/givenMedi/:id",givenMedi);
router.get("/givenMediget/:id",givenMediget);
router.post("/notice/:id",notice);
export default router;