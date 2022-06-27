
var dogs_array;

function initialize(){
    localStorage.clear();
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
                images:["../images/Rea1.jpg"],
                description: "Rea is a lovely girl, she is sweet and affectionate with those she knows and will quickly become a cuddly companion in her new home. She will need someone around for most of the day whilst she settles in. She enjoys playtimes with a tennis ball, and is very sweet taking her soft toys to her bed."
            },
            {
                name: "Bonnie",
                age: "1",
                weight: "3kg",
                breed: "Chau Chau",
                images:["../images/Boni2.jpg"],
                description: "Bonnie is a sweet and playful girlie who is still a baby and is still learning boundaries, so will need a calm home with owners that are experienced with her breed. Whoever takes on Bonnie must be willing to continue her training so she can grow into being a good girl. She is highly intelligent and loves to learn which is very helpful when it comes to training!"
            },
            {
                name: "Ari",
                age: "1",
                weight: "2kg",
                breed: "French Buldog",
                images:["../images/Ari2.jpg"],
                description: "Ari is very friendly and affectionate. He loves cuddles and tummy rubs and has the cutest snore! He enjoys going out for walks and he is very good in the house. His only weakness is  that he doesn't like other dogs. This is easily managed when approached properly. "
            },
            {
              name: "Ben",
              age: "1",
              weight: "2kg",
              breed: "Beagle",
              images:["../images/Ben1.jpg"],
              description: "Ben is a Beagle puppy about 1 year old. He is very sweet and friendly. You will need to have your own large fully enclosed garden so he can have a quick run around. Ben is special because he is such a friendly boy who loves attention and can't wait to go to his new loving forever home."
          },
          {
              name: "Danny",
              age: "3",
              weight: "5kg",
              breed: "Chau Chau",
              images:["../images/Ajax2.jpg"],
              description: "Danny is a sweet boy who is 3 year old. He is a dog who has a happy personality and loves exploring. He knows a few commands, and can be left for a little while. He is very friendly with people and gets on ok with other dogs."
          },
          {
              name: "Lina",
              age: "2",
              weight: "1kg",
              breed: "Bichon",
              images:["../images/Lora3.jpg"],
              description: "Lina is a cute 1 year old Bichon who is looking for a new home. She's sweet dog who can be wary of new people but come round quite quickly, especially if there are a few treats coming her way. She is playful and love her toys. She travels fine in a car and will enjoy joining her new family on fun days out. "
          }
        
        
        ];
        localStorage.setItem("dogs",JSON.stringify(dogs_array));
    }

    fill_html();

}

function fill_html(){


    for(var i = 0; i < dogs_array.length; i++){

        

    document.getElementById("context").innerHTML =  document.getElementById("context").innerHTML +""+
"<section class=\"u-section-1 u-post\">"+
    "<div class=\"u-clearfix u-sheet u-valign-middle u-sheet-1\">"+
      "<div class=\"u-clearfix u-expanded-width u-gutter-18 u-layout-wrap u-layout-wrap-1\" id=\"dog_"+i+"\">"+
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
                        "<div class=\"u-image u-image-circle u-preserve-proportions u-image-1\" data-image-width=\"900\" data-image-height=\"900\"></div>"+
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
  "</section>";
    }


    document.getElementById("dog_" + (dogs_array.length-1)).style.marginBottom = "120px";
}