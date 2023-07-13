// API listing for students with an active portal for results checking
const express = require ("express");
const app = express();
app.use(express.json())
const connectDB = require("./db")
const StudentModel = require("./studentmodel");
connectDB();

app.get("/", async (req,res)=>{
    const students = await StudentModel.find({}) 
    res.json({message:"data retrieve successfully", data:students});
})
// Create ID
app.post("/createStudent", async (req, res)=>{
    const body   = req.body;
    await StudentModel.create({
    name:body.name,
    password:body.password,
    faculty:body.faculty,
    });
      res.json({message:"created successfully"})
})
// update ID
app.put("/:id", async (req,res)=>{
    const id = req.params.id
    const body = req.body
    const student = await StudentModel.findOne({_id:id})
    if(!student) {
    return res.json({message:"student not found"})
    }
    student.status = body.status || token.status
    await student.save()
res.json({message:"data updated successfully", data:student})
    
})    
//get a single id 
app.get("/:id",async (req,res)=>{
  const id = req.params.id
  const ele = await StudentModel.findOne({_id:id})
  if(!ele){
      res.json({message:"data not found"})
  }else{
      res.json({message: "data fetched successfully", data:ele})
  }
})
//delete request
app.delete("/:id", async (req, res) => {
  const id = req.params.id
  const ele = await StudentModel.findOne({_id:id})
  if(!ele){
      res.json({message:"data not found"})
  }else{
    await StudentModel.deleteOne({_id:id})
      res.json({message: "data deleted successfully"})
  }
  });

app.listen(6000, (req, res) =>{
    console.log("Server is listening on port 6000")

})

