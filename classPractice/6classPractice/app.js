import express from 'express' // ES6 syntax
import mongoose from 'mongoose'
import bugRoutes from './bugRoutes'
import {default as fetch} from 'node-fetch'


//constants declared
const app=express()
const port=6500

//mongoose connect
mongoose.connect('mongodb://127.0.0.1:27017/edureka',{useUnifiedTopology:true, useNewUrlParser:true})
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB connected!!!")
})

//setting for EJS
app.set('view engine','ejs')

app.use('/api',bugRoutes)





//configure routes to show index.ejs
app.get('/',function(request,response){
    fetch('http://localhost:6500/api/bug',{method:'GET'})
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
        response.render('index',{data:JSON.stringify(json)})
    });
})


app.get('/addUser',function(request,response){
    response.render('admin')
})


//start express app
app.listen(port,()=>{
    console.log("app is running on 6500")
})