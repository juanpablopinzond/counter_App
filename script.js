// let myAge = 24;

// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);

// let bonusPoints = 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 50;
// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

let count = 0;
let countOnTheScreen = document.getElementById("count");

function increment() {
    count += 1;
    countOnTheScreen.innerHTML = count;
}

let incrementResult = document.getElementById("increment_btn");
incrementResult.addEventListener("click", increment);

function save() {
    countOnTheScreen.innerHTML = 0;
    let completeSavedValue = count + " - ";
    let showSavedNumber = document.getElementById("aditionalText");
    showSavedNumber.textContent += completeSavedValue;
    count = 0;
}

let saveNumber = document.getElementById("save_btn");
saveNumber.addEventListener("click", save);

// function testNumber() {
//     let number = 42;
//     return console.log(number);
// }

// testNumber();

// let lap1 = 34;
// let lap2 = 33;
// let lat3 = 36;


// function totalLaps() {
//     let resultOfLaps = lap1 + lap2 + lat3;
//     console.log(resultOfLaps);
// }

// totalLaps();

// let Name = "Juan Pablo";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + Name;
// console.log(myGreeting);

// console.log(4 + 5);
// console.log("2" + "4");
// console.log("5" + 1);
// console.log("100" + 100);

let welcomeEl = document.getElementById("welcome-el");
let myName = "Juan Pablo Pinzon";
let myGreeting = "Welcome back to your personal page ";

welcomeEl.innerText = myGreeting + myName;
welcomeEl.innerText = welcomeEl.innerText + "👋";

// let result = myGreeting + myName;
// welcomeEl.innerText = result + "👋";

// welcomeEl.innerText += "👋"; // En este ejemplo se esta accediendo al cotenido ya asignado arriba y se le esta agregando o concatenando el emoji.