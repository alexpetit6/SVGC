const Event = require('../../models/event');

module.exports = {
  index,
  create
};

async function index(req, res) {
  const events = await Event.find({});
  res.json(events);
}

async function create(req, res) {
  try {
    const event = await Event.create(req.body);
    res.json(event)
  } catch (err) {
    return err
  }
}