///Loads .env file contents into process.env by default
require('dotenv').config()
//import express to a variable
const express=require('express')
//import cors to a variable
const cors=require('cors')
//import router to a variable
const router=require('./Routes/router')
//import connection.js
require('./DB/connection')

//express server
const pfServer=express()

///use cors in server
pfServer.use(cors())
///use json parser-Application specific middleware
pfServer.use(express.json())
///use router
pfServer.use(router)
//available file/folder from server to another app
pfServer.use('/uploads',express.static('./uploads'))

const PORT=3000

//to host pfserver : localhost:4000
pfServer.listen(PORT,()=>{
    console.log(`Project Fair Server at port:${PORT}`);
})

///to resolve GET HTTP request to http://localhost:3000/
pfServer.get('/',(req,res)=>{
    res.send("<h1 style=color:violet>Project Fair Server Started...and waiting for client request</h1>")
})


