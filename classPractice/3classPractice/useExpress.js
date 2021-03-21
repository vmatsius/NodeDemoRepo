var express=require('express')
var fs=require('fs')
const request=require('request')

const fetch=require('node-fetch')


var employees=[]
var projects=[]

//start server
var app=express()

//setting for EJS
app.set('view engine','ejs')

//routes
app.get('/employee/:id',function(req,res){
    fs.readFile('employee.json',function(err,data){
        employees=JSON.parse(data).employees
        //console.log(employees)
        //console.log(req.params.id)
        let emp=employees.find( (o) => o.id == req.params.id)
        //console.log(emp)
        res.send(emp)
    })
})

app.get('/projects/:id',function(req,res){
    fs.readFile('project.json',function(err,data){
        projects=JSON.parse(data).projects
        //console.log(projects)
        //console.log(req.params.id)
        let project=projects.find( (o) => o.projectId == req.params.id)
        //console.log(project)
        res.send(project)

    })
})

app.get('/getemployeedetails/:id',function(req,res){
    let empId=req.params.id
    fetch('http://localhost:3000/employee/'+empId)
        .then(res=>res.json())
        .then(json=>{
            //res.send(json)
            //call second API here
            let employeeData = json
            let projId=json.projectId
            fetch('http://localhost:3000/projects/'+projId)
                .then(res=>res.json())
                    //console.log(res),
                    //res.json()
                    //console.log(res)
                
                //})
                .then(json=>{
                    //console.log(json),
                    resultProject = json
                    //console.log(employeeData)
                    res.send(Object.assign(resultProject, employeeData))
                })

        })
        
})




//example at the end of lecture
app.get('/useReq',(req,res)=>{
    let url='http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees'//url in asmt
    request(url,{json:true},(err,resp,body)=>{

        e=body

        //var employeeList = JSON.stringify(e)
        var employeeList = body

        res.render('index1',{employeeList:employeeList}
            //,{
            //name:employeeList
            //id:'xyz',
            //createdAt:'asd'
            //}
        )
    })
})

app.listen(3000)