const mongoose = require('mongoose')

const dataSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        
    },
    DOB:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true,
       
    },
  
    address:{
        type:String,
        required:true,


    },
 
    userId:{
        type:String,
        required:true,

    }

})

const Data = mongoose.model('Data',dataSchema)

module.exports = Data