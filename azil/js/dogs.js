
var dogs_array;

function initialize(){
  if(localStorage.getItem("current_user") == null){
    document.getElementById("addnotice").style.display="none";
}else{
    document.getElementById("addnotice").style.display="inline-block";
}
  //localStorage.removeItem("dogs"); //delete before presentation
    let dogs = localStorage.getItem("dogs");
    if(dogs != null){
        dogs_array = JSON.parse(dogs);
    }else{
        dogs_array = [
            {
                name: "Rea",
                age: "3",
                weight: "2kg",
                breed: " Staffordshire Bull Terrier",
                images:["../images/dogs/Rea1.jpg","../images/dogs/Rea2.jpg","../images/dogs/Rea3.jpg","../images/dogs/Rea4.jpg","../images/dogs/Rea6.jpg"],
                videos:[],
                description: "Rea is a lovely girl, she is sweet and affectionate with those she knows and will quickly become a cuddly companion in her new home. She will need someone around for most of the day whilst she settles in. She enjoys playtimes with a tennis ball, and is very sweet taking her soft toys to her bed."
                ,displayed:true  
              },
            {
                name: "Bonnie",
                age: "14",
                weight: "19kg",
                breed: "Samoyed",
                images:["../images/dogs/Bonnie1.jpg","../images/dogs/Bonnie2.jpg","../images/dogs/Bonnie3.jpg","../images/dogs/Bonnie4.jpg"],
                videos:["../images/dogs/boni.mp4"],
                description: "Bonnie is a sweet and playful grandma, so will need a calm home with owners that are experienced with her breed. Whoever takes on Bonnie must be willing to continue her enjoyment in life. She is highly intelligent, loves to learn new tricks and LOVES to cuddle!"
                ,displayed:true  
              },
            {
                name: "Ari",
                age: "1",
                weight: "2kg",
                breed: "French Buldog",
                images:["../images/dogs/Ari2.jpg","../images/dogs/Ari1.jpg","../images/dogs/Ari3.jpg"],
                videos:[],
                description: "Ari is very friendly and affectionate. He loves cuddles and tummy rubs and has the cutest snore! He enjoys going out for walks and he is very good in the house. His only weakness is  that he doesn't like other dogs. This is easily managed when approached properly. "
              , displayed:true  
              },
            {
              name: "Ben",
              age: "1",
              weight: "2kg",
              breed: "Beagle",
              images:["../images/dogs/Ben1.jpg","../images/dogs/Ben2.jpg","../images/dogs/Ben3.jpg","../images/dogs/Ben4.jpg","../images/dogs/Ben5.jpg"],
              videos:[],
              description: "Ben is a Beagle puppy about 1 year old. He is very sweet and friendly. You will need to have your own large fully enclosed garden so he can have a quick run around. Ben is special because he is such a friendly boy who loves attention and can't wait to go to his new loving forever home."
              ,displayed:true  
            },
          {
              name: "Danny",
              age: "3",
              weight: "5kg",
              breed: "Chau Chau",
              images:["../images/dogs/Ajaks1.jpg","../images/dogs/Ajaks3.jpg","../images/dogs/Ajaks4.jpg","../images/dogs/Ajaks2.jpg"],
              videos:[],
              description: "Danny is a sweet boy who is 3 year old. He is a dog who has a happy personality and loves exploring. He knows a few commands, and can be left for a little while. He is very friendly with people and gets on ok with other dogs."
              ,displayed:true  
            },
          {
              name: "Lina",
              age: "2",
              weight: "1kg",
              breed: "Bichon",
              images:["../images/dogs/Lora3.jpg","../images/dogs/Lora1.jpg","../images/dogs/Lora2.jpg","../images/dogs/Lora5.jpg","../images/dogs/Lora4.jpg"],
              videos:[],
              description: "Lina is a cute 1 year old Bichon who is looking for a new home. She's sweet dog who can be wary of new people but come round quite quickly, especially if there are a few treats coming her way. She is playful and love her toys. She travels fine in a car and will enjoy joining her new family on fun days out. "
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
                              "<td><h6>Age: </h6></td>"+
                              "<td>"+ dogs_array[i].age +"</td>"+
                            "</tr>"+
                            "<tr>"+
                              "<td><h6>Weigth: </h6></td>"+
                              "<td>"+dogs_array[i].weight+"</td>"+
                            "</tr>"+
                            "<tr>"+
                              "<td><h6>Breed: </h6></td>"+
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
                          "<h6 class=\"u-text u-text-default u-text-3\">Description</h6>"+
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
