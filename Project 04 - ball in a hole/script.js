let ball = document.querySelector('#ball')
let map = document.querySelector('#map')
let winHole = document.querySelector('#winHole')
let x, y

let posX = map.clientWidth - ball.clientWidth
let posY = map.clientHeight - ball.clientHeight

window.addEventListener('deviceorientation', Orientation)

function Orientation(e){
    //Getting beta and gamma positions
    x = e.beta
    y = e.gamma

    x += 50
    y += 90

    //Checking if ball "fell off" the map
    x < 0 ? (x = 2) : x = x
    y < 0 ? (y = 2) : y = y

    x > 92 ? (x = 92) : x
    y > 183 ? (y = 183) : y

    //Ball position
    ball.style.top = (posX*x/90 - 10) + 'px'
    ball.style.left = (posY*y/180 - 10) + 'px'
}