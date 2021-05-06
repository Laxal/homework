/*
Создать массив аудиторий академии. Объект-аудитория состоит из названия,
количества посадочных мест (от 10 до 20) и названия факультета,
для которого она предназначена. Написать несколько функций для работы с ним^

+Вывод на экран всех аудиторий;
+Вывод на экран аудиторий для указанного факультета;
Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, 
количества студентов и названия факультета;
+Функция сортировки аудиторий по количеству мест;
+Функция сортировки аудиторий по названию (по алфавиту).
*/

function Classroom(name, numSeats, nameFaculty) {
    if (numSeats < 10 || numSeats > 20) {
        console.log('Error name property');
        return
    }

    this.name = name;
    this.numSeats = numSeats;
    this.nameFaculty = nameFaculty;
}

function Group(name, numStudent, groupNameFaculty) {
    this.name = name;
    this.numStudent = numStudent;
    this.groupNameFaculty = groupNameFaculty;
}

let classroomsInSUZP = [
    new Classroom('101', 15, 'FICT'),
    new Classroom('DEF', 13, 'FICT'),
    new Classroom('104', 10, 'FICT'),
    new Classroom('105', 19, 'FICT'),
    new Classroom('A', 20, 'FOF'),
    new Classroom('226', 20, 'FICT'),
    new Classroom('431', 20, 'FEM'),
    new Classroom('BC', 10, 'FEM'),
    new Classroom('415', 16, 'FEM'),
    new Classroom('342', 10, 'FOF'),
    new Classroom('304', 12, 'FOF'),
]

function logAllClassrooms(arr) {
    let result = arr.reduce((acc, item) => acc += `${item.name}...${item.numSeats}...${item.nameFaculty}\n`, '')
    console.log(result);
}

function logFacultyClassrooms(arr, nameFaculty) {
    let result = arr.filter(item => nameFaculty === item.nameFaculty);
    logAllClassrooms(result);
}

function sortClassroomByNumSeats(arr) {
    arr.sort((a, b) => a.numSeats - b.numSeats);
}

function sortClassroomByName(arr) {
    arr.sort((a, b) => {
        let isNumberA = +(a.name);
        let isNumberB = +(b.name);

        if (!isNaN(isNumberA) && !isNaN(isNumberB)) {
            return +a.name - +b.name;
        } else {
            if (a.name > b.name) return 1
            if (a.name < b.name) return -1
            return 0;
        }
    });
}

function findClassroomForGroup(arrClassroom, objGroup) {
    let result = arrClassroom.filter(function (item) {
        let a = (item.numSeats >= objGroup.numStudent && item.nameFaculty === objGroup.groupNameFaculty);
        return a;
    })

    logAllClassrooms(result);
}



// Test <=========================>

// logAllClassrooms(classroomsInSUZP);

// logFacultyClassrooms(classroomsInSUZP, 'FEM');
// logFacultyClassrooms(classroomsInSUZP, 'FOF');
// logFacultyClassrooms(classroomsInSUZP, 'FICT');

// sortClassroomByNumSeats(classroomsInSUZP);
// logAllClassrooms(classroomsInSUZP);

// sortClassroomByName(classroomsInSUZP);
// logAllClassrooms(classroomsInSUZP);

// let group1 = new Group('SI-70', 15, 'FICT');
// let group2 = new Group('BB-22', 20, 'FEM');
// let group3 = new Group('OO-22', 10, 'FOF');
// findClassroomForGroup(classroomsInSUZP, group1);
// findClassroomForGroup(classroomsInSUZP, group2);
// findClassroomForGroup(classroomsInSUZP, group3);


