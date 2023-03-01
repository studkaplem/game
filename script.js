let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = [ "stick"];

const button1 = document.querySelector("#button1");
// button2, button3, text, xtext, healthtext, goldText,
// monsterStats, monsterNameText, monsterHealthText
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xtext = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");
const locations = [
    {
        name: "town square",
        "button text": ["Go to stroe", "Go to cave", "Fight Dragon"],
        "button function": [goStore, goCave, fightDragon],
        text: "You enter the town square. You see a sign that says 'store'."
    },
    {
        name: "store",
        "button text": ["Buy 10 health (10 Gold)", "Buy weapon (30 Gold)", "Go to town square"],
        "button function": [buyHealth, buyWeapon, goTown],
        text: "You enter the store."
    }
];

function update(location){
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    button1.onclick = location["button function"][0];
    button2.onclick = location["button function"][1];
    button3.onclick = location["button function"][2];
    text.innerText = location.text;

}

// initalize buttons
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;

function goTown(){
    update(locations[0])
}

function goStore(){
   update(locations[1])
}

function goCave(){
    console.log("going to cave")
}

function fightDragon(){
    console.log("fighting dragon")
}


function buyHealth(){

}
function buyWeapon(){

}
