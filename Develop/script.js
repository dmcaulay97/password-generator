//Define arrays that generatePassword function will pull from 
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = [];
for (var i = 0; i < lowercase.length; i++) {
  uppercase.push(lowercase[i].toUpperCase());
}
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var characters = [" ", "\"", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", ">", "=", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

//Define random number generating function
function randomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function that generates password
function generatePassword() {
  //Ask the use what kind of characters they want in their password and how long they want their password to be
  var want_lower = false;
  var want_upper = false;
  var want_number = false;
  var want_character = false;

  want_lower = confirm("Do you want your password to contain LOWERCASE LETTERS?\nClick 'OK' for yes or 'Cancel' for no.");
  want_upper = confirm("Do you want your password to contain UPPERCASE LETTERS?\nClick 'OK' for yes or 'Cancel' for no.");
  want_number = confirm("Do you want your password to contain NUMBERS?\nClick 'OK' for yes or 'Cancel' for no.");
  want_character = confirm("Do you want your password to contain SPECIAL CHARACTERS?\nClick 'OK' for yes or 'Cancel' for no.");

  while ((!want_lower && !want_upper && !want_number && !want_character)) {
    alert("Please answer Yes to at least one option!!")
    want_lower = confirm("Do you want your password to contain LOWERCASE LETTERS?\nClick 'OK' for yes or 'Cancel' for no.");
    want_upper = confirm("Do you want your password to contain UPPERCASE LETTERS?\nClick 'OK' for yes or 'Cancel' for no.");
    want_number = confirm("Do you want your password to contain NUMBERS?\nClick 'OK' for yes or 'Cancel' for no.");
    want_character = confirm("Do you want your password to contain SPECIAL CHARACTERS?\nClick 'OK' for yes or 'Cancel' for no.");
  }

  var length = 0;

  // This loop makes the program keep asking for a length value until they enter a number between 8 and 128
  var message = "How long do you want yuor password to be?\nEnter a number between 8 and 128"
  length = prompt(message);

  while (length < 8 || length > 128) {
    alert("!!YOUR INPUT WAS OUTSIDE THE SPECIFIED RANGE!!\nPleae eneter a valid number.")
    length = prompt(message);
    //This line adds an additional line to the prompt box eath time they input an answer not between the specified range

  }

  // Now we create the character pool that the generated password will pull from
  var character_pool = [];

  //Create object, 'randomized', which will ensure all selected character types are included at least once in random positions in the password.
  //We also create an array, 'random_number_pool', to ensure that each time a random number is assigned as a key to the object 'randomized' it has not been used before. In other words each selection will be unique.
  var random_number_pool = []

  //This loop creates th random_number_pool array and ensures that it will be the same length as the length of the password.
  for (var i = 0; i < length; i++) {
    random_number_pool.push(i);
  }

  var randomized = {};

  if (want_lower) {
    //We wnat the character pool to include all character types that the user selects, so we create character_pool to reflect their choice.
    character_pool = character_pool.concat(lowercase);
    //This line creates a key:value pair in the object randomized. The key is a random number form 'random_number_pool' and the value is the character type array that this if statement is checking for.
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
  //THe perameters of this for loop make he password the length that the user wants
  for (var i = 0; i < length; i++) {
    //This if statement allows us to ensure all selected charactertypes are included in the password. 
    //If we simply selected from the character_pool array, there would be no way of ensuring at leat one of every type of character is included.
    //Since each character type array selected has been associated with a random number in the object 'randomized' we simply check for index = one of those keys and pick a character from the associated array.
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
