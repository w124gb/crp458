console.clear();

require(["esri/map", "esri/dijit/BasemapToggle", "esri/graphic", "dojo/domReady!"], function(Map, Graphic, BasemapToggle) {
  var map = new Map("map", {
    center: [-93.61, 42.00],
    zoom: 7,
    basemap: "hybrid",
       container: "viewDiv",
        map: map,
  });

  /*  var point = {
        type: "point", // autocasts as new Point()
        longitude: -49.97,
        latitude: 41.73
      };

      // Create a symbol for drawing the point
      var markerSymbol = {
        type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
        color: [226, 119, 40],
        outline: { // autocasts as new SimpleLineSymbol()
          color: [255, 255, 255],
          width: 2
        }
      };

      // Create a graphic and add the geometry and symbol to it
      var pointGraphic = new graphic({
        geometry: point,
        symbol: markerSymbol
      });*/
    var toggle = new BasemapToggle({
        map: map,
        basemap: "gray"
      }, "BasemapToggle");
      toggle.startup();
    
});



