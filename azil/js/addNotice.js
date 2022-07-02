
function collectInfo(){

    var dump=[
        {
            post_name:"",
            text:"",
            number:"",
            picture:"",
            owner:"Branko"
        }
    ]

    dump[0].post_name = document.getElementById("title").value;
    dump[0].number = document.getElementById("phone").value;
    dump[0].picture = document.getElementById("avatar").value;
    dump[0].text = document.getElementById("message").value;

    localStorage.setItem("load_lost",JSON.stringify(dump));
    
    location.href= location.href.replace("Add-Notice", "Lost-pets");
}