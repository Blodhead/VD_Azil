var users;
var load_lost;
function initialize(){
    //localStorage.removeItem("current_user");

    if(localStorage.getItem("current_user") == null){
        document.getElementById("addnotice").style.display="none";
    }else{
        document.getElementById("addnotice").style.display="inline-block";
        fill_page();
    }

    var val = localStorage.getItem("users");
    if(val != null){users = JSON.parse(val); return;}
    users=[
        {
            username: "Milos",
            password:"123456",
            comments:[]
        },
        {
            username: "Maja",
            password:"123456",
            comments:[]
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
function fill_page(){
  document.getElementById("contis").innerHTML="";

  var load_lost = localStorage.getItem("lost");
  var load = JSON.parse(load_lost);

  document.getElementById("contis").innerHTML+=
  
  "<div class=\"container\">"+

    "<div class=\"row\">"+
        "<div style=\"text-align:right; margin-top:10px\" class=\"col-12 posts\">"+
        "<button type=\"button\" class=\"btn btn-link\" onclick=\"logout()\">Log out</button>"+
        "</div>"+
    "</div>"+

    "<div class=\"row\">"+


        "<div class=\"col-6 posts\">"+
        
            "<div id=\"prostor\" class=\"container\">"+

            "</div>"+
        "</div>"+







        "<div class=\"col-6 comments\">"+
            "<div id=\"komentari\" class=\"container\">"+
            
            "</div>"+
        "</div>"+
    "</div>"+


    "</div>";
    document.getElementById("prostor").innerHTML+="<div class=\"row\"><div class=\"col-12\"><h1 style=\"text-align: center;\">MY POSTS</h1></div></div>";
    for(var i = 0; i < load.length; i++){
        if(load[i].post_owner == localStorage.getItem("current_user")){
    document.getElementById("prostor").innerHTML+=
        "<div class=\"row\" style=\"margin-top:20px\">"+
                    "<div class=\"col-12\">"+
                        "<div id=\"shadow\" class=\"jumbotron oval\">"+
                            "<h1 class=\"display-4\"><img style=\"width:435px\" src="+ load[i].picture +"></h1>"+
                            "<p class=\"lead\">"+ load[i].post_name +"</p>"+
                            "<hr class=\"my-4\">"+
                            "<p>"+ load[i].text +"</p>"+
                            "<p style=\"text-align: center;\" class=\"lead\">"+
                            "<a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">REMOVE</a>"+
                            "</p>"+
                        "</div>"+
                    "</div>"+
                    "</div>";
    }
    }


    document.getElementById("komentari").innerHTML+="<div class=\"row\"><div class=\"col-12\"><h1 style=\"text-align: center;\">MY COMMENTS</h1></div></div>";
    for(var i = 0; i < load.length; i++){
        if(load[i].post_owner == localStorage.getItem("current_user")){
    document.getElementById("komentari").innerHTML+=
        "<div class=\"row\" style=\"margin-top:20px\">"+
                    "<div class=\"col-12\">"+
                        "<div id=\"shadow\" class=\"jumbotron oval\">"+
                            "<h1 class=\"display-4\"><img style=\"width:435px\" src="+ load[i].picture +"></h1>"+
                            "<p class=\"lead\">"+ load[i].post_name +"</p>"+
                            "<hr class=\"my-4\">"+
                            "<p>"+ load[i].text +"</p>"+
                            "<p style=\"text-align: center;\" class=\"lead\">"+
                            "<a class=\"btn btn-primary btn-lg\" href=\"#\" role=\"button\">REMOVE</a>"+
                            "</p>"+
                        "</div>"+
                    "</div>"+
                    "</div>";
    }
    }


}

function logout(){
    localStorage.removeItem("current_user");
    document.location.reload();


}
