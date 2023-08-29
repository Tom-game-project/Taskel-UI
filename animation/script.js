

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//中心座標
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

const l = 10

var i = 0

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    let theta = i/20;
    ctx.beginPath();
    ctx.arc(
        centerX + l/Math.cos(theta),
        centerY + l*Math.sin(theta)
        ,10,0,Math.PI*2)
    ctx.fill();
    ctx.closePath()
    i++;
    requestAnimationFrame(animate)
}

animate()