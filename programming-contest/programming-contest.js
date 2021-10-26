function minimizeBias(ratings) {
    let sortedRatings = ratings.sort();

    let biasAmt = 0;

    for (let i = 0; i < sortedRatings.length; i+2) {

        let num1 = sortedRatings[i];

        let num2 = sortedRatings[i + 1];

        let result = num2 - num1;

        biasAmt += result;
        console.log(biasAmt);
    }

    return biasAmt;
}
