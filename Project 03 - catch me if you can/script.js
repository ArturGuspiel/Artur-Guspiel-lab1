let map
let pos
let marker

function initMap() {
    
    //default marker location, if user doesn't share theirs
    pos = {lat: 52.121, lng: 19.408}

    map = new google.maps.Map(document.querySelector('#map'),{
        zoom = 5,
        center = uluru,
        keyboardShortcuts: false,
    })

    //setting marker properties
    marker = new.google.maps.Marker({
        position = uluru,
        map: map,
        animation: google.maps.Animation.BOUNCE,
        draggable: true
    })
}
