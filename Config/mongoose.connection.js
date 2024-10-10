const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://harshitdubey02004:harshit20@cluster0.33naz.mongodb.net/")
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.log('Error connecting to MongoDB Atlas:', error));


module.exports = mongoose.connection;

