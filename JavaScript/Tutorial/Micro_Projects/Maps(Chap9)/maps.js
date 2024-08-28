const ACCESS_TOKEN = "pk.eyJ1IjoiYXJ1bmFsYWciLCJhIjoiY2x4NjdmeW1rMXRjMzJrcG90a3N6ajQ4cCJ9.X5SQ5h_jWBakginEgbQxpg";

// => Load access token to mapbox
mapboxgl.accessToken = ACCESS_TOKEN;

// => Load current location coordinates
getCurrentLocation().then((position) => {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  loadMap({ latitude, longitude });
});

function loadMap(coordinates) {
  // => Map UI
  const map = new mapboxgl.Map({
    container: "map",
    center: [coordinates.longitude, coordinates.latitude],
    zoom: 15,
    style: "mapbox://styles/mapbox/streets-v12",
  });

  // => Map focus
  const marker = new mapboxgl.Marker();
  marker.setLngLat([coordinates.longitude, coordinates.latitude]);
  marker.addTo(map);

  // => Add direction capabalities
  const addDirection = new MapboxDirections({ accessToken: mapboxgl.accessToken });
  map.addControl(addDirection, "top-left");
}

// ~ Helper function
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    //! This check is neccessary to ensure the browser and the device support navigator
    if (navigator.geolocation) {
      // => upon a success callback, getCurrentPosition provides the position object that contains the latitude and the longitude
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve(position);
        },
        (error) => {
          reject(error);
        }
      );
    }
  });
}

// // Create a default Marker and add it to the map.
// const marker1 = new mapboxgl.Marker().setLngLat([12.554729, 55.70651]).addTo(map);

// // Create a default Marker, colored black, rotated 45 degrees.
// const marker2 = new mapboxgl.Marker({ color: "black", rotation: 45 }).setLngLat([12.65147, 55.608166]).addTo(map);
