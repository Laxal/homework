class Circle {
    radius; // ? Чомy без цього поля видає помилку Maximum call stack size exceeded


    constructor(r) {
        this.radius = r;
    }

    get radius() {
        return this.radius;
    }

    set radius(newRadius) {
        if (newRadius <= 0) {
            console.log('Помилка вводу');
            return;
        }
        this._radius = newRadius;
    }

    get diameter() {
        return this.radius * 2;
    }

    calcSquare() {
        return Math.PI * (this.radius ** 2);
    }

    calcPerimetr() {
        return 2 * Math.PI * this.radius;
    }
}

// test ===========================================================================

let circle1 = new Circle(5);
let circle2 = new Circle(1);

console.log(circle1.calcSquare());
console.log(circle1.calcPerimetr());
console.log(circle1.radius);
circle1.radius(1);
console.log(circle1.radius);
console.log(circle1.diameter);











