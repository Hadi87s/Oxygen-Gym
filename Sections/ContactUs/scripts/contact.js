let map;
let marker;

const locations = {
  abu_dhabi: {
    lat: 24.4148508,
    lng: 54.4995307,
  },
  dubai: {
    lat: 25.117138,
    lng: 55.409291,
  },
  jabriya: {
    lat: 29.3227831,
    lng: 48.0179689,
  },
  sabah_alsaleem: {
    lat: 29.2654343,
    lng: 48.0826247,
  },
  al_adalia: {
    lat: 29.3282726,
    lng: 47.984206,
  },
  new_riggae: {
    lat: 29.3095995,
    lng: 47.9189881,
  },
  al_mahboula: {
    lat: 29.145836,
    lng: 48.120453,
  },
};

function initMap(lat = 25.276987, lng = 55.296249) {
  const location = { lat, lng };

  map = new google.maps.Map(document.getElementById("map"), {
    center: location,
    zoom: 12,
    mapTypeControl: false,
  });

  marker = new google.maps.Marker({
    position: location,
    map: map,
  });

  infoWindow.open(map, marker);

  marker.addListener("click", () => {
    infoWindow.open(map, marker);
  });
}

document.getElementById("locations").addEventListener("change", (event) => {
  const selectedLocation = event.target.value;
  const locationDetails = locations[selectedLocation];

  if (locationDetails) {
    const { lat, lng } = locationDetails;
    map.setCenter({ lat, lng });
    marker.setPosition({ lat, lng });

    infoWindow.open(map, marker);
  }
});

initMap();
