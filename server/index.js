//Run the server/API

const app = require("./app");

// set the app off listening

const port = 3000;

app.listen(port, () => {
    console.log(`App listening on port ${port}...`) //makes sure server is working
});       // takes numbered port we listen on as a parameter