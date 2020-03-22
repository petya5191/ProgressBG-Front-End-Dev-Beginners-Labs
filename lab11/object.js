// write Car constructor
function Car(speed) {
    this.speed = speed;
}
Car.prototype.x = 1;

let ford = new Car(100);

console.log( ford.__proto__ === Car.prototype );
console.dir(ford);
console.dir(Car);

console.log( ford.x ); // ?