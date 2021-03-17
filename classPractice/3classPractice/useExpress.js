var express=require('express')
var fs=require('fs')
const request=require('request')

//const fetch=require('node-fetch')


var employees=[]
var projects=[]



//start server
var app=express()

//setting for EJS
app.set('view engine','ejs')

//routes
app.get('./employee.:id',function(req,res){
    fs.readFile('employee.json',function(){})//...
})



//example at the end of lecture
app.get('/useReq',(req,res)=>{
    let url='http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees'//url in asmt
    console.log('HITHERE')
    request(url,{json:true},(err,res,body)=>{
        let e=[]
        e=body
        console.log(typeof e)
        console.log(e)
        //res.prependListener('index,' {emp:JSON.parse(e)})
        //console.log(body)
        //res.send(JSON.parse)
        res.render('index')
    })
})

app.listen(3001)