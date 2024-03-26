const express=require('express')
const router=express.Router()

const employeeController=require('../controllers/employeeController')
const Employee=require('../models/Employee')

//get,post,put/patch,delete

router.post('/add-emp',employeeController.createEmployee)
router.get('/allemployees',employeeController.getEmployees)
router.get('/employeesbyID/:id',employeeController.getEmployeesbyID)
router.put('/updateEmployeesbyID/:id',employeeController.updateEmployee)
router.delete('/deleteEmployeesbyID/:id',employeeController.deleteEmployee)
 
module.exports=router