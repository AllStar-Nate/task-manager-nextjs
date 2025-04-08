(function () {
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// [START maps_add_map]
// Initialize and add the map
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
  key: "AIzaSyDLhgEjAvDxyuvb3L40ii6kJ0ugD0iusGU",
  v: "weekly",
  // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
  // Add other bootstrap parameters as needed, using camel case.
});
let map;
let Position;
let selectedTask = JSON.parse(localStorage.getItem('selectedTask')) || false;
async function initMap() {
  

  // [START maps_add_map_instantiate_map]
  // The location of Barbados
  if (!!selectedTask){
    Position = selectedTask.location;
  }else {
    Position = { lat: 13.193, lng: -59.543 };
  }
  
  // Request needed libraries.
  //@ts-ignore
  

  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const infoWindow = new InfoWindow();
  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 18,
    center: Position,
    position: Position,
    mapId: "DEMO_MAP_ID",
  });
 
  // [END maps_add_map_instantiate_map]
  // [START maps_add_map_instantiate_marker]
  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: Position,
    title: "Uluru",
    gmpDraggable: true,
  });

  document.getElementById("map").newPosition = {
    lat: marker.position.lat,
    lng: marker.position.lng
  };
  // [END maps_add_map_instantiate_marker]
  marker.addListener("dragend", (event) => {
    document.getElementById("map").newPosition.lat = marker.position.lat;
    document.getElementById("map").newPosition.lng = marker.position.lng;
    console.log(document.getElementById("map").newPosition)

    infoWindow.close();
    infoWindow.setContent(`Pin dropped at: ${document.getElementById("map").newPosition.lat}, ${document.getElementById("map").newPosition.lng}`);
    infoWindow.open(marker.map, marker);
  });
}

initMap();
// [END maps_add_map]


})();
