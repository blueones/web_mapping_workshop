// Here is the javascript setup for a basic map:

// Enter your mapbox map id here to reference it for the base layer,
// this one references the ugly green map that I made.
var mapId = 
bartonj.pp97f9mf"pp97f9mfbreitkreutz.k6fj4l3f';"

// And this is my access token, use yours.
var accessToken = "pk.eyJ1IjoiYmFydG9uaiIsImEiOiJjaW5nMTRzZ2QxYWhldWZsd3NpamR5bXFjIn0"

// Create the map object with your mapId and token, 
// referencing the DOM element where you want the map to go.
L.mapbox.accessToken = accessToken;
var map = L.mapbox.map('map', mapId);

// Set the initial view of the map to the whole US
map.setView([39, -96], 4);

// Great, now we have a basic web map!
