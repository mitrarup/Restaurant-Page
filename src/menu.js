{/* <article>
            <div class="headline">Menu</div>
            <!-- <h1 class="punchline">Where every cup feels like home</h1> -->
            <div class="container">
            <div class="items">
                <div class="item"></div>
                    <h2>Momos</h2>
                    <h3>---------------------------------------------------------------------------/- 20$</h3>
                </div>
            </div>
            <button class="cta">Order Now</button>
        </article> */}
const loadMenu = function (){

const article = document.createElement("article") ;
const headline = document.createElement("div");
headline.classList.add("headline");
headline.textContent = "Menu";
article.appendChild(headline);
const container = document.createElement("div");
container.classList.add("container");

let item = document.createElement("div");
item.classList.add("item");
let name = document.createElement("h2");
name.textContent = "Masala Chai";
item.appendChild(name);
let price = document.createElement("h3");
price.textContent = "------------------------------------------------------------------------------------/- 20$";
item.appendChild(price);
container.appendChild(item);

item = document.createElement("div");
item.classList.add("item");
name = document.createElement("h2");
name.textContent = "Virgin Mojito";
item.appendChild(name);
price = document.createElement("h3");
price.textContent = "----------------------------------------------------------------------------------/- 20$";
item.appendChild(price);
container.appendChild(item);

item = document.createElement("div");
item.classList.add("item");
name = document.createElement("h2");
name.textContent = "Iced Cappuccino";
item.appendChild(name);
price = document.createElement("h3");
price.textContent = "------------------------------------------------------------------------------/- 20$";
item.appendChild(price);
container.appendChild(item);

item = document.createElement("div");
item.classList.add("item");
name = document.createElement("h2");
name.textContent = "Tandoori Momo";
item.appendChild(name);
price = document.createElement("h3");
price.textContent = "------------------------------------------------------------------------------/- 20$";
item.appendChild(price);
container.appendChild(item);

item = document.createElement("div");
item.classList.add("item");
name = document.createElement("h2");
name.textContent = "Steam Momo";
item.appendChild(name);
price = document.createElement("h3");
price.textContent = "-----------------------------------------------------------------------------------/- 20$";
item.appendChild(price);
container.appendChild(item);

item = document.createElement("div");
item.classList.add("item");
name = document.createElement("h2");
name.textContent = "Cheese Garlic Bread";
item.appendChild(name);
price = document.createElement("h3");
price.textContent = "-----------------------------------------------------------------------/- 20$";
item.appendChild(price);
container.appendChild(item);

item = document.createElement("div");
item.classList.add("item");
name = document.createElement("h2");
name.textContent = "BBQ Chicken Wings";
item.appendChild(name);
price = document.createElement("h3");
price.textContent = "-----------------------------------------------------------------------/- 20$";
item.appendChild(price);
container.appendChild(item);

item = document.createElement("div");
item.classList.add("item");
name = document.createElement("h2");
name.textContent = "Grilled Sandwich";
item.appendChild(name);
price = document.createElement("h3");
price.textContent = "----------------------------------------------------------------------------/- 20$";
item.appendChild(price);
container.appendChild(item);

item = document.createElement("div");
item.classList.add("item");
name = document.createElement("h2");
name.textContent = "Chicken Burger";
item.appendChild(name);
price = document.createElement("h3");
price.textContent = "------------------------------------------------------------------------------/- 20$";
item.appendChild(price);
container.appendChild(item);

article.appendChild(container);

const button = document.createElement("button");
button.classList.add("cta");
button.textContent = "Order Now";
article.appendChild(button);
return article;
}()
export {loadMenu};