const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navItem = document.querySelectorAll(".nav__item"),
header = document.getElementById("header");

// open and close menu
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
    changeIcon();
});

// close menu when user click the nav links
navItem.forEach((item) => {
    item.addEventListener("click", () => {
        if (navMenu.classList.contains("nav__menu--open")) {
            navMenu.classList.remove("nav__menu--open");
        }
        changeIcon();
    });
});

// change nav toggle icon
function changeIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
        navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    }else{
        navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
}

// hover
const body = document.querySelector("body");
const imgContainer = document.createElement("div");

function displayImg(imgUrl, elt) {
    body.appendChild(imgContainer);
    imgContainer.innerHTML = `<img src="${imgUrl}">`;
    imgContainer.classList.add("displayMe");
    imgContainer.style.top = (elt.offsetTop + 30) + 'px';
    imgContainer.style.left = elt.offsetLeft + 'px';

    let difference = document.documentElement.clientWidth - elt.offsetLeft;

    if(difference < 250) {
        imgContainer.style.right = '20px';
        imgContainer.style.left = 'auto';
    } else {
        imgContainer.style.left = elt.offsetLeft + 'px';
    }

    imgContainer.style.animation = 'fadeIn .8s';
}
function removeImg() {
    imgContainer.style.animation = 'fadeOut .8s';
    setTimeout(() =>{
        body.removeChild(imgContainer);
    }, 750);
}
