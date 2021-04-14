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
        result = calcFactorial(number);
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
/*
Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
и выводит только те числа из диапазона, которые являются совершенными. 
Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. 
*/

// ! більше 100_000 зависає

function getPerfectNumFromDiapazone(a, b) {

    let result = '';

    for (let i = a; i <= b; i++) {

        if (checkIsPerfectNumber(i)) {
            result += i + ', ';
        }
    }

    return result;
}


let button6 = document.getElementById('button6');
button6.onclick = () => {

    let startDiapazone = +window.prompt('Введіть початок діапазону\(мінімум 1\): ');
    let endDiapazone = +window.prompt('Введіть кінець діапазону: ');
    let result = '';

    if ((isFinite(startDiapazone) && startDiapazone >= 0 && Math.trunc(startDiapazone) === startDiapazone && startDiapazone !== 0) &&
        (isFinite(endDiapazone) && endDiapazone >= 0 && Math.trunc(endDiapazone) === endDiapazone && endDiapazone !== 0)) {

        if (startDiapazone <= endDiapazone) {
            result = getPerfectNumFromDiapazone(startDiapazone, endDiapazone);
        } else {
            window.alert('Взагалі-то діапазон потрібно вводити від меншого числа до більшого');
            return;
        }

    } else {
        window.alert('Ви можете не приколюватись і нармальні числа вводити');
        return;
    }

    window.alert(`Досконалі числа із заданого діапазону такі: ${result}`)
}

/*
Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
*/

function showTime(hours = 00, minutes = 00, seconds = 00) {

    return (`${hours}:${minutes}:${seconds}`)
}

let button7 = document.getElementById('button7');
button7.onclick = () => {

    let hours = window.prompt('Введіть години: ');
    let minutes = window.prompt('Введіть хвилини: ');
    let seconds = window.prompt('Введіть секунди: ');

    window.alert(showTime(hours, minutes, seconds));
}

/*
Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах
*/

function getTimeInSecond(hours = 00, minutes = 00, seconds = 00) {

    let result = hours * 60 * 60 + minutes * 60 + +seconds;

    return result;
}


let button8 = document.getElementById('button8');
button8.onclick = () => {

    let hours = window.prompt('Введіть години: ');
    let minutes = window.prompt('Введіть хвилини: ');
    let seconds = window.prompt('Введіть секунди: ');

    window.alert(getTimeInSecond(hours, minutes, seconds));
}

/*
Написать функцию, которая принимает количество секунд,
переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».
*/

function getTimeFromSeconds(numOfSecond) {

    let hours = Math.trunc(numOfSecond / 3600);
    let minutes = Math.trunc((numOfSecond % 3600) / 60);
    let seconds = numOfSecond % 60;
    let result = `${hours}:${minutes}:${seconds}`;

    return result;
}

let button9 = document.getElementById('button9');
button9.onclick = () => {

    let seconds = window.prompt('Введіть секунди: ');

    window.alert(getTimeFromSeconds(seconds));
}


/*
Написать функцию, которая считает разницу между датами.
Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс».
При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»
*/

function getDifferenceTimeBetweenDates(day1, month1, year1, hour1, minute1, second1,
    day2, month2, year2, hour2, minute2, second2) {

    let days1 = translateYearsToDays(year1) + translateMonthsToDays(month1) + day1;
    let days2 = translateYearsToDays(year2) + translateMonthsToDays(month2) + day2;

    if (checkLeapYear(year1) && month1 > 2) {
        day1++;
    }
    if (checkLeapYear(year2) && month2 > 2) {
        day2++;
    }

    let seconds1 = translateDaysToSecond(days1) + getTimeInSecond(hour1, minute1, second1);
    let seconds2 = translateDaysToSecond(days2) + getTimeInSecond(hour2, minute2, second2);

    let differenceSeconds = seconds2 > seconds1 ? (seconds2 - seconds1) : (seconds1 - seconds2);

    let differenceTime = getTimeFromSeconds(differenceSeconds);

    return differenceTime;
}

function checkLeapYear(year) {

    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return true;
    }

    return false;
}

function translateYearsToDays(years) {

    let days = 0;

    for (let i = 1; i <= years; i++) {

        if (checkLeapYear(i)) {

            days += 366;
        } else {
            days += 365;
        }
    }

    return days;
}

function translateMonthsToDays(months) {

    let days = 0;

    for (let i = 2; i <= months; i++) {

        if (i === 2) {
            days += 31;
        } else if (i === 3) {
            days += 28;
        } else if (i === 4) {
            days += 31;
        } else if (i === 5) {
            days += 30;
        } else if (i === 6) {
            days += 31;
        } else if (i === 7) {
            days += 30;
        } else if (i === 8) {
            days += 31;
        } else if (i === 9) {
            days += 31;
        } else if (i === 10) {
            days += 30;
        } else if (i === 11) {
            days += 31;
        } else if (i === 12) {
            days += 30;
        }
    }

    return days;
}

function translateDaysToSecond(days) {

    let seconds = days * 24 * 60 * 60;
    return seconds;
}

let button10 = document.getElementById('button10');
button10.onclick = () => {

    let date1 = window.prompt('Введіть першу дату та час формату ДД-ММ-РРРР::ГГ:ХВ:СС');
    let date2 = window.prompt('Введіть другу дату та час формату ДД-ММ-РРРР::ГГ:ХВ:СС');

    let day1 = +(date1[0] + date1[1]);
    let month1 = +(date1[3] + date1[4]);
    let year1 = +(date1[6] + date1[7] + date1[8] + date1[9]);
    let hour1 = +(date1[12] + date1[13]);
    let minute1 = +(date1[15] + date1[16]);
    let second1 = +(date1[18] + date1[19]);

    let day2 = +(date2[0] + date2[1]);
    let month2 = +(date2[3] + date2[4]);
    let year2 = +(date2[6] + date2[7] + date2[8] + date2[9]);
    let hour2 = +(date2[12] + date2[13]);
    let minute2 = +(date2[15] + date2[16]);
    let second2 = +(date2[18] + date2[19]);

    let result = getDifferenceTimeBetweenDates(day1, month1, year1, hour1, minute1, second1, day2, month2, year2, hour2, minute2, second2);

    window.alert(`Різниця в часі між ${date1} і ${date2} становить - ${result}`);
}