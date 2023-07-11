// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Event = require('./models/event');
// const Category = require('./models/category');
// const Order = require('./models/order');

