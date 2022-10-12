// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//.split("") it will split all characters up
// alpahbet, numbers, & special characters
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = uppercase.map(letter => letter.toLowerCase())
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]

// Added event listener to generate button
generateBtn.addEventListener("click", writePassword);


//function for var password and how to get the number we choose randomized
function getRandomInt (max) {
  return Math.ceil(Math.random() * max)
}

//function to generate password
function generatePassword() {
  // Step 1 Ask if how many characters does the user want the password to be?
  var passwordLength = prompt('How many characters would you like your password to be? (8 - 128)', '12')
  //added if passwordlength is less than 8 of greater than 128, to recursively go back to function generatePassword and repeat with those limitations
  if(passwordLength < 8 || passwordLength > 128) {
    alert('Try again! Password length must be betweeen 8-128')
    return generatePassword()
  }
  
  //added if statement in do while after steps 2-5, run the first 'confirm' again through loop and pick yes to at least one step
  do {
    // Step 2 Ask if the user wants to use uppercase
    var useUppercase = confirm('Would you like to include uppercase letters?')
    // Step 3 Ask if the user wants to use lowercase
    var useLowercase = confirm('Would you like to include lowercase letters?')
    // Step 4 Ask if the user wants to use numbers
    var useNumbers = confirm('Would you like to include numbers?')
    // Step 5 Ask if the user wants to use special chars
    var useSpecialChars = confirm('Would you like to include special characters?')

    if (useUppercase == false && useLowercase == false && useNumbers == false && useSpecialChars == false) {
      alert('Try again! Must select ok to at least one option')
    }
  } while (useUppercase == false && useLowercase == false && useNumbers == false && useSpecialChars == false)


    //first method attempt, discovered that it goes back to password length, used do while instead
    // if(useUppercase == false && useLowercase == false && useNumbers == false && useSpecialChars == false) {
    //   alert('Try again! Must select ok to at least one')
    //   return generatePassword()
    // }


    // Arrange the proper characters and/or letters and/or numbers, into a data structure, so we can extract 
    // a random password for each number length.
  
    // Create the structure of potential characters
  var potentialChars = []
    if (useUppercase) {
      potentialChars = potentialChars.concat(uppercase)
    } 
  
    if (useLowercase) {
      potentialChars = potentialChars.concat(lowercase)
    }
  
    if (useNumbers) {
      potentialChars = potentialChars.concat(numbers)
    }
  
    if (useSpecialChars) {
      potentialChars = potentialChars.concat(special)
    }
  
    // Create the password of "passwordLength" length
  
  var password = ''
    for (var i = 0; i < passwordLength; i++) {
      password = password + potentialChars[getRandomInt(potentialChars.length)]
    }
  
    return password
  }
