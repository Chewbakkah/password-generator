// Assignment code here
// assign variables
const charLowercase = ["abcdefghijklmnopqrstuvwxyz"];
const charUppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const charNumber = ["1234567890"];
const charSymbol = ["!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
let selectCharacters = [];
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
  if (
    promptLength < 8 ||
    promptLength > 128 ||
    promptLength === null ||
    promptLength === ""
  ) {
    window.alert(
      "You may not be responisible enough to control something that needs a password if you can't pick a number between 8 and 128. Try again!"
    );
    return setLength();
  }
  promptLength = parseInt(promptLength);
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
    if (confirmLowercase) {
      selectCharacters += charLowercase;
      selectCharacters += ",";
    }
    if (confirmUppercase) {
      selectCharacters += charUppercase;
      selectCharacters += ",";
    }
    if (confirmNumbers) {
      selectCharacters += charNumber;
      selectCharacters += ",";
    }
    if (confirmSpecial) {
      selectCharacters += charSymbol;
      selectCharacters += ",";
    }
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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
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
    n = getRandomInt(selectCharacters.length + 1);
    console.log(n);
    completePassword.push(selectCharacters[n]);
    console.log(completePassword);
    console.log(selectCharacters);
    convertPasswordString();
  };
  resetVariables();
  console.log(tempPass);
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