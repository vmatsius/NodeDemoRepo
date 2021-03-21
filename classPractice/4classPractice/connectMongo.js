const express=require('express')
const MongoClient=require('mongodb').MongoClient

var app=express();
var port=3300
var mongourl='mongodb://127.0.0.1:27017/'

MongoClient.connect(mongourl,(err,client)=>{
    if(err) throw err;
    app.listen(port,()=>{
        console.log(`express server is up plus cloud connect to MongoServer, port: ${port}`)
    })
})