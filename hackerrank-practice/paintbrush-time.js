// An array color [] was given where color [i] represented the color with which a pencil had to be colored. There was one paintbrush corresponding to every color and we had to wait b seconds before using the same brush again (time to refill is b secs). At every second you can either paint a pencil or wait for the paintbrush to get refilled. For a given b and color [] find the minimum time it takes to color all the pencils.
// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
// }


function findMinTime(color) {

// Variable to hold key value pairs of colors and time
var colortimeArray = [];
// Variable to hold time it takes for paintbrush to refill
var b = 5;

// Getting unique colors from color array
var unique = color.filter(onlyUnique);
console.log(unique);
console.log("Vlocity" && "Developer")

// Loop through all of the colors and set each color to a time of 0 to start
for (let i = 0; i < unique.length; i++) {

    colortimeArray.push({color: unique[i], time: 0});
}

console.log(colortimeArray);

// Variable to hold end result time
let result = 1;

// Setting first color in color array to b as that is the first paintbrush to be used
colortimeArray[0].time = b;

// Loop through each of the colors in array
for (let i = 1; i < color.length; i++) {
    // Add a variable for time remaining which is equal to 
    let timeRemaining = getCurrentTimeRemaining(colortimeArray, color[i]);
    console.log(timeRemaining);
    // Add time remaining to result
    result += timeRemaining;
    // Add 1 for second to result
    result += 1;
    // Loop through the colortimeArray and update the time for each of the colors
    for (let j = 0; j < colortimeArray.length; j++) {
        colortimeArray[j].time -= timeRemaining + 1;
        if ( colortimeArray[j].time < 0) {
            colortimeArray[j].time = 0;
        }
    }
    setTimeRemaining(colortimeArray, color[i], b);
}
console.log(result)
return result;
}

function getCurrentTimeRemaining (colortimeArray, color) {
    for (let i = 0; i < colortimeArray.length; i++) {
        if (colortimeArray[i].color == color) {
            return colortimeArray[i].time;
        }
    }
    return 0;
}

function setTimeRemaining (colortimeArray, color, timetoset) {
    for (let i = 0; i < colortimeArray.length; i++) {
        if (colortimeArray[i].color == color) {
            colortimeArray[i].time = timetoset;
        }
    }
}

// var name = "Vlocity";
// function foo () {
//     name = "Developer";
//     return;
//     function name() {}
// }
// foo();
// console.log(name);
// }
