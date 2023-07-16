const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events')
//All paths start with 'api/events'

router.get('/', eventsCtrl.index);
router.get('/:id', eventsCtrl.show);
router.post('/', eventsCtrl.create);
router.delete('/:id', eventsCtrl.delete);
router.put('/:id', eventsCtrl.update)

module.exports = router