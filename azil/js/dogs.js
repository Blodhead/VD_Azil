
var dogs_array;

function initialize(){
    localStorage.clear();
    let dogs = localStorage.getItem("dogs");
    if(dogs != null){
        dogs_array = JSON.parse(dogs);
    }else{
        dogs_array = [
            {
                name: "Loki",
                age: "3",
                weight: "2kg",
                breed: "samoyed",
                description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                name: "Toki",
                age: "3",
                weight: "2kg",
                breed: "samoyed",
                description: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                name: "Zoki",
                age: "3",
                weight: "2kg",
                breed: "samoyed",
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
"<section class=\"u-section-1 u-post\">"+
    "<div class=\"u-clearfix u-sheet u-valign-middle u-sheet-1\">"+
      "<div class=\"u-clearfix u-expanded-width u-gutter-18 u-layout-wrap u-layout-wrap-1\" id=\"dog_"+i+"\">"+
        "<div class=\"u-layout\">"+
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