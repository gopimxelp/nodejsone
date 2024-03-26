const Employee=require('../models/Employee')

const createEmployee=async(req,res)=>{
    try{
        const {name,email,phone,city}=req.body
        console.log(name,email,phone,city,"name,email,phone,city")

        const employee=new Employee({
            name,email,phone,city
        })
        await employee.save()
        res.status(201).json(employee)
    }
    catch(error){
        console.log("error is occured",error)
        res.status(500).json({
            message:'Server error'
        })

    }
    
}

const getEmployees=async(req,res)=>{
    try{
        const employees=await Employee.find()
        res.status(200).json(employees)
    }
    catch(error){
        console.error('thers is an error',error)
        res.status(500).json({
            message:'Server Error'
        })

    }
}

const getEmployeesbyID=async(req,res)=>{
    try{
        const employees=await Employee.findById(req.params.id)
        if(!employees){
            return res.status(404).json({
                message:'Employee not found'
            })
        }
        res.status(200).json(employees)
    }
    catch(error){
        console.error('thers is an error',error)
        res.status(500).json({
            message:'Server Error'
        })

    }
}

const updateEmployee=async(req,res)=>{
    try{
        const {name,email,phone,city}=req.body
        const myEmployee=await Employee.findByIdAndUpdate(req.params.id,{name,email,phone,city})
        if(!myEmployee){
            return res.status(404).json({
                message:'Employee not found'
            })
        }
        res.status(200).json(myEmployee)
    }
    catch(error){
        console.error('thers is an error',error)
        res.status(500).json({
            message:'Server Error'
        })

    }
}

const deleteEmployee=async(req,res)=>{
    try{
        // const {name,email,phone,city}=req.body
        const myEmployee=await Employee.findByIdAndDelete(req.params.id)
        if(!myEmployee){
            return res.status(404).json({
                message:'Employee not found'
            })
        }
        res.status(200).json(myEmployee)
    }
    catch(error){
        console.error('thers is an error',error)
        res.status(500).json({
            message:'Server Error'
        })

    }
}

module.exports={createEmployee,getEmployees,getEmployeesbyID,updateEmployee,deleteEmployee}