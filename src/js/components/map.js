console.log("hello world from map.js");

var map = L.map('map', { zoomControl: false }).setView([46.186504598160354, 21.31672212393795], 11);

import { baseURL } from "../index";

uwuArray = [];

let tramIcon = L.icon({
    iconUrl: require("../../img/victorious.png"),

    iconSize:     [50, 50], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [5, 5], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor

});

let tram = L.marker([46.192717706185675, 21.30671085657869], {icon: tramIcon}).addTo(map);


function updateLocation()
{
    if(uwuArray.length > 0)
    {
        console.log(uwuArray);

        let latitude = uwuArray[0].latitude;
        let longitude = uwuArray[0].longitude;

        let newLatLng = new L.LatLng(latitude, longitude);
        
        tram.setLatLng(newLatLng); 
    }
}

function uwurequest() {

    fetch(baseURL + "/vehicles", {
        method: "GET",
        origin: "*"
    })
    .then(response => response.json())
    .then(body => 
        {
            //console.log(body.vehicles);
            uwuArray = body.vehicles;
        });

    updateLocation();
}


setInterval(uwurequest, 1000);

L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
}).addTo(map);