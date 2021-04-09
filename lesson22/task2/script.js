/*
Запросить у пользователя его возраст и определить, кем он является: 
ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...).
 */

let button1 = document.getElementById('button1');
button1.onclick = () => {
    let age = window.prompt('Введіть ваш вік: ', '');
    age = Number(age);
    if (isNaN(age) || age < 0) {
        window.alert('Введіть будь ласка вік числовим значенням яке більше або дорівнює 0');
    } else if (age <= 12) {
        window.alert('Дитина');
    } else if (age <= 18) {
        window.alert('Підліток');
    } else if (age <= 60) {
        window.alert('Дорослий');
    } else if (age > 60 && age <= 120) {
        window.alert('Пенсіонер');
    } else {
        window.alert('А ви довгожитель або брехло ))')
    }
}

/*
Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол,
 который расположен на этой клавише (1–!, 2–@, 3–# и т. д).
 */

let button2 = document.getElementById('button2');
button2.onclick = () => {
    let number = window.prompt('Введіть число від 0 до 9: ', '');
    number = Number(number);
    if (isNaN(number) || number < 0 || number > 9) {
        window.alert('Помилка введення спробуйте ще раз');
    } else if (number === 0) {
        window.alert(')');
    } else if (number === 1) {
        window.alert('!');
    } else if (number === 2) {
        window.alert('@');
    } else if (number === 3) {
        window.alert('#');
    } else if (number === 4) {
        window.alert('$');
    } else if (number === 5) {
        window.alert('%');
    } else if (number === 6) {
        window.alert('^');
    } else if (number === 7) {
        window.alert('&');
    } else if (number === 8) {
        window.alert('*');
    } else if (number === 9) {
        window.alert('(');
    }
}

/*
Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
 */

let button3 = document.getElementById('button3');
button3.onclick = () => {
    let number = window.prompt('Введіть трьохзначне число: ', '');
    number = Number(number);

    if (isNaN(number) || number < 100 || number > 999) {
        window.alert('Помилка введення спробуйте ще раз');
    } else {
        let figure1;
        let figure2;
        let figure3;

        figure1 = Math.trunc(number / 100);
        figure2 = Math.trunc(number / 10) % 10;
        figure3 = number % 10;

        if (figure1 === figure2 || figure1 === figure3 || figure2 === figure3) {
            window.alert('Так, ваше число має однакові цифри');
        } else {
            window.alert('Ні, ваше число не має однакових цифр');
        }
    }
}

/*
Запросить у пользователя год и проверить, високосный он или нет.
Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.
 */

let button4 = document.getElementById('button4');
button4.onclick = () => {
    let year = window.prompt('Введіть рік: ', '');
    year = Number(year);

    if (isNaN(year) || year < 0) {
        window.alert('Помилка введення спробуйте ще раз');
    } else {
        if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
            window.alert('Ви ввели високосний рік');
        } else {
            window.alert('Ви ввели не високосний рік');

        }
    }
}

/*
Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.
 */

let button5 = document.getElementById('button5');
button5.onclick = () => {
    let number = window.prompt('Введіть п\'ятизначне число: ', '');
    number = Number(number);

    if (isNaN(number) || number < 10000 || number > 99999) {
        window.alert('Помилка введення спробуйте ще раз');
    } else {
        number = String(number);

        if (number[0] === number[4] && number[1] === number[3]) {
            window.alert(`Ваше число ${number} є паліндромом`);
        } else {
            window.alert(`На жаль, ваше число ${number} не є паліндромом`);
        }
    }
}

/*
Написать конвертор валют. Пользователь вводит количество USD, выбирает, 
в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.
 */

let button6 = document.getElementById('button6');
button6.onclick = () => {
    let sumOfDollars = +window.prompt('Введіть суму в USD: ');
    if (isNaN(sumOfDollars) || sumOfDollars < 0) {
        window.alert('Помилка введення спробуйте ще раз');
    } else {
        let currency = +window.prompt('В яку валюту ви хочете переводити? Введіть 1 якщо в EUR, 2 якщо в UAH, 3 якщо в AZN');
        const courceEuro = 0.84;
        const courceUah = 27.91;
        const courceAzn = 1.69;
        let result;

        switch (currency) {
            case 1:
                result = sumOfDollars * courceEuro;
                window.alert(`${sumOfDollars}USD = ${result}EUR`);
                break;
            case 2:
                result = sumOfDollars * courceUah;
                window.alert(`${sumOfDollars}USD = ${result}UAH`);
                break;
            case 3:
                result = sumOfDollars * courceAzn;
                window.alert(`${sumOfDollars}USD = ${result}AZN`);
                break;
            default:
                window.alert('Помилка при виборі валюти для переводу, спробуйте ще раз');
        }

    }
}

/*
Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: 
от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.
 */

let button7 = document.getElementById('button7');
button7.onclick = () => {
    let sum = +window.prompt('Введіть суму покупки: ');
    if (isNaN(sum) || sum < 0) {
        window.alert('Помилка введення спробуйте ще раз');
    } else {
        let result;

        if (sum < 200) {
            window.alert(`До cплати ${sum}`);
        } else if (sum >= 200 && sum < 300) {
            result = sum - sum * 0.03;
            result = Math.floor(result * 100) / 100;
            window.alert(`Ваша знижка буде 3%, до cплати ${result}`);
        } else if (sum < 500) {
            result = sum - sum * 0.05;
            result = Math.floor(result * 100) / 100;
            window.alert(`Ваша знижка буде 5%, до cплати ${result}`);
        } else {
            result = sum - sum * 0.07;
            result = Math.floor(result * 100) / 100;
            window.alert(`Ваша знижка буде 7%, до cплати ${result}`);
        }
    }
}



/*
Запросить у пользователя длину окружности и периметр квадрата.
Определить, может ли такая окружность поместиться в указанный квадрат.
*/

let button8 = document.getElementById('button8');
button8.onclick = () => {
    let lengthCircle = +window.prompt('Введіть довжину кола: ');
    if (isNaN(lengthCircle) || lengthCircle < 0) {
        window.alert('Помилка введення спробуйте ще раз');
    } else {
        let squareP = +window.prompt('Введіть периметр квадрата: ');
        if (isNaN(squareP) || squareP < 0) {
            window.alert('Помилка введення спробуйте ще раз');
        } else {
            let diametrOfCircle;
            let sideOfSquare;
            diametrOfCircle = lengthCircle / Math.PI;
            sideOfSquare = squareP / 4;

            if (diametrOfCircle <= sideOfSquare) {
                window.alert(`Ваше коло довжиною ${lengthCircle} зможе поміститись у квадраті з периметром ${squareP}`);
            } else {
                window.alert(`Ваше коло довжиною ${lengthCircle} не зможе поміститись у квадраті з периметром ${squareP}`);
            }
        }
    }
}


/*
Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа.
За каждый правильный ответ начисляется 2 балла. После вопросов выведите пользователю количество набранных баллов.
*/

// ? Цікаво як зробити перевірку чи є число цілим, а не дробовим

let button9 = document.getElementById('button9');
button9.onclick = () => {
    let points = 0;

    let answer1 = +window.prompt('В каком числе Чемпионатов Мира по футболу Николя Анелька принимал участие? Введіть цифру 1, 2 або 3 \n' +
        ' 1 - 1 \n 2 - один \n 3 - в одном ЧМ');
    if (isNaN(answer1) || (answer1 < 1 || answer1 > 3)) {
        window.alert('Помилка введення спробуйте ще раз');
    } else {
        if (answer1 === 1) {
            points += 2;
        }
    }

    let answer2 = +window.prompt('Какой из этих регионов - не на территории Италии? Введіть цифру 1, 2 або 3 \n' +
        ' 1 - Ломбардия \n 2 - Умбрия \n 3 - Савойя');
    if (isNaN(answer2) || (answer2 < 1 || answer2 > 3)) {
        window.alert('Помилка введення спробуйте ще раз');
    } else {
        if (answer2 === 3) {
            points += 2;
        }
    }

    let answer3 = +window.prompt('Как переводится имя Деймос? Введіть цифру 1, 2 або 3 \n' +
        ' 1 - Страх \n 2 - Раздор \n 3 - Ужас');
    if (isNaN(answer3) || (answer3 < 1 || answer3 > 3)) {
        window.alert('Помилка введення спробуйте ще раз');
    } else {
        if (answer3 === 3) {
            points += 2;
        }
    }

    window.alert(`Ви набрали ${points} балів із 6`);
}

/*
Запросить дату (день, месяц, год) и вывести следующую за ней дату.
Учтите возможность перехода на следующий месяц, год, а также високосный год.
*/

// ? Як при помилці у внутрішньому іф переривати виконання зовнішнього 
// ? (Тобто якщо я ввів 29.02.2021 мені видало що такий день не існує але в кінці виконало alert із тою датою що я ввів).

let button10 = document.getElementById('button10');
button10.onclick = () => {

    let date = window.prompt('Введіть дату формату ДД.ММ.РРРР: ', '00.00.0000');
    if (date.length !== 10) {
        window.alert('Помилка введення спробуйте ще раз');
    } else {

        let day = +(date[0] + date[1]);
        let month = +(date[3] + date[4]);
        let year = +(date[6] + date[7] + date[8] + date[9]);

        if (day < 1 || day > 31 || month < 1 || month > 12 || year < 0 || isNaN(day) || isNaN(month) || isNaN(year)) {
            window.alert('Помилка введення спробуйте ще раз');
        } else {

            // зміна року

            if (month === 12 && day === 31) {
                day = 1;
                month = 1;
                year++;
            } else {

                // зміна 31 денних місяців

                if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10) {

                    if (day > 0 && day < 31) {
                        day++;
                    } else if (day === 31) {
                        day = 1;
                        month++;
                    } else {
                        window.alert('Ви ввели неіснуючий день');
                    }
                } else {

                    // зміна 30 денних місяців

                    if (month === 4 || month === 6 || month === 9 || month === 11) {

                        if (day > 0 && day < 30) {
                            day++;
                        } else if (day === 30) {
                            day = 1;
                            month++;
                        } else {
                            window.alert('Ви ввели неіснуючий день');
                        }
                    } else {

                        // Зміна в лютому з перевіркою на високосність

                        if (month === 2) {

                            if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {

                                if (day > 0 && day < 29) {
                                    day++;
                                } else if (day === 29) {
                                    day = 1;
                                    month++;
                                } else {
                                    window.alert('Ви ввели неіснуючий день');
                                }
                            } else {

                                if (day > 0 && day < 28) {
                                    day++;
                                } else if (day === 28) {
                                    day = 1;
                                    month++;
                                } else {
                                    window.alert('Ви ввели неіснуючий день');
                                }
                            }
                        }

                    }

                }

            }

        }

        if (day < 10) {
            day = '0' + day;
        }

        if (month < 10) {
            month = '0' + month;
        }

        window.alert(`Наступна дата: ${day}.${month}.${year}`)
    }
}
