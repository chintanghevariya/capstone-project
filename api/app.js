// Import dependencies
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

// Initialize environment
const env = process.env.NODE_ENV || "development";

// Get config for current environment
const config = require('./config/config.json')[env];

// Initialize express app
const app = express();

// Enable accepting json body
app.use(bodyParser.json())

// Enable cors
app.use(cors())

// Start app on environment port
app.listen(config.port, function () {
    console.log(`Listening on port ${config.port}`);
})

// Export app for testing
module.exports = app