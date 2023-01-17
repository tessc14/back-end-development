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

    //create an element to display favourite colours
    const colourBox = document.createElement("p");
    colourBox.textContent = `${goat["name"]}'s favourite colour is `;
    const colourName = document.createElement("span");
    colourName.textContent = goat["favouriteColour"];
    colourName.style.color = goat["favouriteColour"];
    colourBox.appendChild(colourName);
    card.appendChild(colourBox);

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

document.querySelector("form").addEventListener("submit", (e) => {
    
    e.preventDefault();

    const goat = {
        name: e.target.name.value,
        age: e.target.age.value,
        sex: e.target.age.value,
        favouriteColour: e.target.colour.value
    }

    const options = {
        method: "POST",
        body: JSON.stringify(goat),
        headers: {
            'Accept': 'application/json',   //want json back
            'Content-Type': 'application/json' //sending json
          },
    }

    fetch("http://localhost:3000/goats", options) //fetch with options
        .then(res => res.json())    //extract the data
        .then(data => createGoatCard(data)) //make a goat card with the data
        .catch(err => {
            console.log(err);
            alert("One of our goats is missing!");
        })  //if anything goes wrong
})

callTheHerd()