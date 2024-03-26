const express=require("express")

const app=express()

const port=5002

// app.use
const firstHandler=((req,res,next)=>{
    if(10<20){
        next()
    }
})

app.get('/apple',firstHandler,(req,res)=>{
    res.send('apple is red in color')
})

app.get('/apple/:121',(req,res)=>{
    res.send('apple is red in 121')
})

app.listen(port,()=>{
   console.log('server is started')

})

