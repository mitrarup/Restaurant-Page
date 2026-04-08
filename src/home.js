{/* <article>
            <div class="headline">Mitra Cafe</div>
            <div class="img"></div>
            <h1 class="punchline">Where every cup feels like home</h1>
            <div class="cards">
                <div class="card">
                    <h2>Our Goal</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, omnis non illo nulla nobis quos!
                        Natus iure, excepturi repellendus dolores doloribus voluptatibus incidunt.</h3>
                </div>
                <div class="card">
                    <h2>Our History</h2>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, omnis non illo nulla nobis quos!
                        Natus iure, excepturi repellendus dolores doloribus voluptatibus incidunt.</h3>
                </div>
            </div>
            <button class="cta">Order Now</button>
</article> */}

const loadHome = function() {
const article = document.createElement("article") ;
const headline = document.createElement("div");
headline.classList.add("headline");
headline.textContent = "Mitra Cafe";
article.appendChild(headline);
const img = document.createElement("div");
img.classList.add("img");
article.appendChild(img);
const punchline = document.createElement("div");
punchline.classList.add("punchline");
punchline.textContent = "Where every cup feels like home";
article.appendChild(punchline);

const cards = document.createElement("div");
cards.classList.add("cards");
const card1 = document.createElement("div");
card1.classList.add("card");
let heading1 = document.createElement("h2");
heading1.textContent = "Our Goal";
let about1 = document.createElement("h3");
about1.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, omnis non illo nulla nobis quos! Natus iure, excepturi repellendus dolores doloribus voluptatibus incidunt."
card1.appendChild(heading1);
card1.appendChild(about1);
cards.appendChild(card1);

const card2 = document.createElement("div");
card2.classList.add("card");
let heading2 = document.createElement("h2");
heading2.textContent = "Our History";
let about2 = document.createElement("h3");
about2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, omnis non illo nulla nobis quos! Natus iure, excepturi repellendus dolores doloribus voluptatibus incidunt."
card2.appendChild(heading2);
card2.appendChild(about2);
cards.appendChild(card2);

article.appendChild(cards);

const button = document.createElement("button");
button.classList.add("cta");
button.textContent = "Order Now";
article.appendChild(button);
return article;
}()
export {loadHome};
