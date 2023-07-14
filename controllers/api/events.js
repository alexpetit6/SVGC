const Event = require('../../models/event');

module.exports = {
  index,
  create,
  delete: deleteEvent,
};

async function index(req, res) {
  const events = await Event.find({});
  res.json(events);
}

async function create(req, res) {
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch (err) {
    res.json(err);
  }
}

async function deleteEvent(req, res) {
  try {
    await Event.deleteOne({_id: req.params.id});
  } catch (err) {
    res.json(err);
  }
}