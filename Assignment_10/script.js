var map = L.map('map').setView([43.804133, -120.554201], 11);

// add an OpenCycle tile layer
L.tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenCycleMap</a> contributors',
    maxZoom: 18
}).addTo(map);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([43.804133, -120.554201]).addTo(map)
   .bindPopup("Oregon")
   .openPopup();

L.marker([45.589769, -122.595094]).addTo(map)
   .bindPopup("PDX Airport")
   .openPopup();

$(document).ready(function () {
});
    $('#PDX').click(function (){
        c =new L.LatLng(45.589769, -122.595094);
        map.setView(c, 12);
    });

$(getZoom).click(function() {
    x = map. getZoom();
    $('#foundZoom').html(x);
});


var PDX =L.icon({iconUrl: 'https://maps.google.com/mapfiles/arrow.png', shadowUrl: 'https://maps.google.com/mapfiles/arrowshadow.png', iconSize:     [39, 34], // size of the icon
    shadowSize:   [39, 34], 
    iconAnchor:   [10, 34], 
    shadowAnchor: [10, 34], 
	popupAnchor:  [0, 0] 
                });

var marker = L.marker([45.589769, -122.595094], {
	opacity: 0.5
}).addTo(map);



var marker1 = L.marker([45.589769, -122.595094], {
  icon: PDX,
	draggable: true,
	title: "PDX Airport",
	opacity: 1
}).addTo(map);


//Oregon
function Oregon() {
	map.panTo(new L.LatLng(43.804133, -120.554201), 9);
}

//set Zoom
$("#zoomOut").click(function(){
	map.setZoom(6);
});
$("#zoomIn").click(function(){
    map.setZoom(12);
});

//Portland
$("#Portland").click(function(){
	map.setView(new L.LatLng(45.523062, -122.676482), 11);
});

