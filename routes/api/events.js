const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events')
//All paths start with 'api/events'

router.get('/', eventsCtrl.index);
router.post('/', eventsCtrl.create);
router.delete('/:id', eventsCtrl.delete);

module.exports = router