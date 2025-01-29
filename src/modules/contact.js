function createHeading(text) {
    const subheading = document.createElement('h3');
    subheading.textContent = text;
    return subheading;
}

function createPara(text) {
    const para = document.createElement('p');
    para.textContent = text;
    return para;
}

function createContactPage() {
    const contact = document.createElement('div');
    contact.classList.add("contact-content");

    const heading = document.createElement('h2');
    heading.innerHTML = "&#127775;Tasty's: Dine today!&#127775;"    

    contact.appendChild(heading);

    contact.appendChild(createHeading("📍 Address"));
    contact.appendChild(createPara(`D-12, Connaught Place, Outer Circle, New Delhi - 110001, India`));
    
    contact.appendChild(createHeading("📞 Phone"));
    contact.appendChild(createPara(`Call us at 011 2345 6789 for reservations, takeout, or inquiries.`));
    
    contact.appendChild(createHeading("📧 Email"));
    contact.appendChild(createPara(`Reach out to us at tastys.kitchen@email.com for any questions or feedback.`));

    contact.appendChild(createHeading("🕒 Hours of Operation"));
    contact.appendChild(createPara(`Monday to Friday: 11:00 AM - 10:00 PM`));
    contact.appendChild(createPara(`Saturday & Sunday: 9:00 AM - 11:00 PM`));

    return contact;
}

function loadContactPage() {
    const content = document.querySelector("#content");
    content.textContent = "";

    content.appendChild(createContactPage());
}

export default loadContactPage;