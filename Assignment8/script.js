var map = L.map('map').setView([42.0, -93.634], 12);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//this will add one marker
L.marker([53.431016, -2.960846]).addTo(map)
   .bindPopup("Anfield Park aka The KOP")
   .openPopup();




//----------Adding multiple town markers----------

//a array list of towns
var towns = [
	[41.590833, -93.620833, "Des Moines, Iowa"],
	[42.03,-93.63, "Ames, Iowa"],
	[41.84, -94.1, "Perry, Iowa"]
];

//loop through the array and add a marker for each
for (var i = 0; i < towns.length; i++) {
	marker = new L.marker([towns[i][0],towns[i][1]])
	.bindPopup(towns[i][2])
	.addTo(map);
}


//----------Links below the Map----------

//Pan to Urbandale
function urbandale() {
	map.panTo(new L.LatLng(41.63,-93.72),7);
}

//set Zoom
$("#zoomOut").click(function(){
	map.setZoom(8);
});


//Stockholm, Sweden
$("#stockholm").click(function(){
	map.setView(new L.LatLng(59.33,18.07), 13);
});
