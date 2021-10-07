// Write code to return the largest number in the given array

var maxNum = function(arr) {
    var result = arr[0];
    // console.log(result);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
            // console.log(result);
        }
    }
    return result;
};
