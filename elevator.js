

var NUM_ELEVATORS = 4;
var MAX_FLOOR = 9;
var MIN_FLOOR = 1;

var elevators = [];


Class Elevator {

  constructor(id) {
    this.id = id;
    this.currentFloor = 1;
    this.targetFloor;

    this.active = true;
    this.occupied = false;
    this.doorOpen = false;
    this.onTheMove = false;

    this.tripsSinceMaintenance = 0;
  }

  requestMove(targetFloor) {
      if (! this.active) {
        console.log("Not moving. Elevator is disabled");
      }

      if (! validFloor(targetFloor)) {
        console.log("Not moving. Invalid floor: " + targetFloor 
          + ". (valid floors are " + MIN_FLOOR + " +  to " + MAX_FLOOR + ")");
        return;
      }

      if (targetFloor == this.currentFloor) {
        console.log("Not moving. We're already on " + targetFloor);
        return;
      }

      console.log("Moving from " + this.currentFloor + " to " + targetFloor);
      move(targetFloor);
  }

  move(targetFloor) {
     this.targetFloor = targetFloor;


     
     this.tripsSinceMaintenance++; 
  }

  openDoor() {
    console.log("Opening door.");
    this.doorOpen = true;
  }

  closeDoor() {
    console.log("Closing door.");
    this.doorOpen = false;
  }

}


function validFloor(f) {
  if (f < MIN_FLOOR || f > MAX_FLOOR) {
    return false;
  }
}


function requestElevator(fromFloor, toFloor) {
  
}


function initElevatorSimulation() {
  for (var i = 0; i < NUM_ELEVATORS; i++) {
    let e = new Elevator(i);
    elevators.push(e);
  }
}


initElevatorSimulation();



