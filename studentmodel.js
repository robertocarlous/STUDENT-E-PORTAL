const mongoose = require("mongoose");
const {Schema} = require("mongoose");
const studentSchema= new Schema({
    name:{
        type:String,
    },
    password:{
        type:String, 
    },
    faculty:{
        type:String,
    },
})
const StudentModel = mongoose.model("student", studentSchema);
module.exports = StudentModel;