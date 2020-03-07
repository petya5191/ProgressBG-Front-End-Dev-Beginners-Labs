// advanced !!!
function Rectangle(w, h) {
    this.width = w;
    this.height = h;
    // this is a normal (object) method
    this.calcArea =  ()=> {
        return this.width * this.height;
    }
}

let r1 = new Rectangle(20, 10);
console.log( r1.calcArea() );
