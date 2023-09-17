const elLatitude = document.getElementById("id_Latitude");
const elLongitude = document.getElementById("id_Longitude");
const elGogleMap = document.getElementById("id_GoogleMap");

navigator.geolocation.getCurrentPosition(success);

let latitude;
let longitude;

function success(position) {
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  elLatitude.innerText = "Latitude=" + latitude;
  elLongitude.innerText = "Longitude=" + longitude;
}

elGogleMap.onclick = () => {
  const url = "https://www.google.com/maps?q=" + latitude + "," + longitude;
  chrome.tabs.create({ url: url });
}