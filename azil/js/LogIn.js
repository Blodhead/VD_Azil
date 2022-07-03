var users;
var load_lost;
function initialize(){
    //localStorage.clear();
    //localStorage.removeItem("current_user");
    //localStorage.removeItem("users");
    //localStorage.removeItem("comments_to_delete");
    if(localStorage.getItem("current_user") == null){
        document.getElementById("addnotice").style.display="none";
    }else{
        document.getElementById("addnotice").style.display="inline-block";
        users = JSON.parse(localStorage.getItem("users"));
        fill_page();
    }

    var val = localStorage.getItem("users");
    if(val != null){users = JSON.parse(val); return;}
    users=[
        {
            username: "Milos",
            password:"123456",
            comments:[],
            comid:[]
        },
        {
            username: "Maja",
            password:"123456",
            comments:[],
            comid:[]
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
        "<p style=\"display:inline\">Hi "+localStorage.getItem("current_user")+"!</p>"+
        "<button type=\"button\" class=\"btn btn-link\" onclick=\"logout()\">Log out</button>"+
        "</div>"+
    "</div>"+

    "<div class=\"row\">"+


        "<div class=\"col-6 posts\">"+
        
            "<div id=\"prostor\" class=\"container\">"+

            "</div>"+
        "</div>"+







        "<div class=\"col-6 comments\">"+
            "<div id=\"komentari\" class=\"container com\">"+
                
                "<div id=\"com"+"\" style=\"max-height: 500px;\" class=\"comment-section\">"+
                "</div>"+

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
                            "<a class=\"btn btn-primary btn-lg\" onclick=\"removePost("+i+")\" role=\"button\">REMOVE</a>"+
                            "</p>"+
                        "</div>"+
                    "</div>"+
                    "</div>";
    }
    }

    var temp = document.getElementById("komentari").innerHTML;
    document.getElementById("komentari").innerHTML="<div class=\"row\"><div class=\"col-12\"><h1 style=\"text-align: center;\">MY COMMENTS</h1></div></div>"+
    "<div style=\"text-align: center; margin-bottom: 15px;\" class=\"row\"><div class=\"col-12\"><a class=\"btn btn-primary btn-lg\" onclick=\"removeComment()\" role=\"button\">REMOVE</a></div></div>";
    document.getElementById("komentari").innerHTML+=temp;

    var tren = localStorage.getItem("current_user");

    var l = 0;
    while(users[l].username != tren){l++;};

    for(var j = 0; j < users[l].comments.length; j++){
        document.getElementById("com").innerHTML+=
        "<div class=\"form-check\">"+
        "<input style=\"margin-top:15px\" class=\"form-check-input\" type=\"radio\" name=\"flexRadioDefault\" id=\"radio"+j+"\">"+

        "</div>"+
        "<div id=\"com_id"+j+ "\" class=\"comment\">"+"\&nbsp"+
        users[l].comments[j]+
        "</div>";
        } 
        localStorage.setItem("users",JSON.stringify(users));

}

function logout(){
    localStorage.removeItem("current_user");
    document.location.reload();


}
function removeComment(){
    var tren = localStorage.getItem("current_user");

    var l = 0;
    var temp = -1;
    while(users[l].username != tren){l++;};
        for(var i = 0; i < users[l].comments.length;i++){
    if(document.getElementById("radio"+i).checked == true){ temp = i; break;}
    }

    if(temp==-1){alert("U must choose a comment to erase!");return;}

    localStorage.setItem("users",JSON.stringify(users));

    var del = localStorage.getItem("comments_to_delete");

    var del_Arr=[];

if(del == null){
    del_Arr.push(users[l].comid[temp]);
    localStorage.setItem("comments_to_delete",JSON.stringify(del_Arr));
}else{
    var iterator = JSON.parse(localStorage.getItem("comments_to_delete"));
    for(var o = 0; o < iterator.length;o++)
    del_Arr.push(iterator[o]);
    del_Arr.push(users[l].comid[temp]);
    localStorage.setItem("comments_to_delete",JSON.stringify(del_Arr));
}
users[l].comments.splice(temp,1);
users[l].comid.splice(temp,1);

localStorage.setItem("users",JSON.stringify(users));

    document.location.reload();
}


function removePost(i){

    var lost = JSON.parse(localStorage.getItem("lost"));

    lost.splice(i,1);
    localStorage.setItem("lost",JSON.stringify(lost));
    document.location.reload();
}
