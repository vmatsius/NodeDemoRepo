
const express=require('express')
const router=express.Router()
const cors=require('cors')
var customer=require('./customer.model')

var corsOptions={
    origin:'*',
    optionsSuccessStatus:200
}

//interceptor
router.use((req,res,next)=>{
    console.log("Time: ",Date.now())
    next()
})

//all routes defined here
router.get('/customer',(req,res)=>{
    //res.send('hi')
    customer.find((err,data)=>{
        if (err){
            throw err
        } else {
            res.json(data)
        }
    })

})

router.post('/customer',cors(corsOptions),(req,res)=>{
    //res.send('hi-post')
    customer.create(req.body,(err,data)=>{
        if (err){
            throw err
            }else{
                res.send("data inserted!!!")
        }
    })
})

router.put('/customer',(req,res)=>{
    res.send('hi-put')

})

router.delete('/customer',(req,res)=>{
    res.send('hi-delete')

})


module.exports=router