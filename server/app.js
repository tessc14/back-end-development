//describes the server/API

const express = require("express"); //access to express library

const app = express(); //make very basic server using express

//tell the app what kinds of request to listen  for and how to handle them

app.get("/", (request, response) => {
    response.send("Hello, world!");
})

module.exports = app; // makes the server available to other files