const Event = require('../../models/event')

module.exports = {
  index,
}

async function index(req, res) {
  const events = await Event.find({})
  res.json(events)
}