// TODO: Import express
const express = require('express');
// TODO: Import modules for tips/feedback
const tipImport = require('./tips');
const fbRouter = require('./feedback');
// TODO: Create app vaible to store the value of express()
const api = express();
// TODO: Use our routes
api.use('/tips', tipImport);
api.use('./feedback', fbRouter);
// TODO: Export app
module.exports = api;