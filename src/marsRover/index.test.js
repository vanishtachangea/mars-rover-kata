const { expect } = require("chai");
const Rover = require("./rover");

describe("TEST Rover", () => {
  describe("Rover Initial Position", () => {
    it("should be at coordinates [0,0] at the beginning", () => {
      let rover = new Rover();
      expect(rover.coordinates).to.eql([0, 0]);
    });
    it("Should point North at the beginning", () => {
      let rover = new Rover();
      expect(rover.compassPoint).to.equal("N");
    });
    it("Should has a grid of Size 5,4", () => {
      let rover = new Rover();
      expect(rover.compassPoint).to.equal("N");
      expect(Rover.gridLength).to.equal(5);
      expect(Rover.gridWidth).to.equal(4);
    });
    it("Should initialise Rover with coordinates and Compass Point", () => {
      let cPoint = "S";
      let coordinates = [1, 2];
      let rover = new Rover(coordinates, cPoint);
      expect(rover.coordinates).to.eql(coordinates);
      expect(rover.compassPoint).to.equal(cPoint);
    });
    it("Should be able to change Grid Length", () => {
      Rover.gridLength = 7;
      expect(Rover.gridLength).to.equal(7);
    });
    it("Should be able to change Grid Width", () => {
      Rover.gridWidth = 8;
      expect(Rover.gridWidth).to.equal(8);
    });
  });

  describe("Rover Left Rotation", () => {
    it("Should point WEST when it rotates LEFT from NORTH", () => {
      let cPoint = "N";
      let coordinates = [1, 2];
      let rover = new Rover(coordinates, cPoint);

      rover.rotate("L");
      let newCPoint = "W";
      expect(rover.coordinates).to.eql(coordinates);
      expect(rover.compassPoint).to.equal(newCPoint);
    });

    it("Should point SOUTH when it rotates LEFT from WEST", () => {
      let cPoint = "W";
      let coordinates = [1, 2];
      let rover = new Rover(coordinates, cPoint);

      rover.rotate("L");
      let newCPoint = "S";
      expect(rover.coordinates).to.eql(coordinates);
      expect(rover.compassPoint).to.equal(newCPoint);
    });

    it("Should point East when it rotates LEFT from South", () => {
      let cPoint = "S";
      let coordinates = [1, 2];
      let rover = new Rover(coordinates, cPoint);

      rover.rotate("L");
      let newCPoint = "E";
      expect(rover.coordinates).to.eql(coordinates);
      expect(rover.compassPoint).to.equal(newCPoint);
    });

    it("Should point North when it rotates LEFT from East", () => {
      let cPoint = "E";
      let coordinates = [1, 2];
      let rover = new Rover(coordinates, cPoint);

      rover.rotate("L");
      let newCPoint = "N";
      expect(rover.coordinates).to.eql(coordinates);
      expect(rover.compassPoint).to.equal(newCPoint);
    });
  });

  describe("Rover Right Rotation", () => {
    it("Should point WEST when it rotates RIGHT from NORTH", () => {
      let cPoint = "N";
      let coordinates = [1, 2];
      let rover = new Rover(coordinates, cPoint);

      rover.rotate("R");
      let newCPoint = "E";
      expect(rover.coordinates).to.eql(coordinates);
      expect(rover.compassPoint).to.equal(newCPoint);
    });

    it("Should point SOUTH when it rotates RIGHT from WEST", () => {
      let cPoint = "E";
      let coordinates = [1, 2];
      let rover = new Rover(coordinates, cPoint);

      rover.rotate("R");
      let newCPoint = "S";
      expect(rover.coordinates).to.eql(coordinates);
      expect(rover.compassPoint).to.equal(newCPoint);
    });

    it("Should point East when it rotates RIGHT from South", () => {
      let cPoint = "S";
      let coordinates = [1, 2];
      let rover = new Rover(coordinates, cPoint);

      rover.rotate("R");
      let newCPoint = "W";
      expect(rover.coordinates).to.eql(coordinates);
      expect(rover.compassPoint).to.equal(newCPoint);
    });

    it("Should point North when it rotates RIGHT from East", () => {
      let cPoint = "W";
      let coordinates = [1, 2];
      let rover = new Rover(coordinates, cPoint);

      rover.rotate("R");
      let newCPoint = "N";
      expect(rover.coordinates).to.eql(coordinates);
      expect(rover.compassPoint).to.equal(newCPoint);
    });
  });

  describe("Rover Moves", () => {
    it("Should move to [0,2] from [1,2] if compassPoint is WEST", () => {
      let cPoint = "W";
      let coordinates = [1, 2];
      let rover = new Rover(coordinates, cPoint);
      rover.move();
      let newCoordinates = [0, 2];
      expect(rover.coordinates).to.eql(newCoordinates);
      expect(rover.compassPoint).to.equal(cPoint);
    });
    it("Should move to [1,1] from [1,2] if compassPoint is SOUTH", () => {
      let cPoint = "S";
      let coordinates = [1, 2];
      let rover = new Rover(coordinates, cPoint);
      rover.move();
      let newCoordinates = [1, 1];
      expect(rover.coordinates).to.eql(newCoordinates);
      expect(rover.compassPoint).to.equal(cPoint);
    });
    it("Should move to [2,2] from [1,2] if compassPoint is EAST", () => {
      let cPoint = "E";
      let coordinates = [1, 2];
      let rover = new Rover(coordinates, cPoint);
      rover.move();
      let newCoordinates = [2, 2];
      expect(rover.coordinates).to.eql(newCoordinates);
      expect(rover.compassPoint).to.equal(cPoint);
    });
    it("Should move to [1,3] from [1,2] if compassPoint is NORTH", () => {
      let cPoint = "N";
      let coordinates = [1, 2];
      let rover = new Rover(coordinates, cPoint);
      rover.move();
      let newCoordinates = [1, 3];
      expect(rover.coordinates).to.eql(newCoordinates);
      expect(rover.compassPoint).to.equal(cPoint);
    });

    it("Should not move from [4,2] if compassPoint is EAST because it is at the right side of the grid", () => {
      Rover.gridLength = 5;
      Rover.gridWidth = 4;
      let cPoint = "E";

      let coordinates = [Rover.gridLength - 1, 2];
      let rover = new Rover(coordinates, cPoint);
      rover.move();
      let newCoordinates = [Rover.gridLength - 1, 2];
      expect(rover.coordinates).to.eql(newCoordinates);
      expect(rover.compassPoint).to.equal(cPoint);
    });
  });
});
