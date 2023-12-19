const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../../config/ensureLoggedIn');
const colorsCtrl = require('../../controllers/api/colors')

router.get('/', colorsCtrl.index);
router.put('/', ensureLoggedIn, colorsCtrl.update);

module.exports = router;