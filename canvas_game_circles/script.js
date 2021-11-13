let canvas = document.getElementById('canvas');
canvas.width = 600;
canvas.height = 600;

let ctx = canvas.getContext('2d');
let random = (min, max) => ~~(Math.random() * (max - min) + min);
let cells = [];
let colors = ['red', 'green', 'blue'];
let player = {
    x: 200,
    y: 200,
    r: 20,
    color: 'dodgerblue'
};
for (let i = 0; i < 20; i++) {
    cells.push({
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        color: colors[random(0, colors.length)]
    })
}
function arc (obj) {
    ctx.fillStyle = obj.color;
    ctx.beginPath();
    ctx.arc(obj.x, obj.y, obj.r || 5, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}

function loop () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    arc(player);

    for (let i = 0; i < cells.length; i++) {
        arc(cells[i]);
    }
}
loop();