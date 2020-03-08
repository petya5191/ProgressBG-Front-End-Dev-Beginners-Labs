// function Car() {
// }
// Car.prototype.drive = function () {
//     console.log(`Driving with ${this.speed}`);
// }

function Ford(speed) {
    this.speed = speed;
}
Ford.prototype.drive = function () {
    console.log(`Driving with ${this.speed}`);
}
Ford.prototype.x = 5;

let peshoFord = new Ford(200);
let mariaFord = new Ford(300);

console.dir(Ford);
console.dir(peshoFord);

peshoFord.drive();
console.log( peshoFord.x );
