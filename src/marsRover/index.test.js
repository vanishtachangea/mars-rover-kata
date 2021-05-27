const marsRover = require("./index");
var { expect } = require("chai");

describe("getCoordinates", () => {
  it("should return 0", () => {
    expect(marsRover.getCoordinates([])).to.equal(0);
  });
});
