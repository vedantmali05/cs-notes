// VARIABLES USED IN ALL JAVASCRIPT FILES

let filename = window.location.pathname.split("/").pop();
let topicBreadCrumb = document.title;
let HomeSiteUrl = "index.html";
let myEmail = "vedantmali05@gmail.com";
let iconSlash = `<i class="bi bi-slash-lg"></i>`;
let iconMenu = `<i class="bi bi-grid"></i>`;
let iconLogo = `<svg width="2.5rem" height="2.5rem" viewBox="0 0 2079 2079" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="1039.5" cy="1039.5" r="1039.5" fill="#4E65FF"/>
    <path d="M1608.87 518.5C1612.27 518.5 1613.97 521.9 1613.97 528.7C1613.97 535.5 1612.27 538.9 1608.87 538.9C1568.07 538.9 1528.97 557.033 1491.57 593.3C1454.17 629.567 1424.13 678.3 1401.47 739.5L1086.97 1579.3C1085.83 1583.83 1079.6 1586.1 1068.27 1586.1C1056.93 1586.1 1050.7 1583.83 1049.57 1579.3L616.067 659.6C595.667 618.8 575.267 588.767 554.867 569.5C534.467 549.1 511.801 538.9 486.867 538.9C483.467 538.9 481.767 535.5 481.767 528.7C481.767 521.9 483.467 518.5 486.867 518.5C503.867 518.5 515.767 519.067 522.567 520.2C545.234 522.467 574.701 523.6 610.967 523.6C708.434 523.6 791.167 522.467 859.167 520.2C877.301 519.067 899.967 518.5 927.167 518.5C930.567 518.5 932.267 521.9 932.267 528.7C932.267 535.5 930.567 538.9 927.167 538.9C893.167 538.9 866.534 546.267 847.267 561C829.134 574.6 820.067 594.433 820.067 620.5C820.067 639.767 826.301 663 838.767 690.2L1132.87 1317.5L1353.87 734.4C1365.2 702.667 1370.87 675.467 1370.87 652.8C1370.87 617.667 1360.1 589.9 1338.57 569.5C1318.17 549.1 1288.13 538.9 1248.47 538.9C1245.07 538.9 1243.37 535.5 1243.37 528.7C1243.37 521.9 1245.07 518.5 1248.47 518.5L1331.77 520.2C1379.37 522.467 1421.87 523.6 1459.27 523.6C1480.8 523.6 1507.43 522.467 1539.17 520.2L1608.87 518.5Z" fill="white"/>
    </svg>
    `;
let iconExpand = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z"/></svg>`;
let BtnMenu = `<section class="menu-btn-wrapper">
    <button class="menu-btn">
        ${iconMenu}
    </button>
</section>`;

let footerAttr = `<!-- Author Attribution -->
<section class="author-attr-wrapper">
    <h3>Attribution</h3>
    <p>
        This course is written and illustrated with <span class="heart"><i class="bi bi-heart-fill"></i></span> by <span class="author-name">Vedant Mali</span>. The contents were studied and reviewed before posting. <strong style="font-weight: 600">©</strong> Vedant Mali.
    </p>
</section>`

let footerContr = `
<!-- Contribution Links -->
<section class="footer-contibute">
    <h3>Contribute</h3>
    <!-- Available Contribution Links -->
    <!-- Email Box -->
    <form action="" id="contribution_form">
    </form>
    <p class="author-attr-wrapper">If you find any mistakes or need any editings, please write to
        <a href="mailto:vedantmali05@gmail.com">vedantmali05@gmail.com</a> 🙂</p>
</section>
`

let footerOther = `<!-- Related Contents -->
<section class="related-links-wrapper">
    <h3>Related Links</h3>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="#">About Us</a></li>
    </ul>
</section>`