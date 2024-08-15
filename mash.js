let housesArray = ['in a mansion', 'in a regular house', 'in an apartment', 'on the streets'];
let petsArray = ['dog', 'cat', 'pikachu', 'gyarados', 'fish', 'monkey'];
let collegesArray = ['MIT', 'Harvard', 'CUNY', 'no college cause you broke'];
let occupationsArray = ['be an ASC instructor', 'be a streamer', 'have no job'];

if (process.argv[2] != "") {
    housesArray.push("in a " + process.argv[2]);
}
if (process.argv[3] != "") {
    for (i = 0; i < petsArray.length; i++) {
        petsArray.push(process.argv[3]);
    }
}
function randomNumGen(n) {
    return Math.floor(Math.random() * n);
}

function randomHome() {
    return housesArray[randomNumGen(housesArray.length)];
}

function randomCollege() {
    return collegesArray[randomNumGen(collegesArray.length)];
}

function randomOccupation() {
    return occupationsArray[randomNumGen(occupationsArray.length)];
}
function randomPet() {
    return petsArray[randomNumGen(petsArray.length)];
}

function getTravelCount() {
    return randomNumGen(99) + 1; 
}
function mash() {
    return "You will live " + randomHome() + ", travel " + getTravelCount() + " different countries, and have a pet " + randomPet() + "! You will go to " + randomCollege() + " and " + randomOccupation() + ".";
}

let result = mash();
console.log(result);

