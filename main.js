
const reserveBtn = document.getElementById('reservation-btn');
const name = document.getElementById('name');
  reserveBtn.addEventListener('click', () => {
    alert("Thank you for reserving a table with us!")
});

function initMap() {
  // The location of Uluru
  var uluru = {lat: 30.167350, lng: -95.504110};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

