/*
Создать массив, описывающий чек в магазине.
Каждый элемент массива состоит из названия товара, количества и цены за единицу товара.
Написать следующие функции:

Распечатка чека на экран;
+Подсчет общей суммы покупки;
+Получение самой дорогой покупки в чеке;
+Подсчет средней стоимости одного товара в чеке.
*/

function Product(name, count, price) {
    this.name = name;
    this.count = count;
    this.price = price;
}

let receipt = [
    new Product('Батарейка', 5, 20),
    new Product('Телевізор', 1, 9000),
    new Product('Телефоон', 1, 8000),
    new Product('Навушники', 3, 750),
    new Product('Чохол', 40, 250),
    new Product('Антивірус', 2, 1500),
]

function calcFullPriceOfProduct(arr) {
    let fullPriceOfProduct = [];
    return fullPriceOfProduct = arr.map(item => item.count * item.price);
}

function calcFullSumPurchase(arr) {
    let result = calcFullPriceOfProduct(arr);
    return result.reduce((acc, item) => acc += item, 0)
}

function getMostExpensiveProduct(arr) {
    return arr.reduce((acc, item) => acc = acc > item.price ? acc : item.price, 0);
}

function getMostExpensivePosition(arr) {
    let result = calcFullPriceOfProduct(arr);
    return result.reduce((acc, item) => acc = acc > item ? acc : item, 0);
}

function calcAvaragePriceOfProduct(arr) {
    let sumPrices = arr.reduce((acc, item) => acc += item.price, 0);
    return (Math.floor((sumPrices / arr.length) * 100)) / 100;
}
function logReceipt(arr) {
    let header = 'Назва товару'.padEnd(18, '.') +
        'К-сть' + 'ц./од.'.padStart(10, '.') + 'ціна \n'.padStart(12, '.');

    let strReceipt = arr.reduce((acc, item) => {
        return acc += `${item.name.padEnd(18, '.')}${item.count.toString().padStart(5, '.')}` +
            `${item.price.toString().padStart(10, '.')}${(item.count * item.price).toString().padStart(10, '.')} \n`
    }, '')

    let fullSum = calcFullSumPurchase(arr);
    let footer = 'Загалом' + fullSum.toString().padStart(36, '.')

    return header + strReceipt + footer;
}

// Tect <============================================>

console.log(logReceipt(receipt));
console.log(calcFullSumPurchase(receipt));
console.log(getMostExpensiveProduct(receipt));
console.log(getMostExpensivePosition(receipt));
console.log(calcAvaragePriceOfProduct(receipt));