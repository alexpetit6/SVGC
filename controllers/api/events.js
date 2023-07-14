const Event = require('../../models/event');

module.exports = {
  index,
  create,
  delete: deleteEvent,
  update
};

async function index(req, res) {
  const events = await Event.find({});
  res.json(events);
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const event = await Event.create(req.body);
    res.json(event);
  } catch (err) {
    console.log(err)
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

async function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    const updatedEvent = await findOneAndUpdate(
      {_id: req.params.id}, 
      req.body, 
      {new: true}
    );
    res.json(updatedEvent)
  } catch (err) {
    res.json(err)
  }
}