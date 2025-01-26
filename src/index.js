import "./styles/layout.css";
import "./styles/content.css";

import loadHomePage from "./modules/home";
import loadMenuPage from "./modules/menu";
import loadContagePage from "./modules/contact";

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
    const githubButton = document.querySelector('#github');

    homeButton.addEventListener('click', () => {
        setSelectedButton(homeButton);
        loadHomePage();
    });

    menuButton.addEventListener('click', () => {
        setSelectedButton(menuButton);
        loadMenuPage();
    });

    contactButton.addEventListener('click', () => {
        setSelectedButton(contactButton);
        loadContagePage();
    });

    githubButton.addEventListener('click', () => {
        window.location.href = "https://github.com/jnDhruv/restaurant-page";
    });
}

function init() {
    addEventListeners();
    document.querySelector('#home').click();
}

init();