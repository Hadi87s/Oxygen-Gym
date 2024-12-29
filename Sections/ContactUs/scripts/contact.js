// Map and marker variables
let map;
let marker;

// Locations with their coordinates
const locations = {
  dubai: { lat: 25.276987, lng: 55.296249 },
  kuwait: { lat: 29.375859, lng: 47.977405 },
  abu_dhabi: { lat: 24.453884, lng: 54.3773438 },
  sabah_alsalem: { lat: 29.2654343, lng: 48.0826247 },
};

// Initialize the map
function initMap(lat = 25.276987, lng = 55.296249) {
  const location = { lat, lng };
  map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 12,
  });

  // Place a marker
  marker = new google.maps.Marker({
    position: location,
    map: map,
  });
}

// Update map when dropdown changes
document.getElementById("locations").addEventListener("change", (event) => {
  const selectedLocation = event.target.value;
  const locationCoords = locations[selectedLocation];

  if (locationCoords) {
    // Update map center and marker position
    map.setCenter(locationCoords);
    marker.setPosition(locationCoords);
  }
});

// Initialize the map with a default location
initMap();
