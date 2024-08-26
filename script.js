const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var sliderk = document.getElementById("sliderk");
var sliderm = document.getElementById("sliderm");
var sliderg = document.getElementById("sliderg");
var sliderd = document.getElementById("sliderd");
var sliderny = document.getElementById("sliderny");
var k = 0;
var m = 0;
var g = 0;
var g = 0;
var ny = 0;

let x = canvas.width / 2;
let y = ny;
let velocity = 0;

ctx.shadowColor = "#000000";
ctx.shadowBlur = 15;
ctx.shadowOffsetX = 15;
ctx.shadowOffsetY = 15;

function draw() {
    k = sliderk.value;
    m = sliderm.value;
    g = sliderg.value;
    d = 1 - (sliderd.value / 2000);
    ny = sliderny.value;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const grad=ctx.createLinearGradient(0, 0, 700, 700);
    grad.addColorStop(0, "#33373b");
    grad.addColorStop(1, "#0f1112");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 700, 700);

    ctx.lineWidth = (k / 50) + 2;

    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, y / 32);
    ctx.lineTo(x - 10, 2 * (y / 32));
    ctx.lineTo(x + 10, 4 * (y / 32));
    ctx.lineTo(x - 10, 6 * (y / 32));
    ctx.lineTo(x + 10, 8 * (y / 32));
    ctx.lineTo(x - 10, 10 * (y / 32));
    ctx.lineTo(x + 10, 12 * (y / 32));
    ctx.lineTo(x - 10, 14 * (y / 32));
    ctx.lineTo(x + 10, 16 * (y / 32));
    ctx.lineTo(x - 10, 18 * (y / 32));
    ctx.lineTo(x + 10, 20 * (y / 32));
    ctx.lineTo(x - 10, 22 * (y / 32));
    ctx.lineTo(x + 10, 24 * (y / 32));
    ctx.lineTo(x - 10, 26 * (y / 32));
    ctx.lineTo(x + 10, 28 * (y / 32));
    ctx.lineTo(x - 10, 30 * (y / 32))
    ctx.lineTo(x, 31 * (y / 32));
    ctx.lineTo(x, y);
    ctx.strokeStyle = "#73808c";
    ctx.stroke();
    ctx.closePath();
    ctx.beginPath();
    ctx.arc(x, y + 20, 20, 0, Math.PI * 2);
    ctx.fillStyle = "#ff5e00";
    ctx.fill();
    ctx.closePath();
    velocity += (m * g) - (k) * (y - ny);
    velocity = velocity * d
    y += 0.00005 * velocity;
}

setInterval(draw, 1);
