//Importing Libraries
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import cors from "cors";

//Importing routes
import ticketRoutes from "./routes/ticketRoutes.js";


//Initializing
dotenv.config();
const app=express()

connectDB();

//Constants
const port=process.env.PORT


// Middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
app.use('/api/tickets', ticketRoutes);

app.get("/",(req,res)=>{
    res.send("Hyy");
})

//running server
app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})   