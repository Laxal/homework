/*
Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.).
Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
Написать функцию, которая принимает массив стилей и текст,
и выводит этот текст с помощью document.write() в тегах <p></p>,
добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.
*/

function Style(name, value) {
    this.name = name;
    this.value = value;
}

let stylesArr = [
    new Style('color', 'blue'),
    new Style('font-size', '32px'),
    new Style('text-align', 'center'),
    new Style('text-decoration', 'underline'),
    new Style('margin', '0 auto'),
    new Style('padding', '10px'),
    new Style('max-width', '500px'),
    new Style('font-weight', '700'),
];

function writeArr(arr, text) {
    let result = arr.reduce((acc, item) => acc + `${item.name}: ${item.value}; `, '');

    document.write(`
        <p style='${result}'>
            ${text}
        </p>
    `);
}

writeArr(stylesArr, 'Hello world!');