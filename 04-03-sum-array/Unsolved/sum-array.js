// Write code to add all the numbers in `arr` and return the total


var sumArray = function (arr) {

    //Declare sum variable
    var result = 0;

    //Loop through each number in the array and add to sum variable
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        result = result + arr[i];
    }

    //Return sum
    console.log(result);
    return result;
};
