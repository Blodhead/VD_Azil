document.onload = initialize();

var pet_array;

function addDog(name_,age_,weight_,desc_){
    pet_array.push(
    {
        name: name_,
        age: age_,
        weight: weight_,
        description: desc_
    });

    localStorage.setItem("pet", JSON.stringify(pet_array));

}

function initialize(){

    let pet = localStorage.getItem("pet");
    if(pet != null){
        pet_array = JSON.parse(pet);
    }else{
        pet_array = [
            {
                name: "_",
                description: "_",
                contact: "_",
                comment: "_"
            }
        
        ];
        localStorage.setItem("pet",JSON.stringify(pet_array));
    }

}