const express = require('express');
const router = express.Router();
const upload = require("multer")();
const photosCtrl = require('../../controllers/api/photos');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.get('/', photosCtrl.index);
router.post('/upload', ensureLoggedIn, upload.single('photo'), photosCtrl.upload);
router.delete('/:id', ensureLoggedIn, photosCtrl.delete);
// The 'photo' maps to the name used when adding the input to the FormData object

module.exports = router;