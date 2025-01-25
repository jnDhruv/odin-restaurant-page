import imageFile from "../imgs/interior.jpg";

function createPara(text) {
    const para = document.createElement('p');
    para.textContent = text;
    return para;
}

function createHomePage() {
    const home = document.createElement('div');
    home.classList.add("home-content");

    const heading = document.createElement('h2');
    heading.innerHTML = "&#127775;Tasty's Delicious Kitchen&#127775;"

    const para1 = createPara("At Tasty's, we believe that food is more than just a meal - it's an experience, a memory, and a celebration.");

    const image = document.createElement('img');
    image.src = imageFile;
    image.alt = "Restaurant";

    const para2 = createPara("Nestled in the heart of Delhi, our restaurant is your destination for exceptional flavors, warm hospitality, and a cozy ambiance.");

    home.appendChild(heading);
    home.appendChild(para1);
    home.appendChild(image);
    home.appendChild(para2);

    return home;
}

function loadHomePage() {
    const content = document.querySelector("#content");
    content.textContent = "";

    content.appendChild(createHomePage());
}

export default loadHomePage;