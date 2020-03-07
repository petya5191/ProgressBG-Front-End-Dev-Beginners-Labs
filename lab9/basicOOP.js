/* -------------------------------------------------------------------------- */
/*                                class syntax                                */
/* -------------------------------------------------------------------------- */
class Rectangle{
    constructor(id, width, height){
        this.id = id;
        this.width = width;
        this.height = height;
    }


    // this.area = width*height;
    calcArea() {
        return this.width * this.height;
    };

}

let rectangle1 = new Rectangle("r1", 40, 20);
let rectangle2 = new Rectangle("r2", 30, 30);
let rectangle3 = new Rectangle("r3", 10, 80);
let rectangle4 = new Rectangle("r4", 90, 2);
let rectangle5 = new Rectangle("r5", 20, 20);

console.dir( rectangle1 );