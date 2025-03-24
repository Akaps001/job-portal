import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import 'express-async-errors'
import connectDb from "./Config/connectDb.js";
import testRoute from "./Routes/testRoute.js"
import authRoute from "./Routes/authRoute.js"
import errorMiddleware from "./middlewares/errorMiddleware.js"
import morgan from "morgan";
import cors from "cors"
const PORT = process.env.PORT || 3000
dotenv.config();
const app = express();
app.use(express.json())
app.use(cors());
app.use(morgan("dev"));
app.use(errorMiddleware)
app.get("/",(req,res)=>{
    res.send("Job portal")
})
app.use('/api/v1/test',testRoute)
app.use('/api/v1/auth',authRoute)
connectDb()

app.listen(PORT,()=>{
    console.log(`Node Server Running in ${process.env.DEV_MODE} Mode On Port ${PORT}`.bgCyan)
})