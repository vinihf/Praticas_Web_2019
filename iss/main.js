async function getData(){
    const url = "https://api.wheretheiss.at/v1/satellites/25544";
    const response = await fetch(url);
    const iss = await response.json();
    const{latitude,longitude} = iss;
    var map = L.map('mapid').setView([latitude,longitude], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    L.marker([latitude, longitude]).addTo(map)
    .bindPopup('ISS now.')
    .openPopup();
}

getData();