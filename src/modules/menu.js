import app1 from "../imgs/dishes/crispy-paneer.jpg";
import app2 from "../imgs/dishes/spring-rolls.jpg";

import salad1 from "../imgs/dishes/tomato-soup.jpg";
import salad2 from "../imgs/dishes/vegetable-soup.jpg";
import salad3 from "../imgs/dishes/greek-salad.jpg";

import mainC1 from "../imgs/dishes/paneer.jpg";
import mainC2 from "../imgs/dishes/biryani.jpg";
import mainC3 from "../imgs/dishes/noodles.jpg";
import mainC4 from "../imgs/dishes/dumpling.jpg";

import dessert1 from "../imgs/dishes/brownie.jpg";
import dessert2 from "../imgs/dishes/pastries.jpg";

import bev1 from "../imgs/dishes/coffee.jpg";
import bev2 from "../imgs/dishes/dalgona-coffee.png";
import bev3 from "../imgs/dishes/smoothies.jpg";

function createCategoryHeading(text) {
    const subheading = document.createElement('h3');
    subheading.textContent = text;
    return subheading;
}

function createCategoryItem(image, title) {
    const container = document.createElement('div');
    container.classList.add('menu-category-item');

    const img = document.createElement('img');
    img.src = image;
    img.alt = title;

    const p = document.createElement('p');
    p.textContent = title;

    container.appendChild(img);
    container.appendChild(p);
    return container;
}

function createMenuPage() {
    const menu = document.createElement('div');
    menu.classList.add('menu-content');

    const heading = document.createElement('h2');
    heading.innerHTML = "&#127775;Our Menu&#127775;"

    const appetizers = document.createElement('div');
    appetizers.classList.add('menu-category');
    appetizers.appendChild(createCategoryHeading("Appetizers"));
    appetizers.appendChild(createCategoryItem(app1, "Crispy Paneer Bites"));
    appetizers.appendChild(createCategoryItem(app2, "Vegetable Spring Rolls"));

    const salads = document.createElement('div');
    salads.classList.add('menu-category');
    salads.appendChild(createCategoryHeading("Soups & Salads"));
    salads.appendChild(createCategoryItem(salad1, "Tomato Basil Soup"));
    salads.appendChild(createCategoryItem(salad2, "Veggie Soup"));
    salads.appendChild(createCategoryItem(salad3, "Greek Salad"));

    const mainCourses = document.createElement('div');
    mainCourses.classList.add('menu-category');
    mainCourses.appendChild(createCategoryHeading("Main Courses"));
    mainCourses.appendChild(createCategoryItem(mainC1, "Paneer Butter Masala"));
    mainCourses.appendChild(createCategoryItem(mainC2, "Vegetable Biryani"));
    mainCourses.appendChild(createCategoryItem(mainC3, "Veg Hakka Noodles"));
    mainCourses.appendChild(createCategoryItem(mainC4, "Vegetable Dumplings"));

    const desserts = document.createElement('div');
    desserts.classList.add('menu-category');
    desserts.appendChild(createCategoryHeading("Desserts"));
    desserts.appendChild(createCategoryItem(dessert1, "Chocolate Brownie"));
    desserts.appendChild(createCategoryItem(dessert2, "Pastries"));

    const bevs = document.createElement('div');
    bevs.classList.add('menu-category');
    bevs.appendChild(createCategoryHeading("Beverages"));
    bevs.appendChild(createCategoryItem(bev1, "Hot Coffee"));
    bevs.appendChild(createCategoryItem(bev2, "Dalgona Coffee"));
    bevs.appendChild(createCategoryItem(bev3, "Smoothies"));

    menu.appendChild(heading);
    menu.appendChild(appetizers);
    menu.appendChild(salads);
    menu.appendChild(mainCourses);
    menu.appendChild(desserts);
    menu.appendChild(bevs);
    return menu;
}

function loadMenuPage() {
    const content = document.querySelector("#content");
    content.textContent = "";

    content.appendChild(createMenuPage());
}

export default loadMenuPage;