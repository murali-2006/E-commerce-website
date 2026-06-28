var sidenav = document.querySelector(".sidenavbar-links")
function show() {
    sidenav.style.left = "0";

}
function hide() {
    sidenav.style.left = "-60%";

}
var productcontainer = document.querySelector(".products")
var search = document.querySelector(".search")
var productlist = productcontainer.querySelectorAll("div")
search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()
    for (i = 0; i < productlist.length; i++) {
        var productname = productlist[i].querySelector("p").textContent
        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[i].style.display = "none"
        }
        else {
            productlist[i].style.display = "block"
        }
    }
})