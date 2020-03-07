function A() {
    let _setCount = function () {
        console.dir(this);
        this.count++;
        console.log(`count = ${this.count}`);
    }

    this.count = 0;
    this.counter = function () {
        _setCount();

    }


}
const a1 = new A();
const a2 = new A();

a1.counter(); //
a2.counter();





