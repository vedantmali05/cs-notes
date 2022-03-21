// ///////////////// HEADER CSS ON SCROLL

let header = document.querySelector(".notes-header");
window.onscroll = function() {
    if (window.pageYOffset > 100) {
        header.style.boxShadow = "0px 0px 10px var(--smooth-light)";
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

let indexTitle = document.querySelectorAll(".index-title"),
    indexListBox = document.querySelector(".index-list-box");

for (let i = 0; i < indexTitle.length; i++) {
    indexTitle[i].addEventListener("click", function() {
        dropDown(
            indexListBox,
            indexTitle[i],
            "show-index",
            indexTitle[i].innerHTML
        );
    });
}

// /////////////////////// INDEX AND MENU AUTOMATED LINKS APPEND

// this is the ul of the submenu
let submenuThisPage = document.querySelector(".submenu-this-page");

// GET ALL IDS ON THE PAGE
let allIds = document.querySelectorAll("*[id]");
topicIDArr = [];

// Filter out the ids that are not assigned to any topic heading
allIds.forEach(function(item) {
    if (item.id.includes("topic_")) {
        // PUSH FILTERED IDS INTO topicIDArr
        topicIDArr.push(item.id);
    }
});

// GET TAG NAMES OF FILTERED IDS
let tagsOfTopicIDs = [];

for (let i = 0; i < topicIDArr.length; i++) {
    tagsOfTopicIDs.push(document.getElementById(topicIDArr[i]));


    switch (tagsOfTopicIDs[i].tagName) {
        case "H1":
            // CREATE A LINK ELEMENT AND APPEND IT TO THE UL
            let newElem = document.createElement("li");
            newElem.innerHTML = `<a href="#${topicIDArr[i]}">${tagsOfTopicIDs[i].innerHTML} #</a>`;
            submenuThisPage.innerHTML += `<li>${newElem.innerHTML}</li>`;
            indexListBox.appendChild(newElem);
            break;

        case "H2":
        case "H3":
            let newChildElem = document.createElement("ul");
            newChildElem.innerHTML = `<li><a href="#${topicIDArr[i]}">${tagsOfTopicIDs[i].innerHTML} #</a></li>`;
            submenuThisPage.innerHTML += `<ul>${newChildElem.innerHTML}</ul>`;
            indexListBox.appendChild(newChildElem);
        default:
            break;
    }
}