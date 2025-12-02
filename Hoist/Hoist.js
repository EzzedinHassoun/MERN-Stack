// ===============1================

var hello
console.log(hello); // undefined
hello = 'world'

// ===============2================

var needle
function test(){
    var needle
    needle = 'magnet';
    console.log(needle); // magnet
}
needle = 'haystack';

test();

// ===============3================

var brendan
function print(){
    brendan = 'only okay';
    console.log(brendan); // not call
}
brendan = 'super cool'
console.log(brendan); // super cool

// ===============4================

var food
console.log(food); // undefined
function eat(){
    var food
    food = 'half-chicken';
    console.log(food); // half-chicken
    food = 'gone';
}
food = 'batata'
console.log(food); // batata
eat();

// ===============5================

var mean
console.log(food); // ReferenceError: food is not defined 
mean = function(){
    var food
    food = "chicken";
    console.log(food); // chicken
    food = "fish"
    console.log(food); // fish
}
console.log(food); // food is not defined
mean()

// ===============6================

var genre

function rewind(){
    var genre
    genre = "rock";
    console.log(genre); // rock
    genre = "r&b";
    console.log(genre); // r&b
}
console.log(genre); // undefined
genre = "disco";
rewind()
console.log(genre); // disco

// ===============7================

var dojo
function learn(){
    var dojo
    dojo = "seattle";
    console.log(dojo); // seattle
    dojo = "burbank";
    console.log(dojo); // burbank
}
dojo = "san jose"
console.log(dojo); // san jose
learn();
console.log(dojo); // san jose
