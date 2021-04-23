function Product(name, count = 1, bought = false) {
    this.name = name;
    this.count = parseFloat(count);
    this.bought = bought;
}

let listOfProducts = [
    new Product('Банан', '4шт.', true),
    new Product('Чорниці', '1кг', false),
    new Product('Домашній сир', '0.5кг', true),
    new Product('Йогурт', '3уп.', true),
    new Product('Апельсин', '5шт.', false),
]

function showSortList(arr) {
    arr.sort((item1, item2) => item1.bought - item2.bought);
    console.log(arr);
}

function addProductToList(obj, arr) {
    let isProduct = arr.find(item => item.name === obj.name);

    if (isProduct !== undefined) {
        isProduct.count += obj.count;
    } else arr.push(obj);
}

function buyProduct(name, arr) {
    let product = arr.find(item => name === item.name);
    product.bought = true;
}

// Тест ================================

// let product1 = new Product('Банан');
// let product2 = new Product('Манго', 5);
// let product3 = new Product('Ананас', '2шт.');


// console.log(listOfProducts);
// addProductToList(product1, listOfProducts);
// addProductToList(product2, listOfProducts);
// addProductToList(product3, listOfProducts);
// buyProduct('Чорниці', listOfProducts);
// buyProduct('Банан', listOfProducts);
// buyProduct('Апельсин', listOfProducts);
// showSortList(listOfProducts);

// console.log(listOfProducts);