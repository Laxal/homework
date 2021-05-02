/**
    Реализовать класс Employee, описывающий работника, и создать массив работников банка.

    Реализовать класс EmpTable для генерации HTML-кода таблицы со списком работников банка.
    Массив работников необходимо передавать через конструктор, а получать HTML-код с помощью метода getHtml().

    Создать объект класса EmpTable и вывести на экран результат работы метода getHtml().
 */

class Employee {
    name;
    age;
    married;
    position;

    constructor(name = 'Jon', age = '35', married = true, position = 'manager') {
        this.name = name;
        this.age = age;
        this.married = married;
        this.position = position;
    }
}

class EmpTable {
    employees;

    constructor(employees = []) {
        this.employees = employees;
    }

    getHTML() {
        let table = document.createElement('table');
        table.classList.add('EmpTable');

        let firstRow = document.createElement('tr');
        table.append(firstRow);
        let colCount = Object.keys(this.employees[0]).length;
        let colHeadValue = Object.keys(this.employees[0]);

        console.log(colHeadValue);

        for (let j = 0; j < colCount; j++) {
            let colHead = document.createElement('th');
            colHead.innerText = '' + colHeadValue[j];
            firstRow.append(colHead);
        }


        for (let i = 0; i < this.employees.length; i++) {
            let row = document.createElement('tr');
            table.append(row);

            let colValue = Object.values(this.employees[i]);

            for (let j = 0; j < colCount; j++) {
                let col = document.createElement('td');
                col.innerText = '' + colValue[j];
                row.append(col);
            }

        }
        return table;
    }
}

// ==========================================================================

let bankEmployees = [
    new Employee('German', 33, true, 'manager'),
    new Employee('Noreen', 44, false, 'cleaner'),
    new Employee('Pasha', 25, false, 'developer'),
    new Employee('Howie', 29, true, 'manager'),
    new Employee('Regana', 52, true, 'director'),
];

let tableBankEmployees = new EmpTable(bankEmployees);
document.body.append(tableBankEmployees.getHTML());




