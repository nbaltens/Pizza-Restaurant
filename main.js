const reservationBtn = document.getElementById('reservation-btn');
const reservationSubmitOutput = document.getElementById('reservation-submition');

// reservationBtn.addEventListener('submit', function(e) {
//     reservationSubmitOutput.innerHTML = "Thank You for your Reservation!"
//     e.preventDefault();
// })

function reserveSubmit() {
reservationSubmitOutput.innerHTML = "Thank You for your Reservation!"

}


function initMap() {
  // The location of Uluru
  var uluru = {lat: 30.167350, lng: -95.504110};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

