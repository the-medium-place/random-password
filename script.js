// create empty string of accepted user characters
var userChar = "";

// create variables of all possible password parameters
var lower = "abcdefghijklmnopqrstuvwxyz"; // 26 characters
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 26 characters
var special = " \"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~"; // 32 characters
var numeric = "0123456789"; // 10 characters

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  // core function for password generation
  function generatePassword() {
    
    // reset user character list
    userChar = "";

    // prompt for length (8-128 chars)
    var i = 0;
    do {
      var pLength = prompt("Please enter the desired number of password characters: ");
      if (pLength > 7 && pLength < 129) {
        i++;
      } else {
        alert("Invalid entry. Please enter a number between 8 and 128.");
      }
    } while (i < 1);

    // prompt to include uppercase (A-Z)

    var capsBool = confirm("Include Capital Letter Characters (A-Z)?");

    if (capsBool === true) {
      // concat capital letters to userChar string
      userChar += upper;

    };

    // prompt to include lowercase (a-z)

    var lowerBool = confirm("Include Lower Case Letter Characters (a-z)?");

    if (lowerBool === true) {
      // concat capital letters to userChar string
      userChar += lower;

    };

    // prompt for numeric char (0-9)
    var numBool = confirm("Include Numeric Characters (0-9)?");

    if (numBool === true) {
      // concat capital letters to userChar string
      userChar += numeric;

    };


    // prompt for special chars (" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
    var specBool = confirm("Include Special Characters (shown between double dashes) -- \"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~-- ");

    if (specBool === true) {
      // concat capital letters to userChar string
      userChar += special;
    };

    // make sure at least one parameter was selected

    if (!userChar) {
      alert("Error: Please select at least one type of character to include in your password. Press the \"Generate Password\" button to start again.");
      
      return "Please press the button to try again";
    }

    // password generation COMMENCE!!!
    var pass = "";
    for (j = 0; j < pLength; j++) {
      randomVal = Math.floor(Math.random() * userChar.length);
      pass += userChar[randomVal];
    }

    // return generated password
    return pass;


  }


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

