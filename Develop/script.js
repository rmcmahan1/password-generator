// Assignment code here


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
   return symbols[0];
}





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


