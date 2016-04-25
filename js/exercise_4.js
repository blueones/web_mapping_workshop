// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 'will-breitkreutz.k6fj4l3f';

// And this is my access token, use yours.
var accessToken = 'pk.eyJ1Ijoid2lsbC1icmVpdGtyZXV0eiIsImEiOiItMTJGWEF3In0.HEvuRMMVxBVR5-oDYvudxw';

// Create the map object with your mapId and token,
// referencing the DOM element where you want the map to go.
L.mapbox.accessToken = accessToken;
var map = L.mapbox.map('map', mapId);

// Set the initial view of the map to the whole US
map.setView([39, -96], 4);

// Great, now we have a basic web

var dataFileToAdd = 'data/parks.geojson';

var featureLayer = L.mapbox.featureLayer()
    .loadURL(dataFileToAdd)
    .addTo(map);

featureLayer.on('ready', function() {
    this.setStyle({
        "color": "#6583BF",
        "fillColor": "#6583BF",
        "weight": .5,
        "opacity": 0.65
    });
    map.fitBounds(featureLayer.getBounds());
});
/*featureLayer.on('ready',function(){
  this.eachLayer(function(layer){
    layer.bindPopup('welcome to' +layer.feature.properties.LABEL);
  })
})*/

var clickHandler =function(e){
  $('#info').empty();
  var feature=e.target.feature;
  $('#info').fadeIn(400,function(){
    
    var info= '';
    info +='<div>',
    info +=      '<h2>'+feature.properties.LABEL+'</h2>';
    info+=		'<h2>' +feature.properties.LOCATION+'</P>';
    info+='</div>';
    $('#info').append(info);
    
    
    
  })

}
featureLayer.on('ready',function(){
this.eachLayer(function.(layer){
               layer.on('click',clickHandler);
})

})

map.on('click',function(){
  $('#info').fadeOut(200);
  $('#info').empty();

})

