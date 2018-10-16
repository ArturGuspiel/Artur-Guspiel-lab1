let c = document.getElementById("editor")
let ctx = c.getContext("2d")
let input = document.getElementById("upload")
//let imgURL
img = document.createElement('img')
//img.src = imgURL
img.crossOrigin = "Anonymous"
img.addEventListener('load', function(e){
    ctx.drawImage(e.target, 0, 0, 600, 400)
    starterImageData = ctx.getImageData(0, 0, 600, 400)
})

document.querySelector("#upload").addEventListener('change', function(e){
    console.log(e.target.files[0].name)
    img.src = e.target.files[0].name
})

    //loading image on canvas - V
    //brightness - X
    //contrast - X
    //saturation - X
    //atleast 1 brush - X