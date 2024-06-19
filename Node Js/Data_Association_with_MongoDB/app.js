const express = require("express")
const path = require('path')

// models import
const userModel= require("./models/usermodel")
const postModel = require("./models/post");
const { default: mongoose } = require("mongoose");




// connection str of MongoDB
const url =
  "mongodb+srv://abhijitbackend:abhijit84842@cluster0.l4vqt9f.mongodb.net/DataAssociationDB?retryWrites=true&w=majority&appName=Cluster0";


const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, "public")))

app.get("/" , (req,res)=>{
    res.send("hi")
})

app.get("/create",async(req,res)=>{

    try{
        await mongoose.connect(url)
        console.log("DB Connected Successfully..")
    }catch(err){
        console.log("DB not connected...")
    }

    let userData= await userModel.create({
        username:"Abhijit Das",
        email:"abhijit721201@gmail.com",
        age:"25",
        posts:["post11","post12","post13"]
        
    })

    res.send(userData)

 
})

app.listen(3000,()=>{
    console.log("PORT=> "+ 3000)
})