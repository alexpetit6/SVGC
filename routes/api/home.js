const express = require('express');
const router = express.Router();
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const homeCtrl = require('../../controllers/api/home');

const imgsUpload = upload.fields([{ name: 'headerImg', maxCount: 1 }, { name: 'img1', maxCount: 1 }, { name: 'img2', maxCount: 1 }]);

router.get('/', homeCtrl.show);
router.put('/', ensureLoggedIn, imgsUpload, homeCtrl.update);

module.exports = router;