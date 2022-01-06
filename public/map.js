
// import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
// import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';

mapboxgl.accessToken = 'pk.eyJ1IjoibXJqYWNrc29mZmljZSIsImEiOiJja3h6N3o4am0ybXRiMm9vMGhwMml2Ync1In0.WMZgPfcYt6_3Py5CV6dtLQ';
navigator.geolocation.getCurrentPosition(successLocation, errorLocation,{
    enableHighAccuracy:true
})
function successLocation(position){
console.log(position);
setupMap([position.coords.longitude, position.coords.latitude])
}
 function errorLocation(){
setupMap([-2.24, 53.48])
 };

 function setupMap(center){
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:center,
    zoom: 15
  });

  const nav = new mapboxgl.NavigationControl();
map.addControl(nav,);

// const nav = new mapboxgl.NavigationControl({
//     visualizePitch: true
// });


const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
    
});


map.addControl(directions, 'top-left');
}