const express = require('express');
const router = express.Router();
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const postsCtrl = require('../../controllers/api/posts')

const imgsUpload = upload.fields([{ name: 'header', maxCount: 1 }, { name: 'gallery', maxCount: 3 }]);
// const imgsEdit = upload.fields([
//   { name: 'header', maxCount: 1 }, 
//   { name: 'gallery1', maxCount: 1 },
//   { name: 'gallery2', maxCount: 1 },
//   { name: 'gallery3', maxCount: 1 },
// ]);

router.get('/', postsCtrl.index);
router.get('/:id', postsCtrl.show);
router.post('/', ensureLoggedIn, imgsUpload,  postsCtrl.create);
// router.delete('/:id', ensureLoggedIn, postsCtrl.delete);
router.put('/:id', ensureLoggedIn, imgsUpload, postsCtrl.update);

module.exports = router;