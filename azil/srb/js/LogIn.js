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
    if(name_pass == false){alert("Непостоји корисник!"); return;}

    if(users[check].password == pass){pass_pass = true;}
    

    if(name_pass && pass_pass){
        localStorage.setItem("current_user", name);
        alert("Добродошли "+name+"!");
    }else{
        alert("Непостоји корисник!");
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
        "<p style=\"display:inline\">Ћао "+localStorage.getItem("current_user")+"!</p>"+
        "<button type=\"button\" class=\"btn btn-link\" onclick=\"logout()\">Излогуј се</button>"+
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
    document.getElementById("prostor").innerHTML+="<div class=\"row\"><div class=\"col-12\"><h1 style=\"text-align: center;\">Моје објаве</h1></div></div>";
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
                            "<a class=\"btn btn-primary btn-lg\" onclick=\"removePost("+i+")\" role=\"button\">УКЛОНИ</a>"+
                            "</p>"+
                        "</div>"+
                    "</div>"+
                    "</div>";
    }
    }

    var temp = document.getElementById("komentari").innerHTML;
    document.getElementById("komentari").innerHTML="<div class=\"row\"><div class=\"col-12\"><h1 style=\"text-align: center;\">Моји коментари</h1></div></div>"+
    "<div style=\"text-align: center; margin-bottom: 15px;\" class=\"row\"><div class=\"col-12\"><a class=\"btn btn-primary btn-lg\" onclick=\"removeComment()\" role=\"button\">УКЛОНИ</a></div></div>";
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

    var del = JSON.parse(localStorage.getItem("comments_to_delete"));

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

users[l].comid.splice(temp,1);

var del_comment = JSON.parse(localStorage.getItem("lost"));
for(var i = 0; i < del_comment.length; i++)
for(var x = (del_comment[i].comments.length-1); x >= 0; x--){

    if(users[l].comments != null)
        
        if(del_comment[i].comments[x] == users[l].comments[temp]) {
            del_comment[i].comments.splice(x, 1);
            break;
        }
        

}
users[l].comments.splice(temp, 1);
localStorage.setItem("lost",JSON.stringify(del_comment));
localStorage.setItem("users",JSON.stringify(users));

    document.location.reload();
}


function removePost(i){

    var lost = JSON.parse(localStorage.getItem("lost"));
    var del = JSON.parse(localStorage.getItem("comments_to_delete"));

    var kor = JSON.parse(localStorage.getItem("users"));
    var tren = localStorage.getItem("current_user");
    var l = 0;

while(kor[l].username != tren){l++;};

    for(var x = lost[i].comments.length-1; x >= 0; x--){
        if(del != null)
            for(var y = del.length; y >= 0; y--){

                if(lost[i].comments[x] == del[y]) del.splice(y,1);

            }
            for(var u = 0; u < users.length;u++)
        if(users[u].comments != null)
            for(var y = users[u].comments.length-1; y >= 0; y--){
                if(lost[i].comments[x] == users[u].comments[y]) users[u].comments.splice(y,1);
            }

    }
    localStorage.setItem("comments_to_delete",JSON.stringify(del));
    localStorage.setItem("users",JSON.stringify(users));
    lost.splice(i,1);
    localStorage.setItem("lost",JSON.stringify(lost));
    document.location.reload();
}
