function hamburger(){
    var x = document.getElementById("nav-list");
    var y = document.getElementById("bars");
    var z = document.getElementById("ex");
    if (window.innerWidth <= 650) {
        if (x.style.display === "flex") {
            x.style.display = "none";
            y.style.display = "initial";
            z.style.display = "none";
        }
        else {
            x.style.display = "flex";
            y.style.display = "none";
            z.style.display = "initial";
        }
    }
}
