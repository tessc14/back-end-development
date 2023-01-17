//describes the server/API

const express = require("express"); //access to express library
const cors = require("cors")

let {goats, nextId} = require("./goats"); // access goats data
const logger = require("./logger")

const app = express(); //make very basic server using express


//middleware
// req -> [cors (add header to response)] -> [API] -> response
app.use(express.json()); // layer to read the body of POSTS
app.use(cors()); //layer to add cors headers
app.use(logger); // layer to log access

//endpoints
//tell the app what kinds of request to listen  for and how to handle them

app.get("/", (request, response) => {
    response.json({
        "message": "Welcome to the GOAT API"
    });
})

app.get("/goats", (request, response) => {
    
    const  { maxAge } = request.query;
    if (maxAge) {
        response.json(goats.filter(g => g["age"] <= maxAge));
    } else {
        response.json(goats);
    }

})

app.post("/goats", (request, response) => {
    //extract information
    const newGoat = request.body;

    //add the id to goat data
    newGoat["id"] = nextId;

    //Increase the nextId for the next time
    nextId += 1;

    //Add the goat to the goat list
    goats.push(newGoat);

    response.status(201).json(newGoat);
})

app.get("/goats/:id", (request, response) => {
    
    const id = request.params["id"];

    const goat = goats.filter(g => g["id"] == id)[0];

    if (goat) {
        response.json(goat);
    } else {
        // send a status of 404 with a message
        response.status(404).json({
            error: "No such goat!"
        });
    }

    response.json(goat);
})

// if we receive a request of type delete here's what we want to happen
app.delete("/goats/:id", (request, response) => {
    //pull out the id from the url
    const id = request.params["id"];
    //check if goat exists with that id (if we filter to just that id is the length of the list now 1)
    const exists = goats.filter(g => g["id"] == id).length == 1;
    // if it is, delete goat and return relevant status/method, if not return a 404
    if (exists){
        //delete goat means create new version of goats without that goat
        goats = goats.filter(g => g["id"] != id);
        response.status(200).json({
            message: `Goat ${id} deleted.`
        })
        // or just response.sendStatus(204);
    } else {
        response.status(404).json({
            error: "No such goat!"
        })
    }
})



module.exports = app; // makes the server available to other files