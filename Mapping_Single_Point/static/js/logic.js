// Add console.log to check to see if our code is working.
console.log("working");

// We create the map object with options.
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  });
// We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', 
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}',
{
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
}).addTo(map);

// add a layer with a marker to LA
//let marker = L.marker([34.0522, -118.2437]).addTo(map);

// change marker to a circle
// L.circle([34.0522, -118.2437],{
//     radius: 1000
// }).addTo(map);


//change marker to circleMarker
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: '#ffffa1'
}).addTo(map);