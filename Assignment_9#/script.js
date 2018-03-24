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

var myPoints = [
		["10",45.59, -122.60,"a"],
    ["20",45.59, -122.60,"e"],
		["20",45.59, -121.60,"a"],
		["16",45.59, -120.60,"b"],
		["22",44.59, -122.60,"e"],
		["30",43.59, -121.60,"b"],
		["30",42.59, -120.60,"d"],
		["12",44.59, -121.60,"c"],
		["25",43.59, -120.60,"c"],
        ["25",44.59, -121.60,"c"],
		];
  
  //set color of marker
		function getColor(d) {
      return  d == 'a' ? '#253494' :
              d == 'b' ? "#2c7fb8" :
              d == 'c' ? "#41b6c4" :
			d == 'd' ? "#a1dab4" :
              d == 'e' ? "#ffffcc" :
						   "#FFFFFF"; //white
		}
  
  for (var i = 0; i < myPoints.length; i++) {
    marker = new L.circleMarker([myPoints[i][1],myPoints[i][2]], {
      radius: myPoints[i][0]/2,
			fillColor: getColor(myPoints[i][3]), 
			color: "#000",
			weight: 0,
			opacity: 1,
			fillOpacity: 0.9    
    })
    .bindPopup("Category: "+myPoints[i][3]) 
		.addTo(map);
		}

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

