
var dogs_array;

function initialize(){
    localStorage.clear();
    let dogs = localStorage.getItem("dogs");
    if(dogs != null){
        dogs_array = JSON.parse(dogs);
    }else{
        dogs_array = [
            {
                name: "Neo",
                age: "3",
                weight: "1kg",
                breed: "Domestic Short Hair",
                description: " Neo is an eccentric young cat! He loves company & happily chirps when you enter the room. You can start his purring machine by scratching him under the chin."
            },
            {
                name: "Lexi",
                age: "2",
                weight: "2kg",
                breed: "Domestic Short Hair",
                description: "Lexi is a lovely, sweet lady. She gives respect and expects it in return. She chirps and greets with a gentle and friendly demeanor. She is petite and and needs tempting for new foods. She will be a loving family member and is ready for her new home!"
            },
            {
                name: "Nanny",
                age: "1",
                weight: "1kg",
                breed: "Domestic Short Hair",
                description: "Nanny is a very loving kitty. She likes people's attention and if you give her pets and hugs then she will purr away for you. She is a young cat that still has kitten energy and will bat around toys, chase laser pointers and wands. Don't be surprised if she follows you around the house to see what you are up to."
            },
            {
              name: "Zoi",
              age: "1",
              weight: "1kg",
              breed: "Domestic Short Hair",
              description: "Zoi is playful and has the right amount of independence and snuggliness! He is happy to find his own things to play with but will gladly play with you too! He does well with children, other cats, and dogs."
          },
          {
              name: "Neli",
              age: "2",
              weight: "2kg",
              breed: "Domestic Short Haired",
              description: "Neli loves to play! She is fun to play with and to watch. Neli will appreciate having another friendly feline to hangout with. Some of her favorite toys are sparkle balls, wand toys and the occasional ball ring. "
          },
          {
              name: "Max",
              age: "3",
              weight: "2kg",
              breed: "Domestic Short Hair",
              description: "Though he likes being petted and brushed, Max is not a fan of being picked up. He loves his floor toys and is getting used to wand play, and a room with a view would be much appreciated so he can chatter at birds and squirrels. "
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