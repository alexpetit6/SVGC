const express = require('express');
const router = express.Router();
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const headerImgCtrl = require('../../controllers/api/community')

router.get('/:id', headerImgCtrl.show);
router.put('/', ensureLoggedIn, upload.single('photo'), headerImgCtrl.update);

module.exports = router;