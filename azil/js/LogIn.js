function checkUser(){

    var name = (document.getElementById("floatingInputUsername")).value;
    var pass = (document.getElementById("floatingPassword")).value;

    if(localStorage.getItem(""+name) == null) {
        alert("No such user!"); 
        return;
    }else if(localStorage.getItem(""+name) != pass){
        alert("Wrong password for selected user!");
        return;
    }
    localStorage.setItem("current_user", name);
    alert("Welcome "+name+"!");

}