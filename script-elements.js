// //////////////////  HEADER AUTOMATIC APPEND

let autoHeader = document.createElement("header");
autoHeader.className = "notes-header";

let submenuThisPageBox;

if (filename != `index.html`) {
    submenuThisPageBox = `
    <!-- li - Topics on this page -->
    <li class="submenu-btn submenu-btn-this-page">
        <a>
            This Page
            <!-- Expand Arrow -->
            <span class="expand-nav show-submenu">
                ${iconExpand}
            </span>
        </a>
    <!-- SUBMENU - Topics on this page list -->
    <ul class="submenu submenu-this-page show-submenu">
    </ul>
    </li>`
} else {
    submenuThisPageBox = ``
}

autoHeader.innerHTML = `<!-- HEADER BREADCRUMB -->
<section class="header-breadcrumb-wrapper">
    <ul class="header-breadcrumb">
        <!-- LOGO -->
        <li class="logo">
            <a href="${HomeSiteUrl}">🙂</a>
        </li>
        <!-- Breadcrumb pages sequence --> 
        <li>
            <span class="header-breadcrumb-slash">
                ${iconSlash}
            </span>
            <a href="#">${topicBreadCrumb}</a>
        </li>
    </ul>
</section>
<!-- MENU BTN -->
${BtnMenu}
<!-- HEADER NAVIGATION -->
<nav class="header-nav-wrapper">
    <!-- MAIN MENU -->
    <ul class="header-nav">
            ${submenuThisPageBox}
        <!-- li - Subjects available on website -->
        <li class="submenu-btn submenu-btn-subject">
            <a>
                Subjects
                <!-- Expand Arrow -->
                <span class="expand-nav show-submenu">
                    ${iconExpand}
                </span>
            </a>
            <!-- Submenu - Subjects available on this page -->
            <ul class="submenu submenu-subjects">
                <li>
                    <a href="#">Microprocessors</a>
                </li>
                <li>
                    <a href="#">Data Communication</a>
                </li>
                <li>
                    <a href="#">Software Enggineering</a>
                </li>
            </ul>
        </li>
        <!-- ABOUT Page Link -->
        <li>
            <a href="#">About</a>
        </li>
    </ul>
</nav>
<!-- MENU ENDS -->`;

document.body.insertBefore(autoHeader, document.body.firstChild);


// /////////////////////// INDEX AND MENU AUTOMATED LINKS APPEND

// this is the ul of the submenu
let submenuThisPage = document.querySelector(".submenu-this-page");
let indexListBox = document.querySelector(".index-list-box");

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

if (topicIDArr.length > 0) {
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

    let menuIndexNotify = document.createElement("p");
    menuIndexNotify.className = "course-intro-para";
    menuIndexNotify.innerHTML = `This index is also available on the menu. ${iconMenu}`;

    menuIndexNotify.style.fontWeight = "600";

    indexListBox.insertBefore(menuIndexNotify, indexListBox.firstChild);
}


// FOOTER AUTOMATED APPEND

let autoFooter = document.createElement("footer");
autoFooter.className = "notes-footer";
autoFooter.id = "notes-footer";

autoFooter.innerHTML = `${footerAttr}
${footerContr}
${footerOther} 
`;

document.body.insertBefore(autoFooter, document.body.lastChild.nextSibling);