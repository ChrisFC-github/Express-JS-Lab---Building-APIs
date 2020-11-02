//* Import chirpsstore, and use it to read and write chirps to the json file.
//* The json file will be created the first time you run successfully!
//* Remember to export your router with module.exports.
const fs = require('fs');
const path = require('path');
let chirpPath = path.join(__dirname, './chirps.json');
//* Stores in another temp object to allow the id to increment +1 everytime a chirp is created
let chirps = { nextid: 1 };

if(fs.existsSync('chirps.json')) {
    chirps = JSON.parse(fs.readFileSync('chirps.json'));
}

let getChirps = () => {
    return Object.assign({}, chirps); //create a copy and return it
}

let getChirp = id => {
    return Object.assign({}, chirps[id]); //create a copy and return it
}

let createChirp = (chirp) => {
    chirps[chirps.nextid++] = chirp;
    writeChirps();
};

let updateChirp = (id, chirp) => {
    chirps[id] = chirp;
    writeChirps();
}

let deleteChirp = id => {
    delete chirps[id];
    writeChirps();
}

let writeChirps = () => {
    fs.writeFileSync(chirpPath, JSON.stringify(chirps));
};

//* Exports the module so that any file can access these objects created in which this case contains the API function callback
module.exports = {
    CreateChirp: createChirp,
    DeleteChirp: deleteChirp,
    GetChirps: getChirps,
    GetChirp: getChirp,
    UpdateChirp: updateChirp
}