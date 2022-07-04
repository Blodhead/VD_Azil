
var dogs_array;

function initialize(){
  localStorage.removeItem("dogs");
  if(localStorage.getItem("current_user") == null){
    document.getElementById("addnotice").style.display="none";
}else{
    document.getElementById("addnotice").style.display="inline-block";
}
    localStorage.removeItem("dogs"); //delete before presentation
    let dogs = localStorage.getItem("dogs");
    if(dogs != null){
        dogs_array = JSON.parse(dogs);
    }else{
        dogs_array = [
            {
                name: "Реа",
                age: "3",
                weight: "2kg",
                breed: " Staffordshire Bull Terrier",
                images:["../images/dogs/Rea1.jpg","../images/dogs/Rea2.jpg","../images/dogs/Rea3.jpg","../images/dogs/Rea4.jpg","../images/dogs/Rea6.jpg"],
                videos:[],
                description: "Реа је љупка девојка, слатка је и љубазна са онима које познаје и брзо ће постати умиљата другарица у свом новом дому. Биће јој потребан неко у близини већи део дана док се смести. Она ужива у играма са тениском лоптицом и веома је слатка да носи своје мекане играчке у кревет."
                ,displayed:true  
              },
            {
                name: "Бони",
                age: "14",
                weight: "19kg",
                breed: "Samoyed",
                images:["../images/dogs/Bonnie1.jpg","../images/dogs/Bonnie2.jpg","../images/dogs/Bonnie3.jpg","../images/dogs/Bonnie4.jpg"],
                videos:["../images/dogs/boni.mp4"],
                description: "Бони је слатка и разиграна бака, па ће јој требати миран дом са власницима који имају искуство са њеном расом. Ко год да преузме Бони мора бити спреман да настави да ужива у животу. Веома је интелигентна, воли да учи нове трикове и ВОЛИ да се мази!"
                ,displayed:true  
              },
            {
                name: "Ари",
                age: "1",
                weight: "2kg",
                breed: "French Buldog",
                images:["../images/dogs/Ari2.jpg","../images/dogs/Ari1.jpg","../images/dogs/Ari3.jpg"],
                videos:[],
                description: "Ари је веома љубазан и привржен. Он воли мажење и трљање стомака и најслађе хрче! Ужива у шетњама и веома је добар у кући. Његова једина слабост је што не воли друге псе. Овим се лако управља када се правилно приступи. "
              , displayed:true  
              },
            {
              name: "Бен",
              age: "1",
              weight: "2kg",
              breed: "Beagle",
              images:["../images/dogs/Ben1.jpg","../images/dogs/Ben2.jpg","../images/dogs/Ben3.jpg","../images/dogs/Ben4.jpg","../images/dogs/Ben5.jpg"],
              videos:[],
              description: "Бен је штене Бигл стар око годину дана. Веома је сладак и дружељубив. Мораћете да имате своју велику, потпуно затворену башту како би он могао брзо да трчкара. Бен је посебан јер је тако дружељубив дечак који воли пажњу и једва чека да оде у свој нови дом заувек."
              ,displayed:true  
            },
          {
              name: "Дени",
              age: "3",
              weight: "5kg",
              breed: "Chau Chau",
              images:["../images/dogs/Ajaks1.jpg","../images/dogs/Ajaks3.jpg","../images/dogs/Ajaks4.jpg","../images/dogs/Ajaks2.jpg"],
              videos:[],
              description: "Дени је сладак дечак који има 3 године. Он је пас који има срећну личност и воли истраживање. Он зна неколико команди и може се оставити на неко време. Веома је дружељубив са људима и добро се слаже са другим псима."
              ,displayed:true  
            },
          {
              name: "Лина",
              age: "2",
              weight: "1kg",
              breed: "Bichon",
              images:["../images/dogs/Lora3.jpg","../images/dogs/Lora1.jpg","../images/dogs/Lora2.jpg","../images/dogs/Lora5.jpg","../images/dogs/Lora4.jpg"],
              videos:[],
              description: "Лина је слатка једногодишња Бишон која тражи нови дом. Она је сладак пас који уме да буде опрезан према новим људима, али се брзо сврати, посебно ако јој се спрема неколико посластица. Она је разиграна и воли своје играчке. Она добро путује аутомобилом и уживаће да се придружи својој новој породици у забавним данима. "
              ,displayed:true  
            }
        
        
        ];
        localStorage.setItem("dogs",JSON.stringify(dogs_array));
    }

    fill_html();

}

function fill_html(){


  for(var i = 0; i < dogs_array.length; i++){

      

  document.getElementById("context").innerHTML =  document.getElementById("context").innerHTML +""+
"<section class=\"u-section-1 u-post\" id = \""+i+"\">"+
  "<div class=\"u-clearfix u-sheet u-valign-middle u-sheet-1\">"+
    "<div class=\"u-clearfix u-expanded-width u-gutter-18 u-layout-wrap u-layout-wrap-1\" id=\"d_"+i+"\">"+
      "<div class=\"u-layout oval shadow\">"+
        "<div class=\"u-layout-row\">"+
          "<div class=\"u-size-37\">"+
            "<div class=\"u-layout-col\">"+
              "<div class=\"u-size-60\">"+
                "<div class=\"u-layout-row\">"+
                  "<div class=\"u-size-30\">"+
                    "<div class=\"u-layout-col\">"+
                      "<div class=\"u-align-left u-container-style u-layout-cell u-shape-rectangle u-size-60 u-layout-cell-1\">"+
                        "<div class=\"u-container-layout u-container-layout-1\">"+
                          "<h6 class=\"u-text u-text-default u-text-1\">"+ dogs_array[i].name +"</h6><hr>"+
                       
                          "<div>"+

                          "<table>"+

                            "<tr>"+
                              "<td><h6>Године: </h6></td>"+
                              "<td>"+ dogs_array[i].age +"</td>"+
                            "</tr>"+
                            "<tr>"+
                              "<td><h6>Тежина: </h6></td>"+
                              "<td>"+dogs_array[i].weight+"</td>"+
                            "</tr>"+
                            "<tr>"+
                              "<td><h6>Раса: </h6></td>"+
                              "<td>"+dogs_array[i].breed+"</td>"+

                            "</tr>"+



                          "</table>"+


                        "</div>"+
                       
                       
                          "</div>"+
                      "</div>"+
                    "</div>"+
                  "</div>"+
                  "<div class=\"u-size-30\">"+
                    "<div class=\"u-layout-col\">"+
                      "<div class=\"u-align-left u-container-style u-layout-cell u-size-60 u-layout-cell-2\">"+
                        "<div class=\"u-container-layout u-valign-top u-container-layout-2\">"+
                          "<h6 class=\"u-text u-text-default u-text-3\">Опис</h6>"+
                          "<p class=\"u-text u-text-grey-40 u-text-4\">"+ dogs_array[i].description +"</p>"+
                        "</div>"+
                      "</div>"+
                    "</div>"+
                  "</div>"+
                "</div>"+
              "</div>"+
            "</div>"+
          "</div>"+
          "<div class=\"u-size-23\">"+
            "<div class=\"u-layout-col\">"+
              "<div class=\"u-size-60\">"+
                "<div class=\"u-layout-row\">"+
                  "<div class=\"u-align-left u-container-style u-layout-cell u-size-60 u-layout-cell-3\">"+
                    "<div class=\"u-container-layout u-container-layout-3\">"+
                      "<div class=\"u-image  shadow u-image-circle u-preserve-proportions u-image-1 hover-shadow\" style=\"background-image: url(" + dogs_array[i].images[0] +");\" data-image-width=\"900\" data-image-height=\"900\" onclick=\"clickedDog(this);openModal();currentSlide("+ (i+1) +")\" id=\"dog_"+(i+1)+"\"></div>"+
                    "</div>"+
                  "</div>"+
                "</div>"+
              "</div>"+
            "</div>"+
          "</div>"+
        "</div>"+
      "</div>"+
    "</div>"+
  "</div>"+
"</section>"+

"<div id=\"myModal"+ (i+1) +"\" class=\"modal\">"+
  "<span class=\"close cursor\" onclick=\"closeModal()\">&times;</span>"+
  "<div class=\"modal-content\" id=\"modal-content"+i+"\">";


    for(var j = 0; j < dogs_array[i].images.length; j++){

      document.getElementById("modal-content"+i).innerHTML +=
      "<div class=\"mySlides dog_"+ (i+1) + "\">"+
        "<div class=\"numbertext\">"+(j+1)+ "/"+ dogs_array[i].images.length + "</div>"+
        "<img src="+ dogs_array[i].images[j] +" style=\"width:100%\">"+
      "</div>";

    }



    if(dogs_array[i].videos.length > 0)
    for(var j = 0; j < dogs_array[i].videos.length; j++){
      document.getElementById("modal-content"+i).innerHTML +=
      "<div class=\"mySlides dog_"+ (i+1) + "\">"+
        "<div class=\"numbertext\">"+(j+1)+ "/"+ dogs_array[i].videos.length + "</div>"+
        "<video width=\"100%\" height=\"100%\" controls>"+
        "<source src=\""+dogs_array[i].videos[j]+"\" type=\"video/mp4\">"+
        "</video>"+
      "</div>";

    }

    document.getElementById("modal-content"+i).innerHTML +=
    "<a class=\"prev\" onclick=\"plusSlides(-1)\">&#10094;</a>"+
    "<a class=\"next\" onclick=\"plusSlides(1)\">&#10095;</a>"+
    "<div class=\"caption-container\">"+
    "<p id=\"caption\"></p>"+
    "</div>";

    for(var j = 0; j < dogs_array[i].images.length; j++){

      document.getElementById("modal-content"+i).innerHTML +=
    "<div class=\"column\">"+
      "<img class=\"demo demo_dog_"+(i+1)+"\" src="+ dogs_array[i].images[j] +" onclick=\"currentSlide("+ (j+1) +")\" alt=\"Nature\">"+
    "</div>";

    }

    document.getElementById("context").innerHTML += "</div></div>";

  }


  document.getElementById("context").innerHTML +="<div style=\"margin-top:120px\">&nbsp</div>"
}

function openModal() {
document.getElementById("myModal"+doggo).style.display = "block";

}
var doggo;

function clickedDog(dog_id){
doggo = dog_id.id.charAt(dog_id.id.length-1);
}

// Close the Modal
function closeModal() {
document.getElementById("myModal"+doggo).style.display = "none";
}

var slideIndex = 1;

function plusSlides(n) {
showSlides(slideIndex += n);
}

function currentSlide(n) {
showSlides(slideIndex = n);
}

function showSlides(n) {
var i;
var slides = document.getElementsByClassName("dog_" + doggo);
var dots = document.getElementsByClassName("demo_dog_" + doggo);

if (n > slides.length) {slideIndex = 1}
if (n < 1) {slideIndex = slides.length}

for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += " active";


}

function sortByAge(){


for(var i = 0; i < dogs_array.length; i++){
  for(var j = i; j < dogs_array.length; j++){
    if(dogs_array[i].displayed == true && dogs_array[j].displayed)
    if(parseInt(dogs_array[i].age) < parseInt(dogs_array[j].age)){

      var temp = document.createElement("div");
      temp = document.getElementById(""+j).innerHTML;

      var tempp = dogs_array[j];

      document.getElementById(""+j).innerHTML = document.getElementById(""+i).innerHTML;
      dogs_array[j] =  dogs_array[i];


      document.getElementById(""+i).innerHTML = temp;
      dogs_array[i] =  tempp;


    }

  }

}

}

function noSort(){
location.reload();
}

function sortByName(){



for(var i = 0; i < dogs_array.length; i++){
  for(var j = i; j < dogs_array.length; j++){
    if(dogs_array[i].displayed == true && dogs_array[j].displayed)
    if(dogs_array[i].name > dogs_array[j].name){

      var temp = document.createElement("div");
      temp = document.getElementById(""+j).innerHTML;

      var tempp = dogs_array[j];

      document.getElementById(""+j).innerHTML = document.getElementById(""+i).innerHTML;
      dogs_array[j] =  dogs_array[i];


      document.getElementById(""+i).innerHTML = temp;
      dogs_array[i] =  tempp;


    }

  }

}

}

function sortByAgeUP(){


for(var i = 0; i < dogs_array.length; i++){
  for(var j = i; j < dogs_array.length; j++){
  
    if(dogs_array[i].displayed == true && dogs_array[j].displayed)
    if(parseInt(dogs_array[i].age) > parseInt(dogs_array[j].age)){

      var temp = document.createElement("div");
      temp = document.getElementById(""+i).innerHTML;

      var tempp = dogs_array[i];

      document.getElementById(""+i).innerHTML = document.getElementById(""+j).innerHTML;
      dogs_array[i] =  dogs_array[j];


      document.getElementById(""+j).innerHTML = temp;
      dogs_array[j] =  tempp;


    }

  }

}

}

function sortByNameUP(){

for(var i = 0; i < dogs_array.length; i++){
  for(var j = i; j < dogs_array.length; j++){
    if(dogs_array[i].displayed == true && dogs_array[j].displayed)
    if(dogs_array[i].name < dogs_array[j].name){

      var temp = document.createElement("div");
      temp = document.getElementById(""+j).innerHTML;

      var tempp = dogs_array[j];

      document.getElementById(""+j).innerHTML = document.getElementById(""+i).innerHTML;
      dogs_array[j] =  dogs_array[i];


      document.getElementById(""+i).innerHTML = temp;
      dogs_array[i] =  tempp;


    }

  }

}

}

function myFunction() {

input = document.getElementById('myInput');

if(input.value == ""){
  for(var i = 0; i < dogs_array.length; i++)

  {document.getElementById(i).style.display="block";
  dogs_array[i].displayed = true;}
  return;
}

if(!isNaN(input.value)){

  for(var i = 0; i < dogs_array.length; i++){
  
    if(dogs_array[i].age == input.value){
      document.getElementById(i).style.display="block";
      dogs_array[i].displayed = true;
    }else{
      document.getElementById(i).style.display="none";
      dogs_array[i].displayed = false;
    }
  
  }

}
else
for(var i = 0; i < dogs_array.length; i++){
  
  if((String(dogs_array[i].name).toUpperCase()).startsWith(input.value.toUpperCase())){
    document.getElementById(i).style.display="block";
    dogs_array[i].displayed = true;
  }else{
    document.getElementById(i).style.display="none";
    dogs_array[i].displayed = false;
  }

}

}
