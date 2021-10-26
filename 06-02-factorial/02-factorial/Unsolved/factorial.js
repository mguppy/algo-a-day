// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {

    // 4 factorial would equal 24; 4*3*2*1 = 24

    // Should return 1 if num is 0
    if (num === 0) {
        return 1;
    }

    else {
    for (var i = num-1; i >= 1; i--) {
        num = i * num;
    }
    return num;
}
};
