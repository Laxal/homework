/*
Реализовать класс, описывающий простой маркер. В классе должны быть следующие компоненты:

    поле, которое хранит цвет маркера;
    поле, которое хранит количество чернил в маркере (в процентах);
    метод для печати (метод принимает строку и выводит текст соответствующим цветом;
    текст выводится до тех пор, пока в маркере есть чернила; 
    один не пробельный символ – это 0,5% чернил в маркере).
    Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого 
    маркера и добавив метод для заправки маркера.

Продемонстрировать работу написанных методов. 
 */

class Marker {
    color;
    amountOfInk;

    constructor(color = 'black', amountOfInk = 100) {
        if (amountOfInk > 100) amountOfInk = 100;
        if (amountOfInk < 0) amountOfInk = 0;

        this.color = color;
        this.amountOfInk = amountOfInk;
    }

    print(str) {
        let text = document.getElementById('text');
        text.style.color = this.color;

        let result = '';
        for (let i = 0; i < str.length; i++) {

            if (this.amountOfInk > 0) {
                if (str[i] !== ' ') {
                    this.amountOfInk -= 0.5;
                }

                result += str[i];
            } else {
                window.alert('Скінчились чорнила, заправте маркер!');
                break;
            }
        }

        text.innerText = result;
    }
}

class FillMarker extends Marker {

    fill() {
        this.amountOfInk += (100 - this.amountOfInk);
    }
}

// Test =================================================================

let markerRed = new Marker('red');
let markerBlue = new FillMarker('blue');

// markerRed.print(`1234567890 1234567890 1234567890 1234567890 1234567890
// 1234567890 1234567890 1234567890 1234567890 1234567890
// 1234567890 1234567890 1234567890 1234567890 1234567890
// 1234567890 1234567890 1234567890 1234567890 1234567890`)
// console.log(markerRed.amountOfInk);

// markerBlue.print(`1234567890 1234567890 1234567890 1234567890 1234567890
// 1234567890 1234567890 1234567890 1234567890 1234567890
// 1234567890 1234567890 1234567890 1234567890 1234567890`)
// console.log(markerBlue.amountOfInk);
// markerBlue.fill();
// console.log(markerBlue.amountOfInk);