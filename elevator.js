

var NUM_ELEVATORS = 4;
var MAX_FLOOR = 9;
var MIN_FLOOR = 1;


Class Elevator {

  constructor(id) {
    this.id = id;
    this.currentFloor = 1;
  }

  move(targetFloor) {
      if (targetFloor == this.currentFloor) {
        console.log("Not moving. We're already on " + targetFloor);
        return;
      }

      if (targetFloor < MIN_FLOOR || targetFloor > MAX_FLOOR) {
        console.log("Not moving. Cannot move to " + targetFloor 
          + ". (valid floors are " + MIN_FLOOR + " +  to " + MAX_FLOOR + ")");
        return;
      }

      console.log("Moving from " + this.currentFloor + " to " + targetFloor);
  }

  openDoor() {
    console.log("Opening door.");
  }

  closeDoor() {
    console.log("Closing door.");
  }

}


function requestElevator(fromFloor, toFloor) {

}


for (var i = 0; i < NUM_ELEVATORS; i++) {
  let e = new Elevator(i);
}





