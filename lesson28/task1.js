class Circle {
    radius;


    constructor(r) {
        this.radius = r;
    }

    get radiusValue() {
        return this.radius;
    }

    set radiusValue(newRadius) {
        if (newRadius <= 0) {
            console.log('Помилка вводу');
            return;
        }
        this.radius = newRadius;
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
let circle2 = new Circle(0);

// console.log(circle1.calcSquare());
// console.log(circle1.calcPerimetr());
// console.log(circle1.radius);
// circle1.radiusValue = 0;
// console.log(circle2.radius);
// console.log(circle1.diameter);











