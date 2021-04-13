/*
Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе;
1 – если первое больше, чем второе;
и 0 – если числа равны.
 */
function getEqualityCheck(a, b) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } else {
        return 0;
    }
}

let button1 = document.getElementById('button1');
button1.onclick = () => {

    let firstNumber = +window.prompt('Введіть перше число: ');
    let secondNumber = +window.prompt('Введіть друге число: ');
    let result;

    if (isFinite(firstNumber) && isFinite(secondNumber)) {
        result = getEqualityCheck(firstNumber, secondNumber);
    }

    if (result === undefined) {
        result = 'Ви можете не приколюватись і нармальні числа вводити';
    }

    window.alert(result);
}

/*
Написать функцию, которая вычисляет факториал переданного ей числа.
*/

function calcFactorial(a) {

    let result = 1;

    if (a === 0) {
        return 1;
    } else {

        for (i = 1; i <= a; i++) {
            result *= i;
        }
    }

    return result;
}

let button2 = document.getElementById('button2');
button2.onclick = () => {

    let number = +window.prompt('Введіть число: ');
    let result;

    if (isFinite(number) && Math.trunc(number) === number && number >= 0) {
        result = getFactorial(number);
    }

    if (result === undefined) {
        result = 'Ви можете не приколюватись і нармальне число вводити';
    }

    window.alert(`Факторіал = ${result}`);
}

/*
    Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
*/


function createNumberFromFigures(a, b, c) {

    let result = '' + a + b + c;
    result = +result;
    return result;
}

let button3 = document.getElementById('button3');
button3.onclick = () => {

    let figure1 = +window.prompt('Введіть першу цифру: ');
    let figure2 = +window.prompt('Введіть другу цифру: ');
    let figure3 = +window.prompt('Введіть третю цифру: ');
    let result;

    if ((isFinite(figure1) && figure1 < 10 && figure1 >= 0 && Math.trunc(figure1) === figure1) &&
        (isFinite(figure2) && figure2 < 10 && figure2 >= 0 && Math.trunc(figure2) === figure2) &&
        (isFinite(figure3) && figure3 < 10 && figure3 >= 0 && Math.trunc(figure3) === figure3)) {
        result = createNumberFromFigures(figure1, figure2, figure3);
    }

    if (result === undefined) {
        result = 'Ви можете не приколюватись і нармальні цифри (0-9) вводити';
    }

    window.alert(`Створене число = ${result}`);
}

/*
    Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
    Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
*/

function calcSquareOfRectangle(a, b = a) {
    let result = a * b;
    return result;
}

let button4 = document.getElementById('button4');
button4.onclick = () => {

    let side1 = +window.prompt('Введіть першу сторону прямокутника: ');
    let side2 = +window.prompt('Введіть другу сторону прямокутника: ');
    let result;

    if ((isFinite(side1) && side1 > 0) &&
        (isFinite(side2) && side2 > 0)) {
        result = calcSquareOfRectangle(side1, side2);
    }

    if (result === undefined) {
        result = 'Ви можете не приколюватись і нармальні числа вводити';
    }

    window.alert(`Площа = ${result}`);

    // Якщо введена одна сторона теж працює
    let result2 = calcSquareOfRectangle(side1);
    window.alert(result2);
}

/*
    Написать функцию, которая проверяет, является ли переданное ей число совершенным.
    Совершенное число – это число, равное сумме всех своих собственных делителей.
*/

function checkIsPerfectNumber(a) {

    let result = 0;

    for (let i = 1; i < a; i++) {
        if (a % i === 0) {
            result += i;
        }
    }

    if (result === a) {
        return true;
    }

    return false;
}

let button5 = document.getElementById('button5');
button5.onclick = () => {

    let number = +window.prompt('Введіть натуральне число');
    let result;

    if (isFinite(number) && number >= 0 && Math.trunc(number) === number && number !== 0) {
        result = checkIsPerfectNumber(number);
    } else if (number === 0) {
        window.alert('І шо ви хочете щоб я з вашим нульом робив?');
        return;
    } else {
        window.alert('Ви можете не приколюватись і нармальні числа вводити');
        return;
    }

    if (result) {
        window.alert(`${number} - це досконале число`);
    } else {
        window.alert(`${number} - це НЕ досконале число`);
    }

}