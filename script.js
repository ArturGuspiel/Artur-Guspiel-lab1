let img = new Image();
let canvas = {
    init: function(){
        this.canvas = document.querySelector("#canvas"),
        this.ctx = this.canvas.getContext("2d")
    }
}
canvas.init();

let fileinput = document.querySelector("#upload");

fileinput.addEventListener('change', handleFiles);

function handleFiles(e) {
    img.onload = function() {
        canvas.ctx.drawImage(img, 0, 0);
    }
    img.src = window.URL.createObjectURL(e.target.files[0]);
}

//let imageData = canvas.ctx.getImageData(0, 0, canvas.width, canvas.height)
    
let Brightness = 0;

let rangeBrightness = document.querySelector("#bright");

rangeBrightness.addEventListener('input', (e)=> (Brightness = e.target.value, handleFilters()));

function handleFilters(){
    canvas.ctx.filter = `brightness(${Brightness}%)`;
    canvas.ctx.drawImage(img, 0, 0);

}

//loading image on canvas - V (revamped)
//brightness - V
//contrast - X
//saturation - X
//atleast 1 brush - X