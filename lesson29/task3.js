let colorArr = ['red', 'yellow', 'green'];
let bulbArr = document.querySelectorAll('.bulb');
let changeButton = document.querySelector('.change-color');

let activeLight = 2;

function changeColor() {
    bulbArr[activeLight].className = 'bulb';
    activeLight++;

    if (activeLight > 2) {
        activeLight = 0;
    }

    bulbArr[activeLight].classList.add(colorArr[activeLight]);
}

changeButton.onclick = function () {
    // bulbArr[activeLight].className('bulb');
    changeColor();
};