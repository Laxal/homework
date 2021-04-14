/*
Подсчитать сумму всех чисел в заданном пользователем диапазоне.
 */

let button1 = document.getElementById('button1');
button1.onclick = () => {

    let startDiapazone = +window.prompt('Введіть початок діапазону: ');
    let endDiapazone = +window.prompt('Введіть кінець діапазону: ');
    let result = 0;

    if (isFinite(startDiapazone) && isFinite(endDiapazone)) {

        if (startDiapazone <= endDiapazone) {

            for (let i = startDiapazone; i <= endDiapazone; i++) {
                result += i;
            }
        } else {

            for (let i = endDiapazone; i <= startDiapazone; i++) {
                result += i;
            }
        }

        window.alert(`Сумма всіх чисел в заданому діапазоні = ${result}`);

    } else {
        window.alert('Введіть коректні числа');
    }

}

/*
Запросить 2 числа и найти только наибольший общий делитель.
 */

let button2 = document.getElementById('button2');
button2.onclick = () => {

    let number1 = +window.prompt('Введіть перше число: ');
    let number2 = +window.prompt('Введіть друге число: ');
    let result = 0;

    if (isFinite(number1) && isFinite(number2)) {

        number1 = Math.abs(number1);
        number2 = Math.abs(number2);

        if (number1 <= number2) {
            for (let i = 1; i <= number1; i++) {
                if ((number1 % i === 0) && (number2 % i === 0)) {
                    result = i;
                } else {
                    continue;
                }
            }
        } else {
            for (let i = 1; i <= number2; i++) {
                if ((number1 % i === 0) && (number2 % i === 0)) {
                    result = i;
                } else {
                    continue;
                }
            }
        }

        window.alert(`Найбільший спільний дільник для двох чисел = ${result}`);

    } else {
        window.alert('Введіть коректні числа');
    }
}

/*
Запросить у пользователя число и вывести все делители этого числа.
*/


let button3 = document.getElementById('button3');
button3.onclick = () => {

    let number1 = +window.prompt('Введіть перше число: ');
    let result = '';

    if (isFinite(number1)) {

        number1 = Math.abs(number1);

        for (let i = 1; i <= number1; i++) {
            if (number1 % i === 0) {
                result += i + ', ';
            } else continue;
        }

        if (result === '') {
            window.alert(`Напевно ви ввели щось дробове або 0. Я не маю уявлення що з цим робити`);
        } else {
            window.alert(`Це число ділиться на ${result}`);
        }

    } else {
        window.alert('Введіть коректнe число');
    }

}

/*
Определить количество цифр в введенном числе
*/

let button4 = document.getElementById('button4');
button4.onclick = () => {

    let number1 = +window.prompt('Введіть перше число: ');


    if (isFinite(number1)) {

        number1 = Math.abs(number1);
        number1 = String(number1);
        let result = 0;

        for (let i = 0; i <= number1.length; i++) result = i;

        window.alert(`У вашому числі ${result} цифр`)

    } else {
        window.alert('Введіть коректнe число');
    }

}

/*
Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.
 При этом также посчитать, сколько четных и нечетных.
 Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.
*/

let button5 = document.getElementById('button5');
button5.onclick = () => {

    let numberPositive = 0;
    let numberNegative = 0;
    let numberNull = 0;

    let numberOdd = 0;
    let numberEven = 0;

    let errorInput = 0;

    for (let i = 0; i < 10; i++) {
        let number = +window.prompt('Введіть будь яке ціле число');

        if (isFinite(number) && Math.trunc(number) === number) {

            if (number < 0) {
                numberNegative++;
            } else if (number === 0) {
                numberNull++;
            } else {
                numberPositive++;
            }

            if (number % 2 === 0) {
                numberEven++;
            } else {
                numberOdd++;
            }
        } else {

            errorInput++;
            window.alert('Число введено не коректно');
        }
    }

    window.alert(`Ви ввели: \n Відємних - ${numberNegative} \n Додатніх - ${numberPositive}
    \n Нулів - ${numberNull} \n Парних - ${numberEven}\n Непарних- ${numberOdd}\n
    Некоректних вводів - ${errorInput}`);
}

/*
Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример,
 вывести результат и спросить, хочет ли он решить еще один пример. 
 И так до тех пор, пока пользователь не откажется.
*/


let button6 = document.getElementById('button6');
button6.onclick = () => {

    while (true) {
        let number1 = +window.prompt('Введіть перше число: ');
        let signOfOperation = window.prompt('Введіть математичну операцію( * / + - )');
        let number2 = +window.prompt('Введіть друге число: ');
        let result;

        if (isFinite(number1) && isFinite(number2)) {

            if (signOfOperation === '*') {
                result = number1 * number2;
            } else if (signOfOperation === '/') {
                result = number1 / number2;
            } else if (signOfOperation === '+') {
                result = number1 + number2;
            } else if (signOfOperation === '-') {
                result = number1 - number2;
            } else {

                if (window.confirm('Невідомий знак операції, спробувати ще раз?')) {
                    continue;
                } else {
                    break;
                }
            }

        } else {
            if (window.confirm('Помилка вводу, спробувати ще раз?')) {
                continue;
            } else {
                break;
            }
        }

        if (window.confirm(`Результат ${result}, Хочете виконати ще одну операцію?`)) {
            continue;
        } else {
            break;
        }
    }
}

/*
Запросить у пользователя число и на сколько цифр его сдвинуть.
Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
*/

let button7 = document.getElementById('button7');
button7.onclick = () => {

    let number = window.prompt('Введіть число: ');
    let numberPush = +window.prompt('На скільки цифри ви хочете зрушити число?');
    let result;

    if (isFinite(numberPush) && numberPush >= 0 && numberPush <= number.length && Math.trunc(numberPush) === numberPush) {

        let buffer1 = number.slice(0, numberPush);
        let buffer2 = number.slice(numberPush);
        result = buffer2 + buffer1;

        window.alert(`Ось ваше двінуте число ${result}, і нащо воно вам?`);

    } else {
        window.alert('На тe що ви ввели зрушити неможливо');
    }
}

/*
Зациклить вывод дней недели таким образом: «День недели.
Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
*/

let button8 = document.getElementById('button8');
button8.onclick = () => {

    const week = ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П\'ятниця', 'Субота', 'Неділя'];
    let currentDay = 0;

    while (window.confirm(`${week[currentDay]}. Хочете побачити наступний день?`)) {
        if (currentDay === 6) {
            currentDay = 0;
        } else {
            currentDay++;
        }
    }
}

/*
Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
*/

let button9 = document.getElementById('button9');
button9.onclick = () => {

    let result;

    for (let i = 2; i < 10; i++) {
        for (j = 1; j <= 10; j++) {
            result = i * j;
            console.log(`${i} * ${j} = ${result}`);
        }
    }
}

/*
Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: 
каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя
«Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон.
Начальный диапазон от 0 до 100, поделили пополам и получили 50.
Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.
*/

let button10 = document.getElementById('button10');
button10.onclick = () => {

    if (window.confirm('Загадайте число від 0 до 100')) {
        let max = 100;
        let min = 0;
        let result = 50;
        let buffer;

        while (true) {
            if (window.confirm(`Ваше число ${result}?`)) {
                window.alert('Ура, я розумна машина, слава скайнет, смерть шкіряним мішкам');
                break;
            } else if (window.confirm(`Ваше число більше ніж ${result}?`)) {
                buffer = Math.ceil((max - result) / 2);
                min = result;
                result += buffer;
                continue;
            } else if (window.confirm(`Ваше число менше ніж ${result}?`)) {
                buffer = Math.floor((result - min) / 2);
                max = result;
                result -= buffer;
                if (result === 1) {
                    if (window.confirm(`Ваше число ${result}?`)) {
                        window.alert('Ура, я розумна машина, слава скайнет, смерть шкіряним мішкам');
                        break;
                    } else {
                        result--;
                    }
                }
                continue;
            } else {
                window.alert('Ви мене обманюєте, я так не граю');
                break;
            }
        }
    }
}