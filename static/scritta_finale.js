let scritta = `In tempo di pandemia questo è un "virus" innocuo, che ha il solo obiettivo di metterci insieme, di contagiare amicizia, di ridarci la gioia di una giornata da 
trascorrere all'insegna della spensieratezza`

let x;
let y; 
let offset;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0); 
    textFont("Consolas"); 
    textSize(30); 
    x = width/30; 
    y = height/3; 
    offset = width/80; 
}


let i = 0;
function draw() {
    frameRate(20); 
    let lettera = scritta[i]
    fill(0, 255, 70);
    text(lettera, x, y);
    if (x >= width - width/30) { 
        x = width/30; 
        y += 30; 
    }
    x += offset;
    if (i < scritta.length - 1) {
        i += 1;
    } else {
        noLoop();
    }
}