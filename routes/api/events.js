const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');
const upload = require("multer")();
const ensureLoggedIn = require('../../config/ensureLoggedIn')
//All paths start with 'api/events'

router.get('/', eventsCtrl.index);
router.get('/:id', eventsCtrl.show);
router.post('/', ensureLoggedIn, upload.single('photo'),  eventsCtrl.create);
router.delete('/:id', ensureLoggedIn,  eventsCtrl.delete);
router.put('/:id', ensureLoggedIn, eventsCtrl.update)

module.exports = router