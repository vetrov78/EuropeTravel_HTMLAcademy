var navMain = document.querySelector(".page-header__navigation");
var navToggle = document.querySelector(".page-header__navigation-toggle");

navMain.classList.remove("page-header--nojs");
navMain.classList.add("page-header__navigation--closed");
navMain.classList.remove("page-header__navigation--opened");

navToggle.addEventListener('click', function() {
    if (navMain.classList.contains("page-header__navigation--opened")) {
        navMain.classList.add("page-header__navigation--closed");
        navMain.classList.remove("page-header__navigation--opened");
    } else {
        navMain.classList.remove("page-header__navigation--closed");
        navMain.classList.add("page-header__navigation--opened");
    }
})