console.log('hello world from map.js');

import { map } from '../index';

import { baseURL } from '../index';

uwuArray = [];
vehicles = [];
var markers = L.layerGroup().addTo(map);

let tramIcon = L.icon({
  iconUrl: require('../../img/orange-circle.png'),
  // iconUrl: require("../../img/victorious.png"),
  iconSize: [14, 14], // size of the icon
  iconAnchor: [7, 7], // point of the icon which will correspond to marker's location
});

let tram = L.marker([46.192717706185675, 21.30671085657869], {
  icon: tramIcon,
});

tram.bindTooltip();

function updateLocation() {
  if (uwuArray.length > 0) {
    for (var i = 0; i < uwuArray.length; i++) {
      vehicles[i] = {
        id: uwuArray[i].id,
        type: uwuArray[i].type,
        name: uwuArray[i].name,
        lat: uwuArray[i].latitude,
        lng: uwuArray[i].longitude,
        marker: L.marker([46.192717706185675, 21.30671085657869], {
          icon: tramIcon,
        }),
      };
    }
  }
  markers.clearLayers();

  for (var i = 0; i < uwuArray.length; i++) {
    vehicles[i].marker
      .bindTooltip()
      .setTooltipContent(
        'Numar: ' +
          vehicles[i].name +
          '<br>' +
          'Lat: ' +
          vehicles[i].lat +
          'Long: ' +
          vehicles[i].lng
      )
      .openTooltip();
    //console.log(vehicles[i].marker);
    markers.addLayer(vehicles[i].marker);
    var lat = vehicles[i].lat;
    var lng = vehicles[i].lng;
    var newLatLng = new L.LatLng(lat, lng);

    vehicles[i].marker.setLatLng(newLatLng);
    //console.log(vehicles[i].marker);
    console.log(markers);
  }
}

function uwurequest() {
  fetch(baseURL + '/vehicles', {
    method: 'GET',
    origin: '*',
  })
    .then(response => response.json())
    .then(body => {
      //console.log(body.vehicles);
      uwuArray = body.vehicles;
    });

  updateLocation();
}

setInterval(uwurequest, 1000);

L.tileLayer(
  'https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}',
  {
    minZoom: 0,
    maxZoom: 18,
    ext: 'png',
  }
).addTo(map);
