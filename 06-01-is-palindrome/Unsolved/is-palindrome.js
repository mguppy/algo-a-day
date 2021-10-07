// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

var isPalindrome = function(str) {
    // Separate string by characters
    // var characters = str.split("");
    // console.log(characters);

    // For loop to go through the characters to determine if the first half of the characters match the last half
    for (let i = 0; i < str.length; i++) {
        // Convert all characters in string to lowercase so there are no issues in matching
        str = str.toLowerCase();
        // If character 0 does not match last character in string, stop loop
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;

    // If string is palindrome, return true

    // If string is not, return false
};
