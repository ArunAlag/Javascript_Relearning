// Todo: Get all the elements that is involved in interactions

const get_location = document.querySelector("#get-location");

get_location.addEventListener("click", (e) => {
  accessLocation();
});

function accessLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, rejection);
  }
}

function showPosition(position) {
  console.log(position);
}

function rejection(error) {
  console.log(error);
}
