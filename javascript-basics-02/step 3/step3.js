function targ(){

    document.querySelector("form>div").style.border="10px solid pink";
    

}
document.getElementById("name").onblur= function() {change()};



function change(){
    alert("Welcome!");
}