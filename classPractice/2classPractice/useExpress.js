const fs=require('fs')

const express=require('express')
var app=express()
var port=7879;

//configure route
app.get('/',function(req,res){
    res.send("<h1>Hi there. Node using express</h1>")
})

app.get('/courses',function(req,res){    
    fs.readFile('./courses.json',function(err,data){        
        if(!err)        
            res.send(JSON.parse(data))   
    })   
})


app.listen(port,function(err){
    if(!err)
        console.log("app is listening on port: ", port)
})//listening to a specific port

