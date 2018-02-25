console.clear();
$(function() {
  var totalMaps = 6;
  for (i = 0; i < totalMaps; i++) {
    $("#map" + i).hide();
  }
  $("#map0").show();
    
  $('input:radio[name=basemap1]').click(function() {
    base = $('input:radio[name=basemap1]:checked').val();
    $("#map0, #map1").hide(); //combined selectors in one line
    $("#map" + base).show();
  }); 
    
  $(".layers").change(function() {
    x = $(this).val();
    console.log("toggled map" + x);
    $("#map" + x).toggle();
  });
});