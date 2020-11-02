const express = require('express');
const chirpsRouter = require('./chirps');

const indexRouter = express.Router();

//* In routes/index.js, import the chirps router and add it to a new router.
//* Use app.use with the /chirps route to add to the root api router.
//* Export the router which is then used for the chirps and chirpstore js api methods.
indexRouter.use('/chirps', chirpsRouter);

module.exports = indexRouter;