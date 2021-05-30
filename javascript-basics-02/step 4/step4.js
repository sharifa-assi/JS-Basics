
let n = document.querySelector("#name");
let s = document.querySelector("#surname");
let c = document.querySelector("#city");
let b = document.querySelector("button");

b.addEventListener("click", () => {
    if(confirm("Are You Sure you want to delete everthing?")){
        n.value = " ";
        s.value = " ";
        c.value = " ";
    }
})
