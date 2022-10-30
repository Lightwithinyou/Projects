window.addEventListener('scroll', function () {
    let nav = document.getElementById("menu-bar");


    if (window.pageYOffset >= 204) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky");
    }
});