const express=require('express')

var app=express()

//setting for EJS
app.set('view engine','ejs')

//configure routes
app.get('/',function(req,res){
    res.render('index',{
        user:"abc",
        title:'xyz'
    }
    )
})

app.listen(9090)