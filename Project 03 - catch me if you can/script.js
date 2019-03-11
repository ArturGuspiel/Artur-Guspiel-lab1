let map;
//default marker location, if user doesn't share theirs
let pos = {lat: 50.121, lng: 19.408}; 
let userPosition;
let marker;
//asking user to share theirs location
function getLocation(){
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getUserPosition);
    }
    else {
        alert("Get a better browser please.");
    }
}

function getUserPosition(pos) {
    userPosition = { lat: pos.coords.latitude, lng: pos.coords.longitude }
    map.panTo(userPosition);
    movingMarker(userPosition);
}

getLocation(); 

function movingMarker(position){
    marker.setMap(null);
    marker.setPosition({ lat: position.lat, lng: position.lng});
    marker.setMap(map);
    map.panTo(position);
}

function initMap() {
    map = new google.maps.Map(document.getElementById('map'),{
        zoom: 5,
        center: pos,
        keyboardShortcuts: false,
    });

    //setting marker properties
    marker = new google.maps.Marker({
        position: pos,
        map: map
    });
}

document.addEventListener("keydown", (e) => {
    let pos = marker.getPosition();
    let lat = pos.lat();
    let lng = pos.lng();
    let speed = 0.05;
    switch(e.key){
        case "ArrowLeft":
            movingMarker({lat: lat, lng: lng - speed});
            break;
        case "ArrowUp":
            movingMarker({lat: lat + speed, lng: lng});
            break;
        case "ArrowRight":
            movingMarker({lat: lat, lng: lng + speed});
            break;
        case "ArrowDown":
            movingMarker({lat: lat - speed, lng: lng});
            break;
    }
})