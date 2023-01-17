# Back-end development


## Client

## Server


## Notes
    - front-end building stuff the user interacts with
    - back-end building services other code interacts with

Client: makes requests
Server: listens for and responds to requests

express lets us build servers easily:
    1. download npm install express
    
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