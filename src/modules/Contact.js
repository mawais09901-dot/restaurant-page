export function GenerateContactPageContent(){

    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";
    contentContainer.style.height = "300px"

    const contactSectionDiv = document.createElement("div");
    contactSectionDiv.classList.add("contact-section");

    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("main-content");

    const ul = document.createElement("ul");
    ul.style.listStyle = "none"

    const items = [
        ["📍 Visit Us","123 Foodie Street, Lahore, Pakistan"],
        ["📞 Call Us","+92 300 1234567"],
        ["📧 Email Us","hello@relaxFoods.com"],
        ["🕒 Opening Hours","Monday – Saturday: 12:00 PM – 11:00 PM Sunday: 1:00 PM – 10:00 PM"]
    ]

    items.forEach(item => {
        const li = document.createElement("li");

        const h4 = document.createElement("h4");
        h4.textContent = item[0];
        li.appendChild(h4);

        const span = document.createElement("span");
        span.textContent = item[1];
        li.appendChild(span);

        ul.appendChild(li);
    })

    mainContentDiv.appendChild(ul);
    contactSectionDiv.appendChild(mainContentDiv);
    contentContainer.appendChild(contactSectionDiv);

}