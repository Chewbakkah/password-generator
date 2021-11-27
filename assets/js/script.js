// Assignment code here
// assign variables
const charLower = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const charUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
const charNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const charSymbol = [
  "*",
  ";",
  "<",
  ">",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  "#",
  "$",
  "?",
  "!",
  "^",
  "|",
];
const characters = [
  "abcdefghijklmnopqrstuvwxyz",
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "0123456789",
  "!\"#$%&()*+,-./:;<=>?@[\\]^_`{|}~'",
];
var completePassword = [];
var confirmLowercase = null;
var confirmUppercase = null;
var confirmNumbers = null;
var confirmSpecial = null;
var promptLength = null;
var tempPass = null;

var setLength = function () {
  promptLength = window.prompt(
    "Pick a password length between 8 and 128 characters!"
  );
  promptLength = parseInt(promptLength);

  // Return error if not between 8 and 128
  while (promptLength < 8 || promptLength > 128) {
    promptLength = window.prompt(
      "You may not be responisible enough to control something that needs a password if you can't pick a number between 8 and 128. Try again!"
    );
    promptLength = parseInt(promptLength);
  }
};

var setCharacters = function () {
  // Prompt for lowercase
  while (
    !confirmLowercase &&
    !confirmUppercase &&
    !confirmNumbers &&
    !confirmSpecial
  ) {
    confirmLowercase = confirm("Would you like to use lowercase letters?");

    // Prompt for uppercase
    confirmUppercase = confirm("Would you like to use uppercase letters?");

    // Prompt for numeric
    confirmNumbers = confirm("Would you like to use numbers?");

    // Prompt for special characters
    confirmSpecial = confirm("Would you like to use special characters?");

    // If none selected return warning and reloop
    if (
      !confirmLowercase &&
      !confirmUppercase &&
      !confirmNumbers &&
      !confirmSpecial
    ) {
      window.alert(
        "You must select at least one type of character for your password. Please try again."
      );
    } else {
      break;
    }
  }
};

var convertPasswordString = function () {
  //pull password from string
  completePassword.toString();
  tempPass = completePassword.join("");
};

var resetVariables = function () {
  completePassword = [];
  confirmLowercase = null;
  confirmUppercase = null;
  confirmNumbers = null;
  confirmSpecial = null;
  promptLength = null;
};

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0,99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied Password: " + copyText.value);
}

function generatePassword() {
  setLength();
  setCharacters();

  // Generate Password
  //loop randomizer until password length is achieved
  for (let i = 0; i < promptLength; i++) {
    //Push new random to password string use y for new entry
    y = 1;
    completePassword.push(y);
  }




  
  // Convert password to string
  convertPasswordString();
  // Return Password
  resetVariables();
  return tempPass;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
