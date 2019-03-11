var map;
//default marker location, if user doesn't share theirs
let pos = {lat: 52.121, lng: 19.408}; 

function initMap() {
    map = new google.maps.Map(document.getElementById('map'),{
        zoom: 5,
        center: pos,
        keyboardShortcuts: false,
    });

    //setting marker properties
    var marker = new google.maps.Marker({
        position: pos,
        map: map
    });
}