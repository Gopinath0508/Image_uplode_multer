const { send } = require('process');
const User=require('../models/usermodel');
const fs=require('fs')
const imageData = async(body) =>{
  console.log(body)
  let data = await User.create(body);
  return data;
}
const GetimageService = async(id)=>{
  try {
    const user = await User.findById(id)
    const imagePath = user.testImage;
    return user;
  } catch (error) {
    console.error(error);
  }
}
const updateuser = async (id,body) => {
  let imuser = await User.findById(id);
   imuser = await User.findByIdAndUpdate({ _id: id },body);
  return imuser;
};
const deleteimg= async(id,body)=>
{
  let user = await User.findById(id);
  if(!user){
      console.log("id not found")
  }
  user = await User.findByIdAndDelete({_id:id,body});
  return user
}
module.exports = {
  imageData,
  GetimageService,
  updateuser,
  deleteimg
}