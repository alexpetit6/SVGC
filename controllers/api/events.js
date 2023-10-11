const uploadFile = require('../../config/upload-file');
const Event = require('../../models/event');

module.exports = {
  index,
  show,
  create,
  delete: deleteEvent,
  update
};

async function index(req, res) {
  const events = await Event.find({}).sort('date').exec();
  res.json(events);
}

async function show(req, res) {
  try {
    const event = await Event.findById(req.params.id);
    res.json(event);
  } catch (err) {
    console.log(err)
  }
}

async function create(req, res) {
  try {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    };
    const event = await Event.create(req.body);
    if (req.file) {
      event.photo = await uploadFile(req.file);
      event.save();
    };
    res.json(event);
  } catch (err) {
    console.log(err)
  }
}

async function deleteEvent(req, res) {
  try {
    await Event.deleteOne({_id: req.params.id});
    const events = await Event.find({}).sort('date').exec();
    res.json(events);
  } catch (err) {
    res.json(err);
  }
}

async function update(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  };
  try {
    const updatedEvent = await Event.findOneAndUpdate(
      {_id: req.params.id}, 
      req.body, 
      {new: true}
    );
    if (req.file) {
      updatedEvent.photo = await uploadFile(req.file);
      updatedEvent.save();
    }
    res.json(updatedEvent);
  } catch (err) {
    res.json(err);
  }
}