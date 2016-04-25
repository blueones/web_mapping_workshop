// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 'bartonj.pp97f9mf';


// And this is my access token, use yours.
var accessToken = 'pk.eyJ1IjoiYmFydG9uaiIsImEiOiJjaW5nMno2OXkxYjZpdjhrcW55ZjRiZmtwIn0.1zoT87L8Uh9aRd2aMbOT6Q';

// Create the map object with your mapId and token, 
// referencing the DOM element where you want the map to go.
L.mapbox.accessToken = accessToken;

var map = L.mapbox.map('map', mapId);

var dataFileToAdd ='data/parks.geojson';
var featureLayer=L.mapbox.featureLayer();
featureLayer.loadURL(dataFileToAdd);
featureLayer.addTo(map);
featureLayer.on('ready',function(){
  this.setStyle({
  "color":"#6583bf",
  "fillColor":"6583bf",
  "weight":.5,
  "opacity":0.65
})
map.fitBounds(featureLayer.getBounds());
    })
  

// Great, now we have a basic web map!
