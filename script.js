let menuBtn = document.querySelector(".menu-btn"),
    headerNavWrapper = document.querySelector(".header-nav-wrapper");

menuBtn.addEventListener("click", function() {
    headerNavWrapper.classList.toggle("show-menu");
    if (headerNavWrapper.classList.contains("show-menu")) {
        menuBtn.innerHTML = '<i class="bi bi-x-lg"></i>';
    } else {
        menuBtn.innerHTML = '<i class="bi bi-grid"></i>';
    }
});

let submenuBtn = document.querySelectorAll(".submenu-btn"),
    submenu = document.querySelectorAll(".submenu");

for (let i = 0; i < submenu.length; i++) {
    submenuBtn[i].addEventListener("click", function() {
        submenu.forEach((item) => {
            if (item.classList.contains("show-submenu") && item != submenu[i]) {
                item.classList.remove("show-submenu");
            }
        });
        submenu[i].classList.toggle("show-submenu");
    });
}