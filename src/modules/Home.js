export function GenerateHomePageContent() {

    const contentContainer = document.getElementById("content");
    contentContainer.innerHTML = "";
    contentContainer.style.height = "82vh"

    const homeSectionDiv = document.createElement("div");
    homeSectionDiv.classList.add("home-section");

    const homeHeadingDiv = document.createElement("div");
    homeHeadingDiv.classList.add("heading");

    const h1 = document.createElement("h1");
    h1.textContent = "Welcome to Relax Foods !";

    homeHeadingDiv.appendChild(h1);
    homeSectionDiv.appendChild(homeHeadingDiv);

    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("main-content");

    const span = document.createElement("span");
    span.textContent = "Where Flavor Meets Freshness";
    mainContentDiv.appendChild(span);

    const p1 = document.createElement("p");
    p1.textContent = "At Relax Foods, we serve more than just food — we serve experiences. Whether you're craving a cozy dinner, a quick bite, or a place to celebrate with friends and family, our kitchen is always ready to impress. Every dish is crafted with the freshest ingredients, bold flavors, and a passion for culinary excellence."
    mainContentDiv.appendChild(p1);

    const firstDecLine = document.createElement("div");
    firstDecLine.classList.add("dec-line");
    mainContentDiv.appendChild(firstDecLine);

    const ourStoryHeading = document.createElement("h2");
    ourStoryHeading.textContent = "Our Story";
    mainContentDiv.appendChild(ourStoryHeading);

    const ourStory = document.createElement("p");
    ourStory.textContent = "Rooted in tradition and inspired by innovation, Relax Foods was founded on a love for great food and warm hospitality. Our chefs bring together local ingredients and global techniques to create a menu that's both comforting and exciting."
    mainContentDiv.appendChild(ourStory);

    const secondDecLine = document.createElement("div");
    secondDecLine.classList.add("dec-line");
    mainContentDiv.appendChild(secondDecLine);

    const offerHeading = document.createElement("h3");
    offerHeading.textContent = "What We Offer";
    mainContentDiv.appendChild(offerHeading);

    const ul = document.createElement("ul");
    const items = ["🍽️ Dine-In & Outdoor Seating", "🛍️ Takeout & Delivery", "🍷 Curated Wine & Cocktail List", "🌱 Vegetarian & Gluten-Free Options", "🎉 Catering & Private Events"];
    items.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        ul.appendChild(li);
    })
    mainContentDiv.appendChild(ul);

    const guestsResponseHeading = document.createElement("h2");
    guestsResponseHeading.textContent = "What Our Guests Say";
    mainContentDiv.appendChild(guestsResponseHeading);

    const guestResponse1 = document.createElement("p");
    guestResponse1.textContent = "\"The food is amazing and the ambiance is perfect. Best dining experience we've had in a long time!\" –Sarah L.";
    mainContentDiv.appendChild(guestResponse1);

    const guestResponse2 = document.createElement("p");
    guestResponse2.textContent = "\"Friendly staff, delicious meals, and cozy seating. Highly recommended!\" – James T.";
    mainContentDiv.appendChild(guestResponse2);

    const eventsHeading = document.createElement("h2");
    eventsHeading.textContent = "Upcoming Events"
    mainContentDiv.appendChild(eventsHeading);

    const ulEvents = document.createElement("ul");
    const events = ["Live Jazz Night - Every Friday at 7 PM", "Wine Tasting Experience - August 20, 2025", "Family Sunday Brunch - Weekly 10 AM – 2 PM"]
    events.forEach(text => {
        const li = document.createElement("li");
        let splitted = text.split("-");
        li.innerHTML = `<strong>${splitted[0]}</strong> - ${splitted[1]}`
        ulEvents.appendChild(li);
    })
    mainContentDiv.appendChild(ulEvents);

    homeSectionDiv.appendChild(mainContentDiv);
    contentContainer.appendChild(homeSectionDiv);
}