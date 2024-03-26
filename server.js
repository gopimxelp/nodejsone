const express=require('express')

const dotenv=require('dotenv')

const mongoose=require('mongoose')

const bodyParser=require('body-parser')

const {MongoClient}=require('mongodb')

const app=express()

const employeeRoutes=require('./routes/empoyeeRoutes')

dotenv.config()

app.use(bodyParser.json())

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongodb Connected Succesfully ")
}).catch((error)=>{
    console.log("error ",error)

})

// console.log(process.env)

const PORT=process.env.PORT || 5000

app.use('/employees',employeeRoutes)

app.listen(PORT,()=>{
    console.log('Server Started')
})