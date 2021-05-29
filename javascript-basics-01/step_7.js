function calc(){
var s = document.getElementById('shoe_size').value;
var y = document.getElementById('year').value;

var r1 = (((s*2)+5)*50);
var r2 = (r1 - y)+1766;

alert("The result is : " + r2);


}