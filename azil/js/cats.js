
var dogs_array;

function initialize(){

  if(localStorage.getItem("current_user") == null){
    document.getElementById("addnotice").style.display="none";
}else{
    document.getElementById("addnotice").style.display="inline-block";
}


  localStorage.removeItem("cats"); //delete before presentation
    let dogs = localStorage.getItem("cats");
    if(dogs != null){
        dogs_array = JSON.parse(dogs);
    }else{
        dogs_array = [
            {
                name: "Neo",
                age: "3",
                weight: "1kg",
                breed: "Domestic Short Hair",
                images:["../images/cats/Neo1.jpg","../images/cats/Neo2.jpg","../images/cats/Neo3.jpg"],
                videos:[],
                description: " Neo is an eccentric young cat! He loves company & happily chirps when you enter the room. You can start his purring machine by scratching him under the chin."
                ,displayed:true 
              },
            {
                name: "Lexi",
                age: "2",
                weight: "2kg",
                images:["../images/cats/Leksi2.jpg","../images/cats/Leksi1.jpg","../images/cats/Leksi3.jpg"],
                videos:[],
                breed: "Domestic Short Hair",
                description: "Lexi is a lovely, sweet lady. She gives respect and expects it in return. She chirps and greets with a gentle and friendly demeanor. She is petite and and needs tempting for new foods. She will be a loving family member and is ready for her new home!"
                ,displayed:true 
              },
            {
                name: "Nanny",
                age: "1",
                weight: "1kg",
                images:["../images/cats/Nanny1.PNG","../images/cats/Nanny2.PNG","../images/cats/Nanny3.PNG"],
                videos:["../images/dogs/boni.mp4"],
                breed: "Domestic Short Hair",
                description: "Nanny is a very loving kitty. She likes people's attention and if you give her pets and hugs then she will purr away for you. She is a young cat that still has kitten energy and will bat around toys, chase laser pointers and wands. Don't be surprised if she follows you around the house to see what you are up to."
                ,displayed:true 
              },
            {
              name: "Zoi",
              age: "1",
              weight: "1kg",
              images:["../images/cats/Zoi1.PNG","../images/cats/Zoi2.PNG"],
              videos:[],
              breed: "Domestic Short Hair",
              description: "Zoi is playful and has the right amount of independence and snuggliness! He is happy to find his own things to play with but will gladly play with you too! He does well with children, other cats, and dogs."
              ,displayed:true 
            },
          {
              name: "Neli",
              age: "2",
              weight: "2kg",
              images:["../images/cats/Neli1.PNG","../images/cats/Neli2.PNG"],
              videos:[],
              breed: "Domestic Short Haired",
              description: "Neli loves to play! She is fun to play with and to watch. Neli will appreciate having another friendly feline to hangout with. Some of her favorite toys are sparkle balls, wand toys and the occasional ball ring. "
              ,displayed:true 
            },
          {
              name: "Max",
              age: "3",
              weight: "2kg",
              images:["../images/cats/Max1.PNG","../images/cats/Max2.PNG","../images/cats/Max3.PNG"],
              videos:[],
              breed: "Domestic Short Hair",
              description: "Though he likes being petted and brushed, Max is not a fan of being picked up. He loves his floor toys and is getting used to wand play, and a room with a view would be much appreciated so he can chatter at birds and squirrels. "
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

"<div id=\"myModal"+ (i+1) +"\" style=\"overflow: hidden;\" class=\"modal\">"+
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