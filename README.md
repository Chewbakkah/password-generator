# Password Generator

This website showcases skills learned during module 3 of The Coding Bootcamp at UT Austin. Javascript was used to write the functions that enable the website to provide a completely random password based on settings chosen by the user. Settings consist of length and four different character types.

## How the Password Generator Is Used
The user will click the "Generate Password" button to begin the process. From there they will choose a length between 8 and 128 characters long. They will then be prompted to choose whether to include or ommit the 4 different character types. Once at least one character type has been chosen then the program will display their password in the provided box. I've also included a "Copy Password" button that will copy the password to the user's clipboard and also alert them that the password has been copied.

## Failsafes
Two failsafes have been included in the Javascript to verify that the character length does meet the criteria, and that at least one character type has been selected. If these conditions haven't been met they will recieve an alert window notifying them to try again.

## Javascript Used
* Addition Assignment Operator
* Let/Const/Var Variables
* Window/Alert/Confirm Prompts
* getRandomInt(max)
* Math.floor
* Math.random
* For/While Loops
* If/Else Statements
* .toString method
* isNaN method

Live Link:
https://chewbakkah.github.io/password-generator/

![password-generator](https://user-images.githubusercontent.com/92648393/143778512-3b061a55-cf83-4cd9-b1fb-2a08173052b0.JPG)
