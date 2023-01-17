const herd = document.getElementById("herd");

function createGoatCard(goat) {
    //create a card
    const card = document.createElement("div");

    //add relevant class
    card.classList.add("goat");

    //add content
    const header = document.createElement("h2");
    header.textContent = goat["name"];
    card.appendChild(header);

    //customise classes
    card.classList.add(goat["age"] < 5 ? "young" : "old");

    //attach it to the container
    herd.appendChild(card);
}

async function callTheHerd () {

    //request all goats from the API
    const response = await fetch("http://localhost:3000/goats");

    //extract json data from the response
    const data = await response.json();

    data.forEach(g => createGoatCard(g));

};

callTheHerd()