
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

    document.getElementById('flip-card-btn-turn-to-back').style.visibility = 'visible';
    document.getElementById('flip-card-btn-turn-to-front').style.visibility = 'visible';
  
    document.getElementById('flip-card-btn-turn-to-back').onclick = function() {
    document.getElementById('flip-card').classList.toggle('do-flip');
    };
  
    document.getElementById('flip-card-btn-turn-to-front').onclick = function() {
    document.getElementById('flip-card').classList.toggle('do-flip');
    };

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
