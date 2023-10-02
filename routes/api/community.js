const express = require('express');
const router = express.Router();
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const communityCtrl = require('../../controllers/api/community')

const imgsUpload = upload.fields([{ name: 'img1', maxCount: 1 }, { name: 'img2', maxCount: 1 }]);

router.get('/', communityCtrl.show);
router.put('/', ensureLoggedIn, imgsUpload, communityCtrl.update);

module.exports = router;