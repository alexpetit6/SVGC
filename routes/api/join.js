const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const joinCtrl = require('../../controllers/api/join');

router.get('/', joinCtrl.show);
router.put('/', ensureLoggedIn, joinCtrl.update);

module.exports = router;