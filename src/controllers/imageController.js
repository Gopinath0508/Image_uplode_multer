const uploads = require('../services/userServices');
const httpStatus = require('http-status');
const uploadImage = async (req, res) => {
  const wallet = await uploads.imageData(req.body);
  if (req.files) {
    let path = '';
    path = 'photo/';
    if (req.files.testImage != null) {
      wallet.testImage =
        path +
        req.files.testImage.map((e) => {
          return e.filename;
        });
    }
    await wallet.save();
    res.status(httpStatus.CREATED).send(wallet);
  }   
}
const getimage=async(req,res)=>
{
    const data = await uploads.GetimageService(req.params.id);
    res.send(data);
}
const up = async (req, res) => {
  const wallet = await uploads.updateuser(req.params.id,req.body);
  if (req.files) {
    let path = '';
    path = '/photo/';
    if (req.files.testImage != null) {
      wallet.testImage =
        path +
        req.files.testImage.map((e) => {
          return e.filename;
        });
    }
    await wallet.save();
    res.status(httpStatus.CREATED).send(wallet);
  }   
}
const imgdelete=async(req,res)=>{
  const deldata = await uploads.deleteimg(req.params.id,req.body);
  res.send(deldata);
}
module.exports=
{
  uploadImage,
  getimage,
  up,
  imgdelete
}