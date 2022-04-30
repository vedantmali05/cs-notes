// ///////////////// HEADER CSS ON SCROLL

let header = document.querySelector(".notes-header");
window.onscroll = function() {
    if (window.pageYOffset > 100) {
        header.style.boxShadow = "0px 0px 10px 5px var(--smooth-light)";
    } else {
        header.style.boxShadow = "none";
    }
};

// ////////////  Function For DROPDOWN Elements
function dropDown(
    resizerElem,
    resizerBtn,
    givenClass,
    iconOpen,
    iconClose = iconOpen
) {
    resizerElem.classList.toggle(givenClass);
    if (headerNavWrapper.classList.contains(givenClass)) {
        resizerBtn.innerHTML = iconOpen;
    } else {
        resizerBtn.innerHTML = iconClose;
    }
}

// ///////////////// MENU OPEN/CLOSE

let menuBtn = document.querySelector(".menu-btn"),
    headerNavWrapper = document.querySelector(".header-nav-wrapper");

menuBtn.addEventListener("click", function() {
    dropDown(
        headerNavWrapper,
        menuBtn,
        "show-menu",
        `<i class="bi bi-x-lg"></i>`,
        `<i class="bi bi-grid"></i>`
    );
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

// ///////////////// INDEX OPEN/CLOSE

let indexTitle = document.querySelectorAll(".index-title");

let thisPageLinks = document.querySelectorAll(".submenu li");

thisPageLinks.forEach(item => {
    item.onclick = ()=>{
        dropDown(
            headerNavWrapper,
            menuBtn,
            "show-menu",
            `<i class="bi bi-x-lg"></i>`,
            `<i class="bi bi-grid"></i>`
        );
    }
})