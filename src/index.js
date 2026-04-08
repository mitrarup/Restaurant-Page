import "./style.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";

const content = document.getElementById("content");
const nav = document.getElementById("navi");

content.appendChild(loadHome);

nav.addEventListener("click", (e) => {
    document.querySelectorAll("nav button").forEach(btn => {
        btn.classList.remove("active");
    });
    e.target.classList.add("active");
    if (e.target.classList.contains("home")) {
        content.textContent = "";
        content.append(loadHome);
    }
    if (e.target.classList.contains("menu")) {
        content.textContent = "";
        content.append(loadMenu);
    }
    if (e.target.classList.contains("about")) {
        content.textContent = "";
        content.append(loadAbout);
    }
})
