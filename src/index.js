import "./styles.css"
import { GenerateHomePageContent } from "./modules/Home.js"
import { GenerateMenuPageContent } from "./modules/Menu.js";
import { GenerateAboutPageContent } from "./modules/About.js";

GenerateHomePageContent();

const homeButton = document.querySelector(".home-button");
homeButton.addEventListener("click", GenerateHomePageContent)

const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", GenerateMenuPageContent);

const aboutButton = document.querySelector(".about-button");
aboutButton.addEventListener("click", GenerateAboutPageContent)