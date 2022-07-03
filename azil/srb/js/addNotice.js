
function collectInfo(){

    var dump=[
        {
            post_name:"",
            text:"",
            number:"",
            picture:"",
            owner:""
        }
    ]

    dump[0].post_name = document.getElementById("title").value;
    dump[0].number = document.getElementById("phone").value;
    dump[0].picture = document.getElementById("avatar").files[0].name;;
    dump[0].text = document.getElementById("message").value;
    dump[0].owner = localStorage.getItem("current_user");

    localStorage.setItem("load_lost",JSON.stringify(dump));
    
    alert("Notice added!");

    location.href= location.href.replace("Add-Notice", "Lost-pets");
}