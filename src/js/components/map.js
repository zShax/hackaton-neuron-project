console.log("hello world from map.js");
var map = L.map('map', { zoomControl: false }).setView([46.186504598160354, 21.31672212393795], 11);
console.log(L.DomUtil);
import { baseURL } from "../index";

function uwurequest() {

    fetch(baseURL + "/vehicles", {
        method: "GET",
        origin: "*"
    })
    .then(response => response.json())
    .then(body => console.log(body.vehicles[0]));

}

setInterval(uwurequest, 1000);

L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}', {
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
}).addTo(map);