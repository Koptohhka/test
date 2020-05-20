mapboxgl.accessToken = 'pk.eyJ1Ijoia29wdG9oaGthIiwiYSI6ImNrYWN0YjU2cTFqdjkydG1rZWloeGFjaTYifQ.ePoZ9VznPV1BoZgMp8eSTA';
const map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});

/*map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);*/

