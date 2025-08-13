export function GenerateAboutPageContent(){

    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";
    contentContainer.style.height = "60vh"

    const aboutSectionDiv = document.createElement("div");
    aboutSectionDiv.classList.add("about-section");

    const aboutHeadingDiv = document.createElement("div");
    aboutHeadingDiv.classList.add("heading");

    const h1 = document.createElement("h1");
    h1.textContent = "About Us";

    aboutHeadingDiv.appendChild(h1);
    aboutSectionDiv.appendChild(aboutHeadingDiv);

    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("main-content");

    const contentDiv = document.createElement("div");
    contentDiv.classList.add("content");

    const h3 = document.createElement("h3");
    h3.textContent = "Modern Italian. Mindfully Crafted.";

    const ul = document.createElement("ul");
    ul.style.marginTop = "10px";
    const items = [
        "At Relax Foods, we believe dining should be both an experience and an escape—a moment to slow down, savor the present, and reconnect through exceptional food and drink.",
        "Rooted in the timeless traditions of Italian cuisine, our menu reimagines the classics with a clean, modern sensibility. We specialize in artisan desserts and expertly curated drinks, creating bold, beautiful flavors without compromise. From our signature vegan creations to our elegantly plated indulgences, every item is crafted with intention.",
        "Our name—Relax Foods—is more than a suggestion. It’s our philosophy. Whether you're ending your evening with a glass of prosecco or sharing a spoonful of tiramisu, we want you to feel at ease, at home, and fully immersed in the moment."
    ]

    items.forEach(text => {
        const li = document.createElement("li");
        li.style.listStyle = "none";
        li.style.marginLeft = "-20px"
        li.textContent = text;
        ul.appendChild(li);
    })

    contentDiv.appendChild(h3);
    contentDiv.appendChild(ul)
    
    mainContentDiv.appendChild(contentDiv);
    aboutSectionDiv.appendChild(mainContentDiv);

    contentContainer.appendChild(aboutSectionDiv);

}