// define Car Constructor:
function Vehicle(speed) {
    if( speed > 0){
        this.speed = speed;
    }
}
Vehicle.prototype.drive = function () {
    if (this.wings >= 2){
        console.log(`Flying wiht ${this.speed} km/h`);
    }else{
        console.log(`Driving wiht ${this.speed} km/h`);
    }
}

function Car(speed, color) {
    // call Vehicke constructor:
    Vehicle(speed);

    this.color = color
}

Car.prototype = Object.create(Vehicle.prototype);


function Airplane(wings) {
    this.wings = wings;
}

let car1 = new Car(180, "red");
// let air1 = new Airplane(480, 2);

car1.drive();
// air1.drive();