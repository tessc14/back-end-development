# Back-end development


## Client
Everything is built on top of 'index.html': open this file in a browser to interact with the site

## Server

### Installation
    1. navigate to the './server' folder
    2. run npm install -D

### Development
    

### Production/deployment
    From the './server' folder, run npm run start

## Notes
    - front-end building stuff the user interacts with
    - back-end building services other code interacts with

Client: makes requests
Server: listens for and responds to requests

express lets us build servers easily:
    1. download npm install express at terminal

    2. access to express library -> const express = require("express");

    3. make a basic server using express -> const app = express();

    4. tell the app what to listen for and how to handle 
    app.get("/", (request, response) => {
        response.send("Hello, world!");
    })

    5. set the app off listening
    const port = 3000;

    app.listen(port, () => {
        console.log(`App listening on port ${port}...`) 
    });

    6. check at http://localhost:3000/ (or whatever number) and running node index.js in terminal

## organising
        Split into two sections, one to describe the server (app.js) one to run the server (index.js)

        add scripts to package.json
            "scripts": {
                "start": "node index.js",
                "dev": "node index.js"
            }
        - to run scripts: npm run start or npm run dev

        npm install -D nodemon
            - change "dev" script to "nodemon -L index.js"
        
        If creating database kind of thing do in separate file e.g. goats.js


## kinds of requests and how to handle them
Choose error message:
    app.get("/goats", (request, response) => {
        response.status(503).json({
            "message": "Eventually, this will provide a list of goats"
        })
    })
    - a link to the different error codes:
        https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses 

Show .json:
    app.get("/", (request, response) => {
        response.json({
            "message": "Hello, world!"
        });
    })

Get some of the data from data store
    app.get("/goats/1", (request, response) => {

        const goat = goats.filter(g => g["id"] == 1)[0];

        response.json(goat);
    })
Generalised:
    app.get("/goats/:id", (request, response) => {
    
    const id = request.params["id"];

    const goat = goats.filter(g => g["id"] == id)[0];

    response.json(goat);
})


## terminology
    - app.get("/goats" this is a root or endpoint it means localhost:3000/goats
        - it is a location a user can go to interact




## challenges
    x add button to each goat card that allows you to delete the goat, on deletion the card should disappear from the list and be forgotten by the API, page should not refresh
    - handle creation requests that don't have all required data (name, age, sex, favourite colour)
    - add an update route that allows users to change the age or favourite colour of a goat based on its id
    - allow goat updates from the front-end interface
    