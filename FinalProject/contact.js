function showMenu () {
let toggleMenu = document.querySelector('.toggle-menu');
let toggleMenuDisplay = window.getComputedStyle(toggleMenu).getPropertyValue('display');
let footer = document.querySelector('.footer');
let container = document.querySelector('.container-sm');

if(toggleMenuDisplay==='none') {
toggleMenu.style.display = "block";
footer.style.display = 'none';
container.style.display = 'none';
}
else {
toggleMenu.style.display = "none";
container.style.display = 'block';
footer.style.display = 'flex';
}

}

