
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


router.get('/getCustomer',(req,res)=>{
    var c={ name:req.body.name,address:req.body.address,email:req.body.email}
    customer.find(c, (err,data)=>{
        if (err){
            throw err
        } else {
            res.json(data)
        }
    })
})

router.get('/getAllCustomers',(req,res)=>{
    customer.find((err,data)=>{
        if (err){
            throw err
        } else {
            res.json(data)
        }
    })
})

router.post('/createCustomer',cors(corsOptions),(req,res)=>{
    //res.send('hi-post')
    
    var dateToday=new Date()
    let c={ 
        name:req.body.name,
        address:req.body.address,
        email:req.body.email,
        order:req.body.order,
        date:dateToday
    }
    console.log(req.body)

    customer.create(c,(err,data)=>{
        if (err){
            throw err
            }else{
                //console.log(c),
                res.send(c)
        }
    })
})


router.put('/updateCustomer',(req,res,err)=>{
    var c={ name:req.body.name,address:req.body.address,email:req.body.email,order:req.body.order}


    // customer.find(c, (err,data)=>{
    //     if (err){
    //         throw err
    //     } else {
    //         //res.json(data)
    //         if(Object.values(data).length > 0){
    //             //res.json(Object.values(data)[0])
    //             o=req.body.order,
    //             customer.findOneAndUpdate(
    //                 c,
    //                 {$push:{orders:o}},
    //                 (req,res)=>{
    //                     if (err){
    //                         throw err
    //                     } else {
    //                         console.log('updated customer, added order',o )
    //                         //res.json({'inserted':true})
    //                     }
    //                 })
    //         }
    //     }
    // })
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

router.put('/customer',(req,res)=>{
    res.send('hi-put')

})

router.delete('/customer',(req,res)=>{
    res.send('hi-delete')

})


module.exports=router