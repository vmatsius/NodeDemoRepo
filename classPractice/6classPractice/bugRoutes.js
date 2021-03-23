import {Router, json, request, urlencoded} from 'express'

import cors from 'cors'
import bug from './model/bug'


//defining constants
const router = Router()
var corsOptions={
    origin:'*',
    optionsSuccessStatus:200
}

router.route('/bug').get((_,response)=>{
    bug.find((err,data)=>{
        if(err)
            throw err
        else
            response.json(data)
    })

});

router.route('/bug').post(json(),urlencoded({extended:false}),cors(corsOptions), (request, response) => {
//router.route('/bug').post(json(),urlencoded({extended:false}),cors(corsOptions),(request,response)=>{
    console.log(request.body)
    //using mongoose model
    bug.create(request.body,(err,data)=>{
        if(err)
            throw err
        else
            response.send(data)
    })
});


router.route('/resolveBug/:title').get((request,response)=>{

    console.log(request.params.title)
    //using mongoose model
    bug.findOneAndUpdate({title:request.params.title},{$set:{status:"Resolved"}},(err,data)=>{
        if(err)
            throw err
        else
            response.send('Congratulations, you resolved a bug!!!')
    })


});

module.exports = router;