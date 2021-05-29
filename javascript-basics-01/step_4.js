function same(){
    var n = document.getElementById('name').value;
    var s = document.getElementById('surname').value;
    var c = document.getElementById('city').value;

    if (n=="" || s=="" || c==""){
        alert("Something missing!");
    }

    else {
        alert("Name: "+n +"\n"+ "Surname: "+ s+"\n"+"City: "+c );
    }
}