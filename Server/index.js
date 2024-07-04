import express from "express"
import cors from "cors"
import body from "body-parser"
import userRoute from "./Routes/web.js"
import mongoose from "mongoose"
const app=express()
app.use(express.json())
app.use(cors())
app.use(body.json())

const connectDb=async()=>{
mongoose.connect("mongodb://127.0.0.1:27017/MediTrack")
console.log("Sccessfully contected")	
}
connectDb()

app.use("/user",userRoute);

app.listen(8000,()=>{
	console.log("listen at 8000")
})