import mongoose from "mongoose";
import colors from "colors"
import dotenv from "dotenv"
dotenv.config()
const connectDb = async ()=>{
 try {
    const conn = await mongoose.connect(process.env.MONGO_LOCAL_URI)
    console.log("Connected to Database".bgYellow)
 } catch (error) {
    console.log(`MongoDb Error ${error}`.bgMagenta)
 }
}
export default connectDb
