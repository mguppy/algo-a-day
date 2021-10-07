// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    // Split the string into characters
    var characters = str.split("");
    console.log(characters);

    //Empty variable to hold count of vowels
    var result = 0;

    // Loop through characters and if a,e,i,o,u, count increases by 1
    for(let i = 0; i < characters.length; i++) {
        if(characters[i] == 'a' || characters[i] == 'e' || characters[i] == 'i' || characters[i] == 'o' || characters[i] == 'u' || characters[i] =='A' || characters[i] =='E'|| characters[i] == 'I' || characters[i] == 'O' || characters[i] == 'U') {
            result ++;
            console.log(result);
        }
    }

    // Return total count if vowels exist
    // If no vowels, return 0
    if (result > 0) {
        return result;
    }
    else {
        return 0;
    }
};
