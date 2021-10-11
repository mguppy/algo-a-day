var expect = chai.expect;

describe("findMinTime", function() {
  // it("takes an array of colors and returns minimum time to paint with all colors", function() {
  //   var color = ["blue","blue","yellow","red", "green"];

  //   var result = findMinTime(color);

  //   expect(result).to.eql(10);
  // });

  // it("takes an array of colors and returns minimum time to paint with all colors", function() {
  //   var color = ["blue","blue","blue","red", "green"];

  //   var result = findMinTime(color);

  //   expect(result).to.eql(15);
  // });

  it("takes an array of colors and returns minimum time to paint with all colors", function() {
    var color = ["blue","green","blue","red", "green"];

    var result = findMinTime(color);

    expect(result).to.eql(12);
  });
});
