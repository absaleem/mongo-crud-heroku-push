const express=require("express");
const router=express.Router();
const employeeModule= require("../modules/Employees");

router.get("/get",employeeModule.getEmployees);

router.put("/update/:id",employeeModule.updateEmployees);

router.post("/create",employeeModule.createEmployees);

router.delete("/delete/:id",employeeModule.deleteEmployees);

module.exports=  router;