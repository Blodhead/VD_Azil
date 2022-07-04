
var dogs_array;

function initialize(){

  if(localStorage.getItem("current_user") == null){
    document.getElementById("addnotice").style.display="none";
}else{
    document.getElementById("addnotice").style.display="inline-block";
}

    localStorage.removeItem("birds");
    let dogs = localStorage.getItem("birds");
    if(dogs != null){
        dogs_array = JSON.parse(dogs);
    }else{
      /* Ovde dodavati podatke */
        dogs_array = [
          {
            name: "Џули",
            age: "4",
            weight: "500g",
            breed: "Parakeet",
            images:["../images/birds/Julie1.PNG", "../images/birds/Julie2.PNG"],
            videos:[],
            description: "Џули је папагај, или папагај папагаја, који тражи свој нови заувек дом. Више воли друштво других птица, тако да би се најбоље снашла у ситуацији са волијером или у дому за пацијенте који је спреман да ради њу и друга.",
            displayed:true  
          },
          {
            name: "Рори",
            age: "5",
            weight: "300g",
            breed: "Parakeet",
            images:["../images/birds/Rori1.JPG","../images/birds/Rori2.JPG","../images/birds/Rori3.JPG"],
            videos:[],
            description: "Још увек упознајемо Рорија и чекамо да се скраси и покаже своју личност. Он је стидљив момак, који воли свој лични простор и треба му мирно, тихо окружење да би се осећао опуштено. ",
            displayed:true
          },
          {
            name: "Поли",
            age: "4",
            weight: "1kg",
            breed: "Macaw",
            images:["../images/birds/Poli1.PNG","../images/birds/Poli2.PNG","../images/birds/Poli3.PNG","../images/birds/Poli4.PNG"],
            videos:[],
            description: "Поли је дружељубива, причљива и друштвена. Она је стидљива да упозна нове људе, али једном када те сматра пријатељем, Поли жели да буде у центру пажње. Поли би се најбоље снашла у кући која жели другара са којим ће све радити.",
            displayed:true
          },
          {
            name: "Сет",
            age: "1",
            weight: "300g",
            breed: "Parakeet",
            images:["../images/birds/Set1.PNG","../images/birds/Set2.PNG"],
            videos:["../images/dogs/boni.mp4"],
            description: "Сет је мало стидљив са људима и више је заинтересован за интеракцију са својим партнером, Сатурном. Пар би се вероватно најбоље снашао у амбијенту волијере са пуно простора и потенцијално би могао добро да се носи са другим птицама.",

          },
          {
            name: "Лоли",
            age: "3",
            weight: "200g",
            breed: "Parakeet",
            images:["../images/birds/Loli1.PNG"],
            videos:[],
            description: "Лоли се и даље осећа удобно са људима и дефинитивно има радозналу страну. Навикао је да живи са другим птицама, али може бити мало плашљивији.",
            displayed:true
          },
          {
            name: "Воли",
            age: "12",
            weight: "1kg",
            breed: "Macaw",
            images:["../images/birds/Voki1.PNG","../images/birds/Voki2.PNG"],
            videos:[],
            description: "Воки је прелепа хибридна ара коју тек упознајемо. Веома је радознала и жељна интеракције са нама, али још увек гради своје самопоуздање. Лола би се најбоље снашла у кући која је спремна да иде њеним темпом.",
            displayed:true
          },
          {
            name: "Рози",
            age: "7",
            weight: "300g",
            breed: "Parakeet",
            images:["../images/birds/Rori1.JPG","../images/birds/Rori2.JPG","../images/birds/Rori3.JPG"],
            videos:[],
            description: "Још увек упознајемо Рорија и чекамо да се скраси и покаже своју личност. Он је стидљив момак, који воли свој лични простор и треба му мирно, тихо окружење да би се осећао опуштено.",
            displayed:true
          },

        
        ];
        localStorage.setItem("birds",JSON.stringify(dogs_array));
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






