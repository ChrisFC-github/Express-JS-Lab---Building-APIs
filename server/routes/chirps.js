//* USE POSTMAN & SETTING THE HEADERS FOR YOU AND ALWAYS CHECK ROUTES FIRST BEFORE DOING THE CLIENT SIDE -> TO KNOW IF SERVER WORKING
//* In routes/chirps.js, create GET, POST, PUT, DELETE methods on a router that is created in chirps.js
const express = require('express');
const chirpsRouter = express.Router();
//* import the chirpstore.js IMPT!
const chirpstore = require('../../chirpstore')

/*
    Reads a chirp BY ID
    http://localhost:3000/api/chirps/1
*/
//* chirpsrouter imports from ./chirps json and then has a specified path called chirpid to read the object based on the id with the GetChirp API method
chirpsRouter.get('/:chirpid', (req, res) => {
    const id = req.params.chirpid
    //* uses chirpstore API 
    const chirp = chirpstore.GetChirp(id)
    res.json(chirp);
});

/*
    Reads ALL chirps
    http://localhost:3000/api/chirps/
*/
chirpsRouter.get('/', (req, res) => {
    const chirps = chirpstore.GetChirps()
    res.json(chirps);
});

/*
    CREATE chirp
    http://localhost:3000/api/chirps/
*/
chirpsRouter.post('/', (req, res) => {
    //* uses chirpstore API
    console.log(req.body);
    chirpstore.CreateChirp(req.body);
    //* server returns status 200 to the client -> OK it worked 2.. code
    res.sendStatus(200);
});

/*
    EDIT chirp BY ID by updating or replacing
    http://localhost:3000/api/chirps/1
*/
chirpsRouter.put('/:chirpid', (req, res) => {
    const id = req.params.chirpid
    //* uses chirpstore API 
    const chirpupdate = chirpstore.UpdateChirp(id)
    res.json(chirpupdate);
});

/*
    DELETE chirp BY ID
    http://localhost:3000/api/chirps/1
*/
chirpsRouter.delete('/:chirpid', (req, res) => {
    const id = req.params.chirpid
    //* uses chirpstore API 
    const chirpdelete = chirpstore.DeleteChirp(id)
    res.json(chirpdelete);
    res.json('Deleting a chirp with the ID: ' + req.params.chirpid);
});

//* Remember to export your router with module.exports to ./chirps into chirps.json
module.exports = chirpsRouter;