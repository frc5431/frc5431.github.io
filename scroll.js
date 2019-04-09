window.addEventListener("scroll", scrollListener);
window.addEventListener("resize", homeBannerSize);

var navBar = document.getElementById("nav-container");
var navBarChildren = navBar.children;
var Logo5431 = document.getElementById("nav-bar-logo");
var homeBannerHeight = document.getElementById("home-banner").offsetHeight - 64;

scrollListener();

function scrollListener() {
    var scrollY = window.scrollY;

    if (scrollY < homeBannerHeight) {
        navBar.style.backgroundColor = "transparent";
        navBar.style.borderBottomColor = "transparent"
        Logo5431.style.filter = "invert(0)";
        for (i = 0; i < navBarChildren.length; i++) {
            navBarChildren[i].style.color = "white";
        }
    }
    else {
        navBar.style.backgroundColor = "white";
        navBar.style.borderBottomColor = "#dddddd";
        Logo5431.style.filter = "invert(100%)";
        for (i = 0; i < navBarChildren.length; i++) {
            navBarChildren[i].style.color = "black";
        }
    }
}

function homeBannerSize() {
    homeBannerHeight = document.getElementById("home-banner").offsetHeight - 64;
    scrollListener();
}
