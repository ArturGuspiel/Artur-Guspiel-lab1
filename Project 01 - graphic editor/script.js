let img = new Image();
let canvas = {
    init: function(){
        this.canvas = document.querySelector("#canvas");
        this.ctx = this.canvas.getContext("2d");
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
    
let Brightness = 100;
let Contrast = 100;
let Saturation = 100;

let rangeBrightness = document.querySelector("#bright");
let rangeContrast = document.querySelector("#cont");
let rangeSaturation = document.querySelector("#satu");

rangeBrightness.addEventListener('input', (e)=> (Brightness = e.target.value, handleFilters()));
rangeContrast.addEventListener('input', (e)=> (Contrast = e.target.value, handleFilters()));
rangeSaturation.addEventListener('input', (e)=> (Saturation = e.target.value, handleFilters()));

function handleFilters(){
    canvas.ctx.filter = `brightness(${Brightness}%) contrast(${Contrast}%) saturate(${Saturation}%)`;
    canvas.ctx.drawImage(img, 0, 0);
}

//loading image on canvas - V (revamped)
//brightness - V
//contrast - V
//saturation - V
//atleast 1 brush - X