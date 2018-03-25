var OSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
});
    
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var Hydda_Base = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';


var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
		streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});


var cities = L.layerGroup();

var Portland = L.marker([45.523062, -122.676482]).bindPopup('Portland, OR').addTo(cities);
    Salem = L.marker([44.942898, -123.035096]).bindPopup('Salem, OR').addTo(cities);
    Eugene = L.marker([44.052069, -123.086754]).bindPopup('Eugen, OR').addTo(cities);
    Bend = L.marker([44.058173, -121.31531]).bindPopup('Bend,OR').addTo(cities);


var map = L.map('map', {
    center: [44.848382, -122.141264],
    zoom: 8,
    layers: [cities, OSM]
});

var polygon = L.polygon([
				[44.004239, -121.177980],
				[44.004239, -123.177980],
				[45.733711, -123.177980],
				[45.733711, -121.177980]
],{
			
				color: 'lightblue',
				fillColor: 'lightblue',
				fillOpacity: 0.5,
	
});




var baseMaps = {
      "Topo Map" : OpenTopoMap,
 "Hydda": Hydda_Base,
    "Grayscale": grayscale
};

var overlayMaps = {
    "Cities": cities,
    "Polygons": polygon
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
