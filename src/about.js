{/* <article>
            <div class="headline">About</div>
            <h1 class="punchline">Where every cup feels like home</h1>
            <div class="abouts">   
                <h1>Hi I'm Arup,</h1>
                <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia id molestias blanditiis facere possimus culpa necessitatibus provident distinctio, quasi dignissimos fuga, eos velit repellendus vero ipsam labore dolores delectus animi. Odit incidunt sit a ea. Asperiores sit perspiciatis minima ad odio illo ab, iste dolor aliquid esse nobis eligendi numquam voluptates modi explicabo, repellat, voluptas molestias sint. Corporis deserunt itaque sequi, minus tempore, qui blanditiis ipsum natus cupiditate ipsa, maiores dignissimos optio neque. Voluptatum?</h2>
            </div>
        </article>  */}
const loadAbout = function(){
const article = document.createElement("article");
let child = document.createElement("div");
child.classList.add("headline");
child.textContent = "About";
article.appendChild(child);

child = document.createElement("h1");
child.classList.add("punchline");
child.textContent = "Where every cup feels like home";
article.appendChild(child);

child = document.createElement("div");
child.classList.add("abouts");
let element =document.createElement("h1");
element.textContent = "Hi I'm Arup,";
child.appendChild(element);

element =document.createElement("h2");
element.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia id molestias blanditiis facere possimus culpa necessitatibus provident distinctio, quasi dignissimos fuga, eos velit repellendus vero ipsam labore dolores delectus animi. Odit incidunt sit a ea. Asperiores sit perspiciatis minima ad odio illo ab, iste dolor aliquid esse nobis eligendi numquam voluptates modi explicabo, repellat, voluptas molestias sint. Corporis deserunt itaque sequi, minus tempore, qui blanditiis ipsum natus cupiditate ipsa, maiores dignissimos optio neque. Voluptatum?";
child.appendChild(element);

article.appendChild(child);

return  article ;
}()
export {loadAbout};

