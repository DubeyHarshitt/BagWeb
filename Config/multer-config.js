const multer = require('multer');

// Define memory storage options
const storage = multer.memoryStorage();  // Store files in memory as Buffer

// Initialize multer with memory storage
const upload = multer({ storage: storage });

module.exports = upload;
