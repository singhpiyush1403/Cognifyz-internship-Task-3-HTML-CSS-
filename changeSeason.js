let seasonMediumImageElement = document.getElementById("seasonMediumImage");

let springMediumImage = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-spring-md-img.png";

let summerImageM = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-summer-md-img.png";

let autumnImageM = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-autumn-md-img.png";

let winterImageM = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/seasons-switcher-winter-md-img.png";


function spring() {
    seasonMediumImageElement.src = springMediumImage;
}

function summer() {
    seasonMediumImageElement.src = summerImageM;
}

function autumn() {
    seasonMediumImageElement.src = autumnImageM;
}

function winter() {
    seasonMediumImageElement.src = winterImageM;
}