var s = document.querySelector("#show");
var h = document.querySelector("#hide");
var t = document.querySelector("#texte");


function hs(){
    s.addEventListener("click", () => {
        t.style.display = "block";
    });

    h.addEventListener("click", () => {
        t.style.display = "none";
    });

}
hs();