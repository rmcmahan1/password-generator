// Assignment code here

const randomGen = {
  upper: getRandomUpper,
  lower: getRandomLower,
  symbol: getRandomSymbol,
  number: getRandomNumber,
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write arrays for my variables (#s, lowercase, uppercase, special characters)

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
   return symbols[Math.floor(Math.random() * symbols.length)];
}


//DOM elements
const resultEl = document.getElementById('result');
const lengthEL = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const symbolsEl = document.getElementById('symbols');
const numbersEl = document.getElementById('numbers');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

//function to get random 
//four functions for each of the variables that use getrandom function to input that variable
//use math.random
//function that generates the pw

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


