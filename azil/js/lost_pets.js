
var lost_animals;
function initialize(){
  if(localStorage.getItem("current_user") == null){
    document.getElementById("addnotice").style.display="none";
}else{
    document.getElementById("addnotice").style.display="inline-block";
}
    let animal = localStorage.getItem("lost");
    if(animal != null){
        lost_animals = JSON.parse(animal);
    }else{
      /* Ovde dodavati podatke */
        lost_animals = [
          {
            post_name: "Dzaja",
            text: "If you find a domestic cat in New Belgrade. He responds to name Dzaja. There is a reward!",
            number:"0613978897",
            picture:"../images/lost/Dzaja.jpg",
            comments: ["500g","dewdwfq","pwnimrp","Last i saw her was hee and there"],
            post_owner:"Milos"
          },
          {
            post_name: "Jura",
            text: "A bichon Jura, she has 7 months, last seen at Palilula. Please call if you have any info.",
            number:"0646032298",
            picture:"../images/lost/Jura.jpg",
            comments: ["500g","dewdwfq",",[pp[,[pp"],
            post_owner:"Maja"
          },
          {
            post_name: "Nuli",
            text: "Please call on 0613978897 if you find french buldog in Cerak. His name is Max. Reward!",
            number:"0613978897",
            picture:"../images/lost/Koki.jpg",
            comments: ["500g","dewdwfq"],
            post_owner:"Milos"
          },          {
            post_name: "Julie",
            text: "If you find french buldog in Cerak. His name is Max. There is a reward!",
            number:"0613978897",
            picture:"../images/lost/Mica.PNG",
            comments: ["500g","dewdwfq","pwnimrp","Last i saw her was hee and there"],
            post_owner:"Maja"
          },
          {
            post_name: "Buli",
            text: "A bichon Lora, she has 7 months, last seen at Palilula. Please call if you have any info.",
            number:"0646032298",
            picture:"../images/lost/Piksi.jpg",
            comments: ["500g","dewdwfq",",[pp[,[pp"],
            post_owner:"Milos"
          },
          

        
        ];

    }
    var load = localStorage.getItem("load_lost");
    if(load!=null){
      var load_lost = localStorage.getItem("load_lost");
      var load = JSON.parse(load_lost);

      var temp=[{
        post_name: "",
        text: "",
        number:"",
        picture:"",
        comments: [],
        post_owner:""
      }];

      temp[0].post_name= load[0].post_name;
      temp[0].text= load[0].text;
      temp[0].number=load[0].number;
      temp[0].picture="../images/lost/"+load[0].picture;
      temp[0].comments = [];
      temp[0].post_owner=load[0].owner;

      lost_animals.push(temp[0]);
      localStorage.removeItem("load_lost");
    } 

    var del = JSON.parse(localStorage.getItem("comments_to_delete"));
    if(del != null){
      for(var j = 0; j < del.length; j++){
        var com = del[j].charAt(del[j].length-1);
        var post = del[j].charAt(del[j].length-2);
        if(lost_animals[Number(post)] != null)
        lost_animals[Number(post)].comments[Number(com)-1] = null;
      }
      for(var f = 0; f < lost_animals.length; f++)
        for(var cnt = (lost_animals[f].comments.length-1); cnt >= 0; cnt-- ){
          if(lost_animals[f].comments[cnt] == null) lost_animals[f].comments.splice(cnt,1);
        }

      localStorage.removeItem("comments_to_delete");
    }

    localStorage.setItem("lost",JSON.stringify(lost_animals));
    fill_html();


}

function fill_html(){

    for(var i = 0; i < lost_animals.length; i++){

        document.getElementById("context").innerHTML += 
       "<div id="+i+" class=\"u-align-left-xs u-blog-post u-container-style u-repeater-item\">"+


       "<div class=\"flip-card-3D-wrapper\">"+
         "<div id=\"flip-card"+i+"\" class=\"flip-card\">"+
           "<div id=\"front"+i+"\" class=\"flip-card-front shadow-1 oval\">"+
              
             "<p><div class=\"u-align-left-xs u-blog-post u-container-style u-repeater-item oval u-white\">"+
             "<div class=\"u-container-layout u-similar-container u-valign-bottom-lg u-valign-top-xl u-container-layout-3\">"+
                
                 "<img class=\"u-blog-control u-expanded-width-sm u-expanded-width-xs u-image u-image-default u-image-3 shadow-1 enlarge\" src=\""+ lost_animals[i].picture +"\">"+
                
               "<h4 class=\"u-align-left-lg u-align-left-md u-align-left-sm u-blog-control u-text u-text-5\">"+
                 lost_animals[i].post_name+
               "</h4>"+
               "<div class=\"u-blog-control u-metadata u-text-grey-40 u-metadata-3\">"+
                 "<span class=\"u-meta-date u-meta-icon\">Thu Jun 23 2022</span>"+
                 "<span class=\"u-meta-comments u-meta-icon\">Call: "+lost_animals[i].number+"</span>"+
               "</div>"+
               "<div class=\"u-align-left-lg u-align-left-md u-align-left-sm u-blog-control u-post-content u-text u-text-6\">"+ lost_animals[i].text +"</div>"+
               "<table id=\"table\"> <tr><td>"+
               "<button id=\"flip-card-btn-turn-to-back"+i+"\" class=\"flip-card-btn-turn-to-back u-blog-control u-btn u-button-style\">Comment</button>"+
               "</td><td>"+
               "<button id=\"flip-card-btn-turn-to-back"+i+"\" class=\"u-blog-control u-btn u-button-style\" onclick=\"toPDF("+i+")\">to PDF</button>"+
              "</td></tr></table>"+
            "</div>"+
           "</div>"+
             "</p></div>"+
           "<div id=\"back\" class=\"flip-card-back shadow-1 oval\"><p>"+
              

             "<div class=\"card-footer py-3 border-0 oval\" style=\"background-color: #f8f9fa;\">"+
               "<div class=\"d-flex flex-start w-100\">"+
                 "<div class=\"form-outline w-100\">"+

                   "<div class=\"com\">"+
                     "<div id=\"com"+i+"\"class=\"comment-section\">"+
                     "</div>"+
                   "</div>"+

                   "<textarea class=\"form-control\" placeholder=\"Leave a comment...\" id=\"textAreaExample"+i+"\" style=\"  height: 65px; width: 500px;\" rows=\"4\" style=\"background: #fff;\"></textarea>"+
                 "</div>"+
               "</div>"+
               "<div class=\"float-end mt-2 pt-1\">"+
                 "<button id=\"c"+i+"\" type=\"button\" class=\"btn btn-primary btn-sm\" onclick=\"post_comment(this)\">Post</button>"+
                 "<button id=\"flip-card-btn-turn-to-front"+i+"\" class=\"flip-card-btn-turn-to-front\" style=\"background-color: gray;\">Cancel</button>"+
               "</div>"+
             "</div>"+



           "</p></div>"+
         "</div>"+
         "</div>"+
        

     "</div>";

     for(var j = 0; j < lost_animals[i].comments.length; j++){
        document.getElementById("com"+i).innerHTML+=
        "<div id=\"com_id"+i+""+j+ "\" class=\"comment\">"+
           lost_animals[i].comments[j]+
        "</div>";
        } 
     
        if(i%2 || (i+1)==lost_animals.length)
        document.getElementById("context").innerHTML +=
        "<div style=\"margin-top:150px\">&nbsp</div>"+
        "<div style=\"margin-top:150px\">&nbsp</div>";

    }

    for(var i = 0; i < lost_animals.length; i++){
        document.getElementById("flip-card-btn-turn-to-back"+i).style.visibility = 'visible';
        document.getElementById("flip-card-btn-turn-to-front"+i).style.visibility = 'visible';

        document.getElementById("flip-card-btn-turn-to-back"+i).onclick = function(i) {
            var curr_elem = ((i.currentTarget).id).slice(-1);
        document.getElementById("flip-card"+curr_elem).classList.toggle("do-flip");
        };

        document.getElementById("flip-card-btn-turn-to-front"+i).onclick = function(i) {
            var curr_elem = ((i.currentTarget).id).slice(-1);
        document.getElementById("flip-card"+curr_elem).classList.toggle("do-flip");

        };
    }

}

function post_comment(obj){
  if(localStorage.getItem("current_user") == null){
    alert("You must be logged so that you can comment!");
    return;
}
var i = obj.id.slice(-1);

document.getElementById("com"+i).innerHTML+=
"<div id=\"com_id"+i+""+lost_animals[i].comments.length+ "\" class=\"comment\">"+
   document.getElementById("textAreaExample"+i).value+
"</div>";
lost_animals[i].comments.push(document.getElementById("textAreaExample"+i).value);
localStorage.setItem("lost",JSON.stringify(lost_animals));

var kor = JSON.parse(localStorage.getItem("users"));
var tren = localStorage.getItem("current_user");
var l = 0;

while(kor[l].username != tren){l++;};

kor[l].comments.push(document.getElementById("textAreaExample"+i).value);
kor[l].comid.push(i+""+lost_animals[i].comments.length);
localStorage.setItem("users",JSON.stringify(kor));
}


function toPDF(i){
  var doc = new jsPDF();

  doc.text(30, 10, lost_animals[i].picture);
  doc.text(20, 30, ("Name: " + lost_animals[i].post_name));
  doc.text(20, 40, ("Call: " + lost_animals[i].number));
  doc.text(20, 50, lost_animals[i].text);
  
  // Add new page
  doc.addPage();
  
  // Save the PDF
  doc.save('document.pdf');
}
