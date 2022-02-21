function Open() {
    var element = document.querySelector(".searchbar");
    var element2 = document.querySelector(".navbar");
    element.style.opacity = "1";
    element2.style.display = "none";
}

function Close() {
    var element = document.querySelector(".searchbar");
    var element2 = document.querySelector(".navbar");
    element.style.opacity = "0";
    element2.style.display = "block";
}

function PhoneOpen() {
    var element = document.querySelector(".js-menu");
    element.style.display = "block";
}

function PhoneOpen() {
    var element = document.querySelector(".js-menu");
    element.classList.toggle("js-menu-toggle");
}