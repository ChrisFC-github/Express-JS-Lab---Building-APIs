const express = require('express');
const cors = require('cors');
//* In server.js, import the routes folder (./routes). and looks for the index file to look for exports
const apiRouter = require('./routes');
const path = require('path');
const app = express();
//* NO NEED TO PUT BODY PARSER WHEN EXPRESS IS IMPORTED


//* MAKE SURE TO PUT CORS BEFORE ROUTING OR ELSE BIG BREACH ISSUES AS POLICY WOULD NOT APPLY TO THE ROUTE
app.use(cors());
app.use(express.json());
//* uses express to take urlencoded body payloads using the body-parser which takes form post data and transforms it into object that is available on request.body in the route handler
app.use(express.urlencoded({ extended: false }));
//* Remember to use express.static to setup the middleware!
//* serves up any file in the client folder
//* uses middleware router where function is executed for any type of HTTP request on the /api/chirps/.
app.use('/api', apiRouter);
app.use(express.static('client'));
//* Add the api router to the express app with the path /api.

app.listen(3000, () => console.log(`

    This server is Running on Port: 3000

`));