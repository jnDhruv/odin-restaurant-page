import "./styles/layout.css";
import "./styles/content.css";

import loadHomePage from "./modules/home";
import loadMenuPage from "./modules/menu";

function setSelectedButton(button) {
    const selected = document.querySelectorAll('.selected');

    selected.forEach(button => {
        if (button !== this) {
            button.classList.remove('selected');
        }
    });

    button.classList.add('selected');
}

function addEventListeners() {
    const homeButton = document.querySelector('#home');
    const menuButton = document.querySelector('#menu');
    const contactButton = document.querySelector('#contact');

    homeButton.addEventListener('click', () => {
        setSelectedButton(homeButton);
        loadHomePage();
    });

    menuButton.addEventListener('click', () => {
        setSelectedButton(menuButton);
        loadMenuPage();
    });
}

function init() {
    addEventListeners();
    document.querySelector('#home').click();
}

init();