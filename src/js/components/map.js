console.log("hello world from map.js");

var map = L.map('map', { zoomControl: false }).setView([46.186504598160354, 21.31672212393795], 11);

import { baseURL } from "../index";

uwuArray = [];

let tramIcon = L.icon({
    iconUrl: require("../../img/orange-circle.png"),
    // iconUrl: require("../../img/victorious.png"),
    iconSize:     [14, 14], // size of the icon
    iconAnchor:   [7, 7],   // point of the icon which will correspond to marker's location
});

let tram = L.marker([46.192717706185675, 21.30671085657869], {icon: tramIcon});

tram.bindTooltip()

function updateLocation()
{
    if(uwuArray.length > 0)
    {  
        map.addLayer(tram);

        console.log(uwuArray);

        let name = uwuArray[0].name;
        let latitude = uwuArray[0].latitude;
        let longitude = uwuArray[0].longitude;
        let newLatLng = new L.LatLng(latitude, longitude);
        
        tram.setLatLng(newLatLng); 

        if(tram.getTooltip() != undefined)
        {
            tram.setTooltipContent(
            'Numar: ' + name
            + '<br>' +
            'Latitude: ' + latitude
            + '<br>' +
            'Longitude: ' + longitude
            );
        }
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