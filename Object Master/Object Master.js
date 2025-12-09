const pokémon = Object.freeze([
    {
        id: 1,
        name: "Bulbasaur",
        types: ["poison", "grass"]
    },
    {
        id: 5,
        name: "Charmeleon",
        types: ["fire"]
    },
    {
        id: 9,
        name: "Blastoise",
        types: ["water"]
    },
    {
        id: 12,
        name: "Butterfree",
        types: ["bug", "flying"]
    },
    {
        id: 16,
        name: "Pidgey",
        types: ["normal", "flying"]
    },
    {
        id: 23,
        name: "Ekans",
        types: ["poison"]
    },
    {
        id: 24,
        name: "Arbok",
        types: ["poison"]
    },
    {
        id: 25,
        name: "Pikachu",
        types: ["electric"]
    },
    {
        id: 37,
        name: "Vulpix",
        types: ["fire"]
    },
    {
        id: 52,
        name: "Meowth",
        types: ["normal"]
    },
    {
        id: 63,
        name: "Abra",
        types: ["psychic"]
    },
    {
        id: 67,
        name: "Machamp",
        types: ["fighting"]
    },
    {
        id: 72,
        name: "Tentacool",
        types: ["water", "poison"]
    },
    {
        id: 74,
        name: "Geodude",
        types: ["rock", "ground"]
    },
    {
        id: 87,
        name: "Dewgong",
        types: ["water", "ice"]
    },
    {
        id: 98,
        name: "Krabby",
        types: ["water"]
    },
    {
        id: 115,
        name: "Kangaskhan",
        types: ["normal"]
    },
    {
        id: 122,
        name: "Mr. Mime",
        types: ["psychic"]
    },
    {
        id: 133,
        name: "Eevee",
        types: ["normal"]
    },
    {
        id: 144,
        name: "Articuno",
        types: ["ice", "flying"]
    },
    {
        id: 145,
        name: "Zapdos",
        types: ["electric", "flying"]
    },
    {
        id: 146,
        name: "Moltres",
        types: ["fire", "flying"]
    },
    {
        id: 148,
        name: "Dragonair",
        types: ["dragon"]
    }
]);


// an array of pokémon objects where the id is evenly divisible by 3
console.log("====================");
const dividedby3 = pokémon.filter(m => m.id %3 == 0 )
console.log(dividedby3);


// an array of pokémon objects that are "fire" type
console.log("====================");
const firekind = pokémon.filter(p => p.types.includes("fire"))
console.log(firekind);

// an array of pokémon objects that have more than one type
console.log("====================");
const twotypes = pokémon.filter(p => p.types.length > 1)
console.log(twotypes);

//an array with just the names of the pokémon
console.log("====================");
const onlyNames = pokémon.map(p => p.name);
console.log(onlyNames);

//an array with just the names of pokémon with an id greater than 99
console.log("====================");
const onlyNames99 = pokémon.filter(p => p.id > 99).map(p => p.name) ;
console.log(onlyNames99);

//an array with just the names of the pokémon whose only type is poison
console.log("====================");
const poisonkind = pokémon.filter(p => p.types.includes("poison"))
console.log(poisonkind);

//an array containing just the first type of all the pokémon whose second type is "flying"
console.log("====================");
const flyingkind = pokémon.filter(p => p.types.includes("flying"))
console.log(flyingkind);
// a count of the number of pokémon that are "normal" type
console.log("====================");
const counter = pokémon.map(p => p.types.includes("normal"))
var count = 0
console.log(counter);
