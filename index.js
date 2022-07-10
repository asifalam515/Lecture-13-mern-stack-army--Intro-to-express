const express=require('express')
const fs=require('fs')
const  app=express()

app.get('/',(req,res)=>{
    const   obj={
        name:'Ayman',
         email:"asibulalam515@gmail.com",

    }

res.json(obj)
})

app.get("/about",(req,res)=>{
    res.send("<h3>About Pages")
})
app.get('/pages',(req,res)=>{
    fs.readFile('./pages/index.html',(err,data)=>{
        if(err){
             console.log("Error",err)
             res.send('sometehing went wrong')
        }else{
            res.write(data)
            res.end()
        }
    })
})

app.listen(4000,()=>{
    console.log("Server Running on 4000 port ")
})