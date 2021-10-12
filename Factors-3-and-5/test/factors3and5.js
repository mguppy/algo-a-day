var expect = chai.expect;

describe("getidealNums", function() {
  it("takes a string and returns true if the string is a palindrome", function() {
    var low = 200;
    var high = 405;

    var result = getidealNums(low,high);

    expect(result).to.eql(4);
  });

});
