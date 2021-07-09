let modalWindow = document.querySelector('.modal-window');
let openButton = document.querySelector('.open-button');
let closeButton = document.querySelector('.close-button');

openButton.onclick = function () {
    modalWindow.classList.add('visible');
};

closeButton.onclick = function () {
    modalWindow.classList.remove('visible');
};