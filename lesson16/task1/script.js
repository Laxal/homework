const menu = document.getElementById('menu');
const burger = document.getElementById('burger');

burger.onclick = () => {
    menu.classList.toggle('active');
}