import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDB= async ()=>{
    try{
        mongoose.set('strictQuery',false)
        const conn=await mongoose.connect(process.env.MONGO_URI);
        console.log(`Database connected:${conn.connection.host}`);
    }catch(err){
        console.log(err);
    }
}

export default connectDB;