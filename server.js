const express=require('express')

const dotenv=require('dotenv')

const mongoose=require('mongoose')

const bodyParser=require('body-parser')

const {MongoClient}=require('mongodb')

const app=express()

const employeeRoutes=require('./routes/empoyeeRoutes')

const signupRoutes=require('./routes/signupRoutes')

const ejs=require('ejs')


dotenv.config()

app.use(bodyParser.json())

app.set('view engine','ejs')


//client side rendering
app.get('/mango',(req,res)=>{
    res.json({
        fruit:"mango"
    })

})

//server side rendering
app.get('/grapes',(req,res)=>{
    res.render('sample')
    // res.send("<h1>This is Grapes Fruit</h1>")

})

//htl css
//template engines
//ejs

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Mongodb Connected Succesfully ")
}).catch((error)=>{
    console.log("error ",error)

})

// console.log(process.env)

const PORT=process.env.PORT || 5000

app.use('/employees',employeeRoutes)
app.use('/signup',signupRoutes)

app.listen(PORT,()=>{
    console.log('Server Started')
})