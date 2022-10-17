const { ObjectID } = require("bson");
const  mongo  = require("../connect.js")
const { ObjectId } = require("mongodb");
  
module.exports.getEmployees= async(req,res,next)=>{
    try{
     employeesData = await mongo.selectedDB.collection("employees").find().toArray();
     res.send(employeesData);
    }catch(error){ 
        res.status(500).send(error);
    }
};

module.exports.updateEmployees=async (req,res,next)=>{
try{
    const id=req.params.id;
    const updatedData= await mongo.selectedDB.collection("employees").findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: { ...req.body} },
    { returnDocument: "after" },   
    );
    res.send({ updatedData });
}  catch(error){
    res.status(500).send(error);
} 
   
};

module.exports.createEmployees=async(req,res,next)=>{
    try{
      responseInserted = await mongo.selectedDB.collection("employees").insertOne(req.body);
      res.send(responseInserted);
    }catch(error){
        console.error(error);
        res.status(500).send(error);
    }

};

module.exports.deleteEmployees=async(req,res,next)=>{
    try{
        const id=req.params.id;
        const deletedData= await mongo.selectedDB.collection("employees")
        .remove({ _id: ObjectId(id) });
        res.send({ deletedData });
    }  catch(error){
        res.status(500).send(error);
    } 
};