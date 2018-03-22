var map = L.map('map').setView([42.0, -93.634], 12);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([43.804133, -120.554201]).addTo(map)
   .bindPopup("map")
   .openPopup();


var city = [
	[41.590833, -93.620833, "Des Moines, Iowa"],
	[42.03,-93.63, "Ames, Iowa"],
	[41.84, -94.1, "Perry, Iowa"],
      [41.63,-93.72, "Urbandale, Iowa"],
    [59.33,18.07, "Stockholm, Sweden"]
];


for (var i = 0; i < city.length; i++) {
	marker = new L.marker([city[i][0],city[i][1]])
	.bindPopup(city[i][2])
	.addTo(map);
}



//Urbandale
function urbandale() {
	map.panTo(new L.LatLng(41.63,-93.72), 10);
}

//set Zoom
$("#zoomOut").click(function(){
	map.setZoom(9);
});


//Stockholm, Sweden
$("#stockholm").click(function(){
	map.setView(new L.LatLng(59.33,18.07), 11);
});

//Circle Marker
L.circle([59.33,18.07], {
	radius: 4000,
	fill: true, 
	color: 'green', 
	fillColor: 'green',
	fillOpacity: 0.5  //this represents 50%
 }).bindPopup("Stockholm, Sweden").addTo(map);


L.circleMarker([41.63,-93.72], {
    radius: 100,  //in pixels
	fillColor: 'yellow',
	weight: 0, 
	opacity: 0, 
	fillOpacity: 0.5
}).bindPopup("This is a circle marker").addTo(map);
