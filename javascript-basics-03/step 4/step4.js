
var p = document.querySelector("#password");
var c = document.querySelector("#confirmation");
var b = document.querySelector("button");

b.addEventListener("click", () => {
    if(p !==c ){
        p.style.border = "5px solid red";
        c.style.border = "5px solid red";
    }
     else {

        p.style.border = "none";
        c.style.border = "none";
    }
});
