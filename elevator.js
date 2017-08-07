

var NUM_ELEVATORS = 4;
var MAX_FLOOR = 9;
var MIN_FLOOR = 1;

var elevators = [];


Class Elevator {

  constructor(id) {
    this.id = id;
    this.currentFloor = 1;

    // If targetFloor is defined, the elevator is on the move
    this.targetFloor;

    this.maintenanceMode = false;
    this.doorOpen = false;

    this.tripsSinceMaintenance = 0;
  }

  requestMove(from, to) {
      if (this.maintenaceMode) {
        say("Elevator is in Maintenance Mode");
        return false;
      }

      // Item 4 and 5
      if (! validFloor(requestedFloor)) {
        say("Invalid floor: " + requestedFloor 
          + ". (valid floors are " + MIN_FLOOR + " +  to " + MAX_FLOOR + ")");
        return false;
      }

      if (this.targetFloor) {
        // already on a trip
        
        // lets see if request is going same direction
        var currentDirection = Elevator.direction(this.currentFloor, this.targetFloor);
        var requestedDirection = Elevator.direction(from, to);
        if (currentDirection != requestedDirection) {
          say("Request is going wrong direction");
          return false;
        }

        // lets see if request is within current trip
        if (from < this.currentFloor
          || to > this.targetFloor) {
          say("Request is outside of current trip");
          return false;
        }
      }

      if (requestedFloor == this.currentFloor) {
        say("Already on " + requestedFloor);
        // shortcutting move() because we're there and
        // dont need to increment trip counter
        return true;
      }

      say("Moving from " + this.currentFloor + " to " + requestedFloor);
      return move(requestedFloor);
  }

  static direction(from, to) {
    if (to > from) {
      return  1;
    } else if (to == from) {
      return 0;
    } else {
      return -1;
    }
  }

  move(requestedFloor) {
    this.targetFloor = requestedFloor;

    if (this.doorOpen) {
     this.closeDoor();
    }

    // Item 8
    this.tripsSinceMaintenance++; 
    if (this.tripsSinceMaintenance > 99) {
      this.maintenaceMode = true;
    }

    return true;
  }

  passingFloor(f) {
    // Item 2
    say("Passing floor " + f);
    this.currentFloor = f;

    if (this.currentFloor = this.targetFloor) {
      this.targetFloor = 0;
      this.openDoor();
    }
  }

  // Item 3
  openDoor() {
    say("Opening door.");
    this.doorOpen = true;
  }

  closeDoor() {
    say("Closing door.");
    this.doorOpen = false;
  }

  say(msg) {
    console.log("[Elevator " + id "] " + msg);
  }

}


function validFloor(f) {
  if (f < MIN_FLOOR || f > MAX_FLOOR) {
    return false;
  }
}


function requestElevator(fromFloor, toFloor) {
  // Item 6 and 7

  for (var i = 0; i < NUM_ELEVATORS; i++) {
    let e = elevators[i];
    if (! e.targetFloor && e.currentFloor == fromFloor) {
      
      break;
    }
  }
  
}


function initElevatorSimulation() {
  // Item 1
  for (var i = 0; i < NUM_ELEVATORS; i++) {
    let e = new Elevator(i);
    elevators.push(e);
  }
}


initElevatorSimulation();



