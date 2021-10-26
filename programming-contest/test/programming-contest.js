var expect = chai.expect;

describe("minimizeBias", function() {
  it("takes a string and returns true if the string is a palindrome", function() {
    var ratings = [4,2,5,1];

    var result = minimizeBias(ratings);

    expect(result).to.eql(4);
  });

});
