
/* 
CIT 281 Project 1
Name: Felice Lee
 */

function generateRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let letters = "";
let length = getRandomInteger(5, 25);
for (let i = 0; i <= length; ++i){
    letters += generateRandomLetter("");
}

console.log(letters);
