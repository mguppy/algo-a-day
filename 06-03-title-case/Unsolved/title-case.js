// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    // Make empty result array
    var result = [];

    // Split string by spaces into words
    words = str.split(" ");

    //Loop through each of the words in the array and grab the first letter of each word
    for (var i = 0; i < words.length; i++) {
        // Split words into letters
        var word = words[i].split("");

        // Grab the first letter of each word and upper case it
        word[0] = word[0].toUpperCase();
        console.log(word);

        // Once words have been uppercased, push the words into the result array and join the letters together
        result.push(word.join(""));
        console.log(result);
    }

    // Return all words joined by spaces
    return result.join(" ");
};
