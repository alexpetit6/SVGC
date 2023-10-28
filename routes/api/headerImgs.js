const express = require('express');
const router = express.Router();
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const headerImgCtrl = require('../../controllers/api/community')

const imgsUpload = upload.fields([{ name: 'desktop', maxCount: 1 }, { name: 'mobile', maxCount: 1 }]);

router.get('/', headerImgCtrl.show);
router.put('/', ensureLoggedIn, imgsUpload, headerImgCtrl.update);

module.exports = router;