const herd = document.getElementById("herd");

async function callTheHerd () {

    //request all goats from the API
    const response = await fetch("http://localhost:3000/goats");

    //extract json data from the response
    const data = await response.json();

    //log them
    console.log(data);
};

callTheHerd()