# password-generator
![img](Assets/img.png)
## Description
The purpose of this web application is to allow the uset to generate a password with their choice of character type and length. This process is repeatable and the perameters of the password can be changed for each new password generated.
## Features
The generator gives the user the choice of including lowercase, uppercase, special and numeric characters. They are able to generate a password between (inclusive) length 8 and 128. A feature of the generator that goes beyond the acceptence criteria is that when a character type is selected it is guerentted that that character type will appear in the password at least once and the position of this guerenteed character is random. See the comments in the javascript file to see how this is acheived. The app also handeles cases where the user selects no for all character types or chooses a password outside the allowed length. 
## Possible Improvments
Some possible future improvments include making a button that copys the generated password to the users clipboard, allowing the user toinclude a specific character or string of characters, and expanding the types of characters that the user can choose from.