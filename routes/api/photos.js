const express = require('express');
const router = express.Router();
const upload = require("multer")();
const photosCtrl = require('../../controllers/api/photos');


router.get('/', photosCtrl.index);
router.post('/upload', upload.single('photo'), photosCtrl.upload);
// The 'photo' maps to the name used when adding the input to the FormData object

module.exports = router;