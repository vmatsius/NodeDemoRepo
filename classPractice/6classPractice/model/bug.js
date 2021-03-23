import mongoose from 'mongoose'



//define my model
var bugSchema=mongoose.Schema({
    title:{type:String},
    description:{type:String},
    assignee:{type:String},
    status:{type:String, default:"Initiated"}
},
{
    timestamps:true
},
{
    collection:"bugs"
})

module.exports=mongoose.model('bug', bugSchema)