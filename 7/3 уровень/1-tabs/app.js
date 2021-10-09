'use strict';
const texts = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

let text = document.querySelector('.text');
let navLink = document.querySelectorAll('.nav-link');

navLink.forEach(function(link) {
    link.addEventListener('click', clickHandler);
});

function clickHandler(event) {
    changeText(event);
    changeActiveClass(event);
}

function changeActiveClass(event) {
    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
}

function changeText(event) {
    switch (event.target.textContent) {
        case "Link 1":
            text.textContent = texts.text1;
            break;
        case "Link 2":
            text.textContent = texts.text2;
            break;
        case "Link 3":
            text.textContent = texts.text3;
            break;
    }
}