// Assignment Code
var generateBtn = document.querySelector("#generate");

//alphabet here

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function to generate password

function generatePassword() {
  
}
