const mongoose=require('mongoose');
const { v4: uuidv4 } = require('uuid');
const uuid = uuidv4;
console.log(uuid);
const ImageSchema=mongoose.Schema({
    _id:{
        type:String,
        default:uuid
      }, 
    name:{
        type:String,
        required:true
    },
    testImage:{
        type:String,
    }
})
module.exports=ImageModule=mongoose.model('imageModle',ImageSchema)