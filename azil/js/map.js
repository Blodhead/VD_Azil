function initialize(){
  if(localStorage.getItem("current_user") == null){
    document.getElementById("addnotice").style.display="none";
}else{
    document.getElementById("addnotice").style.display="inline-block";
}
}
// Initialize and add the map
function initMap() {


    // The location of uzice
    const uzice = { lat: 43.857674, lng: 19.839283 };
    // The map, centered at uzice
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uzice,
    });
    // The marker, positioned at uzice
    const marker = new google.maps.Marker({
      position: uzice,
      map: map,
    });
  }
  
  window.initMap = initMap;