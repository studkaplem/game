let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = [ "stick"];

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xtext = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterNameText = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = [
    {
        name:"stick",
        power: 5
    },
    {
        name:"dagger",
        power: 30
    },
    {
        name:"claw hammer",
        power: 50
    },
    {
        name:"sword",
        power: 100
    },    
]

const monsters = [
    {
        name: "slime",
        level: 2,
        health: 15
    },
    {
        name: "fanged beast",
        level: 8,
        health: 60
    },
    {
        name: "dragon",
        level: 20,
        health: 300
    }
]

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
    },
    {
        name: "cave",
        "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
        "button function": [fightSlime, fightBeast, goTown],
        text: "You enter the cave. You see some monster."
    },
    {
        name: "fight",
        "button text": ["Attack", "Dodge", "Run"],
        "button function": [attack, dodge, goTown],
        text: "You are fighting a monster."
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
    update(locations[2])
}

function buyHealth(){
    if(gold >= 10){  
        gold -= 10;
        health += 10;
        goldText.innerText = gold;
        healthText.innerText = heal;   
    } 
    else goldText.innerText = "You do not have enough gold to buy health."
}
function buyWeapon(){
    if(currentWeapon < weapons.length-1){
        if(gold >= 30){
            gold -= 30;
            currentWeapon++;
            goldText.innerText = gold;
            let newWeapon = weapons[currentWeapon].name;
            text.innerText = "you now have a "+newWeapon+"."
            inventory.push(newWeapon)
            text.innerText = " In your inventory you have: "+inventory;
        }
        else text.innerText = "You do not have enough gold to buy weapon.";
    }
    else {
        text.innerText = "You already have the most powerful weapon!";
        button2.innerText = "Sell weapon for 15 gold"
        button2.onclick = sellWeapon;
    }
}

function sellWeapon(){
    if(inventory.length > 1){
        gold += 15;
        goldText.innerText = gold;
        let currentWeapon = inventory.shift();
        text.innerText = "You sold a "+currentWeapon+".";
        text.innerText = " In your inventory you have: "+inventory;
    }
    else text.innerText = "Do not sell your only weapon!";
}

function fightSlime(){
    fighting = 0;
    goFight();
}

function fightBeast(){
    fighting = 1; // let fighting global variable in this file
    goFight();
}
function fightDragon(){
    fighting = 2;
    goFight();
}

function goFight(){
    update(locations[locations.length-1]) //locations.length-1 last element -> name:figh etc.
    monsterHealth = monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterNameText.innerText = monsters[fighting].name;
    monsterHealthText.innerText = monsters[fighting].health;
}

function attack(){
    text.innerText = `The ${monsters[fighting].name} attacks.`
    text.innerText += `You attack it with your ${weapons[currentWeapon].name}.`
    health -= monsters[fighting].level;
    monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random()*xp)+1;
    healthText.innerText = health;
    monsterHealthText.innerText = monsterHealth;
}

function dodge(){

}