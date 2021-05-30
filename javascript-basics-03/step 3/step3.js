var g = document.querySelector(".green");
var r = document.querySelector(".red");
var b = document.querySelector(".blue");
var t = document.querySelector("#text")


    g.addEventListener("click", () => {
        t.style.color = "green";
    });

    r.addEventListener("click", () => {
        t.style.color = "red";
    });

    b.addEventListener("click", () => {
        t.style.color = "blue";
    });

