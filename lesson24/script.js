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