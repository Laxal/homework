let button1 = document.getElementById('button1');
button1.onclick = () => {
    let userName;
    userName = window.prompt('Input your name: ');
    window.alert(userName);
}

let button2 = document.getElementById('button2');
button2.onclick = () => {
    const currentYear = 2021;
    let birthYear;
    birthYear = prompt('Input your year of birth: ');
    let age = currentYear - birthYear;
    if (birthYear > currentYear) {
        alert('It is future! Try again.');
    }
    else {
        window.alert(age);
    }
}

let button3 = document.getElementById('button3');
button3.onclick = () => {
    let squareSide;
    squareSide = prompt('input value of square side: ');
    alert(`${squareSide * 4} is a perimeter of square`);

}

let button4 = document.getElementById('button4');
button4.onclick = () => {
    let radius;
    radius = prompt('input value of radius: ');
    let squareCircle = Math.PI * (radius ** 2);
    alert(`${squareCircle} is a square of circle`);
}

let button5 = document.getElementById('button5');
button5.onclick = () => {
    let kilometers;
    kilometers = prompt('Input distance in km');
    let hours;
    hours = prompt('Input how many hours do you want to spend?')
    alert(`You have to move with this speed: ${kilometers / hours} km/h`);
}

let button6 = document.getElementById('button6');
button6.onclick = () => {
    let dollars;
    const courseEuroToDollar = 0.84;
    dollars = prompt('Input dollars: ');
    alert(`${dollars} dollars are ${dollars * courseEuroToDollar} euro`);
}

let button7 = document.getElementById('button7');
button7.onclick = () => {
    let sizeOfFlashcard = 1024;
    sizeOfFlashcard *= prompt('Input flash drive capacity.');
    const sizeFile = 820;
    let result = Math.trunc(sizeOfFlashcard / sizeFile);
    alert(`${result} files you can load on your flashcard`);
}

let button8 = document.getElementById('button8');
button8.onclick = () => {
    let money;
    money = prompt('Input how much money do you have?');
    let chocolatePrice;
    chocolatePrice = prompt('Input price of chocolate');
    let numOfChocolate = Math.trunc(money / chocolatePrice);
    let change = money % chocolatePrice;
    change = change.toFixed(2);
    alert(`you can buy ${numOfChocolate} and your change is ${change}`);
}

let button9 = document.getElementById('button9');
button9.onclick = () => {
    let number = prompt('Input three-digit number: ');
    let figure1 = Math.trunc(number / 100);
    let figure2 = Math.trunc(number / 10) % 10;
    let figure3 = number % 10;
    alert('Your revers number ' + figure3 + figure2 + figure1);
}

let button10 = document.getElementById('button10');
button10.onclick = () => {
    let sumOfMoney = prompt('How much money do you want to put on your bank account: ');
    let month = prompt('How long do you want to keep your money on deposit in monthes: ');
    const persentPerMonth = (0.05 / 12) * sumOfMoney;
    let sumOfpersent = 0;
    if (month < 1) {
        alert('You can\'t put money on your bank account less then 1 month');
    }
    else {
        for (i = 1; i <= month; i++) {
            sumOfpersent += persentPerMonth;
        }
        alert(`You can get ${sumOfpersent} over your money`);
    }
}