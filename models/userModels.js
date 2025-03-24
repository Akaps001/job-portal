import mongoose from "mongoose";
import validator from "validator"
const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:[true,"Name is required"]

},
email:{
    type:String,
    required:[true,'Email is required'],
    unique:true,
    validate:validator.isEmail
},
location:{
    type:String,
    default:"Nigeria"
},
password:{
    type:String,
    required:[true,'Password Is Required'],
}
},{timestamps:true})
export default mongoose.model('User',userSchema) 