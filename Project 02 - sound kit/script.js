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

//playing sounds
body.addEventListener('keypress', (e) => {
    switch (e.key) {
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
function hihat(time = 0) {
    let hihat = document.querySelector("#hihat")
    hihat.currentTime = time
    hihat.play()
}

function kick(time = 0) {
    let kick = document.querySelector("#kick")
    kick.currentTime = time
    kick.play()
}

function openhat(time = 0) {
    let openhat = document.querySelector("#openhat")
    openhat.currentTime = time
    openhat.play()
}

function snare(time = 0) {
    let snare = document.querySelector("#snare")
    snare.currentTime = time
    snare.play()
}

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

//function for recording
function recordStart(channel, record) {
    record.disabled = true; //blocked record button

    let startTime = Date.now() //real time in seconds
    body.addEventListener('keypress', (e) => {
        switch (e.key) {
            case 'q':
                hihatAdd();
                break;
            case 'w':
                kickAdd();
                break;
            case 'e':
                openhatAdd();
                break;
            case 'r':
                snareAdd();
                break;
        }
    })
    //function to add sound to the channel
    function hihatAdd() {
        let pressTime = Date.now()
        channel.addElem({
            audio: hihat,
            time: pressTime - startTime
        })
    }

    function kickAdd() {
        let pressTime = Date.now()
        channel.addElem({
            audio: kick,
            time: pressTime - startTime
        })
    }

    function openhatAdd() {
        let pressTime = Date.now()
        channel.addElem({
            audio: openhat,
            time: pressTime - startTime
        })
    }

    function snareAdd() {
        let pressTime = Date.now()
        channel.addElem({
            audio: snare,
            time: pressTime - startTime
        })
    }
}

function recordStop() {
    clearTimeout(timeoutID)
}

//function to play the sound
function playChannel(channel, record) {
    record.disabled = false
    for (let i = 0; channel.length > i; i++) {
        setTimeout(function () {
            channel[i].audio()
        }, channel[i].time)
    }
}

function call(calledchannel, callback){
    return callback(calledchannel)
}

for (let i = 0; i < stop.length; i++) {
    stop[i].addEventListener('click', recordStop)
}

//adding eventlisteners for all the buttons
rec1.addEventListener("click", function(){
    recordStart(channel1, this);
});
play1.addEventListener("click", function(){
    playChannel(channel1, rec1);
});

rec2.addEventListener("click", function(){
    recordStart(channel2, this);
});
play2.addEventListener("click", function(){
    playChannel(channel2, rec2);
});

rec3.addEventListener("click", function(){
    recordStart(channel3, this);
});
play3.addEventListener("click", function(){
    playChannel(channel3, rec3);
});

rec4.addEventListener("click", function(){
    recordStart(track4, this);
});
play4.addEventListener("click", function(){
    playChannel(channel4, rec4);
});