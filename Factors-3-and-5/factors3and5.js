function getidealNums(low, high) {
    let result = 0;

    let xcount = 0;
    let ycount = 0;

    let comboArr = [];

    // Do while loop that calculates 3 ^ X
    while(result <= high) {

        ycount = 0;
        while (result <= high) {
            result = Math.pow(3, xcount) * Math.pow(5, ycount);

         //   console.log(result);

            if(result >= low && result <= high) {
                comboArr.push(result);
                console.log(xcount + " " + ycount + " " +result);
            }

            ycount++;
        }
        result = Math.pow(3, xcount);
        xcount++;
    }

    return comboArr.length;

}
