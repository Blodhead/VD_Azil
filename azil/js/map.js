// Initialize and add the map
function initMap() {
    // The location of uzice
    const uzice = { lat: -25.344, lng: 131.031 };
    // The map, centered at uzice
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uzice,
    });
    // The marker, positioned at uzice
    const marker = new google.maps.Marker({
      position: uzice,
      map: map,
    });
  }
  
  window.initMap = initMap;