//describes the server/API

const express = require("express"); //access to express library
const {goats, nextId} = require("./goats"); // access goats data
const app = express(); //make very basic server using express

//tell the app what kinds of request to listen  for and how to handle them

app.get("/", (request, response) => {
    response.json({
        "message": "Hello, world!"
    });
})

app.get("/goats", (request, response) => {
    response.json(goats);
})

app.get("/goats/:id", (request, response) => {
    
    const id = request.params["id"];

    const goat = goats.filter(g => g["id"] == id)[0];

    if (goat) {
        response.json(goat);
    } else {
        response.status(404).json({
            error: "No such goat!"
        });
    }

    response.json(goat);
})

module.exports = app; // makes the server available to other files