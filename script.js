// Assignment Code 
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assign variables
var answer = []
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numbers = "0123456789"
var specialChar = "!@#$%&*()?"
var newPassword = ""

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }

  function generatePassword() {
    var response = prompt

    var passwordLength = parseInt (
        prompt ("How many characters?")
    )
    var confirmLength = parseInt(passwordLength);

    // Verify number of characters desired

    if (passwordLength <8 || passwordLength >128 || isNaN(passwordLength)) {
        alert ("Must be between 8 and 128 characters")
        return
    }

    var upperConfirm = confirm("Do you want uppercase letters?")
    if (upperConfirm === true) {
        for (var i = 0; i < uppercase.length; i++) {
            answer.push(uppercase[i]);
        }
        console.log(answer)
    }
  }
