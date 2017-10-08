function clearCanvas() {
    c.fillStyle = '#000';
    c.fillRect(0, 0, canvas.width, canvas.height);
}

var canvas = document.getElementById('canvas'),
    c = canvas.getContext('2d'),
    size = Math.floor(document.getElementById('option2').value),
    ratio = Math.floor(document.getElementById('option3').value),
    button = document.getElementById('button');

var x, y, sx = size, sy = sx;
var completed, i;

canvas.width = Math.floor(document.getElementById('option1').value);
canvas.height = canvas.width - sy * ratio;

clearCanvas();

function Start() {
    x = 0;
    y = 0;
    sx = Math.floor(option2.value);
    sy = sx;
    completed = false;
    i = 1;

    canvas.width = Math.floor(document.getElementById('option1').value);
    canvas.height = canvas.width - sy * Math.floor(option3.value);

    clearCanvas();

    setInterval(function () {
        if (!completed) {
            if (i % 2 != 0) {
                c.beginPath();
                c.strokeStyle = 'rgb(255, 255, 255)';
                c.moveTo(x, y);
                c.lineTo(x + sx, y + sy);
                c.lineWidth = 1;
                c.stroke();
                c.closePath();
            }

            x += sx;
            y += sy;

            if (x != 0 || y != 0) {
                if (x >= canvas.width || x <= 0) sx = -sx;
                if (y >= canvas.height || y <= 0) sy = -sy;
            }

            if ((x <= 0 && y >= canvas.height) || (x >= canvas.width && y <= 0) || (x >= canvas.width && y >= canvas.height)) {
                completed = true;
                console.log('Completed in ' + i + ' moves');
            }

            i++;
        }
    }, 1000 / 60);
}
