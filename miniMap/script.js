var OSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
});
/*
function myFunction() {
    document.getElementById("0").innerHTML = "YOU CLICKED ME!";
}
    
 //   ('#01').click(function () {
        map.setView([43.34123, -124.37543], 7);
    });
*/
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

var greenIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: mbAttr}),
		streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: mbAttr});


var cities = L.layerGroup();

var Portland = L.marker([45.523062, -122.676482]).bindPopup('Portland, OR').addTo(cities);
    Salem = L.marker([44.942898, -123.035096]).bindPopup('Salem, OR').addTo(cities);
    Eugene = L.marker([44.052069, -123.086754]).bindPopup('Eugen, OR').addTo(cities);
    Bend = L.marker([44.058173, -121.31531]).bindPopup('Bend,OR').addTo(cities);




var Lighthouse = L.layerGroup();


var Arago = L.marker([43.34123, -124.37543],{icon: greenIcon}).bindPopup(' <a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cape_Arago_Light%2C_Sunset_Bay_OR.jpg/800px-Cape_Arago_Light%2C_Sunset_Bay_OR.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Cape_Arago_Light%2C_Sunset_Bay_OR.jpg/800px-Cape_Arago_Light%2C_Sunset_Bay_OR.jpg" width="75%" height="auto"><br><a href="https://en.wikipedia.org/wiki/Cape_Arago_Light">Cape Arago Lighthouse,</a> <br> Coos Bay').addTo(Lighthouse);

Blanco = L.marker([42.8365897, -124.5633023],{icon: greenIcon}).bindPopup(' <a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/7/76/Cape_Blanco_Lighthouse_OR.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/7/76/Cape_Blanco_Lighthouse_OR.jpg" width="75%" height="auto"><br><a href="https://en.wikipedia.org/wiki/Cape_Blanco_Light">Cape Blanco Lighthouse,</a> <br> Port Oxford').addTo(Lighthouse);

Meares = L.marker([45.486556, -123.978389],{icon: greenIcon}).bindPopup(' <a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/5/5b/Cape_Meares_Lighthouse.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5b/Cape_Meares_Lighthouse.jpg" width="75%" height="auto"><br><a href="https://en.wikipedia.org/wiki/Cape_Meares_Light">Cape Meares Lighthouse,</a> <br> Cape Meares').addTo(Lighthouse);

Cleft = L.marker([43.123911, -124.424222],{icon: greenIcon}).bindPopup(' <a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/a/ab/Cleft_of_the_Rock_Lighthouse.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Cleft_of_the_Rock_Lighthouse.jpg" width="75%" height="auto"><br><a href="https://en.wikipedia.org/wiki/Cleft_of_the_Rock_Light">Cleft of the Rock Lighthouse,</a> <br>Yachats').addTo(Lighthouse);

Coquille = L.marker([44.290479, -124.110773],{icon: greenIcon}).bindPopup(' <a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/4/44/Coquille_River_Light_from_the_Bandon_Pier.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Coquille_River_Light_from_the_Bandon_Pier.jpg" width="75%" height="auto"><br><a href="https://en.wikipedia.org/wiki/Coquille_River_Light">Coquille River Lighthouse,</a> <br>Bandon').addTo(Lighthouse);

Heceta = L.marker([44.13737, -124.127835],{icon: greenIcon}).bindPopup(' <a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/b/bf/Heceta_Head_Light_-_Oregon_Coast.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/b/bf/Heceta_Head_Light_-_Oregon_Coast.jpg" width="75%" height="auto"><br><a href="https://en.wikipedia.org/wiki/Heceta_Head_Light">Heceta Head Lighthouse,</a> <br>Florence').addTo(Lighthouse);

Tillamook = L.marker([45.9375, -124.019],{icon: greenIcon}).bindPopup(' <a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/5/59/Tillamook_Rock_and_Light_1891.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Tillamook_Rock_and_Light_1891.jpg" width="75%" height="auto"><br><a href="https://en.wikipedia.org/wiki/Heceta_Head_Light">Tillamook Rock Lighthouse,</a> <br>Tillamook Head').addTo(Lighthouse);

Umpqua = L.marker([43.662291, -124.198476],{icon: greenIcon}).bindPopup(' <a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/5/5a/Umpqua_River_lighthouse.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/5/5a/Umpqua_River_lighthouse.jpg" width="75%" height="auto"><br><a href="https://en.wikipedia.org/wiki/Umpqua_River_Light">Umpqua River Lighthouse,</a> <br> Winchester Bay').addTo(Lighthouse);

yaquinabay = L.marker([44.62415, -124.06290],{icon: greenIcon}).bindPopup(' <a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/5/53/Yaquina_bay_light.jpeg"><img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Yaquina_bay_light.jpeg" width="75%" height="auto"><br><a href="https://en.wikipedia.org/wiki/Yaquina_Bay_Light">Yaquina Bay Lighthouse,</a> <br>Newport').addTo(Lighthouse);

Warrior = L.marker([45.84858, -122.78835],{icon: greenIcon}).bindPopup(' <a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/e/e5/Warrior_rock_lighthouse_north_view_P2617.jpeg"><img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Warrior_rock_lighthouse_north_view_P2617.jpeg" width="75%" height="auto"><br><a href="https://en.wikipedia.org/wiki/Warrior_Rock_Light">Warrior Rock Lighthouse,</a> <br>Sauvie Island').addTo(Lighthouse);

yaquinaHead = L.marker([44.676778, -124.079417],{icon: greenIcon}).bindPopup(' <a target="_blank" href="https://upload.wikimedia.org/wikipedia/commons/a/a1/Yaquina_Head_Lighthouse_-_Oregon.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a1/Yaquina_Head_Lighthouse_-_Oregon.jpg" width="75%" height="auto"><br><a href="https://en.wikipedia.org/wiki/Yaquina_Head_Light">Yaquina Head Lighthouse,</a> <br>Newport').addTo(Lighthouse);


var map = L.map('map', {
    center: [44.448382, -123.141264],
    zoom: 7,
    layers: [Lighthouse, OSM]
});


var baseMaps = {
      "Topo Map" : OpenTopoMap,
 "Hydda": Hydda_Base,
    "Grayscale": grayscale
};

var overlayMaps = {
    "Cities": cities,
    "Lighthouse": Lighthouse
};

L.control.layers(baseMaps, overlayMaps).addTo(map);