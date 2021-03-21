const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const customerRoutes=require('./customerRouter')

//define mongoURL
var mongoUrl='mongodb://127.0.0.1:27017/edureka'

//create server and configure it
var app=express()
app.use(cors())
app.use(express.urlencoded({extended:true})) //to make app understand the body of incomming request
app.use(express.json()) //to make app understand the body of incomming request, DO IT HERE(at the beginning), before ...

//mongoose connect
mongoose.connect('mongodb://127.0.0.1:27017/edureka',{useUnifiedTopology:true, useNewUrlParser:true})
const connection=mongoose.connection;
//console.log("connection obj",connection)
connection.once('open',()=>{
    console.log("MongoDB connected!!!")
})

//use routes
app.use('/api',customerRoutes)


app.listen(3400,()=>{
    console.log("server started at port 3400 ")
})