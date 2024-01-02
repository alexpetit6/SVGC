const express = require('express');
const router = express.Router();
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const aboutCtrl = require('../../controllers/api/about')

const imgsUpload = upload.fields([{ name: 'img', maxCount: 1 }, { name: 'carousel', maxCount: 3 }]);

router.get('/', aboutCtrl.show);
router.put('/', ensureLoggedIn, imgsUpload, aboutCtrl.update);

module.exports = router;