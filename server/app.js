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

app.get("./goats/1", (request, response) => {

    const goat = goats.filter(g => g["id"] == 1)[0];

    response.json(goat);
})

module.exports = app; // makes the server available to other files