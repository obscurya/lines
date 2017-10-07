// function random(min, max) {
//     var rand = min + Math.random() * (max + 1 - min);
//     rand = Math.floor(rand);
//     return rand;
// }

var canvas = document.getElementById('canvas'),
    c = canvas.getContext('2d'),
    option1 = document.getElementById('option1'),
    option2 = document.getElementById('option2'),
    option3 = document.getElementById('option3'),
    button = document.getElementById('button');

canvas.width = option1.value;

canvas.style.width = canvas.width + 'px';
// canvas.style.width = canvas.width / 2 + 'px';
// option1.style.width = canvas.style.width;
// option2.style.width = canvas.style.width;
// option3.style.width = canvas.style.width;
// button.style.width = canvas.style.width;

var x, y, sx = Math.floor(option2.value), sy = sx;
var completed, i;

canvas.height = canvas.width - sy * Math.floor(option3.value);

c.clearRect(0, 0, canvas.width, canvas.height);
c.fillStyle = '#000';
c.fillRect(0, 0, canvas.width, canvas.height);

function Start() {
    canvas.width = Math.floor(option1.value);

    canvas.style.width = canvas.width + 'px';
    // canvas.style.width = canvas.width / 2 + 'px';
    // option1.style.width = canvas.style.width;
    // option2.style.width = canvas.style.width;
    // option3.style.width = canvas.style.width;
    // button.style.width = canvas.style.width;

    x = 0;
    y = 0;
    sx = Math.floor(option2.value);
    sy = sx;

    canvas.height = canvas.width - sy * Math.floor(option3.value);

    completed = false;

    c.fillStyle = '#000';
    c.fillRect(0, 0, canvas.width, canvas.height);

    i = 1;

    setInterval(function () {
        if (!completed) {
            if (i % 2 == 0) {
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
                if (x >= canvas.width || x <= 0) {
                    sx = -sx;
                }

                if (y >= canvas.height || y <= 0) {
                    sy = -sy;
                }
            }

            if ((x <= 0 && y >= canvas.height) || (x >= canvas.width && y <= 0) || (x >= canvas.width && y >= canvas.height)) {
                completed = true;
                console.log('Completed in ' + i + ' moves');
            }

            i++;
        }
    }, 0);
}
