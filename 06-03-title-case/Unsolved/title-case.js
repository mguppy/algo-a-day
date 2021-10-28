// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    str[0] = (str.charAt(0)).toUpperCase();
    console.log(str[0])

    for( var i = 1; i < str.length; i++ ) {
        var previousLetter = str[i-1];
        var currentLetter = str[i];

        if (previousLetter == ' ') {
            str[i] = str[i].toUpperCase();
            // console.log(str[i])
        }
    }

    return str;
};
