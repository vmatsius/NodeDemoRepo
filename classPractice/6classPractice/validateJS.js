import express from 'express'
import validator from 'validator'

const app=express()

app.listen(8989,()=>{
    console.log("app is running on port 8989")
    console.log("wether string is email?", validator.isEmail('ggg@g.com'))

})