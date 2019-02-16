let body = document.body
let stop = document.getElementsByClassName('stop-btn')
let play1 = document.getElementById('play1')
let record1 = document.getElementById('rec1')
let play2 = document.getElementById('play2')
let record2 = document.getElementById('rec2')
let play3 = document.getElementById('play3')
let record3 = document.getElementById('rec3')
let play4 = document.getElementById('play4')
let record4 = document.getElementById('rec4')

let q = document.getElementById('q')
let w = document.getElementById('w')
let e = document.getElementById('e')
let r = document.getElementById('r')


//making the 4 channels to record on
let channel1 = {
    length: 0,
    addElem: function addElem(elem) {
        //length is incremented automaticaly
        // every time an element is added
        [].push.call(this, elem)
    }
}

let channel2 = {
    length: 0,
    addElem: function addElem(elem) {
        [].push.call(this, elem)
    }
}
let channel3 = {
    length: 0,
    addElem: function addElem(elem) {
        [].push.call(this, elem)
    }
}
let channel4 = {
    length: 0,
    addElem: function addElem(elem) {
        [].push.call(this, elem)
    }
}   
let timeoutID = 0


//playing sounds
body.addEventListener('keypress', (e)=>{
    switch(e.key){
        case 'q':
            hihat()
            break
        case 'w':
            kick()
            break
        case 'e':
            openhat()
            break
        case 'r':
            snare()
            break
    }
})

//functions to play sounds
function hihat(time = 0){
    let hihat = document.querySelector("#hihat")
    hihat.currentTime = time
    hihat.play()
}
function kick(time = 0){
    let kick = document.querySelector("#kick")
    kick.currentTime = time
    kick.play()
}
function openhat(time = 0){
    let openhat = document.querySelector("#openhat")
    openhat.currentTime = time
    openhat.play()
}
function snare(time = 0){
    let snare = document.querySelector("#snare")
    snare.currentTime = time
    snare.play()
}