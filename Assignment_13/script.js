console.clear();

var map = L.map('map').setView([42.2, -93], 7);

// add an OpenStreetMap tile layer
var osm = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);


//set color of marker
function getColor(d) {
  return d <= '1' ? "#F9F871" :
    d <= '7500' ? "#FFBD5E" :
  d <= '15000' ? "#FF8474" :
   d <= '25000' ? "#E65D93" :
  d <= '100000' ? "#9B51A8" :
  d <= '700000' ? "#134EA3" :
    "#FFFFFF"; //white
}

function style(feature) {
    return {
        fillColor: getColor(feature.properties.POP2010),
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '2',
        fillOpacity: 0.9
    };
}


url = "https://profseeger.github.io/LA558/data/iowaCounties.json";

var geojsonLayer = new L.GeoJSON.AJAX(url , {
	style: style,
	onEachFeature: function (feature, layer) {
        htmlText = "<strong>" + feature.properties.NAME+ "</strong><br>Population 2010: <b>"  + feature.properties.POP2010 + "</b><br>Population 2000: <b>"  + feature.properties.POP2000 + "</b><br> RUCC 2013: <b>"  + feature.properties.RUCC_2013 + "</b>";
        layer.bindPopup(htmlText);
		layer.bindTooltip(feature.properties.NAME);
    }
}).addTo(map);



	
	
	
	
//Create Legend
var legend = L.control({
  position: 'bottomleft'
	//Possible values are 'topleft', 'topright', 'bottomleft' or 'bottomright'
});

legend.onAdd = function(map) {

  var div = L.DomUtil.create('div', 'info legend'),
    rucc_13 = [1, 7500, 15000, 25000, 100000, 700000],
    labels = ['Urban', ' ', ' ','','','Rural'];

	
	//console.log(feature.length);
	
	 div.innerHTML += "<b>POP2010</b><br>";
  // loop through items and generate a label with a colored square for each
  for (var i = 0; i < rucc_13.length; i++) {
    div.innerHTML +=
      '<i style="background:' + getColor(rucc_13[i] ) + ' "></i> ' +
      rucc_13[i] +' '+ labels[i]+'<br>';
  }

  return div;
};
legend.addTo(map);


var Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

	
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

			var baseMaps = {
			"Esri_WorldImagery": Esri_WorldImagery,
   "OpenTopoMap":OpenTopoMap,

			
		};
       		
L.control.layers(baseMaps).addTo(map);