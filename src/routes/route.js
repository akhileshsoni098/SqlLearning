const express = require('express');
const router = express.Router();

const Employee = require("../models/EmployeeModel");


router.get('/getData', async function (req, res) {    
  let data= await Employee.getEmployee()
  console.log(data)
  res.send({data:data, status:true})
});


router.post('/createData', async function (req, res) {    
    let data= await Employee.createEmployee()
    console.log(data)
    res.send({data:data, status:true})
  });


module.exports = router;