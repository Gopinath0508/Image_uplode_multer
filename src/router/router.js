const express = require('express');
const router = express.Router();
const image  = require('../filesUpload/image')
const imageController = require('../controllers/imageController');
router.route('/post/image/upload').post(image.fields([{ name:"testImage"}]),imageController.uploadImage)
router.use('/photo',express.static('photo'));
router.get('/get/image/:id',imageController.getimage)
router.route('/put/image/:id').put(image.fields([{ name:"testImage"}]),imageController.up);
router.delete('/delete/:id',imageController.imgdelete);
module.exports = router;