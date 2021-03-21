const express= require('express')
const MongoClient= require('mongodb').MongoClient
const CustomerRoutes=require('./customerRouter')
var app=express();
var port=3300
var mongourl='mongodb://127.0.0.1:27017/'

app.use('/api', CustomerRoutes)

MongoClient.connect(mongourl,(err,client)=>{
   if(err) throw err;
   let db = client.db("edureka")









   //createCustomerColl(db)  //to create collection
   //insertCustomer(db)
   //findCustomers(db)
   //updateCustomerObj(db)
   //deleteCustomerObj(db)

   app.listen(port,()=>{
       console.log("express server is up plus could connect to MongoServer ")
   })

})

function createCustomerColl(db){
    //To check if exists (something like this):
    let coll=db.listCollections().toArray()
    .then(data=>console.log(data.map(o=>o.name=="customers")))
    //let c=coll.map(c=>"customers")
    //console.log(coll)
    //console.log(c)

    db.createCollection("customers",(err,res)=>{
        if(err) throw err
   
        console.log("collection created!!")
      })

}

function insertCustomer(db){
    var c={ name:"Gauri",address:"India",email:"abc@gmail.com"}
    db.collection("customers").insertOne(c,(err,res)=>{
        if(err) throw err
        console.log(res.insertedCount+" inserted")
    })
}

function findCustomers(db){
    let q={name:'Gauri'}
    db.collection("customers").find(q).toArray((err,res)=>{
      if(err) throw err
      console.log(res)
    })
}

function updateCustomerObj(db){
    let query={address:"USA"}
    let newValues={$set:{ address: "UK",age:40}}
    db.collection("customers").findOneAndUpdate(query,newValues,(err,res)=>{
        if(err) throw err
        console.log(res)
    })
}

function deleteCustomerObj(db){
    let q={address:"UK"}
   db.collection("customers").deleteOne(q,(err,res)=>{
    if(err) throw err
    console.log(res)
   })
}