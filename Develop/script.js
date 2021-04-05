//Define arrays that generatePassword function will pull from 
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = [];
for (var i = 0; i < lowercase.length; i++) {
  uppercase.push(lowercase[i].toUpperCase());
}
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var characters = [" ", "\"", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]

//Define random number generating function
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function that generates password
function generatePassword() {
  //Ask the use what kind of characters they want in their password and how long they want their password to be
  var want_lower = confirm("Do you want your password to contain LOWERCASE LETTERS?\nClick 'OK' for yes or 'Cancel' for no.");
  var want_upper = confirm("Do you want your password to contain UPPERCASE LETTERS?\nClick 'OK' for yes or 'Cancel' for no.");
  var want_number = confirm("Do you want your password to contain NUMBERS?\nClick 'OK' for yes or 'Cancel' for no.");
  var want_character = confirm("Do you want your password to contain SPECIAL CHARACTERS?\nClick 'OK' for yes or 'Cancel' for no.");
  var length = 0;

  // This loop makes the program keep asking for a length value until they enter a number between 8 and 128
  var message = "How long do you want yuor password to be?\nEnter a number between 8 and 128"

  while (length < 8 || length > 128) {
    length = prompt(message);
    //This line adds an additional line to the prompt box eath time they input an answer not between the specified range
    message = message + "\n!!YOUR INPUT WAS OUTSIDE THE SPECIFIED RANGE!!"
  }

  // Now we create the character pool that the generated password will pull from
  var character_pool = [];

  //Create object whickh will ensure all selected characters are included at least once in random positions in the password
  //We also create an array random_number_pool to ensure that each time a random number is assigned as a key to the object 'randomized' it has not been used before. In other words each selection will be unique
  var random_number_pool = []

  for (var i = 0; i < length; i++) {
    random_number_pool.push(i);
  }
  var randomized = {};

  if (want_lower) {
    character_pool = character_pool.concat(lowercase);
    randomized[random_number_pool.splice(randomNumber(random_number_pool.length), 1)] = lowercase;
  }

  if (want_upper) {
    character_pool = character_pool.concat(uppercase);
    randomized[random_number_pool.splice(randomNumber(random_number_pool.length), 1)] = uppercase;
  }

  if (want_number) {
    character_pool = character_pool.concat(numbers);
    randomized[random_number_pool.splice(randomNumber(random_number_pool.length), 1)] = numbers;
  }

  if (want_character) {
    character_pool = character_pool.concat(characters);
    randomized[random_number_pool.splice(randomNumber(random_number_pool.length), 1)] = characters;
  }

  //Now we generate the password using a for loop
  var password = "";
  for (var i = 0; i < length; i++) {
    if (Object.keys(randomized).includes(i.toString())) {
      var array = randomized[i.toString()];
      password = password + array[randomNumber(array.length)];
    } else {
      password = password + character_pool[randomNumber(character_pool.length)];
    }
  }

  return password;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
