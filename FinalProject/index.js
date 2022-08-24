function showMenu () {
let toggleMenu = document.querySelector('.toggle-menu');
let toggleMenuDisplay = window.getComputedStyle(toggleMenu).getPropertyValue('display');
let slider = document.querySelector('.slider');
let main = document.querySelector('.main');
let epilogue = document.querySelector('.epilogue');
let footer = document.querySelector('.footer');


if(toggleMenuDisplay==='none') {
toggleMenu.style.display = "block";
slider.style.display = "none";
main.style.display = 'none';
epilogue.style.display = 'none';
footer.style.display = 'none';
}
else {
toggleMenu.style.display = "none";
slider.style.display = "block";
main.style.display = 'block';
epilogue.style.display = 'block'
footer.style.display = 'flex';
}

}

let accordions = document.getElementsByClassName('accordion');

for(let i=0; i< accordions.length; i++){
    accordions[i].addEventListener('click', function() {
    let panel = this.nextElementSibling;
    let fa = this.firstChild;
    
    if(panel.style.display==='block'){
        panel.style.display = 'none';
        this.classList.remove('active');
        fa.classList.remove('fa-minus');
        fa.classList.add('fa-plus')
    } else {

        for (let j = 0; j < accordions.length; j++) {
        accordions[j].nextElementSibling.style.display = 'none';
        accordions[j].classList.remove('active');
        accordions[j].firstChild.classList.remove('fa-minus');
        accordions[j].firstChild.classList.add('fa-plus');
    }
    panel.style.display = 'block';
    this.classList.add("active");
    fa.classList.remove('fa-plus');
    fa.classList.add('fa-minus');
}
}) }