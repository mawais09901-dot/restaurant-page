export function GenerateMenuPageContent() {

    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";
    contentContainer.style.height = "82vh"

    const MenuSectionDiv = document.createElement("div");
    MenuSectionDiv.classList.add("menu-section");

    const MenuHeadingDiv = document.createElement("div");
    MenuHeadingDiv.classList.add("heading");

    const h1 = document.createElement("h1");
    h1.textContent = "Our Menu";

    MenuHeadingDiv.appendChild(h1);
    MenuSectionDiv.appendChild(MenuHeadingDiv);

    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("main-content");

    const span = document.createElement("span");
    span.textContent = "Dolci / Desserts";
    mainContentDiv.appendChild(span);

    const dessertsParagraph = document.createElement("p");
    dessertsParagraph.textContent = "Indulge in the art of Italian sweetness. Our dessert menu blends traditional recipes with contemporary flair, offering rich, elegant finishes to your dining experience.";
    mainContentDiv.appendChild(dessertsParagraph);

    const ul = document.createElement("ul");
    const itemsArr = [
        ["Tiramisu al Caffè", "A refined take on the classic—layers of espresso-soaked savoiardi, mascarpone cream, and a touch of dark cocoa."],
        ["Panna Cotta alla Vaniglia", "Silky vanilla bean panna cotta served with seasonal berry compote and a delicate almond crisp.Silky vanilla bean panna cotta served with seasonal berry compote and a delicate almond crisp."],
        ["Cioccolato Fondente", "Flourless dark chocolate torte with olive oil ganache and Sicilian sea salt."],
        ["Gelato Artigianale", "House-made Italian gelato in rotating seasonal flavors."]
    ]

    itemsArr.forEach(items => {
        const li = document.createElement("li");

        const h4 = document.createElement("h4");
        h4.textContent = items[0];
        li.appendChild(h4);

        const p = document.createElement("p");
        p.textContent = items[1];
        li.appendChild(p);

        ul.appendChild(li);

    })

    ul.style.marginBottom = "20px"
    mainContentDiv.appendChild(ul);

    const span2 = document.createElement("span");
    span2.textContent = "Bevande/Drinks";
    mainContentDiv.appendChild(span2);

    const drinksParagraph = document.createElement("p");
    drinksParagraph.textContent = "Our curated drink selection features timeless Italian favorites, innovative cocktails, and zero-proof options designed for the modern diner.";
    mainContentDiv.appendChild(drinksParagraph);

    const cocktailsHeading = document.createElement("h4")
    cocktailsHeading.textContent = "Cocktails";
    cocktailsHeading.style.marginTop = "10px"
    mainContentDiv.appendChild(cocktailsHeading);

    const cocktailsUl = document.createElement("ul");
    const cocktails = [
        ["Negroni Moderno","A fresh take on the classic, with gin, Campari, vermouth, and a citrus twist."],
        ["Amalfi Spritz","Limoncello, prosecco, and basil—sunshine in a glass."],
        ["Fig & Fennel Old Fashioned","Barrel-aged with an herbal note for depth and distinction."]
    ];

    cocktails.forEach(cocktail => {
        const li = document.createElement("li");

        const h5 = document.createElement("h5");
        h5.textContent = cocktail[0];
        li.appendChild(h5);

        const p = document.createElement("p");
        p.textContent = cocktail[1];
        li.appendChild(p);

        cocktailsUl.appendChild(li);
    })

    mainContentDiv.appendChild(cocktailsUl);

    MenuSectionDiv.appendChild(mainContentDiv);
    contentContainer.appendChild(MenuSectionDiv);
}