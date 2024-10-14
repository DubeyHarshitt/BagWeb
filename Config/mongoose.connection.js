const mongoose = require('mongoose');
const config = require('config');

// Setting debugger & using in place of console.log
// const dbgr = require('debug')("development:mongoose");

// Terminal command :- export DEBUG=development:* (to show message in console)

// mongoose.connect(`${config.get("MONGO_DB_URI")}`)
mongoose.connect(`${config.get("MONGO_DB_URI")}bagWeb`)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.log('Error connecting to MongoDB Atlas:', error.message));


module.exports = mongoose.connection;

// mongoose.connect("mongodb+srv://harshitdubey02004:harshitdubey02004@cluster0.33naz.mongodb.net/")
