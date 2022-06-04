function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.className === "navbar") {
        menu.className += " open";
    } else {
        menu.className = "navbar";
    }
}

let hamburgerMenu = document.getElementsByClassName("nav-menu-icon")[0];
hamburgerMenu.addEventListener("click", toggleMenu);


const comicBooks = [
    {
        title: "Fun Home: A Family Tragicomic",
        author: "by Alison Bechdel",
        rating: "5 stars",
        href: "./fun-home.+html",
        imgSrc: "./public/images/fun-home.jpg",
        imgAlt: "Fun Home: A Family Tragicomic comic book cover",
    },
    {
        title: "Hunter X Hunter Vol. 1",
        author: "by Yoshihiro Togashi",
        rating: "5 stars",
        href: "./hunter-x-hunter.html",
        imgSrc: "./public/images/hunter-x-hunter.jpg",
        imgAlt: "Hunter X Hunter comic book cover",
    },
    {
        title: "The Walking Dead, Vol. 1: Days Gone Bye",
        author: "by Robert Kirkman",
        rating: "4 stars",
        href: "./the-walking-dead.html",
        imgSrc: "./public/images/the-walking-dead.jpg",
        imgAlt: "The Walking Dead, Vol. 1: Days Gone Bye comic book cover",
    }
]

/* Example layout:
    <div class="container-single-book-index">
        <a href="./fun-home.html">
            <img class="image-cover-index" src="./public/images/fun-home.jpg" alt="Fun Home: A Family Tragicomic comic book cover">
        </a>
        <br />
        <span>
            <i>Fun Home: A Family Tragicomic</i><br />
            by Alison Bechdel<br />
            5 stars<br />
            <a href="./fun-home.html">Details</a>
        </span>
    </div>
*/

function displayMore() {
    comicBooks.forEach((book) => {
        var container = document.getElementById("container-book-rows-index");
        var div = document.createElement("div");
        div.classList.add("container-single-book-index");
        
        container.appendChild(div);
        
        var anchor = document.createElement("a");
        anchor.href = book.href;

        var image = document.createElement("img");
        image.classList.add("image-cover-index");
        image.src = book.imgSrc;
        image.alt = book.imgAlt

        anchor.appendChild(image);
        div.appendChild(anchor);

        var br1 = document.createElement("br");
        div.appendChild(br1);

        var span = document.createElement("span");

        var title = document.createTextNode(book.title);
        var italics = document.createElement("i");
        var br2 = document.createElement("br");
        italics.appendChild(title);
        italics.appendChild(br2);
        span.appendChild(italics);

        var author = document.createTextNode(book.author);
        span.appendChild(author);

        var br3 = document.createElement("br");
        span.appendChild(br3);

        var rating = document.createTextNode(book.rating);
        var br4 = document.createElement("br");
        span.appendChild(rating);
        span.appendChild(br4);

        var detailsAnchor = document.createElement("a");
        detailsAnchor.href = book.href;
        detailsAnchor.innerText = "Details";
        
        span.appendChild(detailsAnchor);
        
        div.appendChild(span);
    })
}

const loginForm = document.getElementById('login-form');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');

loginForm.addEventListener('submit', event => {
  if(!emailField.validity.valid){
    event.preventDefault();
    emailField.classList.add('error')
  }
})