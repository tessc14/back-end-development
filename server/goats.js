//store list of goats and make available

const goats = [
    {"id": 1,
    "name": "Billy",
    "age" : 6,
    "sex" : "M",
    "favouriteColour" : "magenta" },
    {"id": 2,
    "name": "Simon",
    "age" : 9,
    "sex" : "M",
    "favouriteColour" : "blue" },
    {"id": 3,
    "name": "Maisie",
    "age" : 2,
    "sex" : "F",
    "favouriteColour" : "yellow" }
]

let nextId = 4;

module.exports = {goats, nextId}