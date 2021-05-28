class Rover {
  static mapRotateLeft = new Map([
    ["W", "S"],
    ["S", "E"],
    ["E", "N"],
    ["N", "W"],
  ]);
  static mapRotateRight = new Map([
    ["N", "E"],
    ["E", "S"],
    ["S", "W"],
    ["W", "N"],
  ]);

  static gridLength = 5;
  static gridWidth = 4;
  constructor(coordinates = [0, 0], compassPoint = "N") {
    this.coordinates = coordinates;
    this.compassPoint = compassPoint;
  }

  rotate(direction) {
    if (direction == "L") {
      this.compassPoint = Rover.mapRotateLeft.get(this.compassPoint);
    } else {
      this.compassPoint = Rover.mapRotateRight.get(this.compassPoint);
    }
  }

  move() {
    this.coordinates = mapMove[this.compassPoint](this.coordinates);
  }
}

let moveNorth = function (coordinates) {
  return [
    coordinates[0],
    coordinates[1] < Rover.gridWidth - 1 ? coordinates[1] + 1 : coordinates[1],
  ];
};
let moveEast = function (coordinates) {
  return [
    coordinates[0] < Rover.gridLength - 1 ? coordinates[0] + 1 : coordinates[0],
    coordinates[1],
  ];
};

let moveWest = function (coordinates) {
  return [
    coordinates[0] > 0 ? coordinates[0] - 1 : coordinates[0],
    coordinates[1],
  ];
};
let moveSouth = function (coordinates) {
  return [
    coordinates[0],
    coordinates[1] > 0 ? coordinates[1] - 1 : coordinates[1],
  ];
};
let mapMove = {
  N: moveNorth,
  E: moveEast,
  W: moveWest,
  S: moveSouth,
};
module.exports = Rover;
