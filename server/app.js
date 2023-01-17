//describes the server/API

const express = require("express"); //access to express library
const cors = require("cors")
const {goats, nextId} = require("./goats"); // access goats data
const app = express(); //make very basic server using express

//middleware
// req -> [cors (add header to response)] -> [API] -> response
app.use(cors())



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