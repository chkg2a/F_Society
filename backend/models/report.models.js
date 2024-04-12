import mongoose from 'mongoose'
const reportSchema = new mongoose.Schema({
    desciption:{
        type:String,
        required:true,
        
    },
    locationx:{
        type:Number,
        required:true
    },
    locationy:{
        type:Number,
        required:true
    }
    
    
    
}, {timestamps:true})

const Report = mongoose.model('Report', reportSchema);


export default Report
