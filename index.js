class Caculator {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }
    getAdd() {
        return this.a + this.b;
    }
}

Caculator.prototype.getSub = function () {
    return this.a - this.b;
}

console.log(new Caculator(5, 6).getSub());

