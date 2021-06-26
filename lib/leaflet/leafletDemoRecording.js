//Leaflet Demo Recording
var mymap = L.map('map',{center:[-17.8476, 31.3564], zoom: 8, minZoom: 3, maxZoom: 14, zoomControl: false});

// create a layer for open street map
var openStreet = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
map.addLayer(mymap);