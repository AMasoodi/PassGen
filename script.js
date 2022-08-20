// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword(){
  var passlenght = window.prompt("Password Lenght?")
  var upper = window.confirm ("Upper case letters?")
  var lower = window.confirm ("lower case ?")
  var numeric = window.confirm ("numbers?")
  var special = window.confirm ("Special Characters?")
  if (upper ===false&&lower===false&&numeric ===false&& special ===false){
    return "Must meet character criteria"
  }
  var upperChar = "QWERTYUIOPASDFGHJKLZXCVBNM"
  var lowerChar = "qwertyuiopasdfghjklzxcvbnm"
  var numericChar = "1234567890"
  var specialChar = "!@#$%^&*()_+"
  var possibleChar = ""
  if (upper){
possibleChar =possibleChar + upperChar
  }
  if (lower){
    possibleChar = possibleChar + lowerChar
  }
  if (numeric){
    possibleChar = possibleChar + numericChar
  }
  if (special){
    possibleChar = possibleChar + specialChar
  }
  var selectedChar = ""
  for (var i = 0; i < passlenght ; i++){
    var randomIndex = Math.floor(Math.random()*possibleChar.length)
    var randomChar = possibleChar[randomIndex] 
    selectedChar = selectedChar + randomChar
  }
  return selectedChar
}
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
