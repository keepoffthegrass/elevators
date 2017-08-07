

var NUM_ELEVATORS = 4;
var NUM_FLOORs = 9;




Class Elevator {

  constructor(id) {
    this.id = id;
  }

  move(targetFloor) {
    if (targetFloor > 0 && targetFloor <= NUM_FLOORS) {
      if (targetFloor == this.currentFloor) {
        console.log("Not moving. We're already on " + targetFloor);
      } else {
        console.log("Moving from " + this.currentFloor + " to " + targetFloor);
      }
    } else {
      console.log("Not moving. Cannot move to " + targetFloor + ". (valid floors are 1 to " + NUM_FLOORS + ")");
    }
  }

  openDoor() {
    console.log("Opening door.");
  }

  closeDoor() {
    console.log("closing door.");
  }

}




