
var dogs_array;

function initialize(){
    localStorage.clear();
    let dogs = localStorage.getItem("dogs");
    if(dogs != null){
        dogs_array = JSON.parse(dogs);
    }else{
      /* Ovde dodavati podatke */
        dogs_array = [
            {
                name: "Loki",
                age: "3",
                weight: "2kg",
                breed: "samoyed",
                images:["../images/Ajaks1.jpg", "../images/Ajaks2.jpg", "../images/Ajaks3.jpg", "../images/Ajaks4.jpg"],
                description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                name: "Toki",
                age: "3",
                weight: "2kg",
                breed: "samoyed",
                images:["../images/ari1.jpg"],
                description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                name: "Zoki",
                age: "3",
                weight: "2kg",
                breed: "samoyed",
                images:["../images/ari1.jpg"],
                description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
              name: "Loki",
              age: "3",
              weight: "2kg",
              breed: "samoyed",
              images:["../images/ari1.jpg"],
              description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
              name: "Toki",
              age: "3",
              weight: "2kg",
              breed: "samoyed",
              images:["../images/ari1.jpg"],
              description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          },
          {
              name: "Zoki",
              age: "3",
              weight: "2kg",
              breed: "samoyed",
              images:["../images/ari1.jpg"],
              description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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
        "<div class=\"u-layout oval\">"+
          "<div class=\"u-layout-row\">"+
            "<div class=\"u-size-37\">"+
              "<div class=\"u-layout-col\">"+
                "<div class=\"u-size-60\">"+
                  "<div class=\"u-layout-row\">"+
                    "<div class=\"u-size-30\">"+
                      "<div class=\"u-layout-col\">"+
                        "<div class=\"u-align-left u-container-style u-layout-cell u-shape-rectangle u-size-60 u-layout-cell-1\">"+
                          "<div class=\"u-container-layout u-container-layout-1\">"+
                            "<h6 class=\"u-text u-text-default u-text-1\">\""+dogs_array[i].name+"\"</h6>"+
                         
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
                            "<h6 class=\"u-text u-text-default u-text-3\">\"Description\"</h6>"+
                            "<p class=\"u-text u-text-grey-40 u-text-4\">\""+ dogs_array[i].description +" \"</p>"+
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
                        "<div class=\"u-image u-image-circle u-preserve-proportions u-image-1 hover-shadow\" style=\"background-image: url(" + dogs_array[i].images[0] +");\" data-image-width=\"900\" data-image-height=\"900\" onclick=\"clickedDog(this);openModal();currentSlide("+ (i+1) +")\" id=\"dog_"+(i+1)+"\"></div>"+
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


    document.getElementById("d_" + (dogs_array.length-1)).style.marginBottom = "120px";
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

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
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
    for(var j = 0; j < dogs_array.length; j++){
    
      

    }

  }

}