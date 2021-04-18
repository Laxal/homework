// Завдання 1 

function Car(maker, model, year, everageSpeed) {
    this.maker = maker;
    this.model = model;
    this.year = year;
    this.everageSpeed = everageSpeed;

    this.showInfo = function () {
        console.log(`Інформація про авто \n`);
        for (let key in this) {
            console.log(`${key} - ${this[key]}\n`);
        }
    }

    this.calcTimeOfWay = function (distance) {
        let resultTime = 0;

        resultTime = parseFloat(distance) / parseFloat(this.everageSpeed);
        resultTime = Math.round(resultTime * 10) / 10;
        resultTime += Math.trunc(resultTime / 4);

        return resultTime;
    }
}

// Розкоментувати для тесту <===============================>

// let car1 = new Car('Audi', 'A7', 2016, '170km/h');
// car1.showInfo();
// console.log(car1.calcTimeOfWay('1380km'));

// ========================================================================================


// Завдання 2

function NaturalFruction(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
}

function calcCommonDenominator(obj1, obj2) {
    let commonDenominator = null;

    let i = obj1.denominator > obj2.denominator ? obj1.denominator : obj2.denominator;
    for (i; true; i++) {
        if ((i % obj1.denominator === 0) && (i % obj2.denominator === 0)) {
            commonDenominator = i;
            break;
        }
    }

    return commonDenominator;
}

function calcSumNaturalFruction(obj1, obj2) {
    let commonDenominator = calcCommonDenominator(obj1, obj2);

    let numerator1 = obj1.numerator * (commonDenominator / obj1.denominator);
    let numerator2 = obj2.numerator * (commonDenominator / obj2.denominator);
    let sum = numerator1 + numerator2;

    return `${sum} / ${commonDenominator}`;
}

function calcSubtractionNaturalFruction(obj1, obj2) {
    let commonDenominator = calcCommonDenominator(obj1, obj2);

    let numerator1 = obj1.numerator * (commonDenominator / obj1.denominator);
    let numerator2 = obj2.numerator * (commonDenominator / obj2.denominator);
    let sum = numerator1 - numerator2;

    return `${sum} / ${commonDenominator}`;
}

function calcMultiplicationNaturalFruction(obj1, obj2) {
    let resultNumerator = obj1.numerator * obj2.numerator;
    let resultDenominator = obj1.denominator * obj2.denominator;

    return `${resultNumerator} / ${resultDenominator}`;
}

function calcDivisionNaturalFruction(obj1, obj2) {
    let resultNumerator = obj1.numerator * obj2.denominator;
    let resultDenominator = obj1.denominator * obj2.numerator;

    return `${resultNumerator} / ${resultDenominator}`;
}

function calcReductionNaturalFruction(obj) {
    let i = obj.denominator > obj.numerator ? obj.numerator : obj.denominator;

    for (i; i > 1; i--) {
        if ((obj.numerator % i === 0) && (obj.denominator % i === 0)) {
            obj.numerator /= i;
            obj.denominator /= i;
        }
    }

    return `${obj.numerator} / ${obj.denominator}`;
}

// Розкоментувати для тесту <===============================>

// let fruction1 = new NaturalFruction(2, 5);
// let fruction2 = new NaturalFruction(3, 10);
// let fruction3 = new NaturalFruction(25, 100);

// console.log(calcSumNaturalFruction(fruction1, fruction2));
// console.log(calcSubtractionNaturalFruction(fruction1, fruction2));
// console.log(calcMultiplicationNaturalFruction(fruction1, fruction2));
// console.log(calcDivisionNaturalFruction(fruction1, fruction2));
// console.log(calcReductionNaturalFruction(fruction3));

// ========================================================================================


// Завдання 3


function Time(h, m, s) {
    this.hour = h.toString().padStart(2, '0');
    this.minute = m.toString().padStart(2, '0');
    this.second = s.toString().padStart(2, '0');

    this.showTime = function () {
        console.log(`${this.hour}:${this.minute}:${this.second}`);
    }

    this.changeSecond = function (fseconds) {

        for (i = 0; i < fseconds; i++) {
            if (this.second < 59) {
                this.second = +this.second
                this.second++;
                this.second = this.second.toString().padStart(2, '0');

            } else {
                this.second = '00';

                if (this.minute < 59) {
                    this.minute = +this.minute
                    this.minute++;
                    this.minute = this.minute.toString().padStart(2, '0');
                } else {
                    this.minute = '00';

                    if (this.hour < 23) {
                        this.hour = +this.hour
                        this.hour++;
                        this.hour = this.hour.toString().padStart(2, '0');
                    } else {
                        this.hour = '00';
                    }
                }
            }
        }
    }

    this.changeMinute = function (fminutes) {

        for (i = 0; i < fminutes; i++) {
            if (this.minute < 59) {
                this.minute = +this.minute
                this.minute++;
                this.minute = this.minute.toString().padStart(2, '0');
            } else {
                this.minute = '00';

                if (this.hour < 23) {
                    this.hour = +this.hour
                    this.hour++;
                    this.hour = this.hour.toString().padStart(2, '0');
                } else {
                    this.hour = '00';
                }
            }
        }
    }
    this.changeHour = function (fhours) {

        for (i = 0; i < fhours; i++) {
            if (this.hour < 23) {
                this.hour = +this.hour
                this.hour++;
                this.hour = this.hour.toString().padStart(2, '0');
            } else {
                this.hour = '00';
            }
        }
    }
}

// Розкоментувати для тесту <===============================>

// let time = new Time(23, 50, 50);

// time.changeSecond(30);
// time.changeMinute(30);
// time.changeHour(2);
// time.showTime();

