var users;
function initialize(){
    //localStorage.clear("current_user");

    if(localStorage.getItem("current_user") == null){
        document.getElementById("addnotice").style.display="none";
    }else{
        document.getElementById("addnotice").style.display="inline-block";
    }

    var val = localStorage.getItem("users");
    if(val != null){users = JSON.parse(val); return;}
    users=[
        {
            username: "Milos",
            password:"123456"
        },
        {
            username: "Maja",
            password:"123456"
        }
    ];
    localStorage.setItem("users",JSON.stringify(users));

}

function checkUser(){

    var name = (document.getElementById("floatingInputUsername")).value;
    var pass = (document.getElementById("floatingPassword")).value;
 
    var name_pass = false;
    var check = -1;
    var pass_pass = false;
    for(var i = 0; i < users.length; i++){
        if(users[i].username == name){name_pass = true; check = i; break;}
    }
    if(name_pass == false){alert("No such user!"); return;}

    if(users[check].password == pass){pass_pass = true;}
    

    if(name_pass && pass_pass){
        localStorage.setItem("current_user", name);
        alert("Welcome "+name+"!");
    }else{
        alert("No such user!");
    }
}