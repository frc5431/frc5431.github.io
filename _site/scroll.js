/*(function(){
    
    var leftButton = document.getElementById("carosuel-left");
    var rightButton = document.getElementById("carosuel-right");
    
    leftButton.addEventListener("click", left);
    rightButton.addEventListener("click", right);
    
    var carosuel = document.getElementById("carosuel");
    var imgs = carosuel.getElementsByClassName("carosuel-img");
    var scroll = -50;
    
    function left() {
        scroll -= 100;
        for(var i = 0; i < imgs.length; i++) {
            imgs[i].style.transform = "translateX(" + scroll + "%)";
        }
    }
    
    function right() {
        scroll += 100;
        for(var i = 0; i < imgs.length; i++) {
            imgs[i].style.transform = "translateX(" + scroll + "%)";
        }
    }
    
    imgs[1] = dumb;
    
}());*/

var navBar = document.getElementById("nav-bar");
var navBarChildren = navBar.children;
var Logo5431 = document.getElementById("5431-logo");
var homeCoverHeight = document.getElementById("home-cover").offsetHeight - 64;

function scrollListener() {
    var scrollY = window.scrollY;
    
    if (scrollY < homeCoverHeight) {
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

function homeCoverSize() {
    homeCoverHeight = document.getElementById("home-cover").offsetHeight - 64;
    scrollListener();
}

//window.onscroll = function(){scrollListener()};
//window.onresize = function(){homeCoverSize()};

window.addEventListener("scroll", scrollListener);
window.addEventListener("resize", homeCoverSize);