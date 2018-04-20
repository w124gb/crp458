

var map = L.map('map', {
  'center': [41, -125],
  'zoom': 4,
  'worldCopyJump': true,
});


osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);
map.doubleClickZoom.enable();

var radius = {
  radius: 5,
  fillColor: "#ff7800",
  color: "#000",
  weight: 0,
  opacity: 1,
  fillOpacity: 0.3
};

function getColor(d) {
  return d > 5 ? '#FF0000' : //red
    d > 3 ? 'orange' :
    d > 1 ? 'yellow' :
    '#FFFFFF'; //white
}

var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

	
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var Stamen_TonerLabels = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-labels/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'

});

var SF= L.marker([37.7749,-122.4194]).bindPopup("San Francisco"),
		LA= L.marker([34.052234, -118.243685]).bindPopup("Los Angeles"),
		PDX = L.marker([45.523062, -122.676482]).bindPopup("Portland"),
    SEA = L.marker([47.606209, -122.332071]).bindPopup("Seattle");
var points = L.layerGroup([SF, DC, PDX, SEA]);

earthquakes = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
var geojsonMarkerOptions = {
  color: "#000",
  weight: 0, //set this to one to add a black outline to each marker
  opacity: 1,
  fillOpacity: 0.3
};

var geojsonLayer = new L.GeoJSON.AJAX(earthquakes, {
  pointToLayer: function(feature, latlng) {
    return new L.CircleMarker(latlng, geojsonMarkerOptions);
  },
  style: function(feature) {
    //console.log(feature.properties.mag);//note this is how you access contents of each quake within L.geoJson
    return {
      radius: feature.properties.mag * 2,
      fillColor: getColor(feature.properties.mag)
    };
  },
  onEachFeature: function(feature, layer) {
    layer.bindPopup("Mag: " + feature.properties.mag + "<br> Place: " + feature.properties.place);
  }
}).addTo(map);

// Get weekly total
$.ajax({
  url: earthquakes,
  dataType: 'json',
}).done(function(data) {
  totalNumber = data.features.length;
  $("#totalNumber").html(totalNumber);
});
$('#clearLayers').click(function() {
  map.removeLayer(geojsonLayer);
});




// Layer Control
var baseMaps = {
  "Open Topo Map": OpenTopoMap,
  "ESRI World Imagery": Esri_WorldImagery,
  "Stamen Labels": Stamen_TonerLabels, 
};

var overlayMaps = {
  "Places": points,
  "Earthquakes": geojsonLayer,
};

L.control.layers(baseMaps, overlayMaps).addTo(map);
